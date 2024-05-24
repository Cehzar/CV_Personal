import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10 bg-black bg-opacity-20">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="font-bold text-3xl">
          Sobre mi
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/Git_Proyect">Proyectos</Link>
          <Link href="/Experience">Experiencias</Link>
        </div>
      </nav>
    </div>
  );
}
