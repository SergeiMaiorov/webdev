import json
from flask import Flask


app = Flask(__name__)

@app.route('/translate/<word>')
def translate(word):
    with open('dictionary.json', 'r', encoding='utf-8') as file:
        dictionary = json.load(file)

    search_word = word.lower()

    if search_word in dictionary:
        return {
            "English": search_word,
            "Finnish": dictionary[search_word]
        }
    else:
        return {"error": "Word not found"}, 404

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)