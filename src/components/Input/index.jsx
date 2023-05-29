import { useContext } from 'react';
import './styles.css';
import MainContext from 'context/MainContext';

export default function Input({ type, placeholder, className, ...props }) {
  const { usernameInput, setUsernameInput, passwordInput, setPasswordInput } =
    useContext(MainContext);

  return (
    <label
      htmlFor={`login-${type}`}
      className={'flex flex-col text-[13px] text-color-4 ' + className}
    >
      {placeholder}
      <div className="mt-[12px] h-[54px] w-full md:w-[352px] rounded-[15px] bg-gradient-to-r from-color-1 via-color-2 to-color-3 p-[1px]">
        <input
          className="h-full w-full rounded-[15px] px-[15px] text-[18px] bg-color-5 outline-gradient-to-r from-color-1 via-color-2 to-color-3 back  text-white"
          {...props}
          value={type === 'password' ? passwordInput : usernameInput}
          onChange={(e) => {
            type === 'password'
              ? setPasswordInput(e.target.value)
              : setUsernameInput(e.target.value);
          }}
          id={`login-${type}`}
          type={type}
        />
      </div>
    </label>
  );
}
