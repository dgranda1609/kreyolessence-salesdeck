import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Users, Search } from 'lucide-react';

const Slide02 = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Lack of Authentic Natural Products",
      description: "Most beauty products contain harmful chemicals and synthetic ingredients that damage hair and skin over time.",
      stat: "73% of consumers"
    },
    {
      icon: TrendingDown,
      title: "Cultural Heritage Loss",
      description: "Traditional beauty remedies and cultural wisdom are being lost as modern products dominate the market.",
      stat: "Lost traditions"
    },
    {
      icon: Users,
      title: "Underserved Communities",
      description: "People with textured hair and darker skin tones struggle to find products that work for their specific needs.",
      stat: "40% of market"
    },
    {
      icon: Search,
      title: "Ineffective Solutions",
      description: "Consumers spend hundreds of dollars trying products that don't deliver on their promises for hair and skin health.",
      stat: "$400+ annually"
    }
  ];

  return (
    <div className="slide-container bg-gradient-to-br from-red-50 to-orange-50">
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-red-100 px-4 py-2 rounded-full text-red-800 mb-6">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-semibold">The Challenge</span>
          </div>
          
          <h1 className="slide-title text-red-800">
            The Beauty Industry Has a Problem
          </h1>
          
          <p className="slide-subtitle max-w-4xl mx-auto">
            Consumers are struggling with ineffective, chemical-laden products that ignore cultural heritage and fail to address the unique needs of diverse communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                className="card hover:shadow-strong transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-red-800 text-xl">{problem.title}</h3>
                      <span className="text-red-600 font-bold text-sm bg-red-100 px-3 py-1 rounded-full">
                        {problem.stat}
                      </span>
                    </div>
                    <p className="text-neutral-700 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Market Reality</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$532B</div>
              <div className="text-red-100">Global Beauty Market Size</div>
              <div className="text-sm text-red-200 mt-2">Growing at 4.75% annually</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">73%</div>
              <div className="text-red-100">Want Natural Products</div>
              <div className="text-sm text-red-200 mt-2">But can't find authentic options</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$400+</div>
              <div className="text-red-100">Annual Spending</div>
              <div className="text-sm text-red-200 mt-2">On ineffective products</div>
            </div>
          </div>
        </motion.div>

        {/* Visual Impact Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 mb-12"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-strong group cursor-pointer">
            <img 
              src="/images/1080x1352_1804SALEANIMATIONAD-ezgif.com-video-to-gif-converter (1).gif"
              alt="Haitian Flag Day Sale - Kreyol Essence Celebration"
              className="w-full h-96 object-cover"
              onMouseEnter={(e) => {
                if (e.target.src.includes('.gif')) {
                  e.target.style.animationPlayState = 'running';
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Cultural Heritage Matters</h4>
                <p className="text-lg">Authentic Haitian beauty traditions deserve preservation</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pain Points */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-red-800 mb-6">The Consumer Pain Points</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Chemical damage to hair and skin",
              "Products that don't work for textured hair",
              "Loss of cultural beauty traditions",
              "Expensive trial-and-error purchasing",
              "Lack of authentic natural ingredients",
              "Generic solutions for diverse needs"
            ].map((pain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + (index * 0.1), duration: 0.4 }}
                className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {pain}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide02;