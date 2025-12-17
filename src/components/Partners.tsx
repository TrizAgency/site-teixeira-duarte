import Image from "next/image";
import Link from "next/link";

export default function Partners() {
  return (
    <section id="parceiros" className="lg:py-36 py-20 lg:rounded-bl-[210px] lg:rounded-br-none rounded-br-[210px] bg-green">
        <div className="container">
            <h2 className="lg:text-3xl text-2xl text-center font-light text-orange mb-20">Parcerias que <strong className="font-semibold">fortalecem</strong> nossa atuação.</h2>

            <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
                <Image src="/logo-mcma.png" alt="Logo MCMA" width={332} height={84} className="object-contain" />

                <div className="flex flex-col gap-5 max-w-2xl">
                    <p className="text-lg text-orange">Martins Castro Monteiro Advogados</p>

                    <p className="font-light text-white">Escritório parceiro do Teixeira Duarte Advogados na construção de soluções jurídicas integradas, unindo experiência e especialização em diferentes áreas do Direito. Essa parceria reforça o compromisso mútuo com uma advocacia moderna, colaborativa e orientada a resultados.</p>

                    <Link href="https://mcma.com.br/" target="_blank" className="font-bold py-2 px-3.5 rounded-full bg-orange text-white hover:bg-black/30 transition-all duration-300 cursor-pointer w-fit">
                        Acessar o site
                    </Link>
                </div>
            </div>

            <div className="mt-20 flex flex-col lg:flex-row gap-10 items-center justify-center">
                <Image src="/logo-ansbfafipaifskajsfl.png" alt="Logo Parceiro" width={332} height={84} className="object-contain" />

                <div className="flex flex-col gap-5 max-w-2xl">
                    <p className="text-lg text-orange">Nome Sobrenome | Advogado Consultor</p>

                    <p className="font-light text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>

                    <Link href="https://mcma.com.br/" target="_blank" className="font-bold py-2 px-3.5 rounded-full bg-orange text-white hover:bg-black/30 transition-all duration-300 cursor-pointer w-fit">
                        Acessar o site
                    </Link>
                </div>
            </div>

            
        </div>
    </section>
  );
}