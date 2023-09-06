import React from 'react';

export default function TextArea({
  label,
  name,
  placeholder,
  parentClass,
  req,
  cols,
  rows,
}) {
  return (
    <div className={`${parentClass}`}>
      <label htmlFor={name} className="block text-gray text-label mb-2">
        {label}
        {req && <span className="text-red ms-1">*</span>}
      </label>
      <div className="mt-2">
        <textarea
          name={name}
          id={name}
          className="w-full focus-visible:outline-none"
          placeholder={placeholder || 'Type here'}
          cols={cols || 10}
          rows={rows || 10}
        ></textarea>
      </div>
    </div>
  );
}
