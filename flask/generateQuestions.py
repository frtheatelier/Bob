from flask import Flask, request, jsonify
from google import genai
import os
import json

app = Flask(__name__)

# Load your Gemini API key (from environment variable)
genai.configure(api_key=os.environ["GEMINI_API_KEY"])

@app.route("/api/generate_questions", methods=["POST"])
def generate_questions():
    user_answers = request.json
    prompt = f"""
    You are a psychometric test designer for a surrealist academic experiment, with the goal of defining the entity known as Bob.
    The user has submitted the following answers to questions about Bob:
    {json.dumps(user_answers, indent=2)}

    Based on the following user responses (answered with 'Yes' or 'No'), generate exactly 5 new, increasingly absurd and philosophical questions to probe deeper.
    The questions must be direct Yes/No questions.
    The absurdity should be subtle at first, then escalate. Touch on themes of existence, consciousness, and the mundane
    Format as JSON:
    [
      {{ "name": "unique_id", "questionText": "Question text", "type": "YESNO" }},
      ...
    ]

    Generate the next 5 questions.
    """

    model = genai.GenerativeModel("gemini-2.5-flash")
    response = model.generate_content(prompt)

    try:
        questions = json.loads(response.text)
    except Exception:
        questions = [
            {
                "name": "backup1",
                "questionText": "Is Bob aware of being classified as Bob?",
                "type": "YESNO",
            }
        ]

    return jsonify({"questions": questions})

if __name__ == "__main__":
    app.run(debug=True)
