import React from 'react';
import { Target, Calendar, MousePointer } from 'lucide-react';
import { Link } from 'react-scroll';


const How = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-teal-600 mb-6">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Our simple three-step process ensures your gifts receive the sustainable, elegant 
            treatment they deserve.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Step 01 */}
          <div className="text-center relative">
            {/* Step Number and Icon */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-medium mb-6">
                01
              </div>
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
            </div>
            
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Choose Your Style
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Browse our eco-friendly wrapping styles or work with our designers to create a custom 
              look that perfectly matches your vision and values.
            </p>
            
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Sustainable material selection</li>
              <li>• Color coordination</li>
              <li>• Custom design consultation</li>
              <li>• Style recommendations</li>
            </ul>

            {/* Connecting line - hidden on mobile */}
            <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gray-300 transform translate-x-6"></div>
          </div>

          {/* Step 02 */}
          <div className="text-center relative">
            {/* Step Number and Icon */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-medium mb-6">
                02
              </div>
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-teal-600" />
              </div>
            </div>
            
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Book Service or Order Online
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Schedule your wrapping service online or visit our studio. We offer flexible booking options 
              to fit your timeline and requirements.
            </p>
            
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Online booking system</li>
              <li>• Flexible scheduling</li>
              <li>• Rush service available</li>
              <li>• Studio consultations</li>
            </ul>

            {/* Connecting line - hidden on mobile */}
            <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gray-300 transform translate-x-6"></div>
          </div>

          {/* Step 03 */}
          <div className="text-center">
            {/* Step Number and Icon */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-medium mb-6">
                03
              </div>
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <MousePointer className="w-6 h-6 text-teal-600" />
              </div>
            </div>
            
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Delivery or On-Site Wrapping
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Choose between our convenient delivery service or on-site wrapping for events. We 
              ensure your gifts arrive beautifully presented and on time.
            </p>
            
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Timely delivery service</li>
              <li>• On-site event wrapping</li>
              <li>• Professional presentation</li>
              <li>• Quality guarantee</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-100 rounded-2xl py-12 px-8 text-center">
          <h3 className="text-2xl font-light text-teal-600 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Transform your gifts into memorable experiences with our eco-friendly wrapping services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="footer"
            smooth={true}
            duration={600}
            offset={-80}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 min-w-[140px] cursor-pointer"
          >
            Book Your Service
          </Link>
          <Link
            to="footer"
            smooth={true}
            duration={600}
            offset={-80}
            className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 cursor-pointer hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
          >
             Get Custom Quote
          </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;