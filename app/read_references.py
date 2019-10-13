import json

def readJson(jsonLoc):
    with open(jsonLoc) as json_file:
        data = json.load(json_file)
        return data['references']