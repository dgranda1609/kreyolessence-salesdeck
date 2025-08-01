import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Users, DollarSign, Target, Zap } from 'lucide-react';

const Slide03 = () => {
  const marketData = [
    {
      segment: "Natural & Organic Beauty",
      size: "$25.1B",
      growth: "+7.8%",
      color: "bg-primary-500"
    },
    {
      segment: "Hair Care Products",
      size: "$87.9B",
      growth: "+3.9%",
      color: "bg-secondary-500"
    },
    {
      segment: "Multicultural Beauty",
      size: "$54.4B",
      growth: "+4.6%",
      color: "bg-accent-500"
    },
    {
      segment: "Wellness & Supplements",
      size: "$151.9B",
      growth: "+8.2%",
      color: "bg-earth-500"
    }
  ];

  const opportunities = [
    {
      icon: Users,
      title: "Underserved Demographics",
      description: "Growing multicultural population seeking authentic products",
      market: "$54.4B+ market"
    },
    {
      icon: Globe,
      title: "Cultural Heritage Trend",
      description: "Increasing consumer interest in traditional remedies",
      market: "Rising demand"
    },
    {
      icon: Zap,
      title: "Natural Product Demand",
      description: "73% of consumers actively seeking natural alternatives",
      market: "$25.1B market"
    }
  ];

  return (
    <div className="slide-container bg-gradient-to-br from-green-50 to-blue-50">
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full text-green-800 mb-6">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">Market Opportunity</span>
          </div>
          
          <h1 className="slide-title text-green-800">
            A $532 Billion Market Opportunity
          </h1>
          
          <p className="slide-subtitle max-w-4xl mx-auto">
            The global beauty market is experiencing unprecedented growth, with natural products and multicultural segments leading the way.
          </p>
        </motion.div>

        {/* Market Segments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {marketData.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="card hover:shadow-strong transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-neutral-800 text-lg">{segment.segment}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600 font-bold text-sm bg-green-100 px-2 py-1 rounded">
                    {segment.growth}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 ${segment.color} rounded-full flex items-center justify-center`}>
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-neutral-800">{segment.size}</div>
                  <div className="text-neutral-600 text-sm">Market Size</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Opportunities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (0.2 * index), duration: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-green-800 text-xl mb-2">{opportunity.title}</h3>
                <p className="text-neutral-700 mb-3">{opportunity.description}</p>
                <div className="text-green-600 font-bold text-sm bg-green-100 px-3 py-1 rounded-full inline-block">
                  {opportunity.market}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Product Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-strong">
            <img 
              src="/images/Banner New Products ALL NEW PRODUCTS AND FLOWERS.jpg"
              alt="Kreyol Essence All New Products with Natural Flowers"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent">
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white max-w-md">
                <h3 className="text-4xl font-bold mb-4">Natural Heritage</h3>
                <p className="text-xl mb-6">Authentic Haitian botanicals meeting modern wellness needs</p>
                <div className="text-2xl font-bold text-green-300">$79B Addressable Market</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Total Addressable Market */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Our Total Addressable Market</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold mb-2">$532B</div>
              <div className="text-green-100">Total Beauty Market</div>
              <div className="text-sm text-green-200 mt-2">Global opportunity</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">$79B</div>
              <div className="text-green-100">Serviceable Market</div>
              <div className="text-sm text-green-200 mt-2">Natural + Multicultural</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">$12B</div>
              <div className="text-green-100">Serviceable Obtainable</div>
              <div className="text-sm text-green-200 mt-2">Immediate opportunity</div>
            </div>
          </div>
        </motion.div>

        {/* Growth Drivers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-green-800 mb-6">Market Growth Drivers</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Increasing health consciousness",
              "Growing multicultural demographics",
              "Rising demand for authentic products",
              "Social media influence",
              "Clean beauty movement",
              "Cultural heritage appreciation"
            ].map((driver, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + (index * 0.1), duration: 0.4 }}
                className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {driver}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide03;