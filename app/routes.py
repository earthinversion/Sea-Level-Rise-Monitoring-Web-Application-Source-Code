from flask import render_template, request, redirect, url_for, flash, Response, session
from app import app
from app.read_references import readJson
from app.config import S3_BUCKET, S3_KEY, S3_SECRET
import boto3
import json
s3_resource = boto3.resource('s3',aws_access_key_id=S3_KEY,aws_secret_access_key=S3_SECRET)

obj = s3_resource.Object('aws-integration-flask', 'references.json')



@app.route('/')
def home():
    return render_template('home.html')

@app.route('/effects')
def effects():
    return render_template('effects.html')

@app.route('/image_analysis')
def image_analysis():
    return render_template('image_analysis.html')
    
@app.route('/current_research')
def current_research():
    # jsonLoc = 'app/references.json'
    # jsonLoc = 's3://aws-integration-flask/references.json'
    jsonLoc = obj.get()['Body'].read().decode('utf-8')
    data = json.loads(jsonLoc)['references']
    return render_template('current_research.html', data=data)

@app.route('/get_in_touch')
def get_in_touch():
    return render_template('get_in_touch.html')