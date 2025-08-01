import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, DollarSign, Target, ArrowUp, BarChart, Users, Globe } from 'lucide-react';

const Slide13 = () => {
  const financialData = {
    currentYear: {
      year: "2024",
      revenue: "$600K",
      customers: "5,200",
      margin: "68%",
      growth: "Current"
    },
    projections: [
      {
        year: "2025",
        revenue: "$1.2M",
        customers: "12,000",
        margin: "70%",
        growth: "+100%"
      },
      {
        year: "2026",
        revenue: "$2.8M",
        customers: "28,000",
        margin: "72%",
        growth: "+133%"
      },
      {
        year: "2027",
        revenue: "$5.5M",
        customers: "55,000",
        margin: "75%",
        growth: "+96%"
      }
    ]
  };

  const investmentNeeds = [
    {
      category: "Inventory & Production",
      amount: "$300K",
      percentage: "40%",
      description: "Scale production, maintain quality, expand product lines",
      icon: BarChart,
      color: "primary"
    },
    {
      category: "Marketing & Sales",
      amount: "$225K",
      percentage: "30%",
      description: "Digital marketing, influencer partnerships, brand awareness",
      icon: TrendingUp,
      color: "secondary"
    },
    {
      category: "Team & Operations",
      amount: "$150K",
      percentage: "20%",
      description: "Key hires, operational infrastructure, technology",
      icon: Users,
      color: "accent"
    },
    {
      category: "International Expansion",
      amount: "$75K",
      percentage: "10%",
      description: "Market entry, compliance, distribution partnerships",
      icon: Globe,
      color: "earth"
    }
  ];

  const keyMetrics = [
    { label: "Break-even Point", value: "Month 8", description: "Projected profitability timeline" },
    { label: "ROI Timeline", value: "3.5 years", description: "Expected return on investment" },
    { label: "Market Share Goal", value: "5%", description: "Target share of natural hair care market" },
    { label: "Exit Valuation", value: "$25M+", description: "Projected company valuation at exit" }
  ];

  return (
    <div className="slide-container bg-gradient-to-br from-earth-50 to-green-50">
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-earth-100 px-4 py-2 rounded-full text-earth-800 mb-6">
            <PieChart className="w-5 h-5" />
            <span className="font-semibold">Slide 13</span>
          </div>
          
          <h1 className="slide-title">
            Financial Projections
          </h1>
          
          <p className="slide-subtitle max-w-4xl mx-auto">
            Our growth forecast, revenue projections, and the investment opportunity ahead.
          </p>
        </motion.div>

        {/* Investment Ask */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <div className="card bg-gradient-to-r from-earth-600 to-green-600 text-white text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">$750K</div>
                <div className="text-earth-100">Investment Ask</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">5.5M</div>
                <div className="text-earth-100">3-Year Revenue Target</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">75%</div>
                <div className="text-earth-100">Projected Gross Margin</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">3.5x</div>
                <div className="text-earth-100">Expected ROI Multiple</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Financial Projections Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="card bg-white/90 backdrop-blur-sm max-w-5xl mx-auto overflow-hidden">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img 
                src="/images/portfolio-full_0002.jpg"
                alt="Kreyol Essence Financial Growth and Investment Opportunity"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-earth-900/90 via-transparent to-green-900/90">
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white max-w-md">
                  <h3 className="text-4xl font-bold mb-3">Exponential Growth</h3>
                  <p className="text-lg mb-4">3-Year Revenue & Profit Projections</p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="font-bold text-earth-300">$750K</div>
                      <div>Investment Ask</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="font-bold text-green-300">$5.5M</div>
                      <div>3-Year Target</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Revenue Projections */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-2">3-Year Revenue Projection</h2>
            <p className="text-neutral-700">Conservative growth estimates based on market trends and current traction</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Current Year */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="card bg-gradient-to-br from-neutral-100 to-neutral-200 text-center">
                <div className="text-3xl font-bold text-neutral-800 mb-2">{financialData.currentYear.revenue}</div>
                <div className="text-lg font-semibold text-neutral-700 mb-3">{financialData.currentYear.year}</div>
                <div className="space-y-2 text-sm">
                  <div className="text-neutral-600">{financialData.currentYear.customers} customers</div>
                  <div className="text-neutral-600">{financialData.currentYear.margin} margin</div>
                  <div className="inline-flex items-center px-2 py-1 bg-neutral-300 rounded-full">
                    <span className="text-neutral-700 font-semibold text-xs">{financialData.currentYear.growth}</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Projections */}
            {financialData.projections.map((projection, index) => (
              <motion.div
                key={projection.year}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
              >
                <div className={`card bg-gradient-to-br from-green-${(index + 1) * 100} to-earth-${(index + 1) * 100} text-center`}>
                  <div className="text-3xl font-bold text-primary-800 mb-2">{projection.revenue}</div>
                  <div className="text-lg font-semibold text-primary-700 mb-3">{projection.year}</div>
                  <div className="space-y-2 text-sm">
                    <div className="text-neutral-600">{projection.customers} customers</div>
                    <div className="text-neutral-600">{projection.margin} margin</div>
                    <div className="inline-flex items-center px-2 py-1 bg-green-200 rounded-full">
                      <ArrowUp className="w-3 h-3 text-green-700 mr-1" />
                      <span className="text-green-700 font-semibold text-xs">{projection.growth}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investment Allocation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {investmentNeeds.map((need, index) => {
            const IconComponent = need.icon;
            return (
              <motion.div
                key={need.category}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.15, duration: 0.8 }}
              >
                <div className="card bg-white/90 backdrop-blur-sm h-full">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-${need.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-8 h-8 text-${need.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-primary-800">{need.category}</h3>
                        <div className="text-right">
                          <div className={`text-2xl font-bold text-${need.color}-600`}>{need.amount}</div>
                          <div className="text-xs text-neutral-500">{need.percentage}</div>
                        </div>
                      </div>
                      <p className="text-neutral-700 leading-relaxed">{need.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Investment Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="pt-8 border-t border-earth-200"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-2">Investment Highlights</h2>
            <p className="text-neutral-700">Key metrics that make this an attractive investment opportunity</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9 + index * 0.1, duration: 0.6 }}
              >
                <div className="card bg-white/80 backdrop-blur-sm text-center">
                  <Target className="w-12 h-12 text-earth-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary-800 mb-1">{metric.value}</div>
                  <div className="font-semibold text-primary-700 mb-2">{metric.label}</div>
                  <div className="text-xs text-neutral-600">{metric.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide13;