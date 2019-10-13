import os

S3_BUCKET = os.environ.get("S3_BUCKET_NAME")
S3_KEY = os.environ.get("AWS_ACCESS_KEY_ID")
S3_SECRET = os.environ.get("AWS_SECRET_ACCESS_KEY")

if __name__=="__main__":
    print(S3_BUCKET)
    print(S3_KEY)
    print(S3_SECRET)