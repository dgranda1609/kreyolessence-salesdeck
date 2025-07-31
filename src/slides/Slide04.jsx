import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Sparkles, Star, Leaf, Heart } from 'lucide-react';

const Slide04 = () => {
  return (
    <div className="slide-container bg-gradient-to-br from-accent-50 to-secondary-50">
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-accent-100 px-4 py-2 rounded-full text-accent-800 mb-6">
            <Globe className="w-5 h-5" />
            <span className="font-semibold">Slide 04</span>
          </div>
          
          <h1 className="slide-title">
            Cultural Context & Heritage
          </h1>
          
          <p className="slide-subtitle max-w-4xl mx-auto">
            The rich tradition of Haitian beauty wisdom and natural remedies that form the foundation of our authentic products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="space-y-8">
              <div className="card bg-white/80 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-800 mb-2">Generational Wisdom</h3>
                    <p className="text-neutral-700 leading-relaxed">
                      For centuries, Haitian women have passed down beauty secrets using indigenous botanicals 
                      like castor oil, coconut oil, and herbal infusions to maintain healthy hair, skin, and nails.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card bg-white/80 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-8 h-8 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-800 mb-2">Natural Ingredients</h3>
                    <p className="text-neutral-700 leading-relaxed">
                      Haiti's tropical climate produces potent botanicals - from black castor beans to 
                      hibiscus flowers - that have been scientifically proven to nourish and strengthen hair.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card bg-white/80 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-800 mb-2">Cultural Pride</h3>
                    <p className="text-neutral-700 leading-relaxed">
                      Our products celebrate and preserve Haitian heritage while making these time-tested 
                      remedies accessible to the global community seeking authentic, natural beauty solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Heritage Image */}
            <div className="card bg-gradient-to-br from-secondary-100 to-accent-100 relative overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-secondary-200 to-accent-200 rounded-xl flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="w-20 h-20 bg-secondary-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-secondary-800 font-semibold">Heritage Image</p>
                  <p className="text-secondary-600 text-sm">Traditional Haitian Beauty</p>
                </div>
              </div>
            </div>
            
            {/* Cultural Timeline */}
            <div className="card bg-gradient-to-br from-accent-100 to-primary-100 relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-secondary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-800 mb-2">Haitian Beauty Heritage</h3>
                  <p className="text-neutral-700">Centuries of natural wisdom</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-white/60 rounded-lg">
                    <div className="w-3 h-3 bg-secondary-600 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-primary-800">Pre-Colonial Era</p>
                      <p className="text-sm text-neutral-600">Indigenous Taíno herbal traditions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white/60 rounded-lg">
                    <div className="w-3 h-3 bg-accent-600 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-primary-800">Colonial Period</p>
                      <p className="text-sm text-neutral-600">African botanical knowledge integration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white/60 rounded-lg">
                    <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-primary-800">Modern Era</p>
                      <p className="text-sm text-neutral-600">Scientific validation of traditional remedies</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 bg-secondary-200 rounded-full flex items-center justify-center opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-secondary-600" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Statistics */}
        <motion.div
          className="mt-16 pt-8 border-t border-accent-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="card bg-white/60 backdrop-blur-sm">
              <div className="text-3xl font-bold text-secondary-600 mb-2">500+</div>
              <div className="text-neutral-700">Years of Heritage</div>
              <div className="text-sm text-neutral-500">Traditional knowledge</div>
            </div>
            <div className="card bg-white/60 backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent-600 mb-2">25+</div>
              <div className="text-neutral-700">Native Botanicals</div>
              <div className="text-sm text-neutral-500">Used in our formulations</div>
            </div>
            <div className="card bg-white/60 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-neutral-700">Cultural Influences</div>
              <div className="text-sm text-neutral-500">Taíno, African, French</div>
            </div>
            <div className="card bg-white/60 backdrop-blur-sm">
              <div className="text-3xl font-bold text-earth-600 mb-2">100%</div>
              <div className="text-neutral-700">Authentic Recipes</div>
              <div className="text-sm text-neutral-500">Preserved traditions</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide04;