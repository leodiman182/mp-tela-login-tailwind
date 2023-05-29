import { useContext } from 'react';
import './styles.css';
import MainContext from 'context/MainContext';

export default function Button() {
  const { setAlert } = useContext(MainContext);

  return (
    <button
      onClick={() => setAlert(true)}
      className="button-gradient h-[52px] w-full md:w-[350px] rounded-[14px] text-white font-bold text-[23px] md:opacity-80 hover:cursor-pointer hover:opacity-100 duration-200"
    >
      Entrar
    </button>
  );
}
