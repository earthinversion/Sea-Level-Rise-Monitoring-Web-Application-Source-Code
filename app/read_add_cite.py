import bibtexparser
from bibtexparser.bparser import BibTexParser
from bibtexparser.customization import convert_to_unicode
import os, glob
import boto3
# from config import S3_BUCKET, S3_KEY, S3_SECRET
from app.config import S3_BUCKET, S3_KEY, S3_SECRET
import pandas as pd
import _pickle as cPickle
import pickle
import scholarly



citationDir = "../"
citation_pickle_file = "citations.pkl"
pickle_filename = citationDir + citation_pickle_file


def aws_bucket_info():
    s3_resource = boto3.resource('s3',aws_access_key_id=S3_KEY,aws_secret_access_key=S3_SECRET)
    bucket = S3_BUCKET
    my_bucket = s3_resource.Bucket(bucket)
    return my_bucket, s3_resource


def create_bib_df(pickle_filename=pickle_filename):
    df = pd.DataFrame(columns=['ID','numLikes', 'Title', 'Authors', 'url', 'Abstract','Images'])
    df.to_pickle(pickle_filename)

def read_bib_df(citation_pickle_file=citation_pickle_file):
    my_bucket, s3_resource = aws_bucket_info()
    response = my_bucket.Object(citation_pickle_file).get()
    body_string = response['Body'].read()
    df = cPickle.loads(body_string)
    return df

def store_bib_in_df(dict_to_store,citation_pickle_file=citation_pickle_file):
    my_bucket, s3_resource = aws_bucket_info()
    response = my_bucket.Object(citation_pickle_file).get()
    body_string = response['Body'].read()
    output = cPickle.loads(body_string)
    output = output.append(dict_to_store, ignore_index=True)
    output.sort_values(by=['numLikes'], ascending=False, inplace=True)
    output.reset_index(drop=True,inplace=True)
    serializedMyData = pickle.dumps(output)
    my_bucket.Object(citation_pickle_file).put(Body=serializedMyData)
    # s3.meta.client.put_object(Bucket=S3_BUCKET, Key=citation_pickle_file,Body=serializedMyData)
    


filename = "Citations/fuchs2019rich_slrm.bib"
def read_bib_file(filename):
    my_bucket, s3_resource = aws_bucket_info()
    bibtex_file = my_bucket.Object(filename).get()['Body'].read().decode('utf-8')
    parser = BibTexParser()
    parser.customization = convert_to_unicode
    bibtex_database = bibtexparser.loads(bibtex_file, parser=parser)
    entries = bibtex_database.entries[0]
    dict_to_store = {'ID':entries['ID'],'numLikes':0, 'Title':entries['title'], 'Authors':entries['author'], 'url':"", 'Abstract':"",'Images':""}
    return dict_to_store

def rename_bib_file(citeDir,filename):
    my_bucket, s3_resource = aws_bucket_info()
    bibtex_file = my_bucket.Object(filename).get()['Body'].read().decode('utf-8')
    parser = BibTexParser()
    parser.customization = convert_to_unicode
    bibtex_database = bibtexparser.loads(bibtex_file, parser=parser)
    entries = bibtex_database.entries[0]
    df = read_bib_df(citation_pickle_file=citation_pickle_file)
    if entries['ID'] not in df['ID'].values:
        search_query = scholarly.search_pubs_query(entries['title'])
        res = next(search_query)
        strings_to_look = ['url', 'abstract']
        search_output = []
        for ss in strings_to_look:
            try:
                search_output.append(res.bib[ss])
            except:
                search_output.append("")
        dict_to_store = {'ID':entries['ID'],'numLikes':0, 'Title':entries['title'], 'Authors':entries['author'], 'url':search_output[0], 'Abstract':search_output[1],'Images':""}
        store_bib_in_df(dict_to_store,citation_pickle_file=citation_pickle_file)
        new_bibfile = citeDir+entries['ID']+"_slrm.bib"
        return new_bibfile
    else:
        return ""
if __name__=="__main__":
    # create_bib_df()
    # read_bib_file()
    # filename = "Citations/fuchs2019rich_slrm.bib"
    # store_bib_in_df(read_bib_file(filename),citation_pickle_file=citation_pickle_file)
    # df = read_bib_df()
    # print(df.head())
    search_query = scholarly.search_pubs_query('Perception of physical stability and center of mass of 3D objects')
    res = next(search_query)
    print(res.bib)
    print('\nABSTRACT: \n',res.bib['abstract'])
    print(res.bib.keys())