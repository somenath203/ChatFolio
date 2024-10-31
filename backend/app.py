import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from langchain.prompts import PromptTemplate
from langchain.chains import RetrievalQA

from load_resume_data_in_vector_db import vector_db


load_dotenv()


groq_api_key = os.getenv('GROQ_API_KEY')


llm_model = ChatGroq(
    groq_api_key=groq_api_key,
    model_name="gemma2-9b-it"
)


app = FastAPI()


origins = ["*"]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class textFromFrontendModel(BaseModel):
    textFromNextJSFrontend: str


@app.get('/')
def welcome():
    return {
        'success': True,
        'message': '"ChatFolio" fastapi server is up and running successfully'
    }



@app.post('/generate-answer')
async def predict(incomingTextFromFrontend: textFromFrontendModel):

    try:

        input_text_of_user = incomingTextFromFrontend.textFromNextJSFrontend

        prompt_template = """
            Answer the questions based on the provided context only.
            Please provide the most accurate response based on the question.
            
            <context>
            {context}
            </context>
            Question:{question}
        """   

        retriever = vector_db.as_retriever(search_type="similarity", search_kwargs={"k":3})

        prompt = PromptTemplate(template=prompt_template,input_variables=["context","question"])


        retrievalQA=RetrievalQA.from_chain_type(
            llm=llm_model,
            chain_type="stuff",
            retriever=retriever,
            return_source_documents=True,
            chain_type_kwargs={"prompt":prompt}
        )


        result = retrievalQA.invoke({"query": input_text_of_user})


        return {
            'success': True,
            'answer_from_model': result['result']
        }

    except Exception as e:

        print(f"Error occurred: {e}")

        return {
            'success': False,
            'error': str(e)
        }

