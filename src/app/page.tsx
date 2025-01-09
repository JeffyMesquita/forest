"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const videos = ["video_sol.mp4", "video_chuva.mp4"];
const dias = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

export default function Home() {
  const temperatura = Math.floor(Math.random() * 10) + 20;
  const [dia, setDia] = useState<string>("");
  const [tempo, setTempo] = useState<string>("");
  const [menuHidden, setMenuHidden] = useState<boolean>(true);
  const [videoSrc, setVideoSrc] = useState<string>(() => {
    const tempoAtual = temperatura > 25 ? 0 : 1;

    return `/img/${videos[tempoAtual]}`;
  });

  useEffect(() => {
    const tempos = ["☀️", "🌧️"];

    // Atualiza dia, temperatura e tempo
    const data = new Date();
    const diaSemana = data.getDay();

    const tempoAtual = temperatura > 25 ? 0 : 1;

    setDia(dias[diaSemana]);

    setTempo(`${tempos[tempoAtual]} ${temperatura + 5}%`);
  }, []);

  useEffect(() => {
    if (temperatura === 0) {
      return;
    } else {
      const tempoAtual = temperatura > 25 ? 0 : 1;

      const videoSource = videos[tempoAtual];

      setVideoSrc(`/img/${videoSource}`);
    }
  }, [temperatura]);

  useEffect(() => {
    // Listener para resize
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuHidden(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="container flex justify-center mt-4 md:justify-start">
        <div className="inline-flex items-center rounded-md bg-verde-900">
          <span className="relative block neon size-2 -left-1"> </span>
          <div className="flex divide-x-2 text-verde-300 divide-verde-800">
            <div className="px-4 py-2 capitalize" id="dia">
              {dia}
            </div>
            <div className="px-4 py-2" id="temperatura">
              {temperatura}°
            </div>
            <div className="px-4 py-2" id="tempo">
              {tempo}
            </div>
          </div>
        </div>
      </div>

      <header className="container flex items-center justify-between gap-8 py-8">
        <a href="#">
          <Image src="./img/forest.svg" alt="Forest" width={120} height={40} />
        </a>

        <nav
          id="mobile-menu"
          className={`z-40 items-center hidden lg:block max-lg:fixed max-lg:w-full max-lg-inset-0 ${
            menuHidden ? "hidden" : ""
          }`}
          onClick={() => setMenuHidden(false)}
        >
          <div className="fixed inset-0 bg-verde-950/40 backdrop-blur-md lg:hidden"></div>

          <ul className="text-white lg:text-xl lg:gap-8 lg:flex lg:flex-wrap max-lg:absolute max-lg:z-50 max-lg:divide-y-2 max-lg:divide-white/10 max-lg:p-8 max-lg:w-full">
            <li className="opacity-0 animate-slide-in animate-1">
              <a
                className="block p-4 lg:hover:underline lg:hover:underline-offset-8 max-lg:hover:bg-white/10 lg:px-0 lg:py-2"
                href="#acomodacoes"
              >
                Acomodações
              </a>
            </li>
            <li className="opacity-0 animate-slide-in animate-2">
              <a
                className="block p-4 lg:hover:underline lg:hover:underline-offset-8 max-lg:hover:bg-white/10 lg:px-0 lg:py-2"
                href="#ventos"
              >
                Eventos
              </a>
            </li>
            <li className="opacity-0 animate-slide-in animate-3">
              <a
                className="block p-4 lg:hover:underline lg:hover:underline-offset-8 max-lg:hover:bg-white/10 lg:px-0 lg:py-2"
                href="#experiencias"
              >
                Experiências
              </a>
            </li>
            <li className="opacity-0 animate-slide-in animate-4">
              <a
                className="block p-4 lg:hover:underline lg:hover:underline-offset-8 max-lg:hover:bg-white/10 lg:px-0 lg:py-2"
                href="#contato"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <button
          id="mobile-button"
          className="flex items-center gap-3 py-1 rounded-full lg:hidden btn"
          onClick={() => setMenuHidden(!menuHidden)}
        >
          Menu
          <span className="h-3 w-4 flex flex-col justify-between *:h-0.5 *:rounded-md *:bg-verde-800">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </header>

      <main className="container">
        <div className="relative px-8 pt-64 pb-8 overflow-hidden text-white rounded-2xl bg-gradient-to-t from-verde-950/80 max-sm:pt-12 max-sm:px-4">
          <video
            id="video"
            className="absolute inset-0 object-cover -z-10 size-full animate-fade-in"
            autoPlay
            muted
            playsInline
            loop
            width="1280"
            height="720"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          <div className="flex flex-col items-start gap-2 p-4 mb-8 sm:flex-row sm:items-center sm:gap-8 sm:py-1 sm:pl-4 sm:pr-1 bg-verde-950/60 rounded-xl sm:rounded-full sm:inline-flex sm:bg-verde-950">
            vagas par dezembro abertas
            <a className="inline-flex items-center gap-2 btn" href="#contato">
              Reserve Hoje
              <Image src="/img/seta.svg" alt="" width={12} height={12} />
            </a>
          </div>

          <h1 className="max-w-screen-sm mb-8 font-serif text-4xl sm:mb-20 sm:text-5xl text-balance">
            Venha Experimentar a vida na Floresta
          </h1>

          <div className="items-end justify-between text-sm sm:flex">
            <p className="max-sm:mb-4">
              Melhores lugares para visitar
              <a
                className="underline decoration-2 underline-offset-4 hover:no-underline"
                href="#"
              >
                2049
              </a>
            </p>

            <div>
              <p className="mb-2 uppercase">Recomendado por</p>
              <p className="flex items-center gap-4">
                <img
                  className="w-28"
                  src="./img/parceiros/wildbeast.svg"
                  alt="WildBeast"
                />
                <span>|</span>
                Revista Nacional
              </p>
            </div>
          </div>
        </div>
      </main>

      <section
        id="acomodadões"
        className="container pt-16 mb-12 sm:mb-16 grid gap-8 lg:grid-cols-[2fr_3fr] radial-gradient"
      >
        <div className="content-end bg-[url('/img/padrao.svg')] bg-no-repeat bg-contain bg-left-bottom">
          <h2 className="mb-8 font-serif text-4xl text-white lg:text-5xl">
            Refúgio Natural
          </h2>
          <ul className="grid gap-4 text-gray-200 sm:text-xl">
            <li className="flex items-center gap-4">
              <span className="w-6 h-0.5 bg-verde-400 inline-block neon"></span>
              Experimente a natureza de perto
            </li>
            <li className="flex items-center gap-4">
              <span className="w-6 h-0.5 bg-verde-400 inline-block neon"></span>
              Conecte-se com a natureza
            </li>
            <li className="flex items-center gap-4">
              <span className="w-6 h-0.5 bg-verde-400 inline-block neon"></span>
              Desconecte-se do digital
            </li>
            <li className="flex items-center gap-4">
              <span className="w-6 h-0.5 bg-verde-400 inline-block neon"></span>
              Observe a vida selvagem
            </li>
            <li className="flex items-center gap-4">
              <span className="w-6 h-0.5 bg-verde-400 inline-block neon"></span>
              Escolha a sua cabine
            </li>
          </ul>
        </div>

        <div className="grid sm:grid-cols-[2fr_1fr] gap-4 sm:gap-8">
          <div className="col-span-full grid *:col-start-1 *:row-start-1">
            <img
              src="./img/casa1.jpg"
              alt="Casa 1"
              className="object-cover w-full sm:h-52 rounded-xl"
            />
            <span className="self-start px-4 py-2 m-2 text-white uppercase rounded-full bg-verde-950/60 text-sm/none justify-self-end">
              Ruby
            </span>
          </div>

          <div className="grid *:col-start-1 *:row-start-1">
            <img
              src="./img/casa2.jpg"
              alt="Casa 2"
              className="object-cover size-full rounded-xl"
            />
            <span className="self-start px-4 py-2 m-2 text-white uppercase rounded-full bg-verde-950/60 text-sm/none justify-self-end">
              Emerald
            </span>
          </div>

          <div className="grid *:col-start-1 *:row-start-1">
            <img
              src="./img/casa3.jpg"
              alt="Casa 3"
              className="object-cover size-full rounded-xl"
            />
            <span className="self-start px-4 py-2 m-2 text-white uppercase rounded-full bg-verde-950/60 text-sm/none justify-self-end">
              Sapphire
            </span>
          </div>
        </div>
      </section>

      <section
        id="eventos"
        className="py-12 mb-12 sm:mb-16 sm:py-16 bg-verde-900"
      >
        <div className="container">
          <p className="mb-4 text-sm tracking-widest text-center uppercase text-verde-200">
            Conecte-se com a natureza
          </p>

          <h2 className="max-w-screen-md mx-auto mb-8 font-serif text-4xl text-center text-white sm:text-6xl text-balance">
            Cada Som, Cada Momento, Uma Nova Descoberta
          </h2>

          <div className="grid gap-4 sm:gap-8 grid-cols-[repeat(3,minmax(300px,1fr))] overflow-x-auto pb-4 snap-x snap-mandatory">
            <div className="grid gap-4 p-6 rounded-xl sm:p-8 bg-verde-800 snap-center">
              <h3 className="font-serif text-2xl font-bold text-verde-300">
                Lua Nova
              </h3>
              <div className="text-white">
                <p className="font-serif text-5xl">23</p>
                <p className="text-xl">Março 2049</p>
              </div>

              <p className="text-gray-300 text-balance">
                Melhor período para observação astronômica. O céu estará claro e
                as estrelas visíveis.
              </p>

              <a href="#contato" className="self-end btn justify-self-start">
                Reservar 23/03
              </a>
            </div>

            <div className="grid gap-4 p-6 rounded-xl sm:p-8 bg-verde-800 snap-center">
              <h3 className="font-serif text-2xl font-bold text-verde-300">
                Aurora Boreal
              </h3>
              <div className="text-white">
                <p className="font-serif text-5xl">15</p>
                <p className="text-xl">Abril 2049</p>
              </div>

              <p className="text-gray-300 text-balance">
                Melhor período para observação da Aurora Boreal. O céu estará
                iluminado pelas estrelas.
              </p>

              <a href="#contato" className="self-end btn justify-self-start">
                Reservar 15/04
              </a>
            </div>

            <div className="grid gap-4 p-6 rounded-xl sm:p-8 bg-verde-800 snap-center">
              <h3 className="font-serif text-2xl font-bold text-verde-300">
                Chuva de Meteoros
              </h3>
              <div className="text-white">
                <p className="font-serif text-5xl">18</p>
                <p className="text-xl">Agosto 2049</p>
              </div>

              <p className="text-gray-300 text-balance">
                Melhor período para observação da Chuva de Meteoros. O céu
                estará claro e as estrelas visíveis.
              </p>

              <a href="#contato" className="self-end btn justify-self-start">
                Reservar 18/08
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experiencias"
        className="container grid gap-8 mb-12 sm:mb-16 md:grid-cols-2"
      >
        <div className="p-6 bg-verde-900 sm:p-8 rounded-xl">
          <p className="mb-4 text-sm tracking-widest uppercase text-verde-200">
            Experiências Exclusivas
          </p>
          <h2 className="mb-8 font-serif text-3xl text-center text-white capitalize text-balance sm:text-4xl lg:text-5xl">
            Conheça a vida selvagem, explore a floresta e descubra novas
            aventuras.
          </h2>

          <h3 className="text-white text-xl flex items-center gap-4 before:h-0.5 before:w-6 before:bg-verde-400 before:neon hover:before:w-10 before:transition-[width]">
            Observação Noturna
          </h3>
          <p className="pl-10 mb-8 text-gray-400 text-balance">
            Explore a vida selvagem em seu habitat natural sob as estrelas.
          </p>

          <h3 className="text-white text-xl flex items-center gap-4 before:h-0.5 before:w-6 before:bg-verde-400 before:neon hover:before:w-10 before:transition-[width]">
            Vida Selvagem
          </h3>
          <p className="pl-10 mb-8 text-gray-400 text-balance">
            Observe a vida selvagem em seu habitat natural.
          </p>

          <h3 className="text-white text-xl flex items-center gap-4 before:h-0.5 before:w-6 before:bg-verde-400 before:neon hover:before:w-10 before:transition-[width]">
            Canoagem
          </h3>
          <p className="pl-10 mb-8 text-gray-400 text-balance">
            Conquiste novos horizontes com nossa equipe especializada.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative overflow-hidden rounded-xl group">
            <img
              src="./img/canoagem.jpg"
              alt="Canoagem"
              className="object-cover transition-transform duration-300 size-full group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end p-4 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-verde-950/80 group-hover:opacity-100">
              <span className="text-white">Canoagem</span>
            </div>
          </div>

          <div className="relative row-span-2 overflow-hidden rounded-xl group">
            <img
              src="./img/vida-selvagem.jpg"
              alt="Vida Selvagem"
              className="object-cover transition-transform duration-300 size-full group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end p-4 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-verde-950/80 group-hover:opacity-100">
              <span className="text-white"> Vida Selvagem </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl group">
            <img
              src="./img/observacao-noturna.jpg"
              alt="Observação Noturna"
              className="object-cover transition-transform duration-300 size-full group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end p-4 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-verde-950/80 group-hover:opacity-100">
              <span className="text-white"> Observação Noturna </span>
            </div>
          </div>
        </div>
      </section>

      <section className="container bg-[url('../../public/img/padrao.svg')] bg-no-repeat bg-contain bg-center mb-12 sm:mb-16 sm:py-16">
        <p className="mb-4 text-sm tracking-widest text-center uppercase text-verde-200">
          Ciclo Natural
        </p>

        <h2 className="max-w-screen-md mx-auto mb-8 font-serif text-4xl text-center text-white sm:text-6xl text-balance">
          Ritmo da Floresta
        </h2>

        <div className="flex flex-col gap-4 md:flex-row sm:gap-8">
          <div className="grid flex-1 gap-4 p-6 transition-transform bg-verde-900 rounded-xl sm:p-8 sm:hover:-translate-y-2">
            <div className="flex items-center justify-center rounded-full bg-verde-400 size-10 neon">
              <img src="./img/manha.svg" alt="" />
            </div>
            <h3 className="font-serif text-2xl text-white">Amanhecer</h3>
            <p className="text-gray-400">
              Desperte com o canto dos pássaros e participe das nossas
              caminhadas ao ar livre.
            </p>
            <span className="text-verde-300"> 05:40 - 07:00 </span>
          </div>

          <div className="grid flex-1 gap-4 p-6 transition-transform sm:hover:-translate-y-2 md:translate-y-12 bg-verde-900 rounded-xl sm:p-8 md:hover:translate-y-10">
            <div className="flex items-center justify-center rounded-full bg-verde-400 size-10 neon">
              <img src="./img/dia.svg" alt="" />
            </div>
            <h3 className="font-serif text-2xl text-white">Meio-dia</h3>
            <p className="text-gray-400">
              Explore nossas trilhas sombreadas e desfrute de um piquenique
              gourmet na natureza.
            </p>
            <span className="text-verde-300"> 12:00 - 14:00 </span>
          </div>

          <div className="grid flex-1 gap-4 p-6 transition-transform bg-verde-900 rounded-xl sm:p-8 sm:hover:-translate-y-2">
            <div className="flex items-center justify-center rounded-full bg-verde-400 size-10 neon">
              <img src="./img/noite.svg" alt="" />
            </div>
            <h3 className="font-serif text-2xl text-white">Anoitecer</h3>
            <p className="text-gray-400">
              Termine seu dia com a nossa sessão de observação de estrelas.
            </p>
            <span className="text-verde-300"> 19:00 - 21:00 </span>
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="container grid gap-8 mb-12 sm:mb-16 lg:grid-cols-2"
      >
        <div className="grid gap-4">
          <h1 className="mb-4 font-serif text-4xl text-verde-300">
            Nosso Contato
          </h1>

          <p className="mb-8 text-gray-200 text-balance">
            Tem interesse em passar uma temporada na Forest? Entre em contato
            com a gente por telefone ou e-mail.
          </p>

          <div>
            <div>
              <span className="h-0.5 w-6 bg-verde-400 neon inline-block"></span>
              <h2 className="mb-2 font-serif text-2xl text-verde-300">Base</h2>
              <p className="text-gray-200">
                Rua da Mata, 123 - Floresta Nacional - RJ
              </p>
            </div>

            <div>
              <span className="h-0.5 w-6 bg-verde-400 neon inline-block"></span>
              <h2 className="mb-2 font-serif text-2xl text-verde-300">Email</h2>
              <p className="text-gray-200">contato@forest.com</p>
            </div>

            <div>
              <span className="h-0.5 w-6 bg-verde-400 neon inline-block"></span>
              <h2 className="mb-2 font-serif text-2xl text-verde-300">
                Telefone
              </h2>
              <p className="text-gray-200">21 99999-9999</p>
            </div>
          </div>
        </div>

        <form
          className="grid gap-4 p-4 shadow-2xl rounded-xl bg-verde-900 lg:p-8"
          action=""
        >
          <div className="grid gap-1">
            <label htmlFor="nome" className="text-white">
              Nome
            </label>
            <input type="text" id="nome" name="nome" className="input" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1">
              <label htmlFor="email" className="text-white">
                E-mail
              </label>
              <input type="text" id="email" name="email" className="input" />
            </div>

            <div className="grid gap-1">
              <label htmlFor="telefone" className="text-white">
                Telefone
              </label>
              <input
                id="telefone"
                name="telefone"
                className="input"
                placeholder="(99) 99999-9999"
              />
            </div>
          </div>

          <div className="grid gap-1">
            <label htmlFor="telefone" className="text-white">
              Telefone
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={5}
              className="resize-none input"
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-block font-semibold place-self-start btn"
          >
            Enviar E-mail
          </button>
        </form>
      </section>

      <section className="mb-12 container sm:mb-16">
        <ul className="flex flex-col items-center py-4 max-sm:divide-y-2 divide-verde-900 *:p-4 sm:flex-row sm:gap-8 *:*:max-h-8 sm:border-b-2 sm:border-t-2 sm:border-verde-900 sm:py-8 sm:justify-center">
          <li>
            <img src="./img/parceiros/caravan.svg" alt="Caravan" />
          </li>
          <li>
            <img src="./img/parceiros/dogs.svg" alt="Dogs" />
          </li>
          <li>
            <img src="./img/parceiros/wildbeast.svg" alt="Wildbeast" />
          </li>
          <li>
            <img src="./img/parceiros/lescone.svg" alt="Lescone" />
          </li>
          <li>
            <img src="./img/parceiros/surfbot.svg" alt="Surfbot" />
          </li>
        </ul>
      </section>

      <footer content="container" className="pb-8">
        <div className="grid gap-8 p-6 mb-8 bg-verde-900 sm:p-12 rounded-2xl md:grid-cols-2">
          <div className="flex gap-12 max-sm:flex-col max-sm:gap-4">
            <div>
              <h3 className="mb-4 font-serif text-xl text-white">Endereço</h3>
              <p className="text-gray-400">
                Rua da Mata, 123
                <br />
                Floresta Nacional <br />
                Rio de Janeiro, RJ
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-serif text-xl text-white">Contato</h3>
              <p className="text-gray-400">
                contato@forest.com
                <br />
                +55 21 99999-9999
              </p>
            </div>
          </div>

          <div className="md:justify-self-end">
            <img className="mb-4" src="./img/forest.svg" alt="Forest" />
            <p className="text-gray-400">Conecte-se com a natureza</p>
          </div>
        </div>

        <article className="flex items-center justify-between gap-8 text-sm text-gray-400 max-sm:flex-col-reverse">
          <p>&copy; 2049 Forest. Todos os direitos reservados.</p>

          <ul className="flex justify-center gap-4 mt-4">
            <li>
              <a
                href="#"
                className="hover:underline hover:underline-offset-8 hover:text-verde-300"
              >
                Termos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:underline-offset-8 hover:text-verde-300"
              >
                Privacidade
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:underline-offset-8 hover:text-verde-300"
              >
                Cookies
              </a>
            </li>
          </ul>
        </article>
      </footer>
    </>
  );
}
