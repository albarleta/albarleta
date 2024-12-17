export default function Footer() {
  return (
    <footer className="w-full bg-[#201890] py-4 px-6 flex items-center justify-center gap-2">
      <img src="/img/logo.png" alt="logo" className="h-7" />
      <p className="text-white text-sm">{new Date().getFullYear()}</p>
    </footer>
  );
}
