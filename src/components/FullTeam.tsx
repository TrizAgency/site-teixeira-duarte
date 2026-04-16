"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FullTeam() {
    const fullTeam = [
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
        {
            name: "Amanda Neves <br/> de Souza",
            email: "amanda@teixeiraduarte.adv.br",
            area: "Trabalhista",
            resume: "Advogada, graduada em Direito pela Universidade Paulista (2023) e pós-graduada em Direito e Processo do Trabalho pela Pontifícia Universidade Católica de São Paulo (2025). Integra, como membro efetiva, a Comissão Especial de Acidentes do Trabalho, a Comissão Especial da Advocacia Trabalhista e a Comissão Especial de Compliance, todas da OAB/SP.",
        },
        {
            name: "Ana Paula <br/> Guimarães Mesquita",
            email: "ana.paula@teixeiraduarte.adv.br",
            area: "Trabalhista",
            resume: "Advogada com mais de 15 anos de experiência. Graduada em Direito pela Universidade Cruzeiro do Sul (2008), é pós-graduada em Direito e Processo Civil (2013) e pós-graduanda em Direito e Processo do Trabalho (2025-2026), ambas especializações pela Escola Paulista de Direito.",
        },
        {
            name: "Caio César Furlan <br/> Naville",
            email: "caio@teixeiraduarte.adv.br",
            area: "Trabalhista e Digital",
            resume: "Advogado, graduado em Direito pela Universidade Municipal de São Caetano do Sul (2022) e pós-graduado em Direito e Processo do Trabalho pela Pontifícia Universidade Católica de São Paulo (2024). Possui formação complementar em normas anticorrupção, antissuborno e compliance pela Fundação Getúlio Vargas (2020). Curso de extensão em Direito Digital e LGPD pelo Instituto de Direito Contemporâneo (2020). Integra a Comissão de Direito Internacional Público da OAB – Subseção de São Caetano do Sul.",
        },
        {
            name: "Felipe Alves <br/> de Carvalho",
            email: "felipe@teixeiraduarte.adv.br",
            area: "Trabalhista e Digital",
            resume: "Advogado, graduado em Direito pela Universidade Presbiteriana Mackenzie (2014) e pós-graduado em Direito Digital e Tecnologia da Informação pela Escola Politécnica da Universidade de São Paulo (2021). Possui curso de extensão em Direito do Trabalho pela Faculdade Getúlio Vargas (2024).",
        },
        {
            name: "Marcelo Trevisan <br/> Góes",
            email: "marcelo@teixeiraduarte.adv.br",
            area: "Trabalhista e Desportivo",
            resume: "Advogado, graduado em Direito pela Universidade Presbiteriana Mackenzie (1990), sócio benemérito do Instituto Brasileiro de Direito Desportivo e coautor do livro Direito Aplicado à Gestão do Esporte (São Paulo: Trevisan Editora, 2013). Atuante em Tribunais Desportivos desde 1991, foi conferencista do 1º Congresso Brasileiro de Justiça e Direito Desportivo, realizado em Curitiba/PR (2003), bem como membro do Corpo Docente da Escola Profissionalizante de Administração Esportiva, administrada pelo Sindicato das Associações de Futebol Profissional do Estado de São Paulo (2001/2002). Integrou o Corpo Docente do Curso Superior Tecnológico de Gestão de Esportes e Clubes Esportivos da Faculdade Drummond, onde lecionou a disciplina “Conceitos de Direito Desportivo” (2005). Atua, ainda, como Auditor do Tribunal de Justiça Desportiva da Federação Paulista de Volleyball e da Liga Nacional de Futsal, além de exercer a função de Procurador do Tribunal de Justiça Desportiva do Futebol Interno do Esporte Clube Pinheiros.",
        },
        {
            name: "Paulo Victor Rigueiro <br/> Parron",
            email: "paulo@teixeiraduarte.adv.br",
            area: "Trabalhista e Desportivo",
            resume: "Advogado, graduado em Direito pela Universidade Presbiteriana Mackenzie (2013) e pós-graduado em Direito Processual Civil pela Pontifícia Universidade Católica de São Paulo (2016). Possui curso de extensão em Direito do Trabalho pela Faculdade Getúlio Vargas (2024). Integra, na qualidade de Auditor, o Pleno do Tribunal de Justiça Desportiva da Liga Nacional de Futsal e da Federação Paulista de Volleyball.",
        },
        {
            name: "Thaís Rocha <br/> Martini",
            email: "thais@teixeiraduarte.adv.br",
            area: "Controladoria jurídica",
            resume: "Advogada, graduada em Direito pela Universidade Presbiteriana Mackenzie (2011).",
        },
        {
            name: "Vinicius Bretas <br/> Ferreira",
            email: "vinicius@teixeiraduarte.adv.br",
            area: "Trabalhista",
            resume: "Advogado, graduado em Direito pela Universidade Paulista (2002), com formação complementar em Direito e Processo do Trabalho (2008) e em Processo Civil (2016), ambas na Escola Paulista de Direito.",
        },
    ];
    const [selectedMember, setSelectedMember] = useState<null | number>(null);

    useEffect(() => {
        document.body.style.overflow = selectedMember !== null ? 'hidden' : 'auto';
    }, [selectedMember]);

    return (
        <section className="lg:py-36 pt-28 pb-20">
            <div className="container">
                <h1 className="lg:text-3xl text-2xl text-center font-light lg:mb-20 mb-14 text-green">Equipe</h1>
                <div className="flex flex-wrap gap-20 items-center justify-center">
                    {fullTeam.map((member, idx) => (
                        <div key={member.email || idx} className="flex flex-col items-center gap-4 max-w-xs w-full">
                            <h2 className="text-green lg:text-2xl text-xl font-semibold text-center" dangerouslySetInnerHTML={{ __html: member.name }}></h2>
                            <p className="text-green text-lg my-1 text-center">{member.area}</p>
                            {member.email && (
                                <Link href={`mailto:${member.email}`} className="text-green font-light underline decoration-transparent hover:decoration-orange transition-all duration-300">{member.email}</Link>
                            )}
                            <button onClick={() => setSelectedMember(idx)} className="font-bold py-2 px-3.5 rounded-full bg-orange text-white hover:bg-black/30 transition-all duration-300 cursor-pointer mt-2">Ver currículo</button>
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
                                // For mobile, ensure modal is scrollable and fits the viewport
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
                                {fullTeam[selectedMember].name.replace(/<br\/>/g, ' ')}
                            </h3>
                            {fullTeam[selectedMember].area && (
                                <p className="text-orange lg:text-xl text-lg font-light mb-4 text-left">
                                    Área de atuação: {fullTeam[selectedMember].area}
                                </p>
                            )}
                            <p className="text-black lg:text-lg font-light text-justify leading-relaxed">
                                {fullTeam[selectedMember].resume}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}