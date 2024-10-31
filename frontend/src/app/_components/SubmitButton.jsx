'use client';

import { Button } from '@/components/ui/button';


const SubmitButton = ({ loading, inputMessage }) => {
  return (
    <Button
      type="submit"
      disabled={loading || !inputMessage.trim()}
      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed h-12 lg:h-20 text-base lg:text-lg"
    >
      Send
    </Button>
  );
};


export default SubmitButton;
