import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Rocket, DollarSign, Clock, Star, CheckCircle, ArrowRight, Crown, Heart } from 'lucide-react';

const Slide15 = () => {
  const investmentTiers = [
    {
      tier: "Strategic Partner",
      amount: "$250K+",
      equity: "8-12%",
      benefits: ["Board seat", "Strategic input", "Priority access", "Co-marketing opportunities"],
      color: "primary",
      recommended: true
    },
    {
      tier: "Growth Investor",
      amount: "$100K+",
      equity: "3-5%",
      benefits: ["Quarterly updates", "Product previews", "Investor events", "Exit participation"],
      color: "secondary",
      recommended: false
    },
    {
      tier: "Community Investor",
      amount: "$25K+",
      equity: "1-2%",
      benefits: ["Regular updates", "Product discounts", "Community access", "Recognition"],
      color: "accent",
      recommended: false
    }
  ];

  const nextSteps = [
    {
      step: "1",
      title: "Initial Discussion",
      description: "Schedule a 30-minute call to discuss your investment interests",
      timeline: "This week"
    },
    {
      step: "2",
      title: "Due Diligence",
      description: "Review detailed financials, legal documents, and market analysis",
      timeline: "1-2 weeks"
    },
    {
      step: "3",
      title: "Investment Decision",
      description: "Finalize investment terms and complete legal documentation",
      timeline: "2-3 weeks"
    },
    {
      step: "4",
      title: "Partnership Launch",
      description: "Welcome to the Kreyol Essence family and begin our journey together",
      timeline: "4 weeks"
    }
  ];

  const urgencyFactors = [
    {
      factor: "Limited Time Offer",
      description: "Current valuation expires December 31, 2024",
      icon: Clock,
      color: "red"
    },
    {
      factor: "Growing Demand",
      description: "24% monthly growth in customer acquisition",
      icon: Star,
      color: "green"
    },
    {
      factor: "Market Expansion",
      description: "International opportunities opening Q2 2025",
      icon: Rocket,
      color: "blue"
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
            <Phone className="w-5 h-5" />
            <span className="font-semibold">Slide 15</span>
          </div>
          
          <h1 className="slide-title">
            Call to Action
          </h1>
          
          <p className="slide-subtitle max-w-4xl mx-auto">
            Join us in revolutionizing the beauty industry with authentic, natural products that celebrate cultural heritage.
          </p>
        </motion.div>

        {/* Main Investment Proposition */}
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
            <h2 className="text-4xl font-bold mb-4">Invest in Authentic Beauty</h2>
            <p className="text-xl text-secondary-100 max-w-3xl mx-auto mb-8">
              This is your opportunity to be part of a revolutionary beauty brand that honors cultural heritage 
              while building a sustainable, profitable business with significant social impact.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">$750K</div>
                <div className="text-secondary-100">Total Raise Target</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">3.5x</div>
                <div className="text-secondary-100">Projected ROI</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">25%</div>
                <div className="text-secondary-100">Equity Available</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Investment Opportunity Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="card bg-white/90 backdrop-blur-sm max-w-4xl mx-auto overflow-hidden">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img 
                src="/images/2048x1546_1804 BANNER FINAL.jpg"
                alt="Kreyol Essence Investment Opportunity - Join the Beauty Revolution"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-transparent to-accent-900/90">
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white max-w-md">
                  <h3 className="text-4xl font-bold mb-3">Join the Revolution</h3>
                  <p className="text-lg mb-4">Growth Potential & ROI Visualization</p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3">
                      <div className="font-bold text-secondary-300 text-lg">$750K Investment</div>
                      <div>for 15% Equity Stake</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3">
                      <div className="font-bold text-accent-300 text-lg">10x+ ROI Potential</div>
                      <div>Over 3-5 Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Investment Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {investmentTiers.map((tier, index) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.15, duration: 0.8 }}
            >
              <div className={`card bg-white/90 backdrop-blur-sm h-full relative ${
                tier.recommended ? 'ring-2 ring-primary-400 ring-offset-2' : ''
              }`}>
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Recommended
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-${tier.color}-100 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <DollarSign className={`w-8 h-8 text-${tier.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-800 mb-2">{tier.tier}</h3>
                  <div className={`text-3xl font-bold text-${tier.color}-600 mb-1`}>{tier.amount}</div>
                  <div className="text-neutral-600">Investment Range</div>
                  <div className={`text-lg font-semibold text-${tier.color}-600 mt-2`}>{tier.equity} equity</div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary-800 mb-3">Benefits Include:</h4>
                  {tier.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className={`w-5 h-5 text-${tier.color}-600 flex-shrink-0`} />
                      <span className="text-neutral-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <button className={`w-full bg-${tier.color}-600 hover:bg-${tier.color}-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200`}>
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Urgency Factors */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-2">Why Invest Now?</h2>
            <p className="text-neutral-700">Key factors driving investment urgency</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {urgencyFactors.map((factor, index) => {
              const IconComponent = factor.icon;
              return (
                <motion.div
                  key={factor.factor}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                >
                  <div className="card bg-white/80 backdrop-blur-sm text-center">
                    <IconComponent className={`w-12 h-12 text-${factor.color}-600 mx-auto mb-3`} />
                    <h3 className="font-bold text-primary-800 mb-2">{factor.factor}</h3>
                    <p className="text-neutral-700 text-sm">{factor.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-2">Next Steps</h2>
            <p className="text-neutral-700">Simple process to join the Kreyol Essence investment opportunity</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {nextSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
              >
                <div className="card bg-white/90 backdrop-blur-sm text-center relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <h3 className="font-bold text-primary-800 mb-2">{step.title}</h3>
                  <p className="text-neutral-700 text-sm mb-3">{step.description}</p>
                  <div className="inline-flex items-center px-2 py-1 bg-primary-50 rounded-full">
                    <span className="text-primary-700 font-semibold text-xs">{step.timeline}</span>
                  </div>
                  
                  {index < nextSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-primary-400" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-center pt-8 border-t border-secondary-200"
        >
          <div className="card bg-gradient-to-r from-primary-100 to-secondary-100">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-16 h-16 text-secondary-600" />
            </div>
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Ready to Join Our Journey?</h2>
            <p className="text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
              Let's build something beautiful together. Invest in authenticity, heritage, and the future of natural beauty.
            </p>
            
            <div className="flex items-center justify-center space-x-6">
              <button className="btn-primary text-xl px-12 py-4 flex items-center space-x-2">
                <Phone className="w-6 h-6" />
                <span>Schedule Call</span>
              </button>
              <div className="text-left">
                <div className="font-semibold text-primary-800">Marie-Claire Dubois</div>
                <div className="text-neutral-600">Founder & CEO</div>
                <div className="text-secondary-600">marie@kreyolessence.com</div>
                <div className="text-secondary-600">(555) 123-4567</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide15;