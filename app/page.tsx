'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowUpRight, Check, Globe2, Heart, Instagram, MessageCircle, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react'

const whatsappNumero = process.env.NEXT_PUBLIC_NUMERO_WHATSAPP
const whatsappUrl = `https://wa.me/${whatsappNumero}?text=Ol%C3%A1%2C%20Ana%20J%C3%BAlia!%20Gostaria%20de%20saber%20mais%20sobre%20a%20emiss%C3%A3o%20do%20CVI.`

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f3ec] text-[#173c32]">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#inicio" aria-label="Petmove início" className="h-16 w-32 overflow-hidden sm:h-[76px] sm:w-40">
            <Image src="/petmove-logo.jpeg" alt="Petmove — consultoria de viagem pet" width={500} height={500} className="h-full w-full scale-[1.9] object-contain mix-blend-multiply" priority />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#315447] md:flex" aria-label="Navegação principal">
            <a href="#como-funciona" className="transition-colors hover:text-[#d27c61]">Como funciona</a>
            <a href="#ana" className="transition-colors hover:text-[#d27c61]">Sobre a Ana</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-full border border-[#173c32]/20 px-5 py-2.5 transition hover:bg-[#173c32] hover:text-[#f7f3ec]">Fale conosco</a>
          </nav>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-full bg-[#173c32] px-4 py-2 text-xs font-semibold text-[#f7f3ec] md:hidden">WhatsApp</a>
        </div>
      </header>

      <section id="inicio" className="relative flex min-h-[760px] items-center px-6 pb-20 pt-36 lg:min-h-[820px] lg:px-10 lg:pt-24">
        <div className="absolute -right-32 top-20 size-[420px] rounded-full bg-[#e3c9b8]/35 blur-3xl" />
        <div className="absolute -left-44 bottom-0 size-[420px] rounded-full bg-[#c9d7c6]/55 blur-3xl" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-8">
          <motion.div initial="hidden" animate="visible" variants={reveal} className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#173c32]/15 bg-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6b806d]">
              <Sparkles className="size-3.5" /> viagens sem sustos
            </div>
            <h1 className="font-serif text-5xl leading-[.98] tracking-[-.045em] text-[#173c32] sm:text-7xl lg:text-[92px]">Seu pet pronto para <em className="font-normal text-[#d27c61]">viajar.</em></h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#587064] sm:text-xl">Cuidamos de toda a documentação para que você e seu melhor amigo possam cruzar fronteiras com tranquilidade, segurança e carinho.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#d27c61] px-6 py-4 font-semibold text-white shadow-[0_12px_30px_-12px_#d27c61] transition hover:-translate-y-1 hover:bg-[#c06e55]">Quero emitir meu CVI <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
              <a href="#como-funciona" className="inline-flex items-center justify-center rounded-full border border-[#173c32]/20 px-6 py-4 font-semibold text-[#315447] transition hover:bg-white/60">Entenda o processo</a>
            </div>
            <div className="mt-12 flex items-center gap-5 text-sm text-[#6b806d]"><div className="flex -space-x-2"><span className="size-9 rounded-full border-2 border-[#f7f3ec] bg-[#d9b5a2]" /><span className="size-9 rounded-full border-2 border-[#f7f3ec] bg-[#9db5a1]" /><span className="size-9 rounded-full border-2 border-[#f7f3ec] bg-[#e5c69f]" /></div><span>Mais tranquilidade para<br /><strong className="text-[#315447]">tutores e seus pets</strong></span></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15 }} className="relative mx-auto w-full max-w-[510px]">
            <div className="relative aspect-[.88] overflow-hidden rounded-[48%_48%_24%_24%] bg-[#d6e0d2] shadow-[0_30px_70px_-35px_#173c32]">
              <Image src="/ana-julia.png" alt="Dra. Ana Júlia Ferreira, médica veterinária" fill className="object-cover object-center" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173c32]/35 via-transparent to-transparent" />
            </div>
            <motion.div animate={{ y: [0, -9, 0], rotate: [0, 2, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }} className="absolute -bottom-7 -left-5 flex size-32 items-center justify-center rounded-full bg-[#f1d9c9] p-4 text-center text-xs font-semibold leading-tight text-[#a65f4e] shadow-lg sm:-left-12">Atendimento<br />de ponta a<br />ponta</motion.div>
            <div className="absolute -right-4 top-10 rounded-2xl bg-[#f7f3ec]/90 p-4 shadow-xl backdrop-blur-sm sm:-right-10"><Globe2 className="mb-2 size-6 text-[#d27c61]" /><p className="text-xs font-bold text-[#315447]">Diversos<br />países</p></div>
          </motion.div>
        </div>
      </section>

      <div className="border-y border-[#173c32]/10 bg-[#e7eee3] px-6 py-5"><div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-10 gap-y-3 text-center text-xs font-semibold uppercase tracking-[.16em] text-[#6b806d] sm:justify-between"><span>Brasil</span><span>Estados Unidos</span><span>Europa</span><span>América Latina</span><span>e muito mais</span></div></div>

      <section id="como-funciona" className="px-6 py-28 lg:px-10 lg:py-36"><div className="mx-auto max-w-7xl"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} variants={reveal} className="max-w-2xl"><p className="mb-4 text-sm font-bold uppercase tracking-[.22em] text-[#d27c61]">Viaje com segurança</p><h2 className="font-serif text-4xl leading-tight tracking-[-.035em] sm:text-6xl">Um processo complexo, <em className="font-normal text-[#d27c61]">feito simples.</em></h2><p className="mt-6 text-lg leading-relaxed text-[#587064]">O CVI é o documento oficial que comprova que seu animal está saudável e apto para viajar. A gente acompanha cada detalhe para você não precisar se preocupar.</p></motion.div>
          <div className="mt-16 grid gap-5 md:grid-cols-3"><Step number="01" icon={<Stethoscope />} title="Analisamos" text="Entendemos seu destino, companhia aérea e o histórico do seu pet." /><Step number="02" icon={<ShieldCheck />} title="Organizamos" text="Orientamos exames, vacinas e todos os documentos necessários." /><Step number="03" icon={<Heart />} title="Acompanhamos" text="Damos suporte até o dia da viagem — inclusive durante o embarque." /></div>
        </div></section>

      <section className="bg-[#173c32] px-6 py-20 text-[#f7f3ec] lg:px-10"><div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_auto]"><div><p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-[#e6ad95]">Por que contar com a Petmove?</p><h2 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">Seu pet merece uma viagem tão tranquila quanto você imaginou.</h2></div><div className="flex items-center gap-3 text-sm text-[#d8e2d5]"><Check className="size-5 text-[#e6ad95]" /> Suporte humano e próximo</div></div></section>

      <section id="ana" className="px-6 py-28 lg:px-10 lg:py-36"><div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.8fr_1.2fr]"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} variants={reveal} className="relative mx-auto max-w-md"><div className="aspect-[.82] overflow-hidden rounded-[45%_45%_18%_18%] bg-[#e4d5c6]"><Image src="/ana-julia.png" alt="Retrato da médica veterinária Ana Júlia Ferreira" fill className="object-cover" /></div><div className="absolute -bottom-6 -right-5 rounded-2xl bg-[#e7eee3] px-5 py-4 text-center shadow-lg"><p className="font-serif text-3xl text-[#173c32]">+ carinho</p><p className="text-xs uppercase tracking-widest text-[#6b806d]">em cada etapa</p></div></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} variants={reveal}><p className="mb-4 text-sm font-bold uppercase tracking-[.22em] text-[#d27c61]">Por trás da Petmove</p><h2 className="font-serif text-4xl leading-tight tracking-[-.035em] sm:text-6xl">Prazer, eu sou a <em className="font-normal text-[#d27c61]">Ana.</em></h2><p className="mt-7 max-w-xl text-lg leading-relaxed text-[#587064]">Médica veterinária apaixonada por transformar o cuidado com os animais em experiências mais leves. Na Petmove, uno conhecimento técnico e olhar atento para acompanhar cada família em um momento importante: a viagem.</p><p className="mt-5 max-w-xl text-lg leading-relaxed text-[#587064]">Atualmente, faço pós-graduação em Oftalmologia pela Anclivepa e sigo estudando todos os dias para oferecer um atendimento seguro, próximo e atualizado.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#173c32] px-6 py-4 font-semibold text-[#f7f3ec] transition hover:-translate-y-1 hover:bg-[#315447]">Falar com a Ana <MessageCircle className="size-5" /></a></motion.div></div></section>

      <section className="relative mx-4 mb-6 overflow-hidden rounded-[32px] bg-[#f1d9c9] px-6 py-20 text-center sm:mx-6 lg:px-10"><div className="absolute -left-20 -top-24 size-64 rounded-full border border-[#d27c61]/20" /><div className="absolute -right-20 -bottom-24 size-64 rounded-full border border-[#d27c61]/20" /><div className="relative mx-auto max-w-2xl"><p className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-[#a65f4e]">Vamos começar?</p><h2 className="font-serif text-4xl leading-tight tracking-[-.03em] text-[#173c32] sm:text-6xl">A próxima viagem do seu pet começa com uma conversa.</h2><p className="mx-auto mt-5 max-w-lg text-lg text-[#6d5a50]">Chame no WhatsApp, conte para onde vocês vão e receba um orçamento personalizado.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#173c32] px-7 py-4 font-semibold text-[#f7f3ec] shadow-lg transition hover:-translate-y-1 hover:bg-[#315447]"><MessageCircle className="size-5" /> Pedir orçamento pelo WhatsApp</a></div></section>

      <footer className="flex flex-col items-center justify-between gap-5 px-6 py-8 text-sm text-[#6b806d] sm:flex-row lg:px-10"><p>© 2026 Petmove · Consultoria de viagem pet</p><a href="#inicio" className="flex items-center gap-2 font-semibold text-[#315447]">Voltar ao topo <ArrowUpRight className="size-4 -rotate-45" /></a></footer>
      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com a Petmove no WhatsApp" className="fixed bottom-5 right-5 z-30 flex size-14 items-center justify-center rounded-full bg-[#6ba27c] text-white shadow-[0_10px_30px_-8px_#173c32] transition hover:scale-105"><MessageCircle className="size-6" /></a>
    </main>
  )
}

function Step({ number, icon, title, text }: { number: string; icon: React.ReactNode; title: string; text: string }) {
  return <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={reveal} className="group rounded-3xl border border-[#173c32]/10 bg-white/45 p-7 transition hover:-translate-y-1 hover:bg-white/75"><div className="flex items-center justify-between"><div className="flex size-12 items-center justify-center rounded-2xl bg-[#e7eee3] text-[#315447] [&_svg]:size-5">{icon}</div><span className="font-serif text-3xl text-[#d5c2b1]">{number}</span></div><h3 className="mt-9 font-serif text-3xl text-[#173c32]">{title}</h3><p className="mt-3 leading-relaxed text-[#6b806d]">{text}</p></motion.article>
}
