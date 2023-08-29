import React from 'react';

export default function Input({
  label,
  name,
  placeholder,
  value,
  parentClass,
  req,
}) {
  return (
    <div className={`${parentClass}`}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}

        {req && <span className="text-red">*</span>}
      </label>
      <div className="mt-2">
        <input
          type="text"
          name={name}
          id={name}
          required={req || false}
          defaultValue={value || ''}
          placeholder={placeholder || 'Vui lòng nhập'}
          autoComplete="given-name"
          className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
          ring-gray-300  placeholder:text-gray-400 focus:ring- focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
