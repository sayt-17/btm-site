from flask import Flask, render_template, request, send_from_directory
import os

app = Flask(__name__)

@app.route("/")
def home():
    lang = request.args.get("lang", "en")

    translations = {
        "en": {
            "title": "Industrial Welding & Steel Construction",
            "about": "BTM Group is a Lithuanian company..."
        },
        "ru": {
            "title": "Сварка и металлоконструкции",
            "about": "BTM Group — литовская компания..."
        },
        "lt": {
            "title": "Suvirinimas ir plieno konstrukcijos",
            "about": "BTM Group yra Lietuvos įmonė..."
        }
    }

    t = translations.get(lang, translations["en"])
    return render_template("index.html", t=t)


# 🔥 ROBOTS ROUTE (MUHIM)
@app.route('/robots.txt')
def robots():
    return send_from_directory('.', 'robots.txt')


# 🔥 HAR DOIM OXIRIDA BO‘LADI
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
    