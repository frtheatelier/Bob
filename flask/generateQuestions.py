@app.route("/api/generate_questions", methods=["POST"])
def generate_questions():
    user_answers = request.json  # dict from frontend

    # Construct prompt based on previous answers
    prompt = f"""
    The user has answered some philosophical questions about Bob:
    {json.dumps(user_answers, indent=2)}

    Generate 3 more absurd or philosophical yes/no questions
    that build upon their perspective of Bob.
    Return them as a JSON list of objects with fields:
    name, questionText, and type ("YESNO").
    """

    response = gemini_api_call(prompt)  # pseudocode for LLM call

    try:
        questions = json.loads(response)
    except:
        # if model returns text not perfectly JSON, fallback
        questions = [
            {
                "name": "default_question",
                "questionText": "Is Bob dreaming of electric sheep?",
                "type": "YESNO",
            }
        ]

    return jsonify({"questions": questions})
