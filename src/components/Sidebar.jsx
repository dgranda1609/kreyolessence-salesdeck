import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home, TrendingUp, Users, Globe, Lightbulb, Package, Star, Heart, DollarSign, Target, Zap, BarChart, PieChart, Award, Phone } from 'lucide-react';

const Sidebar = ({ currentSlide, onSlideChange, isCollapsed, onToggleCollapse }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const slides = [
    { id: 1, title: 'Brand Introduction', subtitle: 'Welcome to Kreyol Essence', icon: Home },
    { id: 2, title: 'The Problem', subtitle: 'Market challenges', icon: TrendingUp },
    { id: 3, title: 'Market Opportunity', subtitle: 'Size & potential', icon: Users },
    { id: 4, title: 'Cultural Context', subtitle: 'Haitian heritage', icon: Globe },
    { id: 5, title: 'Our Solution', subtitle: 'Natural remedies', icon: Lightbulb },
    { id: 6, title: 'Product Portfolio', subtitle: 'Complete lineup', icon: Package },
    { id: 7, title: 'Value Proposition', subtitle: 'What makes us unique', icon: Star },
    { id: 8, title: 'Customer Success', subtitle: 'Real results', icon: Heart },
    { id: 9, title: 'Business Model', subtitle: 'Revenue streams', icon: DollarSign },
    { id: 10, title: 'Market Traction', subtitle: 'Growth metrics', icon: Target },
    { id: 11, title: 'Competitive Landscape', subtitle: 'Market positioning', icon: Zap },
    { id: 12, title: 'Marketing Strategy', subtitle: 'Go-to-market plan', icon: BarChart },
    { id: 13, title: 'Financial Projections', subtitle: 'Growth forecast', icon: PieChart },
    { id: 14, title: 'The Team', subtitle: 'Leadership credentials', icon: Award },
    { id: 15, title: 'Call to Action', subtitle: 'Investment opportunity', icon: Phone }
  ];

  const sidebarVariants = {
    expanded: {
      width: '20rem',
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    collapsed: {
      width: '20rem',
      x: isMobile ? '-20rem' : '-16rem', // Fully hide on mobile, partial on desktop
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const contentVariants = {
    expanded: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.1
      }
    },
    collapsed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isMobile && !isCollapsed && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onToggleCollapse}
        />
      )}
      
      <motion.div
        className={`sidebar-nav bg-gradient-to-b from-primary-50 to-earth-50 shadow-strong ${isMobile ? 'z-50' : ''}`}
        variants={sidebarVariants}
        animate={isCollapsed ? 'collapsed' : 'expanded'}
      >
      {/* Header */}
      <div className="p-4 border-b border-primary-200">
        <div className="flex items-center justify-between">
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                variants={contentVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">KE</span>
                </div>
                <div>
                  <h2 className="text-primary-800 font-display font-semibold text-lg">Kreyol Essence</h2>
                  <p className="text-primary-600 text-xs">Pitch Deck</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={onToggleCollapse}
            className="p-2 rounded-lg hover:bg-primary-100 transition-colors duration-200"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 text-primary-600" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-primary-600" />
            )}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="p-4">
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div
              variants={contentVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
            >
              <div className="mb-2 text-sm text-primary-700 font-medium">
                Progress: {currentSlide}/15
              </div>
              <div className="w-full bg-primary-200 rounded-full h-2">
                <motion.div
                  className="bg-primary-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentSlide / 15) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto">
        <div className="px-2 space-y-1">
          {slides.map((slide) => {
            const Icon = slide.icon;
            const isActive = currentSlide === slide.id;
            
            return (
              <motion.button
                key={slide.id}
                onClick={() => onSlideChange(slide.id)}
                className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-200 text-primary-900 shadow-inner-soft'
                    : 'text-primary-700 hover:bg-primary-100 hover:text-primary-800'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-primary-800' : 'text-primary-600'}`} />
                
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.div
                      variants={contentVariants}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      className="ml-3 text-left flex-1"
                    >
                      <div className={`font-medium text-sm ${isActive ? 'text-primary-900' : 'text-primary-800'}`}>
                        {slide.title}
                      </div>
                      <div className={`text-xs ${isActive ? 'text-primary-700' : 'text-primary-600'}`}>
                        {slide.subtitle}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="w-1 h-6 bg-primary-600 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-primary-200">
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div
              variants={contentVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              className="text-center"
            >
              <div className="text-xs text-primary-600 mb-2">
                Natural Beauty • Authentic Heritage
              </div>
              <div className="text-xs text-primary-500">
                © 2024 Kreyol Essence
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;