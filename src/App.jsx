import React, { useState } from "react";
import { Flame, ShieldCheck, Wrench, ClipboardCheck, Phone, Mail, Menu, X, ChevronRight, Clock, MapPin, CheckCircle2, Zap } from "lucide-react";
import { motion } from "framer-motion";
import flowLogo from "../flow logo.png";

const services = [
  { title: "Fire Detection Systems", text: "Specialising in the servicing, testing, fault finding and repairs of stand-alone and networked fire detection systems.", icon: ShieldCheck },
  { title: "EWIS & Occupant Warning", text: "Routine testing and maintenance for EWIS, OWS, speakers, WIPs, amplifiers and emergency warning systems.", icon: Zap },
  { title: "Hydrants & Pumps", text: "Routine servicing, maintenance and flow testing of hydrant and pump systems across commercial, residential and industrial properties.", icon: Wrench },
  { title: "Routine Maintenance", text: "Professional six-monthly and annual testing of portable fire equipment and emergency lighting systems across commercial, residential and industrial properties.", icon: CheckCircle2 },
  { title: "AFSS Compliance & Inspections", text: "Annual and five-yearly testing, inspections and compliance support for essential fire safety systems.", icon: ClipboardCheck },
  { title: "Sprinkler Systems", text: "Fitout, installation, testing and inspection of sprinkler systems across commercial, residential and industrial properties.", icon: Flame },
];

function FlowLogo({ large = false }) {
  return (
    <img
      src={flowLogo}
      alt="Flow Fire Protection"
      className={large ? "w-[420px] max-w-full h-auto block" : "w-[210px] h-auto block"}
    />
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const nav = [["Home", "#home"], ["Services", "#services"], ["About", "#about"], ["Contact", "#contact"]];

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-blue-500/10 bg-[#020817]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home"><FlowLogo /></a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map(([label, href]) => <a key={label} href={href} className="text-sm font-medium text-slate-200 transition hover:text-blue-400">{label}</a>)}
            <a href="#contact" className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25">Get a Quote</a>
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
                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-blue-500 px-7 py-4 font-bold text-white shadow-xl shadow-blue-500/25">Request a Quote <ChevronRight className="ml-2 h-5 w-5" /></a>
                <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-bold text-white transition hover:border-blue-400 hover:text-blue-200">View Services</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative z-10">
              <div className="rounded-[2rem] border border-blue-500/15 bg-white/5 p-6 shadow-2xl shadow-blue-950/60 backdrop-blur">
                <div className="rounded-[1.5rem] bg-[#050b1f] p-8">
                  <div className="mb-10"><FlowLogo large /></div>
                  <div className="rounded-2xl bg-white/5 p-7 min-h-[220px] flex flex-col justify-center">
                    <Clock className="mb-4 h-7 w-7 text-blue-400" />
                    <div className="text-xl font-bold">About Us</div>
                    <p className="mt-3 max-w-xl text-base leading-7 text-slate-300">Specialising in the servicing, repairs and installation of dry, wet and passive fire protection systems across commercial, residential and industrial properties.</p>
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
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8"><p className="text-lg leading-8 text-slate-300">Flow Fire Protection is focused on dependable fire system service, testing and support, with works completed professionally. We support all areas of the fire industry across commercial, industrial and residential properties.</p></div>
          </div>
        </section>

        <section className="px-5 pb-20 lg:px-8"><div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-blue-500/15 via-blue-600/15 to-[#020817] p-8 lg:p-12"><div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]"><div><p className="font-bold uppercase tracking-[0.3em] text-blue-400">Service Area</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Servicing the Central Coast, Sydney and Newcastle regions with a professional approach.</h2></div><MapPin className="h-20 w-20 text-blue-400" /></div></div></section>

        <section id="contact" className="bg-[#050b1f] px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div><p className="font-bold uppercase tracking-[0.3em] text-blue-400">Contact</p><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Request a quote or get in touch.</h2><p className="mt-5 text-lg leading-8 text-slate-300">Flow Fire Protection will get back to you as soon as possible.</p><div className="mt-8 space-y-4"><a href="mailto:admin@flowfireprotection.com" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#020817] p-5 transition hover:border-blue-500/40"><Mail className="h-6 w-6 text-blue-400" /><span className="font-bold">admin@flowfireprotection.com</span></a><a href="tel:0428123315" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#020817] p-5"><Phone className="h-6 w-6 text-blue-400" /><span className="font-bold">0428 123 315</span></a></div></div>
            <form className="rounded-[2rem] border border-white/10 bg-[#020817] p-6 shadow-2xl" action="mailto:admin@flowfireprotection.com.au" method="post" encType="text/plain"><div className="grid gap-4"><input className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500" placeholder="Name" name="name" /><input className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500" placeholder="Email" name="email" type="email" /><input className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500" placeholder="Phone" name="phone" /><input className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500" placeholder="Subject" name="subject" /><textarea className="min-h-36 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500" placeholder="Tell us what you need help with" name="message" /><button className="rounded-full bg-blue-500 px-7 py-4 font-black text-white shadow-lg shadow-blue-500/25" type="submit">Send Enquiry</button></div></form>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 bg-[#020817] px-5 py-8 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"><div>© 2026 Flow Fire Protection. All rights reserved.</div><div>admin@flowfireprotection.com</div></div></footer>
    </div>
  );
}
