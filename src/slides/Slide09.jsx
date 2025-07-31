import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ShoppingCart, Users, Repeat, TrendingUp, Target, Globe, Award } from 'lucide-react';

const Slide09 = () => {
  const revenueStreams = [
    {
      title: "Direct-to-Consumer Sales",
      description: "Online store with premium products and subscription options",
      percentage: "70%",
      amount: "$420K Annual",
      icon: ShoppingCart,
      color: "primary"
    },
    {
      title: "Subscription Boxes",
      description: "Monthly beauty boxes with curated product selections",
      percentage: "20%",
      amount: "$120K Annual",
      icon: Repeat,
      color: "secondary"
    },
    {
      title: "Wholesale & Retail",
      description: "Beauty stores, salons, and boutique partnerships",
      percentage: "10%",
      amount: "$60K Annual",
      icon: Users,
      color: "accent"
    }
  ];

  const growthMetrics = [
    { label: "Monthly Revenue Growth", value: "15%", trend: "up" },
    { label: "Customer Acquisition Cost", value: "$18", trend: "down" },
    { label: "Customer Lifetime Value", value: "$180", trend: "up" },
    { label: "Gross Margin", value: "68%", trend: "stable" }
  ];

  return (
    <div className="slide-container bg-gradient-to-br from-accent-50 to-earth-50">
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-accent-100 px-4 py-2 rounded-full text-accent-800 mb-6">
            <DollarSign className="w-5 h-5" />
            <span className="font-semibold">Slide 09</span>
          </div>
          
          <h1 className="slide-title">
            Business Model
          </h1>
          
          <p className="slide-subtitle max-w-4xl mx-auto">
            Our revenue streams and scalable approach to building a sustainable beauty business.
          </p>
        </motion.div>

        {/* Revenue Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <div className="card bg-gradient-to-r from-accent-600 to-earth-600 text-white text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">$600K</div>
                <div className="text-accent-100">Annual Revenue Target</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">68%</div>
                <div className="text-accent-100">Gross Margin</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5,000</div>
                <div className="text-accent-100">Active Customers</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Business Model Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="card bg-white/90 backdrop-blur-sm max-w-2xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-accent-200 to-earth-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <p className="text-accent-800 font-semibold text-lg">Business Model Diagram</p>
                <p className="text-accent-600 text-sm">Revenue Streams & Growth Strategy</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Revenue Streams */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {revenueStreams.map((stream, index) => {
            const IconComponent = stream.icon;
            return (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.15, duration: 0.8 }}
              >
                <div className="card bg-white/90 backdrop-blur-sm h-full">
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-${stream.color}-100 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                      <IconComponent className={`w-8 h-8 text-${stream.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-primary-800 mb-3">{stream.title}</h3>
                    <p className="text-neutral-700 mb-4 leading-relaxed">{stream.description}</p>
                    
                    <div className="space-y-2">
                      <div className={`text-3xl font-bold text-${stream.color}-600`}>{stream.percentage}</div>
                      <div className="text-neutral-600 text-sm">of total revenue</div>
                      <div className={`inline-flex items-center px-3 py-1 bg-${stream.color}-50 rounded-full`}>
                        <span className={`text-${stream.color}-700 font-semibold text-sm`}>{stream.amount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Growth Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-16"
        >
          <div className="card bg-gradient-to-br from-primary-100 to-earth-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Scalable Growth Strategy</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                Our business model is designed for sustainable growth with multiple revenue streams and strong unit economics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {growthMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className={`w-6 h-6 ${
                        metric.trend === 'up' ? 'text-green-600' : 
                        metric.trend === 'down' ? 'text-blue-600' : 'text-yellow-600'
                      }`} />
                    </div>
                    <div className="text-2xl font-bold text-primary-800 mb-1">{metric.value}</div>
                    <div className="text-neutral-600 text-sm">{metric.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Future Opportunities */}
        <motion.div
          className="pt-8 border-t border-accent-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Future Growth Opportunities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-white/80 backdrop-blur-sm text-center">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-primary-800 mb-2">International Expansion</h3>
              <p className="text-sm text-neutral-700">Enter European and Caribbean markets</p>
            </div>
            <div className="card bg-white/80 backdrop-blur-sm text-center">
              <Target className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-primary-800 mb-2">B2B Partnerships</h3>
              <p className="text-sm text-neutral-700">Salon chains and spa partnerships</p>
            </div>
            <div className="card bg-white/80 backdrop-blur-sm text-center">
              <Award className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <h3 className="font-bold text-primary-800 mb-2">Product Line Extensions</h3>
              <p className="text-sm text-neutral-700">Men's grooming and wellness products</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide09;