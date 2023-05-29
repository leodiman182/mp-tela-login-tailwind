import Button from 'components/Button';
import Input from 'components/Input';
import { useContext } from 'react';
import AlertMessage from 'components/AlertMessage';
import MainContext from 'context/MainContext';

export default function ArticleSection() {
  const { alert } = useContext(MainContext);

  return (
    <article className="w-[90%] mx-auto md:w-[50%] flex items-center">
      <section className="flex flex-col md:mx-auto md:items-center justify-center h-full relative w-full">
        <h1 className="text-[40px] md:text-[50px] font-bold text-color-4">
          Faça seu Login
          <div className="inline-block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-color-1 via-color-2 to-color-3">
            .
          </div>
        </h1>
        <div className="flex flex-col items-right text-right mt-[80px] md:mt-[60px] px-[8px] md:px-0">
          <Input className="text-left" type="text" placeholder="Email" />
          <Input
            type="password"
            placeholder="Senha"
            className="mt-[30px] md:mt-[25px] text-left"
          />
          <a
            className="text-white mt-[20px] mb-[35px] hover:opacity-80 duration-150 underline hover:cursor-pointer"
            href="/forgot-my-password"
          >
            Esqueci minha senha
          </a>
          {alert ? (
            <AlertMessage />
          ) : (
            <div className="md:h-[28px] bg-transparent"></div>
          )}
          <Button />
          <a
            className="text-white mt-[35px] hover:opacity-80 duration-150 underline hover:cursor-pointer text-center"
            href="/create-account"
          >
            Ainda não tenho uma conta
          </a>
        </div>
      </section>
    </article>
  );
}
