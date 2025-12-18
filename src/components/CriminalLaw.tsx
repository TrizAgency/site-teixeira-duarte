'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CriminalLaw() {
    const responsibles = [
          {
            name: "Flávia Amarante <br/> Teixeira Duarte",
            email: "flavia@teixeiraduarte.adv.br",
            area: "Direito Criminal",
            resume: "Advogada com experiência na área criminal, com passagem por escritórios boutique de renome e atuação em grandes operações e casos de alta complexidade. É graduada em Direito pela Universidade Presbiteriana Mackenzie (2019) e pós-graduanda em Direito e Processo Penal pela Universidade Presbiteriana Mackenzie (2026), bem como em Direito Médico e Bioética pela Faculdade de Ciências Médicas da Santa Casa de São Paulo (2027). Possui curso de extensão em Compliance pela Fundação Getúlio Vargas (2021). É associada ao Instituto de Defesa do Direito de Defesa (IDDD), com atuação no Departamento de Litígio Estratégico, e ao Instituto Brasileiro de Ciências Criminais (IBCCRIM).",
          },
    ]

    const [selectedMember, setSelectedMember] = useState<null | number>(null);
    
    useEffect(() => {
        document.body.style.overflow = selectedMember !== null ? 'hidden' : 'auto';
    }, [selectedMember]);
    
  return (
    <section className="lg:py-26.25 py-16 bg-green">
        <div className="w-full m-auto max-w-480 h-60 relative">
            <Image src="/conference-room.jpg" alt="Sala de Reuniões" quality={100} priority fill className="object-cover opacity-55" />
            <div className="container">
                <h2 className="lg:text-xl text-lg text-white font-light absolute bottom-8 z-10">
                    Áreas de Atuação
                    <div className="h-0.5 mt-1 bg-orange w-full opacity-100 relative z-10" />
                </h2>
            </div>
        </div>

        <div className="container pt-20">
            <h3 className="lg:text-3xl text-2xl font-bold text-orange flex items-center gap-6 mb-6">
                <span>Direito Penal</span>
            </h3>
            <p className="text-white lg:text-xl text-lg font-light mb-20 max-w-4xl">
                Atuamos em casos complexos de crimes econômicos, financeiros e corporativos, com ampla experiência na defesa de investigados e réus em processos de grande repercussão. Com a mesma dedicação, representamos vítimas de fraudes, furtos e crimes digitais, acompanhando inquéritos e ações penais para garantir a responsabilização dos autores e a reparação dos danos.
                <br /><br />
                Também prestamos assessoria preventiva a empresas, por meio de programas de Compliance e Investigações Internas, voltados à mitigação de riscos e ao fortalecimento da cultura de integridade.
            </p>

            <span className="lg:text-xl text-lg text-orange font-bold">
                Responsáveis
                <div className="h-0.5 mt-3 mb-8 bg-orange w-full opacity-100 relative z-10" />
            </span>

            <div className="flex flex-col lg:flex-row items-start justify-start lg:gap-20 gap-16 my-12">
                    {responsibles.map((member, idx) => (
                        <div key={member.email} className="flex flex-col items-start gap-1">
                            <h3 className="text-beige lg:text-xl text-lg font-semibold text-left" dangerouslySetInnerHTML={{ __html: member.name }}></h3>
                            <Link href={`mailto:${member.email}`} className="text-orange font-light underline decoration-transparent hover:decoration-orange duration-300">{member.email}</Link>
                            <button onClick={() => setSelectedMember(idx)} className="font-bold py-2 px-3.5 rounded-full bg-orange text-white hover:bg-black/30 transition-all duration-300 cursor-pointer mt-4">Ver currículo</button>
                        </div>
                    ))}
            </div>

            {/* Modal */}
                {selectedMember !== null && (
                    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40" onClick={() => setSelectedMember(null)}>
                        <div
                            className="bg-[#EDE8DE] rounded-[60px] max-w-3xl w-full p-14 shadow-lg relative mx-4 overflow-y-auto"
                            style={{
                                maxHeight: '80vh',
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute px-2 top-6 right-8 text-4xl font-bold text-orange hover:text-black transition-colors duration-300 cursor-pointer"
                                aria-label="Fechar"
                            >
                                ×
                            </button>
                            <h3 className="text-orange lg:text-2xl text-xl font-bold mb-1 text-left">
                                {responsibles[selectedMember].name.replace(/<br\/>/g, ' ')}
                            </h3>
                            {responsibles[selectedMember].area && (
                                <p className="text-orange lg:text-xl text-lg font-light mb-4 text-left">
                                    Área de atuação: {responsibles[selectedMember].area}
                                </p>
                            )}
                            <p className="text-black lg:text-lg font-light text-left leading-relaxed">
                                {responsibles[selectedMember].resume}
                            </p>
                        </div>
                    </div>
                )}
        </div>
    </section>
  );
}