from flask import Flask, jsonify, request
import gradio as gr
import torch
from transformers import AutoTokenizer, AutoModel

app = Flask(__name__)

tokenizer = AutoTokenizer.from_pretrained('distilbert/distilbert-base-uncased')
model = AutoModel.from_pretrained('distilbert/distilbert-base-uncased')

options = [
    "Operating systems",
    "Javascript",
    "Communication",
    "Css",
    "Analytical",
    "Database",
    "Windows",
    "Algorithms",
    "Sql",
    "Docker",
    "Troubleshooting",
    "Programming",
    "Html",
    "Oracle",
    "Computer science",
    "Linux",
    "Java",
    "Engineering",
    "Python",
    "Tensorflow",
    "C++",
    "Aws"
]

@app.route('/calculate-similarity', methods=['POST'])
def calculate_similarity():
    data = request.json
    intern_inputs = data['intern_inputs']
    recruiter_inputs = data['recruiter_inputs']

    intern_tokens = tokenizer(intern_inputs, return_tensors="pt", padding=True)
    recruiter_tokens = tokenizer(recruiter_inputs, return_tensors="pt", padding=True)

    with torch.no_grad():
        intern_output = model(**intern_tokens).last_hidden_state.mean(dim=1)
        recruiter_output = model(**recruiter_tokens).last_hidden_state.mean(dim=1)

    similarity = torch.nn.functional.cosine_similarity(intern_output, recruiter_output)
    similarity = similarity.mean().item()
    normalized_similarity = (similarity - 0.9) / 0.1 * 100
    return jsonify({'similarity': round(normalized_similarity, 2)})

if __name__ == '__main__':
    app.run(debug=True)
