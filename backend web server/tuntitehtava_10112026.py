from flask import Flask

app = Flask(__name__)


@app.route("/hello_world/<numero>")
def hello_world(numero):
    try:
        kerrat = int(numero)
        text = "Hello world! " * kerrat
        return text
    except ValueError:
        return "Virhe: Syota osoiteriville numero, ei kirjaimia!"


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=4848, use_reloader=True)
