import React from 'react';
import GlowButton from './GlowButton';

interface HeroProps {
  onJoinClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section className="flex-1 flex flex-col items-center w-full px-6 pt-[120px] md:pt-[220px] pb-[60px]">
      <div className="flex flex-col items-center text-center max-w-[900px]">
        
        {/* Early Access Badge */}
        <div className="mb-[40px] animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[20px] bg-white-10 border border-white-20 backdrop-blur-sm">
            <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
            <span className="text-[13px] font-medium leading-none">
              <span className="text-white/60">Early access available from</span>
              <span className="text-white ml-1">May 1, 2026</span>
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="mb-[24px] max-w-[613px] text-[36px] md:text-[56px] font-medium leading-[1.28] tracking-tight text-gradient-hero animate-fade-in-up delay-100">
          Web3 at the Speed of Experience
        </h1>

        {/* Subtitle */}
        <p className="mb-[40px] max-w-[680px] text-[15px] font-normal leading-relaxed text-white/70 animate-fade-in-up delay-200">
          Powering seamless experiences and real-time connections, EOS is the base for creators who move with purpose, leveraging resilience, speed, and scale to shape the future.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-up delay-300">
          <GlowButton text="Join Waitlist" variant="light" onClick={onJoinClick} />
        </div>

      </div>
    </section>
  );
};

export default Hero;