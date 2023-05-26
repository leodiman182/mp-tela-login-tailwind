import { useState } from 'react';
import './styles.css';

export default function Input({ type, placeholder, className, ...props }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <label
      htmlFor={`login-${type}`}
      className={'flex flex-col text-[13px] text-color-4 ' + className}
    >
      {placeholder}
      <div class="mt-[8px] h-[53.25px] w-[352px] rounded-[15px] bg-gradient-to-r from-color-1 via-color-2 to-color-3 p-0.5">
        <input
          className="h-full w-full rounded-[15px] px-[15px] text-black text-[18px] bg-color-5 focus:outline-2 outline-gradient-to-r from-color-1 via-color-2 to-color-3 back focus:outline-0 text-white"
          {...props}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          id={`login-${type}`}
          type={type}
        />
      </div>
      {/* <div className="w-full h-full bg-color-5"></div> */}
    </label>
  );
}
