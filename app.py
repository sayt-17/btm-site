from flask import Flask, render_template, request

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

    # 🔥 ENG MUHIM QATOR
    t = translations.get(lang, translations["en"])

    # 🔥 ENG MUHIM QATOR
    return render_template("index.html", t=t)