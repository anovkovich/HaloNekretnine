import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-8xl font-script text-[#d4af37] mb-6">404</h1>
        <h2 className="text-2xl font-serif text-[#1a1a1a] mb-4">
          Stranica nije pronađena
        </h2>
        <p className="text-stone-500 mb-8 leading-relaxed">
          Nažalost, stranica koju tražite ne postoji ili je premeštena.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-[#1a1a1a] text-white text-sm uppercase tracking-widest hover:bg-[#333] transition-colors"
        >
          Nazad na početnu
        </Link>
      </div>
    </div>
  );
}
