from flask import Flask

app = Flask(__name__)

@app.route('/prime_number/<number>')
def prime_number(number):
    try:
        num = int(number)
    except ValueError:
        return {"error": "Invalid number"}, 400

    is_prime = True
    if num < 2:
        is_prime = False
    else:
        for i in range(2, num):
            if num % i == 0:
                is_prime = False
                break

    result = {
        "Number": num,
        "isPrime": is_prime
    }
    return result

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)