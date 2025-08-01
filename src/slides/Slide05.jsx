import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, CheckCircle, Zap, Shield, Award } from 'lucide-react';

const Slide05 = () => {
  return (
    <div className="slide-container bg-gradient-to-br from-primary-50 to-earth-50">
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full text-primary-800 mb-6">
            <Lightbulb className="w-5 h-5" />
            <span className="font-semibold">Slide 05</span>
          </div>
          
          <h1 className="slide-title">
            Our Solution
          </h1>
          
          <p className="slide-subtitle max-w-4xl mx-auto">
            Natural, authentic products that bridge traditional Haitian remedies with modern wellness needs.
          </p>
        </motion.div>

        {/* Main Solution Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <div className="card bg-gradient-to-r from-primary-600 to-earth-600 text-white text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Premium Natural Hair & Beauty Care</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We transform centuries-old Haitian botanical wisdom into scientifically-backed, 
              premium beauty products that deliver authentic results for modern consumers.
            </p>
          </div>
        </motion.div>

        {/* Hero Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="card bg-white/90 backdrop-blur-sm max-w-3xl mx-auto overflow-hidden">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img 
                src="/images/sos aloe.jpg"
                alt="Kreyol Essence SOS Hair Serum with Aloe - Premium Natural Hair Care"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">SOS Hair Serum</h3>
                  <p className="text-xl">Powered by Authentic Haitian Black Castor Oil</p>
                  <div className="mt-4 inline-flex items-center bg-primary-600 px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold">Natural • Effective • Heritage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Solution Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="card bg-white/80 backdrop-blur-sm h-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">Authentic Formulations</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Every product contains genuine Haitian black castor oil and traditional botanicals, 
                  sourced directly from local farmers and cooperatives.
                </p>
                <ul className="text-left space-y-2 text-sm text-neutral-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    <span>100% pure Haitian black castor oil</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    <span>Organic coconut and hibiscus oils</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    <span>No synthetic additives or fillers</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="card bg-white/80 backdrop-blur-sm h-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">Proven Results</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Clinical testing and thousands of customer testimonials validate the effectiveness 
                  of our traditional remedies for hair growth and scalp health.
                </p>
                <ul className="text-left space-y-2 text-sm text-neutral-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-secondary-600" />
                    <span>Promotes faster hair growth</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-secondary-600" />
                    <span>Strengthens hair follicles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-secondary-600" />
                    <span>Reduces breakage and damage</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="card bg-white/80 backdrop-blur-sm h-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">Premium Experience</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Beautiful packaging, educational content, and exceptional customer service 
                  create a luxury experience that honors our cultural heritage.
                </p>
                <ul className="text-left space-y-2 text-sm text-neutral-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent-600" />
                    <span>Sustainable, eco-friendly packaging</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent-600" />
                    <span>Cultural education and tips</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent-600" />
                    <span>Personalized beauty guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Call-to-Action */}
        <motion.div
          className="text-center pt-8 border-t border-primary-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <div className="card bg-gradient-to-r from-earth-100 to-primary-100">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-primary-800 mb-2">Ready to Transform Your Hair?</h3>
                <p className="text-neutral-700">Join thousands who have discovered the power of authentic Haitian beauty traditions.</p>
              </div>
              <div className="flex space-x-4">
                <button className="btn-primary text-lg px-8 py-4">
                  Shop Now
                </button>
                <button className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide05;