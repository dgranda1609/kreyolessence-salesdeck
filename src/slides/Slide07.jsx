import React from 'react';
import { motion } from 'framer-motion';
import { Star, Crown, Shield, Zap, Globe, Heart, Award, CheckCircle } from 'lucide-react';

const Slide07 = () => {
  const valueProps = [
    {
      title: "Authentic Heritage",
      description: "Only brand with genuine Haitian beauty traditions passed down through generations",
      icon: Crown,
      color: "secondary",
      stats: "500+ years of wisdom"
    },
    {
      title: "Pure Ingredients",
      description: "100% natural, organic ingredients sourced directly from Haiti's indigenous farms",
      icon: Shield,
      color: "primary",
      stats: "0% synthetic additives"
    },
    {
      title: "Proven Results",
      description: "Clinically tested formulations with thousands of verified customer transformations",
      icon: Zap,
      color: "accent",
      stats: "95% customer satisfaction"
    },
    {
      title: "Cultural Impact",
      description: "Every purchase supports Haitian farmers and preserves traditional knowledge",
      icon: Globe,
      color: "earth",
      stats: "200+ families supported"
    }
  ];

  return (
    <div className="slide-container bg-gradient-to-br from-secondary-50 to-accent-50">
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-secondary-100 px-4 py-2 rounded-full text-secondary-800 mb-6">
            <Star className="w-5 h-5" />
            <span className="font-semibold">Slide 07</span>
          </div>
          
          <h1 className="slide-title">
            Unique Value Proposition
          </h1>
          
          <p className="slide-subtitle max-w-4xl mx-auto">
            What makes Kreyol Essence different from every other beauty brand in the market.
          </p>
        </motion.div>

        {/* Main Value Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <div className="card bg-gradient-to-r from-secondary-600 to-accent-600 text-white text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Crown className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">The Only Authentic Haitian Beauty Brand</h2>
            <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
              We don't just use natural ingredients – we preserve and honor centuries-old Haitian beauty wisdom 
              while creating premium products that deliver real results for modern consumers.
            </p>
          </div>
        </motion.div>

        {/* Brand Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="card bg-white/90 backdrop-blur-sm max-w-xl mx-auto">
            <div className="aspect-square bg-gradient-to-br from-secondary-200 to-accent-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Crown className="w-10 h-10 text-white" />
                </div>
                <p className="text-secondary-800 font-semibold text-lg">Brand Values Image</p>
                <p className="text-secondary-600 text-sm">Authentic Haitian Heritage</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Value Propositions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {valueProps.map((prop, index) => {
            const IconComponent = prop.icon;
            return (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.15, duration: 0.8 }}
              >
                <div className="card bg-white/90 backdrop-blur-sm h-full relative overflow-hidden">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-${prop.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-8 h-8 text-${prop.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary-800 mb-2">{prop.title}</h3>
                      <p className="text-neutral-700 leading-relaxed mb-4">{prop.description}</p>
                      <div className={`inline-flex items-center px-3 py-1 bg-${prop.color}-50 rounded-full`}>
                        <span className={`text-${prop.color}-700 font-semibold text-sm`}>{prop.stats}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative element */}
                  <div className={`absolute -top-2 -right-2 w-16 h-16 bg-${prop.color}-100 rounded-full opacity-20`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Competitive Advantages */}
        <motion.div
          className="pt-8 border-t border-secondary-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Why Customers Choose Kreyol Essence</h2>
            <p className="text-neutral-700 max-w-2xl mx-auto">Our unique combination of authenticity, quality, and impact sets us apart</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-white/80 backdrop-blur-sm text-center">
              <Award className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
              <h3 className="font-bold text-primary-800 mb-2">Premium Quality</h3>
              <p className="text-sm text-neutral-700">Luxury experience at accessible prices</p>
            </div>
            <div className="card bg-white/80 backdrop-blur-sm text-center">
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-3" />
              <h3 className="font-bold text-primary-800 mb-2">Social Impact</h3>
              <p className="text-sm text-neutral-700">Supporting Haitian communities with every purchase</p>
            </div>
            <div className="card bg-white/80 backdrop-blur-sm text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-primary-800 mb-2">Guaranteed Results</h3>
              <p className="text-sm text-neutral-700">30-day money-back guarantee on all products</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide07;