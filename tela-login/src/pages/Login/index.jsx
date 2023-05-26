import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import './styles.css';

function Login() {
  return (
    <>
      <main className="w-full h-[100vh] bg-color-6 flex flex-row">
        <article className="w-[50%] flex items-center">
          <section className="flex flex-col mx-auto items-center justify-center h-full">
            <h1 className="text-[50px] font-bold text-color-4">
              Faça seu Login<p className="dot-gradient inline-block">.</p>
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
        <aside className="text-white bg-white w-[50%] relative">
          <div className="absolute top-0 right-0 bg-gradient-to-r from-color-6 to-transparent w-full h-full"></div>
          <img
            className="h-full object-cover"
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </aside>
      </main>
      <Footer />
    </>
  );
}

export default Login;
