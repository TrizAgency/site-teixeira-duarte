import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative z-30 lg:h-screen h-[80svh] w-screen flex items-center justify-center overflow-hidden bg-green">
      <h1 className="sr-only">Teixeira Duarte Advogados</h1>
      <Image src="/banner-1.jpg" alt="Teixeira Duarte" className="rounded-bl-[140px] lg:rounded-bl-[210px] object-cover" priority quality={100} fill />
      <div className="absolute inset-0 bg-black/60 rounded-bl-[140px] lg:rounded-bl-[210px]" />
      <div className="container relative flex flex-col lg:flex-row gap-10 justify-evenly items-center">
        <Image src="/simbolo-teixeira-duarte.svg" alt="Símbolo Teixeira Duarte" className="scale-60 lg:scale-100" width={128} height={173} />

        <p className="text-white lg:text-3xl text-xl text-center lg:text-left max-w-96">
            Atuação <strong>especializada</strong> para quem busca defesa <strong>técnica</strong>, escuta ativa e resultados <strong>concretos</strong>.
        </p>
      </div>
    </section>
  );
}