import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#232323] text-[#F5F4DC] pt-16 sm:pt-20 md:pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-24">
          <div className="lg:col-span-2">
            <img
              src="/HaloUspomene/images/full-logo-white.png"
              alt="Halo Uspomene Full-Logo"
              className="w-54 h-auto mb-6"
            />
          </div>
          <div className="self-end content-end w-full">
            <span className="text-3xl font-serif font-bold italic">
              Tu za <span className="text-[#AE343F] ">Vas</span>!
            </span>
            <p className="mt-4 text-[#F5F4DC]/40  leading-relaxed">
              Tu smo da sačuvate najdragocenije glasove sa svog venčanja. Jer
              ljubav zaslužuje da se čuje — zauvek.
            </p>
            {/* <h4 className="text-xl font-serif mb-8">Kontakt</h4>
            <ul className="space-y-4 text-[#F5F4DC]/50 font-light">
              <li>info@halouspomene.rs</li>
              <li>+381 60 123 4567</li>
            </ul> */}
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-[#F5F4DC]/20">
          <p>© {new Date().getFullYear()} HALO Uspomene.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={10} className="text-[#AE343F]" /> | Halo
            Uspomene
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
