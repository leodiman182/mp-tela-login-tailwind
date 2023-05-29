import MainContext from 'context/MainContext';
import { useContext, useEffect } from 'react';
export default function AlertMessage() {
  const { alert, setAlert } = useContext(MainContext);
  useEffect(() => {
    alert && setTimeout(() => setAlert(false), 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert]);

  return (
    <span className="text-red-500 py-[2px] text-center absolute top-10 md:static">
      Por favor, insira o email/senha corretos!
    </span>
  );
}
