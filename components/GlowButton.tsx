import React from 'react';

interface GlowButtonProps {
  text: string;
  variant?: 'dark' | 'light';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const GlowButton: React.FC<GlowButtonProps> = ({ text, variant = 'dark', onClick, className = '', type = 'button' }) => {
  const isDark = variant === 'dark';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group relative rounded-full p-[0.6px] transition-transform active:scale-95 ${className}`}
      style={{
        background: isDark 
          ? 'linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)' 
          : 'linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)'
      }}
    >
      {/* Inner Button Background */}
      <div 
        className={`
          relative flex items-center justify-center rounded-full 
          px-[29px] py-[11px] 
          ${isDark ? 'bg-black' : 'bg-white'}
        `}
      >
        {/* Top Glow/Streak Effect */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-white blur-[2px] opacity-70"
        />
        
        {/* Text */}
        <span 
          className={`
            text-[14px] font-medium leading-none
            ${isDark ? 'text-white' : 'text-black'}
          `}
        >
          {text}
        </span>
      </div>
    </button>
  );
};

export default GlowButton;