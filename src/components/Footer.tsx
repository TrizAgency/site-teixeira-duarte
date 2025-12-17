import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const footerItems = [
        { label: "Home", href: "/" },
        { label: "Equipe", href: "#equipe" },
        { label: "Quem Somos", href: "#quem-somos" },
        { label: "Parceiros", href: "#parceiros" },
        { label: "Áreas de Atuação", href: "#areas-de-atuacao" },
        { label: "Contato", href: "#contato" },
    ];
    return (
        <footer className="w-full py-20 flex items-center left-0 right-0 bg-white z-40">
            <div className="container flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
                <Link href="/">
                    <Image src="/logo-footer.svg" alt="Logo Teixeira Duarte" priority width={271} height={115} />
                </Link>

                <div className="flex flex-col gap-2 text-center lg:text-left">
                    <Link href="tel:+551138167878" className="underline decoration-transparent hover:decoration-orange transition-all duration-300 text-sm">+55 (11) 3816-7878</Link>

                    <Link href="https://www.google.com/maps/place/TEIXEIRA+DUARTE/@-23.551495,-46.6793051,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce578e33f95611:0xe80698f3b9986320!8m2!3d-23.551495!4d-46.6793051!16s%2Fg%2F11t6yym6jg?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" className="underline decoration-transparent hover:decoration-orange transition-all duration-300 text-sm" target="_blank">
                        Rua Amália de Noronha, 151,
                        <br />
                        Térreo 3, Pinheiros, São Paulo (SP)
                        <br />CEP 05410-010
                    </Link>
                </div>

                <nav className="">
                    <ul className="grid lg:grid-cols-2 lg:space-x-16 space-y-1 text-center lg:text-left">
                    {footerItems.map((item) => (
                        <li key={item.href} className="underline decoration-transparent hover:decoration-orange transition-all duration-300 font-light text-sm uppercase">
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}
                    </ul>
                </nav>
            </div>
        </footer>
    )
}