from flask import Flask, render_template, request, redirect, url_for, flash, Response, session

app = Flask(__name__)
from app import routes
