import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden font-sans text-white">
       {/* Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
      </div>

      {/* Main Content Layer */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;