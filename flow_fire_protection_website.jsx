import React, { useState } from "react";
import { Flame, ShieldCheck, Wrench, ClipboardCheck, Phone, Mail, Menu, X, ChevronRight, Clock, MapPin, CheckCircle2, Zap, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { title: "Fire Detection Systems", text: "Specialising in the servicing, testing, fault finding and repairs of stand-alone and networked fire detection systems.", icon: ShieldCheck },
  { title: "EWIS & Occupant Warning", text: "Routine testing and maintenance for EWIS, OWS, speakers, WIPs, amplifiers and emergency warning systems.", icon: Zap },
  { title: "Hydrants & Pumps", text: "Routine servicing, maintenance and flow testing of hydrant and pump systems across commercial, residential and industrial properties.", icon: Wrench },
  { title: "Routine Maintenance", text: "Professional six-monthly and annual testing of portable fire equipment and emergency lighting systems across commercial, residential and industrial properties.", icon: CheckCircle2 },
  { title: "AFSS Compliance & Inspections", text: "Annual and five-yearly testing, inspections and compliance support for essential fire safety systems.", icon: ClipboardCheck },
  { title: "Sprinkler Systems", text: "Fitout, installation, testing and inspection of sprinkler systems across commercial, residential and industrial properties.", icon: Flame },
];

const strengths = [];

function FlowLogo({ large = false }) {
  return (
    <svg
      viewBox="0 0 600 266"
      aria-label="Flow Fire Protection"
      className={`${large ? "w-[420px] max-w-full" : "w-[210px]"} h-auto block`}
      role="img"
    >
      <rect width="600" height="266" fill="#020817" />
      <defs>
        <linearGradient id="flowLogoBlue" x1="25" y1="20" x2="165" y2="245" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4FC3FF" />
          <stop offset="0.45" stopColor="#128BFF" />
          <stop offset="1" stopColor="#003B95" />
        </linearGradient>
      </defs>
      <path fill="url(#flowLogoBlue)" fillRule="evenodd" d="M85 22L85 37L79 53L70 66L49 88L34 108L26 125L22 141L22 161L24 171L30 187L36 197L44 207L56 218L79 231L69 217L62 200L60 187L61 172L69 150L96 116L107 96L110 84L111 71L108 55L102 41L96 32ZM128 77L127 94L121 110L112 123L86 152L78 168L75 181L76 200L82 216L88 225L98 235L110 242L103 223L103 203L110 184L120 170L125 166L130 171L140 191L142 209L139 225L136 229L150 216L158 204L163 193L167 177L166 149L162 136L155 122L153 122L151 131L147 139L139 148L138 147L144 129L144 110L139 93L132 81ZM532 216L526 223L527 232L532 236L541 236L546 231L546 221L541 216ZM379 216L373 222L373 231L379 236L387 236L391 233L393 229L393 223L389 217ZM249 216L249 235L253 236L254 230L256 229L260 236L265 236L260 228L264 223L263 218L260 216ZM346 216L346 236L350 236L352 229L354 230L357 236L362 236L357 228L361 224L360 218L357 216ZM559 216L559 236L563 236L564 224L572 236L577 236L577 216L573 216L572 228L564 216ZM329 216L319 216L320 236L324 236L324 230L331 228L334 224L334 220ZM430 216L430 235L443 236L443 233L437 233L435 231L436 228L442 227L442 224L436 224L435 221L437 219L443 219L443 216ZM277 216L277 236L289 236L289 233L282 232L282 229L287 228L288 224L283 224L281 222L283 219L289 219L289 216ZM461 216L455 221L455 231L460 236L469 236L471 235L470 232L462 232L459 228L459 224L464 219L469 221L470 217ZM219 216L206 217L207 236L211 236L212 228L218 227L217 224L212 224L211 220L219 219ZM403 216L403 219L406 219L408 221L408 235L413 236L413 221L418 219L419 217ZM382 219L388 222L388 229L384 233L380 232L377 227L378 222ZM482 216L481 219L487 220L487 236L491 236L491 221L497 219L497 216ZM536 219L539 220L542 224L541 230L537 233L531 229L531 223ZM231 216L231 235L235 236L236 217ZM509 216L509 236L513 236L513 216ZM324 221L328 220L329 224L325 225ZM351 221L355 220L356 223L352 225ZM254 221L258 220L259 223L255 225Z" />
      <path fill="#FFFFFF" fillRule="evenodd" d="M425 114L446 192L483 192L495 147L499 157L507 192L545 192L567 114L537 114L525 167L521 156L512 114L481 114L468 167L466 165L456 115ZM338 124L331 133L328 141L327 162L331 174L342 186L361 193L384 194L402 190L414 183L420 176L425 165L426 148L421 132L411 121L392 113L368 112L351 116ZM281 82L205 82L205 192L237 192L238 149L275 148L275 126L238 126L237 106L281 105ZM287 82L287 192L318 192L318 82ZM366 137L371 135L382 135L391 141L394 148L394 158L392 164L386 170L379 172L369 171L364 168L360 163L358 157L358 149L360 143Z" />
    </svg>
  );
}

export default function FlowFireProtectionWebsite() {
  const [open, setOpen] = useState(false);
  const nav = [["Home", "#home"], ["Services", "#services"], ["About", "#about"], ["Contact", "#contact"]];

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-blue-500/10 bg-[#020817]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home"><FlowLogo /></a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map(([label, href]) => <a key={label} href={href} className="text-sm font-medium text-slate-200 transition hover:text-blue-400">{label}</a>)}
            <a href="#contact" className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-500">Get a Quote</a>
          </nav>
          <button onClick={() => setOpen(!open)} className="rounded-xl border border-white/10 p-2 md:hidden" aria-label="Open menu">{open ? <X /> : <Menu />}</button>
        </div>
        {open && <div className="border-t border-white/10 bg-[#020817] px-5 py-4 md:hidden"><div className="flex flex-col gap-4">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="text-base font-medium text-slate-200">{label}</a>)}</div></div>}
      </header>

      <main id="home" className="pt-20">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.24),transparent_32%),radial-gradient(circle_at_left,rgba(37,99,235,0.22),transparent_34%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200"><ShieldCheck className="h-4 w-4" /> NSW Fire Protection Services</div>
              <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">Reliable fire protection maintenance, service & repairs of all fire systems.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Flow Fire Protection delivers professional routine inspections, maintenance, servicing and installation support across commercial, residential and industrial properties throughout the Central Coast, Sydney and Newcastle regions. Built on practical industry experience, we focus on reliable workmanship, clear communication and dependable fire protection solutions.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-blue-500 px-7 py-4 font-bold text-white shadow-xl shadow-blue-500/25 transition hover:bg-blue-500">Request a Quote <ChevronRight className="ml-2 h-5 w-5" /></a>
                <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-bold text-white transition hover:border-blue-400 hover:text-blue-200">View Services</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative z-10">
              <div className="rounded-[2rem] border border-blue-500/15 bg-white/5 p-6 shadow-2xl shadow-blue-950/60 backdrop-blur">
                <div className="rounded-[1.5rem] bg-[#050b1f] p-8">
                  <div className="mb-10"><FlowLogo large /></div>
                  <div>
                    <div className="rounded-2xl bg-white/5 p-7 min-h-[220px] flex flex-col justify-center">
                      <Clock className="mb-4 h-7 w-7 text-blue-400" />
                      <div className="text-xl font-bold">About Us</div>
                      <p className="mt-3 max-w-xl text-base leading-7 text-slate-300">Specialising in the servicing, repairs and installation of dry, wet and passive fire protection systems across commercial, residential and industrial properties.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="bg-[#050b1f] px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl"><p className="font-bold uppercase tracking-[0.3em] text-blue-400">Our Services</p><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Fire protection support that is practical, professional and reliable.</h2></div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => { const Icon = service.icon; return <div key={service.title} className="rounded-3xl border border-white/10 bg-[#020817]/80 p-6 transition hover:-translate-y-1 hover:border-blue-500/40"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-400"><Icon className="h-6 w-6" /></div><h3 className="text-xl font-black">{service.title}</h3><p className="mt-3 leading-7 text-slate-300">{service.text}</p></div>; })}
            </div>
          </div>
        </section>

        <section id="about" className="px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div><p className="font-bold uppercase tracking-[0.3em] text-blue-400">About Flow</p><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">A company that understands the industry and your needs as a client.</h2></div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8"><p className="text-lg leading-8 text-slate-300">Flow Fire Protection is focused on dependable fire system service, testing and support, with works completed professionally. We support all areas of the fire industry across commercial, industrial and residential properties.</p><div className="mt-8 grid gap-4">{strengths.map((item) => <div key={item} className="flex gap-3 rounded-2xl bg-[#020817]/80 p-4"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-blue-400" /><span className="text-slate-200">{item}</span></div>)}</div></div>
          </div>
        </section>

        <section className="px-5 pb-20 lg:px-8"><div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-blue-500/15 via-blue-600/15 to-[#020817] p-8 lg:p-12"><div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]"><div><p className="font-bold uppercase tracking-[0.3em] text-blue-400">Service Area</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Servicing the Central Coast, Sydney and Newcastle regions with a professional approach.</h2></div><MapPin className="h-20 w-20 text-blue-400" /></div></div></section>

        <section id="contact" className="bg-[#050b1f] px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div><p className="font-bold uppercase tracking-[0.3em] text-blue-400">Contact</p><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Request a quote or get in touch.</h2><p className="mt-5 text-lg leading-8 text-slate-300">Flow Fire Protection will get back to you as soon as possible.</p><div className="mt-8 space-y-4"><a href="mailto:admin@flowfireprotection.com.au" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#020817] p-5 transition hover:border-blue-500/40"><Mail className="h-6 w-6 text-blue-400" /><span className="font-bold">admin@flowfireprotection.com.au</span></a><div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#020817] p-5"><Phone className="h-6 w-6 text-blue-400" /><span className="font-bold">0428 123 315</span></div></div></div>
            <form className="rounded-[2rem] border border-white/10 bg-[#020817] p-6 shadow-2xl" action="mailto:admin@flowfireprotection.com.au" method="post" encType="text/plain"><div className="grid gap-4"><input className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500" placeholder="Name" name="name" /><input className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500" placeholder="Email" name="email" type="email" /><input className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500" placeholder="Phone" name="phone" /><input className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500" placeholder="Subject" name="subject" /><textarea className="min-h-36 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500" placeholder="Tell us what you need help with" name="message" /><button className="rounded-full bg-blue-500 px-7 py-4 font-black text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-500" type="submit">Send Enquiry</button></div></form>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 bg-[#020817] px-5 py-8 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"><div>© 2026 Flow Fire Protection. All rights reserved.</div><div>admin@flowfireprotection.com.au</div></div></footer>
    </div>
  );
}
