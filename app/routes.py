from flask import render_template, request, redirect, url_for, flash, Response, session

from app import app
@app.route('/')
def home():
    return render_template('home.html')