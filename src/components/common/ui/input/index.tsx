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
      <label htmlFor={name} className="block text-gray text-label mb-2">
        {label}
        {req && <span className="text-red ms-1">*</span>}
      </label>
      <div className="mt-2">
        <input
          type="text"
          name={name}
          id={name}
          required={req || false}
          defaultValue={value || ''}
          placeholder={placeholder || 'Type here'}
          autoComplete="given-name"
          className="block w-full"
        />
      </div>
    </div>
  );
}
