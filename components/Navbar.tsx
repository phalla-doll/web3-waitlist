import React from 'react';
import { ChevronDown } from 'lucide-react';
import GlowButton from './GlowButton';

const Navbar: React.FC = () => {
  const navLinks = [
    { name: 'Get Started', href: '#' },
    { name: 'Developers', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Resources', href: '#' },
  ];

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-[120px] py-[20px]">
      {/* Left Side: Logo + Links */}
      <div className="flex items-center gap-[60px]">
        {/* Logo Placeholder */}
        <div className="w-[187px] h-[25px] flex items-center text-white font-bold text-xl tracking-wider">
          LOGOIPSUM
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-[30px]">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="group flex items-center gap-[14px] text-white text-[14px] font-medium transition-opacity hover:opacity-80"
            >
              {link.name}
              <ChevronDown className="w-[14px] h-[14px] text-white transition-transform group-hover:rotate-180" />
            </a>
          ))}
        </div>
      </div>

      {/* Right Side: CTA */}
      <div className="hidden md:block">
        <GlowButton text="Join Waitlist" variant="dark" />
      </div>

      {/* Mobile Menu Icon (Placeholder for simplicity, as specific mobile menu behavior wasn't requested beyond responsive layout) */}
      <div className="md:hidden">
         <GlowButton text="Join" variant="dark" />
      </div>
    </nav>
  );
};

export default Navbar;