import React from 'react';
import GlowButton from './GlowButton';

interface FooterProps {
  isVisible: boolean;
  formRef: React.RefObject<HTMLDivElement | null>;
}

const Footer: React.FC<FooterProps> = ({ isVisible, formRef }) => {
  return (
    <footer className="w-full flex flex-col items-center pb-12 px-6 z-20 relative">
      {/* Form Container */}
      <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none absolute'}`}>
        {isVisible && (
          <div 
            ref={formRef}
            className="w-full max-w-[500px] backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-[24px] p-6 md:p-8 hover:bg-white/[0.05] transition-colors duration-500 animate-fade-in-up"
          >
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium text-white mb-2">Join the Community</h3>
              <p className="text-sm text-white/60">Receive updates, early access details, and exclusive insights.</p>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="name@example.com" 
                className="flex-1 h-[42px] px-5 rounded-full bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                required
              />
              <div className="flex-shrink-0 flex justify-center">
                <GlowButton text="Subscribe" variant="light" type="submit" />
              </div>
            </form>
          </div>
        )}
      </div>
      
      {/* Footer Links - Always visible at bottom */}
      <div className={`mt-12 flex items-center justify-center gap-6 text-white/30 text-xs tracking-wide transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-50'}`}>
        <span>© 2026 Web3 Inc.</span>
        <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
        <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
      </div>
    </footer>
  );
};

export default Footer;