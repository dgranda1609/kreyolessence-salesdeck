import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Calendar, Award, Heart, MapPin, Star } from 'lucide-react';

const Slide10 = () => {
  const tractionMetrics = [
    {
      metric: "Monthly Revenue",
      current: "$52K",
      growth: "+18%",
      period: "Last 3 months",
      icon: TrendingUp,
      color: "primary"
    },
    {
      metric: "Active Customers",
      current: "5,200",
      growth: "+24%",
      period: "Month over month",
      icon: Users,
      color: "secondary"
    },
    {
      metric: "Customer Retention",
      current: "84%",
      growth: "+6%",
      period: "Quarterly improvement",
      icon: Target,
      color: "accent"
    },
    {
      metric: "Average Order Value",
      current: "$67",
      growth: "+12%",
      period: "Year over year",
      icon: Award,
      color: "earth"
    }
  ];

  const partnerships = [
    {
      name: "Whole Foods Market",
      type: "Retail Partnership",
      status: "Active in 25 stores",
      impact: "15% of revenue"
    },
    {
      name: "Curly Hair Collective",
      type: "Influencer Network",
      status: "50+ beauty influencers",
      impact: "2M+ reach"
    },
    {
      name: "Haitian Women's Foundation",
      type: "Social Impact",
      status: "Supporting 200+ families",
      impact: "Community impact"
    }
  ];

  const milestones = [
    { date: "Q1 2024", achievement: "Reached 1,000 customers", status: "completed" },
    { date: "Q2 2024", achievement: "Launched subscription service", status: "completed" },
    { date: "Q3 2024", achievement: "Whole Foods partnership secured", status: "completed" },
    { date: "Q4 2024", achievement: "5,000 customers milestone", status: "completed" },
    { date: "Q1 2025", achievement: "International shipping launch", status: "in-progress" },
    { date: "Q2 2025", achievement: "10,000 customers target", status: "planned" }
  ];

  return (
    <div className="slide-container bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-secondary-100 px-4 py-2 rounded-full text-secondary-800 mb-6">
            <Target className="w-5 h-5" />
            <span className="font-semibold">Slide 10</span>
          </div>
          
          <h1 className="slide-title">
            Market Traction
          </h1>
          
          <p className="slide-subtitle max-w-4xl mx-auto">
            Our growth metrics, customer acquisition, and key partnerships that demonstrate market validation.
          </p>
        </motion.div>

        {/* Market Traction Visual */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="card bg-white/90 backdrop-blur-sm max-w-4xl mx-auto overflow-hidden">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img 
                src="/images/SOS Spot Treatment _ Lifestyle_7.jpg"
                alt="Kreyol Essence Market Traction - Customer Using Products"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-transparent to-primary-900/90">
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white max-w-md">
                  <h3 className="text-4xl font-bold mb-4">Explosive Growth</h3>
                  <p className="text-xl mb-6">200% revenue increase in 6 months</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <div className="font-bold text-secondary-300">$52K</div>
                      <div>Monthly Revenue</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <div className="font-bold text-primary-300">5,200+</div>
                      <div>Active Customers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Growth Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tractionMetrics.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <div className="card bg-white/90 backdrop-blur-sm text-center h-full">
                  <IconComponent className={`w-12 h-12 text-${item.color}-600 mx-auto mb-3`} />
                  <div className={`text-3xl font-bold text-${item.color}-600 mb-2`}>{item.current}</div>
                  <div className="text-neutral-800 font-semibold mb-1">{item.metric}</div>
                  <div className="text-green-600 font-semibold text-sm mb-1">{item.growth}</div>
                  <div className="text-neutral-500 text-xs">{item.period}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-2">Strategic Partnerships</h2>
            <p className="text-neutral-700">Key relationships driving our growth and market presence</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.15, duration: 0.8 }}
              >
                <div className="card bg-white/90 backdrop-blur-sm">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-primary-800 mb-1">{partner.name}</h3>
                      <p className="text-accent-600 text-sm font-medium mb-2">{partner.type}</p>
                      <p className="text-neutral-700 text-sm mb-2">{partner.status}</p>
                      <div className="inline-flex items-center px-3 py-1 bg-green-50 rounded-full">
                        <span className="text-green-700 font-semibold text-xs">{partner.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Growth Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="pt-8 border-t border-secondary-200"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-2">Growth Milestones</h2>
            <p className="text-neutral-700">Our journey from startup to market leader</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.date}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
              >
                <div className={`card bg-white/80 backdrop-blur-sm border-l-4 ${
                  milestone.status === 'completed' ? 'border-green-500' :
                  milestone.status === 'in-progress' ? 'border-yellow-500' : 'border-gray-300'
                }`}>
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      milestone.status === 'completed' ? 'bg-green-500' :
                      milestone.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-300'
                    }`}></div>
                    <div>
                      <div className="font-semibold text-primary-800 text-sm">{milestone.date}</div>
                      <div className="text-neutral-700 text-sm">{milestone.achievement}</div>
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

export default Slide10;