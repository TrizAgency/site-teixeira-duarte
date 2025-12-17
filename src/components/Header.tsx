'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const menuItems = [
        { label: "Home", href: "/" },
        { label: "Quem Somos", href: "#quem-somos" },
        { label: "Áreas de Atuação", href: "#areas-de-atuacao" },
        { label: "Equipe", href: "#equipe" },
        { label: "Parceiros", href: "#parceiros" },
        { label: "Contato", href: "#contato" },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
        {/* Desktop Menu */}
        <header className="w-full px-5 py-8 hidden lg:flex items-center fixed top-0 left-0 right-0 bg-transparent z-40">
            <div className="container flex items-center">
                <Link href="/">
                    <Image src="/logo-header.svg" alt="Logo Teixeira Duarte" priority width={281} height={42} />
                </Link>

                <nav className="ml-auto text-white">
                    <ul className="flex space-x-8">
                    {menuItems.map((item) => (
                        <li key={item.href} className="underline decoration-transparent hover:decoration-orange transition-all duration-300">
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}
                    </ul>
                </nav>
            </div>
        </header>

        <div className="h-26.5 w-full bg-green hidden lg:block fixed top-0 left-0 right-0 z-30 shadow-sm" />

        {/* Mobile Menu */}
            <header className="bg-green w-full fixed z-40 shadow-lg block lg:hidden">
                <div className="container flex items-center justify-between py-5">
                    <Link href="/" title="Home"
                    >
                        <Image src="/logo-header.svg" alt="Logo Teixeira Duarte" width={220} height={97} />
                    </Link>

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`z-100 flex items-center justify-center outline-none transition-all duration-300 lg:block cursor-pointer rounded-lg`}
                        title="Open menu"
                    >
                        <div className="flex w-9 flex-col items-center">
                        <div
                            className={`relative mt-0 h-0.75 w-9 ${isMenuOpen ? 'bg-white top-2.25 rotate-45 transition-all duration-300' : 'bg-white top-0 rotate-0 transition-all duration-300'}`}
                        />
                        <div
                            className={`mt-1.5 h-0.75 w-9 bg-green ${isMenuOpen ? 'bg-white -rotate-45 transition-all duration-300' : 'bg-white rotate-0 transition-all duration-300'}`}
                        />
                        <div
                            className={`relative mt-1.5 h-0.75 w-9 bg-green ${isMenuOpen ? 'bg-white -top-2.25 -rotate-45 transition-all duration-300' : 'bg-white top-0 rotate-0 transition-all duration-300'}`}
                        />
                        </div>
                    </button>

                    <div className={`fixed flex flex-col items-start p-7 top-0 right-0 w-62.5 md:w-75 bg-green z-99 shadow-xl transform transition-transform duration-300 rounded-l-2xl ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>

                        <ul className="flex flex-col gap-4 font-normal text-white mt-2">
                            {menuItems.map((item) => (
                                <li key={item.label} className="">
                                    
                                    <Link
                                        href={item.href ?? '#'}
                                        title={item.label}
                                        className={`uppercase`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                    
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </header>

    </>
  );
}