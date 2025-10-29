from flask import Flask, request, jsonify
from google import genai
import os
import json

app = Flask(__name__)

# Load your Gemini API key (from environment variable)
genai.configure(api_key=os.environ["GEMINI_API_KEY"])

@app.route("/api/generate_result", methods=["POST"])
def generate_result():
    all_answers = request.json
    prompt = f"""
    Given these answers about Bob:
    {json.dumps(all_answers, indent=2)}

    Write a short, humorous existential analysis of what kind of Bob this user believes in.
    """

    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(prompt)

    return jsonify({"result": response.text.strip()})


if __name__ == "__main__":
    app.run(debug=True)
