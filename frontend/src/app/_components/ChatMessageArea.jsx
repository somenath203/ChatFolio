'use client';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ImSpinner } from "react-icons/im";


const ChatMessageArea = ({ messagesRef, messages, loading }) => {

  return (
    <div className="h-[490px] overflow-y-auto p-4 space-y-4 text-center" ref={messagesRef}>

      {messages.length === 0 ? (

        <div className="flex flex-col h-full items-center justify-center gap-8 lg:gap-4">

          <h1 className="text-5xl lg:text-6xl tracking-widest font-extrabold text-green-300">
            ChatFolio
          </h1>

          <p className="text-white text-xl tracking-wider font-semibold">
            This bot, powered by the Google Gemma 2-9b-it and Groq API, is designed
            to answer any questions related to my resume in an informative and
            engaging way.
          </p>

        </div>
      ) : (
        messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>

            <div className={`rounded-lg p-3 ${message.sender === 'user' ? 'bg-green-800 text-white p-4 rounded-xl text-left text-base lg:text-lg' : 'bg-green-950 text-white p-4 rounded-xl text-left text-base lg:text-lg'}`}>

              <div className="whitespace-pre-wrap">
                {message.sender === 'bot' ? (

                  <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>

                    {message.text}

                  </Markdown>

                ) : (
                  <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>

                    {message.text}

                  </Markdown>
                )}
              </div>

            </div>

          </div>
        ))
      )}
      {loading && (
        <div className="flex justify-start">

          <div className="bg-green-950 text-white p-4 rounded-xl">

            <ImSpinner className="size-10 transition-all animate-spin duration-1000" />

          </div>

        </div>
      )}

    </div>

  );

};


export default ChatMessageArea;
