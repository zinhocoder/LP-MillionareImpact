"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ChevronRight, Award, Target, Users, BarChart3, Play, ArrowRight, Lock } from "lucide-react"

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você adicionaria a lógica para enviar os dados para seu backend/CRM
    setFormSubmitted(true)
  }

const redirectToWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault()
    const message = encodeURIComponent(
      "Olá! Acompanhei seu trabalho e estou pronto para uma sessão estratégica com foco em transformar minha operação em uma máquina de vendas com clareza, execução e crescimento real.",
    )
    window.open(`https://wa.me/554731703648?text=${message}`, "_blank")
  }

  return (
  <div className="min-h-screen bg-black text-white">
    {/* Top Banner */}
    <div className="w-full bg-gradient-to-r from-amber-600 to-amber-700 py-6 px-4 text-center text-sm md:text-base font-medium tracking-wide">
      DIAGNÓSTICO ESTRATÉGICO PARA EMPRESÁRIOS QUE QUEREM ALAVANCAR SEUS LUCROS COM MÉTODO E EQUIPE ALINHADA
    </div>



      {/* Header/Logo Section */}
      <header className="container mx-auto pt-6 px-4 relative">
        {/* Efeito dourado para destacar a logo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-amber-400/30 rounded-full blur-xl"></div>

        <div className="flex justify-center md:justify-start relative z-10">
          <div className="flex items-center">
            <div className="relative w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-600/20"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-300/40 via-transparent to-transparent"></div>
              <span className="text-black text-2xl font-extrabold relative z-10 tracking-tight">IM</span>
              <div className="absolute -inset-0.5 rounded-full border-2 border-amber-400/70"></div>
              <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-amber-400/40 rounded-full blur-md"></div>
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-amber-400/40 rounded-full blur-md"></div>
            </div>
            <div className="ml-3">
              <span className="text-amber-400 text-xl font-bold tracking-wider">IMPACTO</span>
              <span className="text-white text-xl ml-1 font-light">MILIONÁRIO</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
<section className="relative overflow-hidden py-16 md:py-24">
  {/* Background Elements */}
  <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
    <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-amber-600/10 via-amber-700/5 to-transparent"></div>
    <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 mix-blend-overlay">
      <Image src="/gold-texture.png" alt="" fill className="object-cover" />
    </div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="md:flex items-center">
      <div className="md:w-1/2 z-10 relative">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold py-2 px-4 inline-block mb-6 rounded shadow-md">
          JOHN | IMPACTO MILIONÁRIO
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Descubra como alavancar o faturamento da sua empresa em até 30 dias com <span className="text-amber-500">estratégia e execução real!</span>
        </h1>

        <p className="text-gray-300 mb-6 text-lg">
          Esqueça achismo. Aqui você vai aplicar método, clareza e foco no que realmente alavanca os lucros.
        </p>

        <p className="text-gray-300 mb-8 text-lg">
          Mentoria comercial para empresários B2B que querem sair do esforço invisível e transformar equipe, oferta e operação em lucro previsível, mês após mês.
        </p>

        {/* Pilares destacados */}
        <div className="mb-8 space-y-3">
          <div className="flex items-start">
            <span className="mr-2 mt-1 w-2 h-2 rounded-full bg-amber-500"></span>
            <p className="text-gray-100 text-lg"><strong className="text-amber-500">Pilar 1 –</strong> Venda Direta</p>
          </div>
          <div className="flex items-start">
            <span className="mr-2 mt-1 w-2 h-2 rounded-full bg-amber-500"></span>
            <p className="text-gray-100 text-lg"><strong className="text-amber-500">Pilar 2 –</strong> Pessoas e Performance</p>
          </div>
          <div className="flex items-start">
            <span className="mr-2 mt-1 w-2 h-2 rounded-full bg-amber-500"></span>
            <p className="text-gray-100 text-lg"><strong className="text-amber-500">Pilar 3 –</strong> Estrutura</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="relative group inline-block w-full md:w-auto text-center md:text-left">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded opacity-70 group-hover:opacity-100 blur-sm transition duration-300"></div>
          <Link
            href="#agendar"
            className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 px-8 rounded inline-flex items-center justify-center transition-all duration-300 shadow-lg"
            onClick={redirectToWhatsApp}
          >
            QUERO AGENDAR
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="md:w-1/2 relative mt-12 md:mt-0">
        <div className="relative h-[500px] md:h-[650px] mx-auto max-w-md md:max-w-none md:ml-8">
          {/* Gold highlight effect */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-amber-600/30 via-amber-500/20 to-amber-400/10 rounded-lg blur-xl z-0"></div>
          <div className="absolute -inset-0.5 bg-gradient-to-tr from-amber-600/40 to-amber-400/20 rounded-lg z-0"></div>

          {/* Image container with reduced opacity overlay */}
          <div className="relative h-full w-full rounded-lg overflow-hidden shadow-2xl border border-amber-500/30 z-10">
            <Image
              src="/hero-image-1.png"
              alt="Impacto Milionário"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Elegant Divider */}
<div className="container mx-auto px-4 my-8">
  <div className="flex items-center justify-center">
    <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent w-full"></div>
    <div className="mx-4">
      <div className="w-3 h-3 bg-amber-500 transform rotate-45"></div>
    </div>
    <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent w-full"></div>
  </div>
</div>


     {/* For Who Section */}
<section className="py-16 bg-zinc-950 relative">
  {/* Efeito dourado - Padrão de linhas diagonais */}
  <div className="absolute inset-0 opacity-10">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, #E9B949 0, #E9B949 1px, transparent 1px, transparent 10px)",
        backgroundSize: "20px 20px",
      }}
    ></div>
    <div className="absolute inset-0 bg-zinc-950/80"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
        O <span className="text-amber-500">Diagnóstico Estratégico</span> é para empresários que:
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* CARD 1 */}
      <div className="bg-gradient-to-b from-zinc-900 to-black rounded-xl overflow-hidden shadow-xl border border-zinc-800 group hover:border-amber-500/30 transition-all duration-300">
        <div className="relative h-[380px] sm:h-[420px]">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
          <Image
            src="/hero-image-1.png"
            alt="Empresários insatisfeitos"
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 p-5 sm:p-6 z-20 w-full text-center text-white space-y-3">
            <h3 className="text-lg sm:text-xl font-bold leading-snug">
              Estão crescendo, <span className="text-amber-500">mas sabem que podem muito mais</span>
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Já faturam, têm operação, mas sentem que estão longe do potencial máximo. Falta clareza sobre o que ajustar para escalar com lucro.
            </p>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-gradient-to-b from-zinc-900 to-black rounded-xl overflow-hidden shadow-xl border border-zinc-800 group hover:border-amber-500/30 transition-all duration-300">
        <div className="relative h-[380px] sm:h-[420px]">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
          <Image
            src="/hero-image-2.png"
            alt="Empresários que querem trabalhar menos"
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 p-5 sm:p-6 z-20 w-full text-center text-white space-y-3">
            <h3 className="text-lg sm:text-xl font-bold leading-snug">
              Querem parar de <span className="text-amber-500">apagar incêndios e estruturar de verdade</span>
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Cansaram de operar no modo reativo. Buscam organizar processos, time e estratégia para trabalhar menos e lucrar mais com previsibilidade.
            </p>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-gradient-to-b from-zinc-900 to-black rounded-xl overflow-hidden shadow-xl border border-zinc-800 group hover:border-amber-500/30 transition-all duration-300">
        <div className="relative h-[380px] sm:h-[420px]">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
          <Image
            src="/hero-image-3.png"
            alt="Empresários com dores de cabeça"
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 p-5 sm:p-6 z-20 w-full text-center text-white space-y-3">
            <h3 className="text-lg sm:text-xl font-bold leading-snug">
              Estão sobrecarregados com um <span className="text-amber-500">time desmotivado</span>
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Lideram equipes que não performam como deveriam. Precisam destravar o engajamento do time e alinhar todos com metas claras e executáveis.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Botão */}
    <div className="mt-16 text-center">
      <div className="relative group inline-block">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl opacity-70 group-hover:opacity-100 blur-sm transition duration-300"></div>
        <Link
          href="#agendar"
          className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-5 px-10 sm:py-6 sm:px-14 rounded-xl inline-flex items-center text-lg sm:text-xl transition-all duration-300 shadow-lg"
          onClick={redirectToWhatsApp}
        >
          QUERO AGENDAR
          <ChevronRight className="ml-3 h-6 w-6 sm:h-7 sm:w-7" />
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* VSL Section - New */}
<section id="aula-gratuita" className="py-20 bg-black relative">
  {/* Efeito dourado adicional */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/5 to-transparent"></div>
    <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-bl from-amber-500/5 to-transparent"></div>
  </div>
  {/* Efeito dourado - Círculos radiais */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <div className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold py-5 px-12 rounded-full shadow-lg mb-6">
        EXCLUSIVO
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-amber-500">Aula Gratuita:</span> <span>Como alavancar seus lucros em até 30 dias</span>
      </h2>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-amber-500">com o Método Impacto Milionário</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Para empresários que estão cansados de tentar de tudo e não ver lucro:
      </p>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        conheça o método que transforma operação confusa em estrutura <strong>lucrativa e escalável.</strong>
      </p>
    </div>

    <div className="max-w-5xl mx-auto">
      <div className="bg-gradient-to-b from-zinc-900 to-black rounded-xl overflow-hidden shadow-2xl border border-zinc-800">
        {/* Vídeo responsivo */}
        <div className="relative w-full pt-[56.25%] bg-zinc-800 rounded-t-xl overflow-hidden">
          {/* Overlay bloqueado */}
          {!formSubmitted && (
            <>
              <div className="absolute inset-0 z-30 bg-black bg-opacity-80 backdrop-blur-xl flex flex-col items-center justify-center p-6">
                <Lock className="h-16 w-16 text-amber-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-center">Esta aula exclusiva está bloqueada</h3>
                <p className="text-gray-300 text-center mb-6 max-w-md">
                  Preencha o formulário abaixo para ter acesso imediato a esta aula gratuita que vai transformar seu
                  time de vendas
                </p>
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="h-8 w-8 text-black fill-current" />
                </div>
              </div>
            </>
          )}

          {/* Vídeo liberado com autoplay */}
          {formSubmitted && (
            <video
              src="/videos/aulagratuitapreview.mp4"
              className="absolute inset-0 w-full h-full"
              autoPlay
              controls
              muted
              playsInline
              preload="metadata"
            />
          )}
        </div>

        {/* Formulário visível até liberação */}
        {!formSubmitted && (
          <div className="p-8 bg-gradient-to-b from-zinc-900/50 to-black">
            <h3 className="text-xl font-bold mb-6 text-center">
              Preencha seus dados para <span className="text-amber-500">liberar o acesso</span>
            </h3>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nome Completo*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    E-mail*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Telefone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Nome da sua empresa"
                  />
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 px-10 rounded inline-flex items-center transition-all duration-300 shadow-lg"
                >
                  QUERO ACESSO À AULA GRATUITA
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  </div>
</section>


    {/* Results Section */}
<section className="py-16 bg-zinc-950 relative">
  {/* Efeito dourado - Ondas */}
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          "linear-gradient(0deg, transparent 0%, transparent 49%, #E9B949 50%, #E9B949 51%, transparent 52%, transparent 100%)",
        backgroundSize: "100% 20px",
      }}
    ></div>
    <div className="absolute inset-0 bg-zinc-950/90"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        <span className="text-amber-500">Resultados</span> de empresários que já aplicaram o
      </h2>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        <span className="text-amber-500">Método Impacto Milionário</span> e dobraram seus lucros
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-gradient-to-br from-zinc-900 to-black rounded-xl overflow-hidden shadow-xl border border-zinc-800 group hover:border-amber-500/30 transition-all duration-300">
        <div className="relative">
          <video
            src="/videos/depoimento1.mp4"
            className="w-full h-full object-contain"
            controls
            preload="metadata"
          ></video>
          <div className="absolute bottom-0 left-0 right-0 p-6 z-30 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-sm text-amber-400 mt-2">Gabrielly - Bella Cor</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-gradient-to-br from-zinc-900 to-black rounded-xl overflow-hidden shadow-xl border border-zinc-800 group hover:border-amber-500/30 transition-all duration-300">
        <div className="relative">
          <video
            src="/videos/depoimento2.mp4"
            className="w-full h-full object-contain"
            controls
            preload="metadata"
          ></video>
          <div className="absolute bottom-0 left-0 right-0 p-6 z-30 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-sm text-amber-400 mt-2">Francieli - Lunária BR</p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
<div className="bg-gradient-to-br from-zinc-900 to-black rounded-xl overflow-hidden shadow-xl border border-zinc-800 group hover:border-amber-500/30 transition-all duration-300">
  <div className="relative">
    <video
      src="/videos/depoimento3.mp4"
      className="w-full h-full object-contain"
      controls
      preload="metadata"
    ></video>
    <div className="absolute bottom-0 left-0 right-0 p-6 z-30 bg-gradient-to-t from-black/80 to-transparent">
      <p className="text-sm text-amber-400 mt-2">Victor - Sul Seguros</p>
    </div>
  </div>
</div>
</div>

{/* BOTÃO CTA CENTRALIZADO */}
<div className="mt-12 flex justify-center">
  <div className="relative group inline-block">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded opacity-70 group-hover:opacity-100 blur-sm transition duration-300"></div>
    <Link
      href="#agendar"
      className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 px-10 rounded inline-flex items-center transition-all duration-300 shadow-lg"
      onClick={redirectToWhatsApp}
    >
      QUERO AGENDAR MEU DIAGNÓSTICO ESTRATÉGICO
      <ArrowRight className="ml-2 h-5 w-5" />
    </Link>
  </div>
</div>
</div>
</section>



      {/* How It Works Section - Improved */}
      <section className="py-20 relative overflow-hidden">
        {/* Background with gold texture and gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-amber-600 to-amber-700"></div>
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <div className="absolute inset-0 opacity-30">
            <Image src="/hero-image-1.png" alt="" fill className="object-cover object-top" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-amber-700/80 to-amber-600/80"></div>
        </div>

       {/* Decorative elements */}
<div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

<div className="container mx-auto px-4 relative z-10">
  <div className="text-center mb-16">
    <div className="inline-block bg-black/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full shadow-lg mb-6">
      METODOLOGIA EXCLUSIVA
    </div>

    {/* Títulos com espaçamento reduzido */}
    <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
      COMO FUNCIONA A <span className="text-white drop-shadow-md">SESSÃO ESTRATÉGICA</span>?
    </h2>
    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
      DO <span className="text-white drop-shadow-md">MÉTODO IMPACTO MILIONÁRIO</span>?
    </h2>

    <div className="w-24 h-1 bg-black mx-auto mb-6"></div>

    {/* Parágrafos sem destaque */}
    <p className="text-black text-xl max-w-3xl mx-auto font-medium mb-4">
      Em uma sessão individual de 1 hora, você terá acesso direto à minha experiência prática, onde vamos alinhar os pilares do seu negócio para gerar lucro real, estrutura sólida e <strong>ações de alta performance.</strong>
    </p>

    <p className="text-black text-xl max-w-3xl mx-auto font-medium">
      Essa sessão é o primeiro passo para empresários que querem sair do modo operacional. É hora de assumir o comando de um <strong>negócio lucrativo e escalável.</strong>
    </p>
  </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line between steps */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-black/20 -translate-y-1/2 hidden md:block"></div>

            <div className="bg-black/10 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-white/20 hover:border-white/40 transition-all duration-300 relative z-10">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-black text-amber-500 rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-amber-500">
                1
              </div>
              <div className="mt-6 text-center mb-6">
                <h3 className="font-bold text-2xl text-black mb-2">Diagnóstico Estratégico</h3>
                <div className="w-12 h-1 bg-amber-500 mx-auto"></div>
              </div>
              <p className="text-black text-lg">
                Analisamos com profundidade onde estão os gargalos, travas e lucros ocultos da sua operação. É aqui que você descobre por que está deixando dinheiro na mesa e o que precisa mudar agora.
              </p>
            </div>

            <div className="bg-black/10 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-white/20 hover:border-white/40 transition-all duration-300 relative z-10 mt-16">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-black text-amber-500 rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-amber-500">
                2
              </div>
              <div className="mt-6 text-center mb-6">
                <h3 className="font-bold text-2xl text-black mb-2">Alinhamento de Metas com Foco em Performance</h3>
                <div className="w-12 h-1 bg-amber-500 mx-auto"></div>
              </div>
              <p className="text-black text-lg">
                Revisamos suas metas com foco em clareza, escalabilidade e resultado. Nada de objetivos soltos: você sai com indicadores alinhados à realidade e ao potencial do seu negócio.
              </p>
            </div>

            <div className="bg-black/10 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-white/20 hover:border-white/40 transition-all duration-300 relative z-10 mt-16 md:mt-0">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-black text-amber-500 rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-amber-500">
                3
              </div>
              <div className="mt-6 text-center mb-6">
                <h3 className="font-bold text-2xl text-black mb-2">Plano de Ação Direcionado</h3>
                <div className="w-12 h-1 bg-amber-500 mx-auto"></div>
              </div>
              <p className="text-black text-lg">
                Você recebe um plano prático, de alto impacto, com ações diretas para reverter desafios, fortalecer seu time comercial e gerar mais lucro nos próximos 30 dias.
              </p>
            </div>
          </div>

         <div className="mt-16 text-center">
  <div className="inline-block bg-black/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-amber-500/30">
    <p className="text-white text-lg mb-6 max-w-2xl mx-auto whitespace-pre-line">
      Ao final da Sessão Estratégica, você terá clareza absoluta sobre:

      Onde está deixando dinheiro na mesa e como recuperar cada centavo.

      Os ajustes imediatos que vão gerar um crescimento de até 50% no seu lucro em até 30 dias.

      Um plano claro e estruturado para escalar sua operação comercial de forma sólida e consistente nos próximos 90 dias.
    </p>



              <div className="relative group inline-block">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded opacity-70 group-hover:opacity-100 blur-sm transition duration-300"></div>
                <Link
                  href="#agendar"
                  id="agendar"
                  className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 px-10 rounded inline-flex items-center transition-all duration-300 shadow-lg"
                  onClick={redirectToWhatsApp}
                >
                  QUERO AGENDAR MINHA SESSÃO ESTRATÉGICA
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* About Section */}
<section className="py-20 bg-black relative">
  {/* Efeito dourado adicional */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
  </div>
  {/* Efeito dourado - Pontos */}
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: "radial-gradient(#E9B949 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    ></div>
    <div className="absolute inset-0 bg-black/90"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="md:flex items-center gap-12">
      <div className="md:w-2/5 mb-12 md:mb-0">
        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-zinc-800">
          <div className="aspect-[3/4] relative">
            <Image src="/hero-image-1.png" alt="Sobre mim" fill className="object-cover object-top" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="w-12 h-1 bg-amber-500 mb-4"></div>
            <h3 className="text-2xl font-bold text-white">Impacto Milionário</h3>
            <p className="text-amber-400">Mentoria de Alta Performance</p>
          </div>
        </div>
      </div>

      <div className="md:w-3/5">
        <div className="inline-block bg-amber-500 text-black font-bold py-4 px-10 rounded mb-6">QUEM SOU EU?</div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Transformando empresas através de <span className="text-amber-500">estratégias comprovadas</span>
        </h2>

        <p className="text-lg mb-6 text-gray-300">
          Eu sou o John, empresário desde 2012 e, desde 2017, me especializei em três pilares que transformaram meus resultados e os de mais de mil empresas mentoradas: Venda Direta, Pessoas e Performance e Estrutura.
        </p>

        <p className="text-lg mb-6 text-gray-300">
          Com mais de R$ 1 milhão investidos em estratégias, anúncios e validações, criei o Método IM – Impacto Milionário, que já gerou mais de 8 dígitos em vendas.
        </p>

        <p className="text-lg mb-8 text-gray-300">
          O Método IM foi criado para empresas B2B que querem escalar com estratégia e consistência, focando em três fundamentos:
          <br />
          • <span className="text-amber-400 font-semibold">Atrair clientes todos os dias</span><br />
          • <span className="text-amber-400 font-semibold">Aumentar o ticket médio</span><br />
          • <span className="text-amber-400 font-semibold">Estruturar uma operação lucrativa, com ou sem o dono presente</span>
          <br /><br />
          Hoje ensino empresários a crescerem de forma previsível, com um plano prático que gera resultados reais em até 30 dias.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          {/* Instagram */}
          <a href="https://www.instagram.com/johnimpactomilionario?igsh=MWhyN284OGw1dzh3NQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 hover:from-amber-500/20 hover:to-amber-600/20 border border-amber-500/30 rounded-lg px-4 py-2 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
            <span>Instagram</span>
          </a>

          {/* TikTok */}
          <a href="https://www.tiktok.com/@john.impacto.mili?_t=ZM-8wFSby6DgFr&_r=1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 hover:from-amber-500/20 hover:to-amber-600/20 border border-amber-500/30 rounded-lg px-4 py-2 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
              <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
              <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
              <path d="M15 8v8a4 4 0 0 1-4 4"></path>
              <path d="M9 12V4a4 4 0 0 1 4-4"></path>
            </svg>
            <span>TikTok</span>
          </a>

          {/* Threads */}
          <a href="https://www.threads.com/@johnimpactomilionario?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 hover:from-amber-500/20 hover:to-amber-600/20 border border-amber-500/30 rounded-lg px-4 py-2 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
              <path d="M19 7.5c-1-1-4-2-7-2s-6 1-7 2S2 13 2 16s3 2 5 2c0 2.5 2 4 4 4s4-1.5 4-4c2 0 5 1 5-2s-1-7.5-1-8.5z"></path>
              <path d="M12 16a4 4 0 0 1-4-4"></path>
              <path d="M16 7.5A5.5 5.5 0 0 0 12 6"></path>
            </svg>
            <span>Threads</span>
          </a>

          {/* Twitter */}
          <a href="https://x.com/johnimpactomili?s=21" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 hover:from-amber-500/20 hover:to-amber-600/20 border border-amber-500/30 rounded-lg px-4 py-2 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-amber-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.01 9.01 0 0 1-2.85 1.09A4.48 4.48 0 0 0 16.62 0c-2.62 0-4.74 2.16-4.74 4.81 0 .38.04.75.13 1.1A12.75 12.75 0 0 1 3 1.14a4.74 4.74 0 0 0-.64 2.42c0 1.68.82 3.16 2.06 4.03A4.35 4.35 0 0 1 1.5 6.15v.06a4.8 4.8 0 0 0 3.78 4.72c-.36.1-.74.15-1.13.15-.28 0-.54-.03-.8-.08a4.8 4.8 0 0 0 4.5 3.37A9.03 9.03 0 0 1 1 19.54 12.77 12.77 0 0 0 8.29 21c7.55 0 11.68-6.44 11.68-12.02 0-.18-.01-.37-.02-.55A8.66 8.66 0 0 0 23 3z" />
            </svg>
            <span>Twitter</span>
          </a>

          {/* YouTube */}
          <a href="https://youtube.com/@johnimpactomilionario?si=o1gmVsmffTT6TUsc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 hover:from-amber-500/20 hover:to-amber-600/20 border border-amber-500/30 rounded-lg px-4 py-2 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a2.998 2.998 0 0 0-2.112-2.12C19.692 3.5 12 3.5 12 3.5s-7.692 0-9.386.566a2.998 2.998 0 0 0-2.112 2.12A31.926 31.926 0 0 0 0 12a31.926 31.926 0 0 0 .502 5.814 2.998 2.998 0 0 0 2.112 2.12C4.308 20.5 12 20.5 12 20.5s7.692 0 9.386-.566a2.998 2.998 0 0 0 2.112-2.12A31.926 31.926 0 0 0 24 12a31.926 31.926 0 0 0-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
            </svg>
            <span>YouTube</span>
          </a>
        </div>

        <div className="mt-10 text-center md:text-left">
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl opacity-70 group-hover:opacity-100 blur-sm transition duration-300"></div>
            <Link
              href="#agendar"
              className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-5 px-10 text-lg sm:text-xl rounded-xl inline-flex items-center transition-all duration-300 shadow-lg"
              onClick={redirectToWhatsApp}
            >
              QUERO AGENDAR
              <ArrowRight className="ml-3 h-6 w-6 sm:h-7 sm:w-7" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* What You'll Learn Section */}
      <section className="py-20 bg-zinc-950 relative">
        {/* Efeito dourado - Hexágonos */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fillRule='evenodd'%3E%3Cg id='hexagons' fill='%23E9B949' fillOpacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
          <div className="absolute inset-0 bg-zinc-950/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              O QUE VOCÊ VAI APRENDER NA <span className="text-amber-500">MENTORIA</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-zinc-900 to-black p-8 rounded-xl shadow-xl border border-zinc-800 hover:border-amber-500/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-full flex items-center justify-center mb-6 group-hover:from-amber-500/20 group-hover:to-amber-600/20 transition-all duration-300">
                <Target className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-6 text-amber-500">Pilar 1 – Venda Direta:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-amber-500 h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Como gerar vendas todos os dias com abordagens estratégicas.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-amber-500 h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Técnicas de prospecção ativa e fechamento.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-amber-500 h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Como criar ofertas que realmente vendem no B2B.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-amber-500 h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Implantação do ritmo comercial com metas e cadência.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-zinc-900 to-black p-8 rounded-xl shadow-xl border border-zinc-800 hover:border-amber-500/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-full flex items-center justify-center mb-6 group-hover:from-amber-500/20 group-hover:to-amber-600/20 transition-all duration-300">
                <Users className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-6 text-amber-500">Pilar 2 – Pessoas e Performance:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-amber-500 h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Como recrutar e montar um time comercial de verdade.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-amber-500 h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Treinamento focado em execução, metas e resultado.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-amber-500 h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Cultura de alta performance: disciplina, metas e liderança.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-amber-500 h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Eliminação da dependência do "vendedor estrela".</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-zinc-900 to-black p-8 rounded-xl shadow-xl border border-zinc-800 hover:border-amber-500/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-full flex items-center justify-center mb-6 group-hover:from-amber-500/20 group-hover:to-amber-600/20 transition-all duration-300">
                <BarChart3 className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-6 text-amber-500">Pilar 3 – Estrutura:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-amber-500 h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Como organizar sua operação para escalar com lucro.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-amber-500 h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Modelos de gestão comercial e indicadores de controle.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-amber-500 h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Ferramentas e processos para crescer com previsibilidade.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-amber-500 h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Estrutura que funciona com ou sem o dono no dia a dia.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-b from-zinc-900 to-black p-8 rounded-xl shadow-xl border border-zinc-800">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-amber-500 mr-4" />
              <h3 className="text-xl font-bold">
                Os 3 fundamentos do método <span className="text-amber-500">Impacto Milionário</span>:
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/50 p-6 rounded-lg border border-zinc-800">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-amber-500 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold">Atrair novos clientes</h4>
                </div>
                <p className="text-gray-400">Todos os dias com consistência e estratégia.</p>
              </div>

              <div className="bg-black/50 p-6 rounded-lg border border-zinc-800">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-amber-500 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold">Elevar o ticket médio</h4>
                </div>
                <p className="text-gray-400">E a margem de cada venda com técnicas comprovadas.</p>
              </div>

              <div className="bg-black/50 p-6 rounded-lg border border-zinc-800">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-amber-500 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold">Crescer com estabilidade</h4>
                </div>
                <p className="text-gray-400">Sem depender de sorte ou esforço exagerado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="py-20 bg-black relative">
        {/* Efeito dourado - Gradiente diagonal */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-600/5"></div>
          <div className="absolute top-0 left-0 w-full h-full transform -skew-y-6 bg-amber-500/5"></div>
          <div className="absolute bottom-0 right-0 w-full h-full transform skew-y-6 bg-amber-500/5"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              PARA QUEM É A MENTORIA <span className="text-amber-500">IMPACTO MILIONÁRIO</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            <div className="space-y-6">
              <div className="flex items-start p-6 bg-gradient-to-r from-zinc-900 to-black rounded-xl shadow-lg border border-zinc-800 hover:border-amber-500/30 transition-all duration-300">
                <CheckCircle className="text-amber-500 h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg">
                  Empresários B2B que já têm produto ou serviço validado, mas estão estagnados e querem crescer com
                  método.
                </p>
              </div>
              <div className="flex items-start p-6 bg-gradient-to-r from-zinc-900 to-black rounded-xl shadow-lg border border-zinc-800 hover:border-amber-500/30 transition-all duration-300">
                <CheckCircle className="text-amber-500 h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg">
                  Donos de negócios que querem estruturar uma máquina de vendas previsível, com processos e metas
                  claras.
                </p>
              </div>
              <div className="flex items-start p-6 bg-gradient-to-r from-zinc-900 to-black rounded-xl shadow-lg border border-zinc-800 hover:border-amber-500/30 transition-all duration-300">
                <CheckCircle className="text-amber-500 h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg">
                  Quem sente que está vendendo "no braço", sem clareza, sem escala e sem equipe alinhada.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start p-6 bg-gradient-to-r from-zinc-900 to-black rounded-xl shadow-lg border border-zinc-800 hover:border-amber-500/30 transition-all duration-300">
                <CheckCircle className="text-amber-500 h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg">
                  Empresários cansados de depender de vendedores estrelas e que desejam um time que joga junto e entrega
                  resultado.
                </p>
              </div>
              <div className="flex items-start p-6 bg-gradient-to-r from-zinc-900 to-black rounded-xl shadow-lg border border-zinc-800 hover:border-amber-500/30 transition-all duration-300">
                <CheckCircle className="text-amber-500 h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg">
                  Líderes que querem sair da operação e construir um negócio que funciona com ou sem sua presença.
                </p>
              </div>
              <div className="flex items-start p-6 bg-gradient-to-r from-zinc-900 to-black rounded-xl shadow-lg border border-zinc-800 hover:border-amber-500/30 transition-all duration-300">
                <CheckCircle className="text-amber-500 h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg">
                  Empresas que querem escalar com estrutura, aumentar o ticket médio e operar com mais lucro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-20 bg-zinc-950 relative">
        {/* Efeito dourado - Círculos concêntricos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-amber-500/5"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-amber-500/5"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-amber-500/5"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-amber-500/5"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-amber-500">✓</span> POR QUE FUNCIONA?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl mb-8 text-center font-semibold">
              Porque não é teoria. <span className="text-amber-500">É prática comprovada.</span>
            </p>

            <div className="bg-gradient-to-b from-zinc-900 to-black p-8 rounded-xl shadow-xl border border-zinc-800">
              <p className="text-lg mb-6">
                O Impacto Milionário nasceu da prática da realidade de quem está no jogo todos os dias, construindo,
                vendendo, treinando equipe e fazendo empresa dar lucro.
              </p>

              <p className="text-lg mb-6">
                Foram mais de{" "}
                <span className="text-amber-500 font-bold">R$1 milhão investidos em testes, erros e acertos</span>,
                dentro de operações reais. Nada aqui é teoria: o método já foi aplicado em negócios que saíram do zero ou da estagnação e passaram a gerar lucro previsível, vendas diárias e crescimento escalável.
              </p>

               <p className="text-lg mb-6">
                É execução de verdade,{" "}
                <span className="text-amber-500 font-bold">com base no que funciona e no que já, </span>
                transformou empresas desorganizadas e travadas em operações lucrativas, com clareza, processo e resultados consistentes, atingindo faturamentos mais altos com controle, margem e escala.
              </p>

              <div className="border-l-4 border-amber-500 pl-6 py-2 mb-8 bg-black/30 rounded-r-lg">
                <p className="italic text-gray-300">
                  "Funciona porque é estruturado em 3 pilares essenciais que se complementam e formam uma máquina de
                  vendas completa."
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-center bg-black/30 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-500 font-bold text-lg">1</span>
                  </div>
                  <p className="font-bold text-lg">Venda Direta – para gerar resultado imediato com estratégia.</p>
                </div>
                <div className="flex items-center bg-black/30 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-500 font-bold text-lg">2</span>
                  </div>
                  <p className="font-bold text-lg">
                    Pessoas e Performance – para montar e liderar um time que entrega.
                  </p>
                </div>
                <div className="flex items-center bg-black/30 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-500 font-bold text-lg">3</span>
                  </div>
                  <p className="font-bold text-lg">
                    Estrutura – para escalar com operação estável, previsível e lucrativa.
                  </p>
                </div>
              </div>

              <p className="mb-6 text-lg">E tudo isso apoiado em fundamentos claros:</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start bg-black/30 p-4 rounded-lg">
                  <CheckCircle className="text-amber-500 h-6 w-6 mr-3 mt-0 flex-shrink-0" />
                  <p className="text-lg">Atração de clientes todos os dias.</p>
                </div>
                <div className="flex items-start bg-black/30 p-4 rounded-lg">
                  <CheckCircle className="text-amber-500 h-6 w-6 mr-3 mt-0 flex-shrink-0" />
                  <p className="text-lg">Aumento do ticket médio.</p>
                </div>
                <div className="flex items-start bg-black/30 p-4 rounded-lg">
                  <CheckCircle className="text-amber-500 h-6 w-6 mr-3 mt-0 flex-shrink-0" />
                  <p className="text-lg">Estabilidade com margem e escala.</p>
                </div>
              </div>

              <div className="text-center mt-10">
                <p className="text-xl font-semibold">
                  Não tem mágica. <span className="text-amber-500">Tem método, clareza e execução.</span>
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="relative group inline-block">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded opacity-70 group-hover:opacity-100 blur-sm transition duration-300"></div>
                <Link
                  href="#agendar"
                  className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 px-10 rounded inline-flex items-center transition-all duration-300 shadow-lg"
                  onClick={redirectToWhatsApp}
                >
                  Quero entrar para o Impacto Milionário
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ebook Section */}
      <section className="py-20 bg-black relative">
        {/* Efeito dourado adicional */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>
        {/* Efeito dourado - Raios diagonais */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-amber-500/10 rotate-45 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-amber-500/10 rotate-45 blur-3xl"></div>
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="md:flex items-center gap-12">
            <div className="md:w-2/5 mb-12 md:mb-0">
              <div className="relative">
                {/* Ebook mockup */}
                <div className="relative h-[500px] w-full max-w-md mx-auto">
                  <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg transform rotate-6 shadow-xl"></div>
                  <div className="absolute top-0 right-4 left-4 bottom-0 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg transform rotate-3 shadow-xl"></div>
                  <div className="absolute top-0 right-0 left-0 bottom-0 bg-black rounded-lg shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent"></div>
                    <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden">
                      <Image
                        src="/hero-image-1.png"
                        alt="Ebook Impacto Milionário"
                        fill
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black"></div>
                    </div>
                    <div className="absolute top-1/3 left-0 right-0 bottom-0 flex flex-col items-center justify-center p-6 text-center">
                      <div className="bg-amber-500 text-black text-xs font-bold py-1 px-3 rounded-full mb-4">
                        MATERIAL EXCLUSIVO
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">IMPACTO MILIONÁRIO</h3>
                      <p className="text-amber-400 font-medium mb-4">Mentoria de Alta Performance para Empresários</p>
                      <div className="w-16 h-1 bg-amber-500 mb-4"></div>
                      <p className="text-gray-300 mb-2">O guia completo para vender todos os dias, liderar com clareza e escalar com estrutura, lucro e previsibilidade.</p>
                      <p className="text-gray-400 text-sm">por Impacto Milionário</p>
                      <p className="text-gray-400 text-sm">Mentoria baseada em:</p>
                      <p className="text-gray-400 text-sm">Venda Direta | Pessoas e Performance | Estrutura</p>
                    </div>
                  </div>
                </div>

                {/* Price tag */}
<div className="absolute -bottom-14 -right-5 md:-bottom-10 md:-right-5 w-24 h-24 md:w-32 md:h-32 bg-amber-500 rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-black">
  <span className="text-black text-xs font-bold">APENAS</span>
  <span className="text-black text-2xl md:text-3xl font-extrabold">R$97</span>
  <span className="text-black text-xs font-medium">à vista</span>
</div>

              </div>
            </div>

            <div className="md:w-3/5">
              <div className="inline-block bg-amber-500 text-black font-bold py-2 px-4 rounded mb-6">
                MATERIAL EXCLUSIVO
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                O guia completo para <span className="text-amber-500">vender todos os dias,</span>  liderar com clareza e escalar com <span className="text-amber-500">estrutura, lucro e previsibilidade.</span>
              </h2>

              <p className="text-lg mb-6 text-gray-300">
                O guia completo com todas as estratégias, scripts e ferramentas que utilizamos para transformar times comerciais e gerar resultados extraordinários.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-amber-500 h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Scripts de abordagem e fechamento testados e aprovados.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-amber-500 h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Modelos de gestão comercial para você aplicar hoje.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-amber-500 h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Checklists completos para você não esquecer de nada.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-amber-500 h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">E muito mais!</p>
                </div>
              </div>

              <div className="mt-10 text-center md:text-left">
                <div className="relative group inline-block">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded opacity-70 group-hover:opacity-100 blur-sm transition duration-300"></div>
                  <Link
                    href="https://pay.kiwify.com.br/hBKhcMI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 px-8 rounded inline-flex items-center transition-all duration-300 shadow-lg"
                  >
                    QUERO GARANTIR MEU EBOOK
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-950 relative">
        {/* Efeito dourado - Linhas diagonais */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, #E9B949 0, #E9B949 1px, transparent 1px, transparent 10px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
          <div className="absolute inset-0 bg-zinc-950/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              PERGUNTAS <span className="text-amber-500">FREQUENTES</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gradient-to-b from-zinc-900 to-black p-6 rounded-xl shadow-xl border border-zinc-800">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-500 mr-2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="16" y2="12"></line>
                  <line x1="12" x2="12.01" y1="8" y2="8"></line>
                </svg>
                Qual o tempo de duração da mentoria?
              </h3>
              <p className="text-gray-300">
                A mentoria tem duração de 3 meses, com encontros semanais online e suporte individualizado.
              </p>
            </div>

            <div className="bg-gradient-to-b from-zinc-900 to-black p-6 rounded-xl shadow-xl border border-zinc-800">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-500 mr-2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="16" y2="12"></line>
                  <line x1="12" x2="12.01" y1="8" y2="8"></line>
                </svg>
                Para quem é indicada a mentoria?
              </h3>
              <p className="text-gray-300">
                Para empresários B2B que já possuem um produto ou serviço validado, mas desejam escalar suas vendas de
                forma estruturada e previsível.
              </p>
            </div>

            <div className="bg-gradient-to-b from-zinc-900 to-black p-6 rounded-xl shadow-xl border border-zinc-800">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-500 mr-2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="16" y2="12"></line>
                  <line x1="12" x2="12.01" y1="8" y2="8"></line>
                </svg>
                Qual o formato das aulas?
              </h3>
              <p className="text-gray-300">
                As aulas são 100% online, ao vivo, com interação direta com o mentor e outros participantes. Além disso,
                você terá acesso a materiais complementares e ferramentas exclusivas.
              </p>
            </div>

            <div className="bg-gradient-to-b from-zinc-900 to-black p-6 rounded-xl shadow-xl border border-zinc-800">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-500 mr-2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="16" y2="12"></line>
                  <line x1="12" x2="12.01" y1="8" y2="8"></line>
                </svg>
                Terei suporte individualizado?
              </h3>
              <p className="text-gray-300">
                Sim, você terá suporte individualizado através de canais exclusivos, onde poderá tirar suas dúvidas e
                receber orientações personalizadas.
              </p>
            </div>

            <div className="bg-gradient-to-b from-zinc-900 to-black p-6 rounded-xl shadow-xl border border-zinc-800">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-500 mr-2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="16" y2="12"></line>
                  <line x1="12" x2="12.01" y1="8" y2="8"></line>
                </svg>
                A mentoria oferece garantia?
              </h3>
              <p className="text-gray-300">
                Sim, oferecemos garantia de satisfação. Se, por qualquer motivo, você não estiver satisfeito com a
                mentoria, poderá solicitar o reembolso integral do valor investido em até 7 dias após o início do
                programa.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* Call to Action Section */}
<section className="py-24 bg-black relative">
  {/* Efeito dourado - Gradiente radial */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl"></div>
    <div className="absolute inset-0 bg-black/80"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug">
        Está pronto para transformar sua empresa<br />
        e <span className="text-amber-500">alcançar resultados extraordinários?</span>
      </h2>

      <p className="text-xl text-gray-300 mb-12 max-w-1xl mx-auto leading-relaxed">
  Agora é o momento de aplicar as estratégias que vão alavancar o lucro do seu negócio,<br />
  gerar crescimento previsível e construir uma empresa sólida e lucrativa.<br />
  Se você está pronto para resultados reais e um futuro de sucesso, <strong>estou aqui para te ajudar a conquistar isso!</strong><br />
  <strong>Te espero no próximo nível. Bora brilhar!</strong>
</p>


      <div className="relative group inline-block">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded opacity-70 group-hover:opacity-100 blur-sm transition duration-300"></div>
        <Link
          href="#agendar"
          className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 px-10 rounded inline-flex items-center transition-all duration-300 shadow-lg"
          onClick={redirectToWhatsApp}
        >
          QUERO AGENDAR MEU DIAGNÓSTICO ESTRATÉGICO
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-black py-8 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="relative w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-600/20"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-300/40 via-transparent to-transparent"></div>
                <span className="text-black text-xl font-extrabold relative z-10 tracking-tight">IM</span>
                <div className="absolute -inset-0.5 rounded-full border-2 border-amber-400/70"></div>
                <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-amber-400/40 rounded-full blur-md"></div>
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-amber-400/40 rounded-full blur-md"></div>
              </div>
              <div className="ml-3">
                <span className="text-amber-400 text-lg font-bold">IMPACTO</span>
                <span className="text-white text-lg ml-1 font-light">MILIONÁRIO</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">Todos os direitos reservados | Impacto Milionário LTDA.</p>
              <p className="text-gray-400">
                Desenvolvido por{" "}
                <a
                  href="https://www.devpro.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600"
                >
                  DevPro
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
