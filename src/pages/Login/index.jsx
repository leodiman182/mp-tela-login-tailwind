import AsideSection from 'components/AsideSection';
import ArticleSection from 'components/ArticleSection';
import Footer from 'components/Footer';

function Login() {
  return (
    <>
      <img
        className="h-full object-cover object-top md:hidden absolute"
        src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt=""
      />
      <div className="absolute h-screen w-full bg-color-6 opacity-70 md:hidden"></div>
      <main className="w-full h-[100vh] bg-transparent md:bg-color-6 flex flex-row relative">
        <ArticleSection />
        <AsideSection />
      </main>
      <Footer />
    </>
  );
}

export default Login;
