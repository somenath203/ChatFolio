'use client';

import { Textarea } from '@/components/ui/textarea';


const ChatInputTextArea = ({ inputMessage, setInputMessage, placeholder, loading }) => {
  return (
    <Textarea
      value={inputMessage}
      rows={2}
      onChange={(e) => setInputMessage(e.target.value)}
      placeholder={placeholder}
      className="flex-1 p-4 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white !resize-none"
      disabled={loading}
    />
  );
};


export default ChatInputTextArea;
