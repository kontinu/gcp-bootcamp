from flask import Flask
from flask import Flask, make_response, render_template
import os, platform

app = Flask(__name__)

#? BACK

kontinu_msg=os.getenv("MSG"," 👋 Hello from Python 🐍")
PORT=8080

@app.route("/health")
def health():
    print("i'm healthy")
    return "healthy"



@app.route('/')
def root():
    host=platform.node()
    foo=os.getenv('FOO', 'unset')
    version=os.getenv('APP_VERSION', "0.0")
    #print(f"Getting visits! {count}")
    global kontinu_msg


    return render_template('index.html', hostname=host,  FOO=foo , greeting=kontinu_msg, version=version)



if __name__ == '__main__':
    print("==== Starting Python Server ====")
    app.run(host='0.0.0.0',port=PORT,debug=True)
