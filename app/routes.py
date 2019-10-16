from flask import render_template, request, redirect, url_for, flash, Response, session
from app import app
from app.read_references import readJson
from app.config import S3_BUCKET, S3_KEY, S3_SECRET
import boto3
import json
from app.read_add_cite import aws_bucket_info, rename_bib_file, read_bib_df, add_likes_citations


app.secret_key = 'secret'

def logo_url_retrieve():
    s3 = boto3.client('s3',
                      aws_access_key_id=S3_KEY,
                      aws_secret_access_key=S3_SECRET)
    url_ies = s3.generate_presigned_url('get_object', Params = {'Bucket': S3_BUCKET, 'Key': "logo/IESlogo.jpeg"}, ExpiresIn = 100)
    url_ncu = s3.generate_presigned_url('get_object', Params = {'Bucket': S3_BUCKET, 'Key': "logo/NCUlogo.png"}, ExpiresIn = 100)
    url_nasa = s3.generate_presigned_url('get_object', Params = {'Bucket': S3_BUCKET, 'Key': "logo/nasaHacklogo.png"}, ExpiresIn = 100)
    url_utpal_photo = s3.generate_presigned_url('get_object', Params = {'Bucket': S3_BUCKET, 'Key': "logo/utpalPhoto.jpg"}, ExpiresIn = 100)
    urlLogo = {"IES":url_ies, "NCU":url_ncu,"NASA":url_nasa, "utpal_photo":url_utpal_photo}
    return urlLogo

def readImage(path):
    s3 = boto3.client('s3',
                      aws_access_key_id=S3_KEY,
                      aws_secret_access_key=S3_SECRET)
    url = s3.generate_presigned_url('get_object', Params = {'Bucket': S3_BUCKET, 'Key': str(path)}, ExpiresIn = 100)
    return url

@app.route('/')
def dashboard():
    urlLogo = logo_url_retrieve()
    return render_template('dashboard.html',urldict = urlLogo)

@app.route('/observations')
def observations():
    return render_template('observations.html')

@app.route('/effects')
def effects():
    return render_template('effects.html')

@app.route('/image_analysis')
def image_analysis():
    return render_template('image_analysis.html')
    
@app.route('/current_research')
def current_research():
    my_bucket, s3_resource= aws_bucket_info()

    df = read_bib_df()
    datanew = df.to_dict('index')
    new_data = []
    for ref in datanew:
        new_data.append(datanew[ref])
    return render_template('current_research.html', data=datanew)


@app.route('/get_in_touch')
def get_in_touch():
    urlLogo = logo_url_retrieve()
    return render_template('get_in_touch.html',urldict = urlLogo)


@app.route('/app_info')
def app_info():
    return render_template('app_info.html')


@app.route('/upload', methods = ['POST'])
def upload():
    file = request.files['file']
    citeDir = "Citations/"
    filename = "Temp/" + file.filename

    my_bucket, s3_resource= aws_bucket_info()
    if request.method=='POST':
        try:
            my_bucket.Object(filename).put(Body=file)
            newbibfile = rename_bib_file(citeDir,filename)
            if newbibfile:
                s3 = boto3.resource('s3')
                copy_source = {
                    'Bucket': S3_BUCKET,
                    'Key': filename
                }
                s3.meta.client.copy(copy_source, S3_BUCKET, newbibfile)
                s3.meta.client.delete_object(Bucket=S3_BUCKET, Key=filename)
                flash('File uploaded successfully','bg-success') 
            else:
                flash('File already exist in the database!','bg-warning')

        except:
            flash('Upload unsuccessful','bg-danger')
        
    return redirect(url_for('current_research'))

@app.route('/download_abstract', methods = ['POST'])
def download_abstract():
    key = request.form['abstractkey']
    keyRequest = "Citations/"+key+"_slrm.bib"
    keyFilename = key+"_slrm.bib"
    my_bucket, s3_resource = aws_bucket_info()
    if keyRequest:
        file_obj = my_bucket.Object(keyRequest).get()
        flash(f'{key} downloaded successfully')
    return Response(
        file_obj['Body'].read(),
        mimetype = 'text/plain',
        headers = {'Content-Disposition': 'attachment;filename={}'.format(keyFilename)})

@app.route('/add_likes', methods = ['POST'])
def add_likes():
    key = request.form['like_to_add']
    citation_pickle_file = "citations.pkl"
    add_likes_citations(citation_pickle_file,str(key))
    return redirect(url_for('current_research'))
    

@app.route('/what_is_bibtex')
def what_is_bibtex():
    url1 = readImage("Others/bibtex1.png")
    url2 = readImage("Others/bibtex2.png")
    url3 = readImage("Others/bibtex3.png")
    return render_template('what_is_bibtex.html',url1 = url1, url2 = url2, url3 = url3)