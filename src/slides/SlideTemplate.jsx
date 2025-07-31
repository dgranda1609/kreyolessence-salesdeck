import React from 'react';
import { motion } from 'framer-motion';

const SlideTemplate = ({ slideNumber, title, subtitle, icon: Icon, bgColor = "bg-gradient-to-br from-primary-50 to-earth-50" }) => {
  return (
    <div className={`slide-container ${bgColor}`}>
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full text-primary-800 mb-6">
            {Icon && <Icon className="w-5 h-5" />}
            <span className="font-semibold">Slide {slideNumber}</span>
          </div>
          
          <h1 className="slide-title">
            {title}
          </h1>
          
          <p className="slide-subtitle max-w-4xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="card max-w-2xl mx-auto">
            <div className="w-32 h-32 bg-primary-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              {Icon && <Icon className="w-16 h-16 text-primary-600" />}
            </div>
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Content Coming Soon</h3>
            <p className="text-neutral-700">
              This slide will contain detailed information about {title.toLowerCase()}, 
              including relevant data, visuals, and compelling messaging to support our pitch.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SlideTemplate;