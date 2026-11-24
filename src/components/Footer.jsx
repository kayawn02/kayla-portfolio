import React from 'react';
import { Github, Linkedin, MessageSquare, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/socials';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#4A74A7]/20 bg-[#050c18] py-14 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 items-start mb-10">
          
          {/* Brand Info (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#142A44] to-[#4A74A7] flex items-center justify-center font-bold text-xs text-white shadow-[0_0_10px_rgba(74,116,167,0.4)]">
                K
              </div>
              <span className="font-bold text-sm tracking-tight text-[#DCEAF7]">
                Kayla<span className="text-[#4A74A7]">.dev</span>
              </span>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Membangun pengalaman antarmuka digital yang intuitif dan mengembangkan sistem aplikasi mobile terintegrasi mikrokontroler.
            </p>
            <p className="text-[11px] text-neutral-500">
              D4 Teknologi Rekayasa Perangkat Lunak &middot; Politeknik Negeri Lampung
            </p>
          </div>

          {/* Quick Nav (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-semibold text-neutral-300 mb-3">
              Navigasi
            </p>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Tentang Saya</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portofolio</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Pengalaman</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Social Links (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-semibold text-neutral-300 mb-3">
              Terhubung
            </p>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li>
                <a href="https://github.com/kayawn02" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <Github size={13} />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/kaylaatarani" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <Linkedin size={13} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href={personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <MessageSquare size={13} />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-[#4A74A7] transition-colors flex items-center gap-2">
                  <Mail size={13} />
                  <span>Email Resmi</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 border-t border-[#4A74A7]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Kayla Alia Atarani. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors group"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
