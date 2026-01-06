import Image from "next/image";
import Link from "next/link";

export default function Areas() {
  return (
    <section id="areas-de-atuacao" className="lg:py-36 py-20">
      <div className="container">
        <h2 className="lg:text-3xl text-2xl text-center font-light lg:mb-20 mb-12 text-green">Áreas de Atuação</h2>

        <div className="flex flex-col lg:flex-row lg:gap-20 gap-12 items-center justify-center">
          <div className="border border-orange p-10 rounded-[60px]">
            <div className="lg:text-3xl text-2xl font-bold text-orange flex items-center gap-6">
              <h3>Direito do Trabalho</h3>
              <Image src="/balanca.svg" alt="Icone Balança" width={42} height={42} />
            </div>
            <p className="text-green font-light text-justify max-w-85 my-6">
              Assessoria estratégica e personalizada em Direito do Trabalho, apoiando empresas na tomada de decisões seguras e eficientes.
            </p>
            <Link href="/direito-do-trabalho" className="font-bold py-2 px-3.5 rounded-full bg-orange text-white hover:bg-black/30 transition-all duration-300 cursor-pointer">
              Saiba mais
            </Link>
          </div>
          
          <div className="border border-orange p-10 rounded-[60px]">
            <div className="lg:text-3xl text-2xl font-bold text-orange flex items-center justify-between gap-6">
              <h3>Direito Penal</h3>
              <Image src="/malhete.svg" alt="Icone Malhete" width={45} height={45} />
            </div>
            <p className="text-green font-light text-justify max-w-85 my-6">
              Atuação especializada em casos criminais complexos e na prevenção de riscos, com foco em defesa e integridade corporativa.
            </p>
            <Link href="/direito-penal" className="font-bold py-2 px-3.5 rounded-full bg-orange text-white hover:bg-black/30 transition-all duration-300 cursor-pointer">
              Saiba mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}