import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Crown, Shield, Award, Target, CheckCircle, X, Star, TrendingUp } from 'lucide-react';

const Slide11 = () => {
  const competitors = [
    {
      name: "Kreyol Essence",
      position: "us",
      marketShare: "Emerging Leader",
      strengths: ["Authentic Heritage", "Pure Ingredients", "Social Impact", "Premium Quality"],
      pricing: "Premium ($20-35)",
      rating: 4.8,
      differentiator: "Only authentic Haitian beauty brand"
    },
    {
      name: "SheaMoisture",
      position: "major",
      marketShare: "Market Leader",
      strengths: ["Brand Recognition", "Wide Distribution", "Product Range"],
      pricing: "Mid-range ($8-25)",
      rating: 4.2,
      differentiator: "Mass market natural hair care"
    },
    {
      name: "Carol's Daughter",
      position: "major",
      marketShare: "Established Player",
      strengths: ["Celebrity Endorsement", "Retail Presence", "Marketing"],
      pricing: "Mid-range ($12-30)",
      rating: 4.0,
      differentiator: "Celebrity-backed brand"
    },
    {
      name: "Mielle Organics",
      position: "competitor",
      marketShare: "Growing Brand",
      strengths: ["Organic Focus", "Social Media", "Innovation"],
      pricing: "Mid-range ($10-28)",
      rating: 4.3,
      differentiator: "Organic formulations"
    }
  ];

  const competitiveAdvantages = [
    {
      advantage: "Authentic Cultural Heritage",
      description: "Only brand with genuine 500+ year Haitian beauty traditions",
      impact: "Unmatched authenticity and storytelling",
      icon: Crown,
      color: "secondary"
    },
    {
      advantage: "Direct Source Ingredients",
      description: "Ingredients sourced directly from Haitian farmers and cooperatives",
      impact: "Superior quality and social impact",
      icon: Shield,
      color: "primary"
    },
    {
      advantage: "Premium Positioning",
      description: "Luxury experience with authentic natural ingredients",
      impact: "Higher margins and customer loyalty",
      icon: Award,
      color: "accent"
    },
    {
      advantage: "Community Impact",
      description: "Every purchase supports Haitian farmers and families",
      impact: "Strong brand purpose and differentiation",
      icon: Target,
      color: "earth"
    }
  ];

  return (
    <div className="slide-container bg-gradient-to-br from-green-50 to-accent-50">
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full text-green-800 mb-6">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">Slide 11</span>
          </div>
          
          <h1 className="slide-title">
            Competitive Landscape
          </h1>
          
          <p className="slide-subtitle max-w-4xl mx-auto">
            How we position ourselves against competitors and our unique advantages in the market.
          </p>
        </motion.div>

        {/* Market Position Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <div className="card bg-gradient-to-r from-green-600 to-accent-600 text-white text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">$12B</div>
                <div className="text-green-100">Natural Hair Care Market</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15%</div>
                <div className="text-green-100">Annual Growth Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">#1</div>
                <div className="text-green-100">Authentic Haitian Brand</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Competitive Landscape Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="card bg-white/90 backdrop-blur-sm max-w-2xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-green-200 to-accent-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <p className="text-green-800 font-semibold text-lg">Market Position Chart</p>
                <p className="text-green-600 text-sm">Competitive Analysis & Positioning</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Competitive Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-2">Competitive Comparison</h2>
            <p className="text-neutral-700">How we stack up against major players in the natural hair care market</p>
          </div>
          
          <div className="overflow-x-auto">
            <div className="min-w-full">
              <div className="grid grid-cols-1 gap-4">
                {competitors.map((competitor, index) => (
                  <motion.div
                    key={competitor.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                  >
                    <div className={`card ${
                      competitor.position === 'us' 
                        ? 'bg-gradient-to-r from-primary-100 to-secondary-100 ring-2 ring-primary-300' 
                        : 'bg-white/90 backdrop-blur-sm'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                            competitor.position === 'us' 
                              ? 'bg-primary-600 text-white' 
                              : 'bg-neutral-200 text-neutral-600'
                          }`}>
                            {competitor.position === 'us' ? (
                              <Crown className="w-8 h-8" />
                            ) : (
                              <span className="font-bold text-lg">{competitor.name.charAt(0)}</span>
                            )}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-primary-800">{competitor.name}</h3>
                            <p className="text-neutral-600 text-sm">{competitor.marketShare}</p>
                            <div className="flex items-center space-x-1 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-3 h-3 ${
                                  i < Math.floor(competitor.rating) 
                                    ? 'text-yellow-500 fill-current' 
                                    : 'text-gray-300'
                                }`} />
                              ))}
                              <span className="text-sm text-neutral-600 ml-1">({competitor.rating})</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-lg font-semibold text-primary-800 mb-1">{competitor.pricing}</div>
                          <div className="text-sm text-neutral-600 max-w-48">{competitor.differentiator}</div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-neutral-200">
                        <div className="flex flex-wrap gap-2">
                          {competitor.strengths.map((strength, i) => (
                            <span key={i} className={`px-3 py-1 text-sm rounded-full ${
                              competitor.position === 'us'
                                ? 'bg-primary-50 text-primary-700'
                                : 'bg-neutral-100 text-neutral-700'
                            }`}>
                              {strength}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Our Competitive Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="pt-8 border-t border-green-200"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-2">Our Unique Competitive Advantages</h2>
            <p className="text-neutral-700">What sets Kreyol Essence apart in the marketplace</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {competitiveAdvantages.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.advantage}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.15, duration: 0.8 }}
                >
                  <div className="card bg-white/90 backdrop-blur-sm">
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className={`w-8 h-8 text-${item.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary-800 mb-2">{item.advantage}</h3>
                        <p className="text-neutral-700 mb-3 leading-relaxed">{item.description}</p>
                        <div className={`inline-flex items-center px-3 py-1 bg-${item.color}-50 rounded-full`}>
                          <TrendingUp className={`w-4 h-4 text-${item.color}-600 mr-2`} />
                          <span className={`text-${item.color}-700 font-semibold text-sm`}>{item.impact}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide11;