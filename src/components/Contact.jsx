import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Send, ArrowUpRight, CheckCircle2, Instagram } from 'lucide-react';
import { personalInfo } from '../data/socials';

const socialIcons = {
  Instagram: Instagram,
  Github: Github,
  Linkedin: Linkedin,
  MessageSquare: MessageSquare,
  Mail: Mail,
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pesan Portofolio dari ${formData.name}`);
    const body = encodeURIComponent(
      `Halo Kayla Alia Atarani,\n\n${formData.message}\n\nDari: ${formData.name}\nEmail: ${formData.email}`
    );
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-wider text-red-500 uppercase mb-2">
            Kontak
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hubungi Saya
          </h2>
          <p className="text-neutral-400 text-sm mt-1.5 max-w-md">
            Terbuka untuk peluang magang, kolaborasi UI/UX, dan pengembangan mobile Flutter.
          </p>
        </motion.div>

        {/* 2-Column Split: Direct Form & Social Channels */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Message Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 90, damping: 16 }}
            className="lg:col-span-7 card-glass card-interactive p-7 sm:p-8 rounded-2xl relative"
          >
            <h3 className="text-base font-bold text-white mb-1">Kirim Pesan Langsung</h3>
            <p className="text-xs text-neutral-400 mb-6">
              Silakan tulis pesan Anda di bawah ini, saya akan segera merespons melalui email.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-xs text-neutral-300 block mb-1.5 font-medium">
                  Nama Anda
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nama lengkap"
                  className="w-full bg-[#0d070b] border border-white/10 focus:border-red-600 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-xs text-neutral-300 block mb-1.5 font-medium">
                  Alamat Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@contoh.com"
                  className="w-full bg-[#0d070b] border border-white/10 focus:border-red-600 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs text-neutral-300 block mb-1.5 font-medium">
                  Pesan
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tulis pesan atau tawaran kolaborasi Anda di sini..."
                  className="w-full bg-[#0d070b] border border-white/10 focus:border-red-600 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold text-sm py-3 rounded-xl shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={16} className="text-emerald-300" />
                    <span>Pesan Terkirim</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Kirim Pesan</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Social Channels (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 90, damping: 16, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* WhatsApp Card */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/30 via-[#0a120e] to-[#070507] border border-emerald-500/30 hover:border-emerald-500/60 flex items-center justify-between group transition-all block card-interactive"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-emerald-400 uppercase font-semibold">Respon Cepat</p>
                  <p className="text-sm font-bold text-white">WhatsApp Langsung</p>
                  <p className="text-xs text-neutral-400">{personalInfo.phone}</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Social List */}
            <div className="card-glass card-interactive p-5 rounded-2xl space-y-2.5">
              <p className="text-xs font-semibold text-neutral-300 mb-3">
                Terhubung di Media Sosial &amp; Profil
              </p>

              {personalInfo.socials.map((social) => {
                const Icon = socialIcons[social.icon] || Mail;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#0d070b] border border-white/5 hover:border-red-600/40 hover:bg-[#160d13] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-red-950/40 border border-red-700/20 flex items-center justify-center text-red-400 group-hover:text-white transition-colors">
                        <Icon size={14} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">{social.name}</p>
                        <p className="text-[11px] text-neutral-400">{social.handle}</p>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="text-neutral-500 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
