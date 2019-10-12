from flask import render_template, request, redirect, url_for, flash, Response, session
from app import app

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
    return render_template('current_research.html')

@app.route('/get_in_touch')
def get_in_touch():
    return render_template('get_in_touch.html')