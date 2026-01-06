import Image from "next/image";
import Link from "next/link";

export default function Partners() {
  return (
    <section id="parceiros" className="lg:py-36 py-20 lg:rounded-bl-[210px] lg:rounded-br-none rounded-br-[140px] bg-green">
        <div className="container">
            <h2 className="lg:text-3xl text-2xl text-center font-light text-orange mb-20">Parcerias que <strong className="font-semibold">fortalecem</strong> nossa atuação.</h2>

            <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
                <Image src="/logo_MCMA.svg" alt="Logo MCMA" width={332} height={84} className="object-contain" />

                <div className="flex flex-col gap-5 max-w-2xl">
                    <p className="text-lg text-orange">Martins Castro Monteiro Advogados</p>

                    <p className="font-light text-white text-justify">A atuação conjunta com o MCMA representa um dos pilares estratégicos do Teixeira Duarte Advogados, uma parceria com um escritório de excelência reconhecida, cuja experiência e aprofundamento técnico agregam valor essencial às soluções jurídicas que desenvolvemos. Juntos, unimos esforços para oferecer um atendimento altamente especializado, moderno e orientado a resultados.</p>

                    <Link href="https://mcma.com.br/" target="_blank" className="font-bold py-2 px-3.5 rounded-full bg-orange text-white hover:bg-black/30 transition-all duration-300 cursor-pointer w-fit">
                        Acessar o site
                    </Link>
                </div>
            </div>

            <div className="mt-20 flex flex-col lg:flex-row gap-10 items-center justify-center">
                <Image src="/ricardo-calcini.png" alt="Logo Parceiro" width={220} height={250} className="object-contain rounded-4xl lg:mx-14" />

                <div className="flex flex-col gap-5 max-w-2xl">
                    <p className="text-lg text-orange">Ricardo Calcini | Calcini Advogados</p>

                    <p className="font-light text-white text-justify">Advogado com atuação estratégica perante os TRTs, o TST e o STF, parecerista e consultor na área trabalhista. Desenvolve atuação conjunta com o escritório na elaboração de pareceres especializados e na condução de estratégias perante os Tribunais Superiores. É docente no curso de Pós-Graduação do INSPER/SP e professor visitante em instituições como USP/RP, PUC/RS, PUC/PR, FDV/ES, Universidade Católica de Santa Catarina, IBMEC/RJ, FADI/SP e ESA/OAB.</p>

                    {/* <Link href="https://mcma.com.br/" target="_blank" className="font-bold py-2 px-3.5 rounded-full bg-orange text-white hover:bg-black/30 transition-all duration-300 cursor-pointer w-fit">
                        Acessar o site
                    </Link> */}
                </div>
            </div>

            
        </div>
    </section>
  );
}