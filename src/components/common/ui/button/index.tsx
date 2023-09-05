import React from 'react';

export default function Button({ type, text, classname }) {
  return (
    <button
      type={type}
      className={`${
        type === 'button'
          ? 'bg-primary rounded-md'
          : 'bg-black rounded-3 rounded-bl-none'
      } ${
        classname || 'px-4 py-2.5 text-white'
      } md:px-[60px] md:py-4  text-button font-semibold hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
    >
      {text}
    </button>
  );
}
