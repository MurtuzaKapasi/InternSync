# Techstars_INTERNSYNC

# This project simplifies hiring with a web-app. Job seekers create profiles and upload resumes, while recruiters post jobs and filter candidates. Using a DistilBERT ML model from Hugging Face, the app matches candidates with job listings, enhancing the experience for all.

# Features:
* User Authentication: Job seekers and recruiters can register and log in to their respective accounts.
* Job Seeker Profile Creation: Job seekers can upload their resumes, and the application automatically extracts relevant information to create detailed profiles.
* Recruiter Job Posting: Recruiters can create job postings with eligibility criteria, job descriptions, required skills, responsibilities, and salary information.

* Automatic Resume Parsing: The application parses uploaded resumes to extract personal information, education, work experience, skills, certifications, test scores, etc.
* Machine Learning Matching: The DistilBERT model processes job descriptions and candidate profiles, providing a matching percentage to recruiters.
* Feedback Mechanism: Job seekers receive feedback on their application status, missing skills, in-demand skills, salary statistics, and reasons for not being shortlisted.
* Secure Data Handling: The application ensures the secure storage and handling of sensitive data, adhering to best practices for data privacy and security.

## Technology Stack
* Frontend: React.js, Gradio for model integration
* Backend: Node.js, Express.js
* Database: MongoDB
* Machine Learning Model: DistilBERT (Hugging Face)
* Deployment: Heroku for backend, Netlify for frontend

## Usage
* Open the application in your browser.
* Register as a job seeker or recruiter.
* Upload your resume (job seeker) or create a job posting (recruiter).
* The machine learning model will process the data and provide matching percentages.
* Receive feedback and improve your profile/application based on suggestions.

## Roadmap
Implement additional features such as chat support for communication between job seekers and recruiters.
Enhance the machine learning model to provide more accurate matching and feedback.
Expand platform functionality to support internships, freelance projects, and remote work opportunities
.
## Contributions
Contributions are welcome! Please fork the repository and submit pull requests with your enhancements or bug fixes.

## License
This project is licensed under the MIT License.

## Acknowledgements
* Hugging Face
* Gradio
* React.js
* Node.js
* MongoDB
