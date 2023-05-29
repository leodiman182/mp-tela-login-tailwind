import Button from 'components/Button';
import Input from 'components/Input';
import { useContext } from 'react';
import AlertMessage from 'components/AlertMessage';
import MainContext from 'context/MainContext';

export default function ArticleSection() {
  const { alert } = useContext(MainContext);

  return (
    <article className="w-[50%] flex items-center">
      <section className="flex flex-col mx-auto items-center justify-center h-full relative">
        <h1 className="text-[50px] font-bold text-color-4">
          Faça seu Login
          <div className="inline-block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-color-1 via-color-2 to-color-3">
            .
          </div>
        </h1>
        <div className="flex flex-col items-right text-right mt-[60px]">
          <Input className="text-left" type="text" placeholder="Email" />
          <Input
            type="password"
            placeholder="Senha"
            className="mt-[25px] text-left"
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
            <div className="h-[28px] bg-transparent"></div>
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
