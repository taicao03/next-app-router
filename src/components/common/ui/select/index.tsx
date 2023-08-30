import React from 'react';

export default function Select({ name, label, req, parentClass }) {
  return (
    <div className={`${parentClass}`}>
      <label htmlFor={name} className="block text-black text-label">
        {label}
        {req && <span className="text-red ms-1">*</span>}
      </label>
      <div className="mt-2">
        <select
          name={name}
          className="w-full text-black custom-select focus-visible:outline-none py-2 border-b border-b-secondary cursor-pointer"
        >
          <option className="p-10 bg-red-200 cursor-pointer" value="">
            hello
          </option>
        </select>
      </div>
    </div>
  );
}
