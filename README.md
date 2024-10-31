# ChatFolio

## Demo video of the overall application

![Screenshot (757)](https://github.com/user-attachments/assets/0a0a1c82-726a-46c7-92e7-ce464b4ab743)

https://www.youtube.com/watch?v=RkJOtCKr0VA

## Introduction

ChatFolio is a personal chatbot designed to answer questions based on my resume. It provides insights into my background, including my skills, education, projects, achievements, and certifications. By interacting with ChatFolio, users can quickly access specific information about my professional profile, allowing for a more personalized and efficient way to explore my qualifications.

## Features of the Application

- **Personalized Responses**: ChatFolio offers answers based on the details of my resume, making it easy for users to learn about my expertise, experience, and accomplishments.
- **Intelligent Search**: ChatFolio uses embeddings and vector-based search to ensure accurate responses to user questions about my profile.
- **User-Friendly Interface**: With a clean and simple interface, ChatFolio ensures that users can navigate through my profile seamlessly.

## Technologies Used

**Frontend**

- **Next.js** (v15.0.2): Used to build the user interface for a smooth, responsive, and interactive experience.
- **Tailwind CSS**: For styling the application with a clean, modern look.
- **ShadCN UI**: Utilized for consistent and accessible design components.

**Backend**

- **FastAPI**: Powers the backend, handling requests and processing user queries effectively.
- **LangChain**: Implements question-answering workflows and response generation.
- **BAAI/bge-small-en-v1.5** (from Hugging Face): A pre-trained embeddings model for encoding resume information, used in conjunction with LangChain.
- **FAISS**: A vector database to store and search embeddings efficiently for fast and accurate results.
- **LangChain Groq and Google’s Gemma 2-9B-IT model**: Used for enhanced processing and improved chatbot performance.

## Deployment

- **Frontend**: Deployed on Vercel for reliable, fast delivery.
- **Backend**: Deployed on Hugging Face Spaces for robust backend support.

- **Live Preview**: https://chatfolio-som.vercel.app/
- **FastAPI backend URL**: https://som11-chatfoliofastapibackend.hf.space
- **Swagger Docs of the FastAPI API**: https://som11-chatfoliofastapibackend.hf.space/docs

## Disclaimer

The creator of this application is not liable for any incorrect content generated by the Groq API and Google’s Gemma 2-9B-IT model, as their operation is beyond the creator's control.
