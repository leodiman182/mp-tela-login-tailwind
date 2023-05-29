import AsideSection from 'components/AsideSection';
import ArticleSection from 'components/ArticleSection';
import Footer from 'components/Footer';

function Login() {
  return (
    <>
      <main className="w-full h-[100vh] bg-color-6 flex flex-row relative">
        <ArticleSection />
        <AsideSection />
      </main>
      <Footer />
    </>
  );
}

export default Login;
