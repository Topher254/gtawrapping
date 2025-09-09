import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    projectDetails: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ success: true, message: data.message });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          serviceType: '',
          projectDetails: ''
        });
      } else {
        setSubmitStatus({ success: false, message: data.message });
      }
    } catch (error) {
      setSubmitStatus({ 
        success: false, 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-teal-600 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
              Let's Create Something<br />
              Beautiful Together
            </h2>
            
            <p className="text-teal-100 text-lg mb-12 leading-relaxed max-w-md">
              Ready to transform your gifts into eco-friendly works of art? Get 
              in touch for a personalized quote or to book our premium 
              wrapping services.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 mt-1">
                  <Mail className="w-6 h-6 text-teal-200" />
                </div>
                <div>
                  <div className="text-teal-100 text-sm font-medium mb-1">Email Us</div>
                  <div className="text-white">gtawrapping@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 mt-1">
                  <Phone className="w-6 h-6 text-teal-200" />
                </div>
                <div>
                  <div className="text-teal-100 text-sm font-medium mb-1">Call Us</div>
                  <div className="text-white">+1(416) 2873380</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 mt-1">
                  <MapPin className="w-6 h-6 text-teal-200" />
                </div>
                <div>
                  <div className="text-teal-100 text-sm font-medium mb-1">Service Area</div>
                  <div className="text-white">Toronto </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 mt-1">
                  <Clock className="w-6 h-6 text-teal-200" />
                </div>
                <div>
                  <div className="text-teal-100 text-sm font-medium mb-1">Business Hours</div>
                  <div className="text-white">Mon-Fri: 9AM-7PM | Sat-Sun: 10AM-5PM</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <div className="text-teal-100 text-sm font-medium mb-4">Follow Our Journey</div>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-400 transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-400 transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Quote Form */}
          <div className="bg-teal-500 rounded-2xl p-8">
            <h3 className="text-2xl font-light text-white mb-8">Get Your Quote</h3>
            
            {/* Status Message */}
            {submitStatus.message && (
              <div 
                className={`mb-6 p-4 rounded-md ${
                  submitStatus.success 
                    ? 'bg-green-100 text-green-700 border border-green-200' 
                    : 'bg-red-100 text-red-700 border border-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-teal-100 text-sm mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    required
                    className="w-full px-4 py-3 bg-teal-400 bg-opacity-50 border border-teal-400 rounded-md text-white placeholder-teal-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-teal-100 text-sm mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    required
                    className="w-full px-4 py-3 bg-teal-400 bg-opacity-50 border border-teal-400 rounded-md text-white placeholder-teal-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-teal-100 text-sm mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 bg-teal-400 bg-opacity-50 border border-teal-400 rounded-md text-white placeholder-teal-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-teal-100 text-sm mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(416) 555-0123"
                  className="w-full px-4 py-3 bg-teal-400 bg-opacity-50 border border-teal-400 rounded-md text-white placeholder-teal-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-teal-100 text-sm mb-2">Service Type *</label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-teal-400 bg-opacity-50 border border-teal-400 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                >
                  <option value="" disabled className="text-gray-800">Select a service</option>
                  <option value="individual" className="text-gray-800">Individual Gift Wrapping</option>
                  <option value="corporate" className="text-gray-800">Corporate & Bulk Contracts</option>
                  <option value="events" className="text-gray-800">Event Wrapping Services</option>
                  <option value="diy" className="text-gray-800">DIY Kits & Workshops</option>
                </select>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-teal-100 text-sm mb-2">Project Details</label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your project, timeline, and any special requirements..."
                  className="w-full px-4 py-3 bg-teal-400 bg-opacity-50 border border-teal-400 rounded-md text-white placeholder-teal-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-teal-600 py-3 px-6 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Send Quote Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;