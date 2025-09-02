import React from 'react';
import { Gift, FileText, Zap, Package } from 'lucide-react';
import bag1 from '../../assets/bag1.png'
import bag2 from '../../assets/bag2.png'

const BHero = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      {/* Our Eco-Friendly Mission Section */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-light text-teal-600 mb-8">
              Our Eco-Friendly Mission
            </h2>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              At GTA Custom Gift Wrapping, we believe that beautiful presentation 
              shouldn't come at the cost of our planet. Every wrap tells a story of 
              sustainability and style.
            </p>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              We exclusively use recycled and biodegradable materials  from FSC-
              certified papers to organic cotton ribbons and natural plant-based 
              decorations. Our commitment extends beyond materials to local 
              sourcing and minimal waste practices.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="text-yellow-500 font-medium">Sustainability</span> and{' '}
              <span className="text-yellow-500 font-medium">gift wrapping</span> aren't just buzzwords they're the 
              foundation of every gift we wrap, creating meaningful moments while 
              protecting the environment for future generations.
            </p>
          </div>
          
          <div className="md:bg-gray-200 rounded-lg h-80 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <img src={bag1} alt='bag1' className='rounded-2xl'/>
            </div>
          </div>
        </div>
      </div>

      {/* Our Premium Services Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-teal-600 mb-6">
            Our Premium Services
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            From individual gifts to corporate events, we provide sustainable wrapping 
            solutions that make every present extraordinary.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Individual Gift Wrapping */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm border border-gray-200">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Individual Gift Wrapping
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Personalized wrapping for special occasions with eco-
              friendly materials and custom touches.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Sustainable materials</li>
              <li>• Custom designs</li>
              <li>• Same-day service</li>
              <li>• Personal consultation</li>
            </ul>
          </div>

          {/* Corporate & Bulk Contracts */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm border border-gray-200">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Corporate & Bulk Contracts
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Professional gift wrapping services for businesses with 
              custom branding and volume discounts.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Custom branding</li>
              <li>• Volume pricing</li>
              <li>• Scheduled delivery</li>
              <li>• Account management</li>
            </ul>
          </div>

          {/* Event Wrapping Services */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm border border-gray-200">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Event Wrapping Services
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              On-site wrapping for weddings, parties, and special events with 
              elegant presentation.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• On-site service</li>
              <li>• Event coordination</li>
              <li>• Themed designs</li>
              <li>• Setup included</li>
            </ul>
          </div>

          {/* DIY Kits & Workshops */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm border border-gray-200">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              DIY Kits & Workshops
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Learn sustainable wrapping techniques with our curated 
              eco-friendly supply kits and hands-on workshops.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Educational workshops</li>
              <li>• Supply kits</li>
              <li>• Technique guides</li>
              <li>• Group sessions</li>
            </ul>
          </div>
        </div>
        <section className="bg-gray-50 my-4 py-8  rounded-2xl">
      <div className="max-w-6xl px-6 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Corporate Excellence
          </h2>
          <p className="text-gray-700 mb-6">
            Elevate your corporate gifting with our premium wrapping services.
            Perfect for client appreciation, employee recognition, and seasonal
            celebrations.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Custom branded wrapping with your company colors
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Volume discounts for bulk orders
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Scheduled delivery and pickup services
            </li>
          </ul>
        </div>

        {/* Image Placeholder */}
        <div className="flex justify-center">
          <div className="rounded-2xl shadow-md overflow-hidden">
            <img
              src={bag2}
              alt="Corporate Gift Wrapping"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
      </div>
     
    </div>
  );
};

export default BHero;