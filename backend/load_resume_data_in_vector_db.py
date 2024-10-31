from langchain_community.document_loaders import TextLoader
from langchain_community.embeddings import HuggingFaceBgeEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS


loader = TextLoader('my_resume_data.txt')

text_document_from_txt = loader.load()


huggingface_embedddings = HuggingFaceBgeEmbeddings(
    model_name='BAAI/bge-small-en-v1.5', 
    model_kwargs={'device': 'cpu'}, 
    encode_kwargs={'normalize_embeddings':True}
)



text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)

document_chunks = text_splitter.split_documents(text_document_from_txt)


vector_db = FAISS.from_documents(documents=document_chunks, embedding=huggingface_embedddings)
