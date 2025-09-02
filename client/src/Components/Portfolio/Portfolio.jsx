import React from 'react';
import { Gift } from 'lucide-react';
import bag2 from '../../assets/bag2.png'
import bag5 from '../../assets/bag5.jpg'
import { Link } from 'react-scroll';

const Portfolio = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-teal-600 mb-6">
            Our Elegant Portfolio
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Each wrap is a work of art, crafted with sustainable materials and designed to 
            create unforgettable moments.
          </p>
        </div>

        {/* Featured Collection */}
        <div className="mb-16">
  <div className="relative rounded-2xl overflow-hidden">
    {/* Full-width image */}
    <img 
      src={bag5} 
      alt="bag2" 
      className="w-full h-80 object-cover" 
    />

    {/* Overlay Text */}
    <div className="absolute bottom-8 left-8 text-white">
      <h3 className="text-2xl font-light mb-2">Featured Collection</h3>
      <p className="text-lg opacity-90">Sustainable luxury meets artistic expression</p>
    </div>
  </div>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
  {/* Elegant Wedding Favors */}
  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
    <div className="p-6">
      <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
        
      <p className=' bg-yellow-100 p-2 w-fit rounded-full'>Weddings</p>
      </div>
      <h3 className="text-xl font-medium text-gray-800 mb-3">Elegant Wedding Favors</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        Sustainable kraft paper with dried lavender and organic cotton ribbons
      </p>
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  </div>

  {/* Corporate Holiday Gifts */}
  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
    <div className="p-6">
      <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
        <p className=' bg-yellow-100 p-2 w-fit rounded-full'>Corporate</p></div>
      <h3 className="text-xl font-medium text-gray-800 mb-3">Corporate Holiday Gifts</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        Custom branded eco-packaging with company colors and wax seals
      </p>
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  </div>

  {/* Birthday Celebration Set */}
  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
    <div className="p-6">
      <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
      <p className=' bg-yellow-100 p-2 w-fit rounded-full'>Celebrations</p>
      </div>
      <h3 className="text-xl font-medium text-gray-800 mb-3">Birthday Celebration Set</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        Recycled paper in sage tones with natural jute accents
      </p>
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  </div>

  {/* Luxury Product Launch */}
  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
    <div className="p-6">
      <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
      <p className=' bg-yellow-100 p-2 w-fit rounded-full'>Events</p></div>
      <h3 className="text-xl font-medium text-gray-800 mb-3">Luxury Product Launch</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        Premium linen texture with gold foil and eucalyptus details
      </p>
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  </div>

  {/* Baby Shower Collection */}
  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
    <div className="p-6">
      <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
      <p className=' bg-yellow-100 p-2 w-fit rounded-full'>Baby</p></div>
      <h3 className="text-xl font-medium text-gray-800 mb-3">Baby Shower Collection</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        Soft organic cotton wrapping with pressed flower decorations
      </p>
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  </div>

  {/* Executive Gift Series */}
  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
    <div className="p-6">
      <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
      <p className=' bg-yellow-100 p-2 w-fit rounded-full'>Corporate</p></div>
      <h3 className="text-xl font-medium text-gray-800 mb-3">Executive Gift Series</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        Minimalist design with natural elements and sophisticated finishing
      </p>
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  </div>
</div>


        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-8">
            Ready to see your gifts transformed into works of art?
          </p>
          <Link
                     to="footer"
                     smooth={true}
                     duration={600}
                     offset={-80}
                     className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 min-w-[140px] cursor-pointer"
                   >
                     Book Now
                   </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;