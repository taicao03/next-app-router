import React from 'react';

export default function Button({ type, text }) {
  return (
    <button
      type={type}
      className={`${
        type === 'button'
          ? 'bg-primary rounded-md'
          : 'bg-black rounded-md rounded-bl-none'
      } md:px-[60px] md:py-4 px-4 py-2.5 text-button font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
    >
      {text}
    </button>
  );
}
