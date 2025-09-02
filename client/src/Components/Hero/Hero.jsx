import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
          <svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="giftPattern" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
                <rect width="300" height="300" fill="#f5f5f0"/>
                <g transform="translate(50,50)">
                  <rect x="0" y="0" width="80" height="80" fill="#e8e8e0" stroke="#d0d0c0" stroke-width="1"/>
                  <rect x="35" y="-5" width="10" height="90" fill="#f4c2a1"/>
                  <rect x="-5" y="35" width="90" height="10" fill="#f4c2a1"/>
                  <circle cx="40" cy="40" r="8" fill="#f4c2a1"/>
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#giftPattern)" opacity="0.7"/>
            <rect width="100%" height="100%" fill="rgba(240,240,240,0.3)"/>
          </svg>
        `)}')`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
          <span className="text-yellow-400 font-semibold">Eco-Friendly</span>
          <span className="text-gray-800 font-semibold">, Custom</span>
          <br />
          <span className="text-gray-800 font-semibold">Gift Wrapping in the</span>
          <br />
          <span className="text-teal-500 font-semibold">GTA</span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          We don't just wrap gifts — we create memorable experiences with
          sustainable elegance and personalized touches.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Book Now */}
          <Link
            to="footer"
            smooth={true}
            duration={600}
            offset={-80}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 min-w-[140px] cursor-pointer"
          >
            Book Now
          </Link>

          {/* Get a Quote */}
          <Link
            to="footer"
            smooth={true}
            duration={600}
            offset={-80}
            className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 min-w-[140px] cursor-pointer"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
