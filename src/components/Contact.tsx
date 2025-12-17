'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "3acefcf3-9146-4fc3-bbf3-18734175ff8a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const responseEmail = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });

    const resultEmail = await responseEmail.json();

    if (resultEmail.success) {
      setLoading(false);
      console.log(resultEmail);
      setSuccess(true);
    } else {
      setLoading(false);
      console.log(resultEmail);
      setError(true);
    }
  }
  
  return (
    <section className="lg:py-36 py-20 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 container" id="contato">
      <div className="text-orange lg:text-3xl text-2xl font-light max-w-100">
        <strong>Entre em contato</strong> com nossa equipe e fale diretamente com um advogado <strong>especializado</strong>.
      </div>

      <div className="relative flex justify-center items-center">
        {error && <p className="text-center px-12 text-green text-lg 2xl:text-2xl">Ocorreu um erro ao enviar sua mensagem. <br /> Por favor, tente novamente mais tarde.</p>}
        {success && <p className="text-center px-12 text-green text-lg 2xl:text-2xl">Obrigado! <br /> Seus dados foram enviados com sucesso, em breve entraremos em contato.</p>}
        {!error && !success && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 min-w-75 lg:min-w-100 2xl:min-w-112.5 font-light">
            <input type="hidden" name="subject" value="Novo lead recebido" />
            <input type="hidden" name="from_name" value="teixeiraduarte.adv.br" />
            <input required type="text" name="nome" placeholder="Nome" className="bg-white rounded-full px-6 py-3 outline-green placeholder:text-green" minLength={2} maxLength={50} />
            <input required type="tel" name="telefone" placeholder="Telefone" className="bg-white rounded-full px-6 py-3 outline-green placeholder:text-green" minLength={8} maxLength={20} />
            <input required type="email" name="email" placeholder="E-mail" className="bg-white rounded-full px-6 py-3 outline-green placeholder:text-green" maxLength={50} />
            <textarea required name="mensagem" placeholder="Mensagem" rows={6} className="bg-white rounded-4xl px-5 pt-4 resize-none outline-green placeholder:text-green" maxLength={1000} />
            <button 
              disabled={loading} 
              type="submit" 
              className="bg-green rounded-full px-12 py-2 self-center cursor-pointer text-white font-bold hover:bg-orange hover:text-white transition-all duration-300 outline-green disabled:opacity-50 disabled:cursor-default disabled:pointer-events-none"
            >
             {loading ? 'Enviando...' : 'Enviar'}
            </button>
            <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}} />
          </form>
          )}
      </div>
    </section>
  );
}