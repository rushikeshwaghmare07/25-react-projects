import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';

const Emoji = () => {
  const [choosenEmoji, setChoosenEmoji] = useState('');

  const copyEmojiFunction = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  const emojiPickerFunction = (emojiObject) => {
    const emoji = emojiObject.emoji;
    setChoosenEmoji(emoji);
    copyEmojiFunction(emoji);
    toast.success('Copied to Clipboard!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Emoji Application</h1>
      {choosenEmoji && (
        <div className="bg-white p-4 rounded shadow-md mb-4">
          <p className="text-gray-600">Selected Emoji:</p>
          <span className="text-4xl">{choosenEmoji}</span>
        </div>
      )}
      <div className="bg-white p-4 rounded shadow-md">
        <EmojiPicker onEmojiClick={emojiPickerFunction} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Emoji;
