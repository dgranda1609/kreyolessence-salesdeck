import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, Heart } from 'lucide-react';

const Slide01 = () => {
  return (
    <div className="slide-container bg-gradient-to-br from-primary-50 to-earth-50">
      <div className="slide-content">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 pr-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <motion.div
                  className="inline-flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full text-primary-800 mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Sparkles className="w-5 h-5" />
                  <span className="font-semibold">Natural Beauty • Authentic Heritage</span>
                </motion.div>
                
                <h1 className="text-6xl lg:text-8xl font-chalet font-bold text-primary-800 mb-4">
                  Kreyol
                  <span className="text-primary-800"> Essence</span>
                </h1>
                
                <motion.p
                  className="text-2xl text-neutral-600 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Bridging traditional Haitian beauty wisdom with modern wellness needs
                </motion.p>
              </div>

              <motion.div
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800">100% Natural Ingredients</h3>
                    <p className="text-neutral-600">Authentic Haitian botanicals and traditional remedies</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800">Proven Results</h3>
                    <p className="text-neutral-600">Effective solutions for hair, skin, and nail health</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800">Cultural Heritage</h3>
                    <p className="text-neutral-600">Preserving and honoring Haitian beauty traditions</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <button className="btn-primary text-lg px-8 py-4">
                  Explore Our Story
                </button>
                <button className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                  View Products
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="flex-1 pl-12">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {/* Hero Image */}
              <div className="relative bg-gradient-to-br from-primary-200 to-earth-200 rounded-2xl p-8 shadow-strong">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
                  <img 
                    src="/images/kreyolessence-3x4-img-1.jpg"
                    alt="Kreyol Essence Haitian Black Castor Oil Products"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -left-4 w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0] 
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Leaf className="w-8 h-8 text-secondary-600" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0] 
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  <Heart className="w-8 h-8 text-accent-600" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 pt-8 border-t border-primary-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-800 mb-2">5K+</div>
              <div className="text-neutral-600">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-600 mb-2">15+</div>
              <div className="text-neutral-600">Natural Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-600 mb-2">100%</div>
              <div className="text-neutral-600">Authentic Heritage</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide01;