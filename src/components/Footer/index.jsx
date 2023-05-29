export default function Footer() {
  const data = new Date();
  const year = data.getFullYear();
  return (
    <footer className="absolute bottom-0 w-full text-center text-white py-[20px] md:py-[12px]">
      {year} | Desenvolvido por{' '}
      <a
        className="hover:opacity-80 duration-150 underline hover:cursor-pointer"
        href="https://portfolio-leodiman.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        Leonardo Diman
      </a>
    </footer>
  );
}
