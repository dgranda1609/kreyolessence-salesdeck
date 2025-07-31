import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Target, Users, Megaphone, Heart, Smartphone, Globe, TrendingUp } from 'lucide-react';

const Slide12 = () => {
  const marketingChannels = [
    {
      channel: "Social Media Marketing",
      budget: "40%",
      platforms: ["Instagram", "TikTok", "YouTube"],
      strategy: "Authentic storytelling, user-generated content, beauty tutorials",
      roi: "3.2x ROAS",
      icon: Smartphone,
      color: "primary"
    },
    {
      channel: "Influencer Partnerships",
      budget: "25%",
      platforms: ["Beauty Influencers", "Hair Stylists", "Cultural Creators"],
      strategy: "Partner with authentic voices in natural hair and cultural communities",
      roi: "4.1x ROAS",
      icon: Users,
      color: "secondary"
    },
    {
      channel: "Content Marketing",
      budget: "20%",
      platforms: ["Blog", "Email", "Educational Content"],
      strategy: "Hair care education, cultural heritage stories, ingredient spotlights",
      roi: "2.8x ROAS",
      icon: Megaphone,
      color: "accent"
    },
    {
      channel: "Community Events",
      budget: "15%",
      platforms: ["Hair Shows", "Cultural Events", "Pop-ups"],
      strategy: "Direct engagement, product trials, brand experience",
      roi: "5.2x ROAS",
      icon: Heart,
      color: "earth"
    }
  ];

  const customerJourney = [
    {
      stage: "Awareness",
      description: "Discovery through social media, influencers, and word-of-mouth",
      tactics: ["Instagram ads", "TikTok content", "Influencer partnerships"],
      metrics: "2M+ monthly impressions"
    },
    {
      stage: "Interest",
      description: "Learning about Haitian heritage and product benefits",
      tactics: ["Educational content", "Email nurturing", "Product demos"],
      metrics: "15% engagement rate"
    },
    {
      stage: "Consideration",
      description: "Comparing with competitors and reading reviews",
      tactics: ["Customer testimonials", "Comparison guides", "Free samples"],
      metrics: "68% add-to-cart rate"
    },
    {
      stage: "Purchase",
      description: "First purchase with special offer or starter kit",
      tactics: ["Welcome discount", "Bundle offers", "Free shipping"],
      metrics: "42% conversion rate"
    },
    {
      stage: "Retention",
      description: "Repeat purchases and brand advocacy",
      tactics: ["Loyalty program", "Subscription service", "Referral rewards"],
      metrics: "84% retention rate"
    }
  ];

  return (
    <div className="slide-container bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full text-primary-800 mb-6">
            <BarChart className="w-5 h-5" />
            <span className="font-semibold">Slide 12</span>
          </div>
          
          <h1 className="slide-title">
            Marketing Strategy
          </h1>
          
          <p className="slide-subtitle max-w-4xl mx-auto">
            Our comprehensive go-to-market plan and customer acquisition strategies.
          </p>
        </motion.div>

        {/* Marketing Budget Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <div className="card bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">$180K</div>
                <div className="text-primary-100">Annual Marketing Budget</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$18</div>
                <div className="text-primary-100">Customer Acquisition Cost</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">3.8x</div>
                <div className="text-primary-100">Average ROAS</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24%</div>
                <div className="text-primary-100">Monthly Growth Rate</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Marketing Strategy Visual */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="card bg-white/90 backdrop-blur-sm max-w-3xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-primary-200 to-secondary-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <BarChart className="w-10 h-10 text-white" />
                </div>
                <p className="text-primary-800 font-semibold text-lg">Marketing Funnel</p>
                <p className="text-primary-600 text-sm">Customer Journey & Acquisition Strategy</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Marketing Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {marketingChannels.map((channel, index) => {
            const IconComponent = channel.icon;
            return (
              <motion.div
                key={channel.channel}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.15, duration: 0.8 }}
              >
                <div className="card bg-white/90 backdrop-blur-sm h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-${channel.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-8 h-8 text-${channel.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-primary-800">{channel.channel}</h3>
                        <div className="text-right">
                          <div className={`text-2xl font-bold text-${channel.color}-600`}>{channel.budget}</div>
                          <div className="text-xs text-neutral-500">of budget</div>
                        </div>
                      </div>
                      <p className="text-neutral-700 mb-3 leading-relaxed">{channel.strategy}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-primary-800 text-sm mb-1">Platforms:</h4>
                          <div className="flex flex-wrap gap-2">
                            {channel.platforms.map((platform, i) => (
                              <span key={i} className={`px-2 py-1 bg-${channel.color}-50 text-${channel.color}-700 text-xs rounded-full`}>
                                {platform}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className={`inline-flex items-center px-3 py-1 bg-green-50 rounded-full`}>
                          <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-green-700 font-semibold text-sm">{channel.roi}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Customer Journey */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="pt-8 border-t border-primary-200"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-2">Customer Journey & Conversion Funnel</h2>
            <p className="text-neutral-700">How we guide customers from discovery to brand advocacy</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {customerJourney.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.6 }}
              >
                <div className="card bg-white/90 backdrop-blur-sm text-center h-full">
                  <div className={`w-12 h-12 bg-gradient-to-br from-primary-${index + 2}00 to-secondary-${index + 2}00 rounded-full mx-auto mb-3 flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="font-bold text-primary-800 mb-2 text-lg">{stage.stage}</h3>
                  <p className="text-neutral-700 text-sm mb-3 leading-relaxed">{stage.description}</p>
                  
                  <div className="space-y-2">
                    <div className="text-xs text-neutral-500">Key Tactics:</div>
                    {stage.tactics.slice(0, 2).map((tactic, i) => (
                      <div key={i} className="text-xs text-neutral-600">• {tactic}</div>
                    ))}
                    
                    <div className="inline-flex items-center px-2 py-1 bg-primary-50 rounded-full mt-2">
                      <span className="text-primary-700 font-semibold text-xs">{stage.metrics}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide12;