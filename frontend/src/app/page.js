'use client';

import { useState, useRef, useEffect } from "react";
import axios from "axios";
 
import SubmitButton from "./_components/SubmitButton";
import ChatInputTextArea from "./_components/ChatInputTextArea";
import ChatMessageArea from "./_components/ChatMessageArea";


const Page = () => {


  const [inputMessage, setInputMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  const messagesRef = useRef(null);


  const generateAnswerByGeminiBot = async (userMessage) => {

    try {

      let botResponse;


      setLoading(true);

      setMessages(prev => [...prev, { sender: "user", text: userMessage }]);

      const { data } = await axios.post(process.env.NEXT_PUBLIC_CHATFOLIO_BACKEND_URL, {
        textFromNextJSFrontend: userMessage
      });


      if (data?.success) {
        botResponse = data?.answer_from_model;
      }


      setMessages(prev => [...prev, { sender: "bot", text: botResponse }]);

    } catch (error) {

      console.log(error);

      setMessages(prev => [...prev, { sender: "bot", text: "Sorry, I encountered an error." }]);

    } finally {

      setLoading(false);

    }


  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (inputMessage.trim() && !loading) {

      generateAnswerByGeminiBot(inputMessage);

      setInputMessage("");

    }

  };


  useEffect(() => {

    if(messagesRef.current) {

      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;

    }

  }, [messages]);


  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="lg:w-11/12 mx-3 lg:mx-0 mb-8">
        
        <ChatMessageArea 
          messagesRef={messagesRef} 
          messages={messages} 
          loading={loading}
        />

        <form onSubmit={handleSubmit} className="pt-4">

          <div className="flex flex-col lg:flex-row gap-2">

            <ChatInputTextArea 
              inputMessage={inputMessage} 
              setInputMessage={setInputMessage} 
              placeholder='enter your prompt...' 
              loading={loading}
            />

            <SubmitButton loading={loading} inputMessage={inputMessage} />

          </div>

        </form>

      </div>

    </div>
  );
};

export default Page;
