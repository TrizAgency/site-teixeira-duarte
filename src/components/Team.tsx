'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Team() {
    const teamMembers = [
        {
            name: "Leandro Silva <br/> Teixeira Duarte",
            email: "leandro@teixeiraduarte.adv.br",
            area: "Trabalhista",
            resume: "Advogado com mais de 20 anos de experiência dedicados exclusivamente ao Direito do Trabalho. Especialista pela Pontifícia Universidade Católica de São Paulo (2005), construiu trajetória profissional marcada por atuação estratégica em departamentos jurídicos de grandes organizações, incluindo empresa de referência no setor da saúde e tradicional clube de futebol da capital paulista. Exerceu o cargo de Presidente da 2ª Comissão Disciplinar do Tribunal de Justiça Desportiva da Federação Paulista de Futebol (2017) e integra, na qualidade de Auditor, o Pleno do Tribunal de Justiça Desportiva da Federação Paulista de Basquete e da Federação Paulista de Volleyball. Atualmente, é Presidente da Associação Portuguesa de Desportos (mandato 2025-2028). É sócio responsável pela área trabalhista de escritório de advocacia com atuação nacional, conduzindo processos judiciais de alta complexidade e de expressiva relevância jurídica, social e econômica.",
        },
        {
            name: "Luiz Gustavo <br/> Figueiredo de Abreu",
            email: "luiz.gustavo@teixeiraduarte.adv.br",
            area: "Controladoria jurídica",
            resume: "Advogado com mais de 15 anos de experiência dedicados exclusivamente ao Direito do Trabalho, possui trajetória marcada por atuações estratégicas em departamentos jurídicos de grandes organizações, incluindo empresas de referência no setor de saúde. Graduado em Direito pela Universidade Paulista (2003).",
        },
        {
            name: "Flávia Amarante <br/> Teixeira Duarte",
            email: "flavia@teixeiraduarte.adv.br",
            area: "Direito Penal",
            resume: "Advogada com experiência na área criminal, com passagem por escritórios boutique de renome e atuação em grandes operações e casos de alta complexidade. É graduada em Direito pela Universidade Presbiteriana Mackenzie (2019) e pós-graduanda em Direito e Processo Penal pela Universidade Presbiteriana Mackenzie (2026). Possui curso de extensão em Compliance pela Fundação Getúlio Vargas (2021). É associada ao Instituto de Defesa do Direito de Defesa (IDDD), com atuação no Departamento de Litígio Estratégico, e ao Instituto Brasileiro de Ciências Criminais (IBCCRIM).",
        },
    ];

    const [selectedMember, setSelectedMember] = useState<null | number>(null);

    useEffect(() => {
        document.body.style.overflow = selectedMember !== null ? 'hidden' : 'auto';
    }, [selectedMember]);

    return (
        <section id="equipe" className="lg:pt-36 py-20 bg-green relative">
            <div className="container">
                <h2 className="lg:text-3xl text-2xl text-center font-light text-white">Equipe</h2>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-20 my-12 lg:my-28">
                    {teamMembers.map((member, idx) => (
                        <div key={member.email} className="flex flex-col items-center gap-4">
                            <h3 className="text-beige lg:text-2xl text-xl font-semibold text-center" dangerouslySetInnerHTML={{ __html: member.name }}></h3>
                            <Link href={`mailto:${member.email}`} className="text-orange font-light underline decoration-transparent hover:decoration-orange duration-300">{member.email}</Link>
                            <button onClick={() => setSelectedMember(idx)} className="font-bold py-2 px-3.5 rounded-full bg-orange text-white hover:bg-black/30 transition-all duration-300 cursor-pointer">Ver currículo</button>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-2 w-full px-1 items-center justify-center">
                    <Link href="/equipe" className="text-beige hover:bg-black/30 flex flex-col gap-2 font-light text-2xl pt-2 px-2 transition-all duration-300">
                        Ver todos
                        <div className="h-0.75 bg-orange w-full" />
                    </Link>
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
                                {teamMembers[selectedMember].name.replace(/<br\/>/g, ' ')}
                            </h3>
                            {teamMembers[selectedMember].area && (
                                <p className="text-orange lg:text-xl text-lg font-light mb-4 text-left">
                                    Área de atuação: {teamMembers[selectedMember].area}
                                </p>
                            )}
                            <p className="text-black lg:text-lg text-sm font-light text-justify leading-relaxed">
                                {teamMembers[selectedMember].resume}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}