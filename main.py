from flask import Flask, render_template
app = Flask('__main__')

@app.route('/')
def index():
	return render_template("index.html")

app.run(host='0.0.0.0', port=8080)
