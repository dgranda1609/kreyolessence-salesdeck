import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';

// Import all slide components
import Slide01 from './slides/Slide01';
import Slide02 from './slides/Slide02';
import Slide03 from './slides/Slide03';
import Slide04 from './slides/Slide04';
import Slide05 from './slides/Slide05';
import Slide06 from './slides/Slide06';
import Slide07 from './slides/Slide07';
import Slide08 from './slides/Slide08';
import Slide09 from './slides/Slide09';
import Slide10 from './slides/Slide10';
import Slide11 from './slides/Slide11';
import Slide12 from './slides/Slide12';
import Slide13 from './slides/Slide13';
import Slide14 from './slides/Slide14';
import Slide15 from './slides/Slide15';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isCollapsed, setIsCollapsed] = useState(true); // Start collapsed
  const [direction, setDirection] = useState(0);
  const [isHoveringEdge, setIsHoveringEdge] = useState(false);
  const [isHoveringSidebar, setIsHoveringSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    { id: 1, component: Slide01 },
    { id: 2, component: Slide02 },
    { id: 3, component: Slide03 },
    { id: 4, component: Slide04 },
    { id: 5, component: Slide05 },
    { id: 6, component: Slide06 },
    { id: 7, component: Slide07 },
    { id: 8, component: Slide08 },
    { id: 9, component: Slide09 },
    { id: 10, component: Slide10 },
    { id: 11, component: Slide11 },
    { id: 12, component: Slide12 },
    { id: 13, component: Slide13 },
    { id: 14, component: Slide14 },
    { id: 15, component: Slide15 }
  ];

  const handleSlideChange = (slideId) => {
    setDirection(slideId > currentSlide ? 1 : -1);
    setCurrentSlide(slideId);
  };

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-hide sidebar logic (desktop only)
  useEffect(() => {
    if (isMobile) return; // Skip hover logic on mobile
    const handleMouseMove = (event) => {
      const isNearLeftEdge = event.clientX <= 50; // 50px from left edge
      setIsHoveringEdge(isNearLeftEdge);
      
      // Auto-show sidebar when hovering near edge
      if (isNearLeftEdge && isCollapsed) {
        setIsCollapsed(false);
      }
      // Auto-hide sidebar when not hovering over it or edge
      else if (!isNearLeftEdge && !isHoveringSidebar && !isCollapsed) {
        const timer = setTimeout(() => {
          if (!isHoveringSidebar) {
            setIsCollapsed(true);
          }
        }, 100); // 100ms delay - very fast
        return () => clearTimeout(timer);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isCollapsed, isHoveringSidebar, isMobile]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === 'Space') {
        event.preventDefault();
        if (currentSlide < 15) {
          handleSlideChange(currentSlide + 1);
        }
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        if (currentSlide > 1) {
          handleSlideChange(currentSlide - 1);
        }
      } else if (event.key === 'Home') {
        event.preventDefault();
        handleSlideChange(1);
      } else if (event.key === 'End') {
        event.preventDefault();
        handleSlideChange(15);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const slideTransition = {
    x: { type: 'spring', stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 }
  };

  const CurrentSlideComponent = slides.find(slide => slide.id === currentSlide)?.component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-earth-50">
      <div 
        onMouseEnter={() => setIsHoveringSidebar(true)}
        onMouseLeave={() => setIsHoveringSidebar(false)}
      >
        <Sidebar
          currentSlide={currentSlide}
          onSlideChange={handleSlideChange}
          isCollapsed={isCollapsed}
          onToggleCollapse={handleToggleCollapse}
        />
      </div>
      
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={handleToggleCollapse}
          className="fixed top-4 left-4 z-50 p-3 bg-primary-600 text-white rounded-full shadow-strong hover:bg-primary-700 transition-colors duration-200 md:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}

      <motion.main
        className="transition-all duration-300 ease-in-out"
        style={{
          marginLeft: isMobile ? '0' : (isCollapsed ? '0' : '20rem') // Always full width on mobile
        }}
      >
        <div className="relative min-h-screen max-h-screen overflow-y-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="absolute inset-0"
            >
              {CurrentSlideComponent && <CurrentSlideComponent />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="fixed bottom-6 right-6 flex items-center space-x-4 z-20">
          <button
            onClick={() => currentSlide > 1 && handleSlideChange(currentSlide - 1)}
            disabled={currentSlide === 1}
            className="p-3 bg-primary-600 text-white rounded-full shadow-strong disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="bg-white px-4 py-2 rounded-full shadow-soft border border-primary-200">
            <span className="text-primary-800 font-medium">
              {currentSlide} / {slides.length}
            </span>
          </div>
          
          <button
            onClick={() => currentSlide < 15 && handleSlideChange(currentSlide + 1)}
            disabled={currentSlide === 15}
            className="p-3 bg-primary-600 text-white rounded-full shadow-strong disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Keyboard Shortcuts Hint */}
        <div className="fixed bottom-6 left-6 bg-white px-4 py-2 rounded-lg shadow-soft border border-primary-200 text-sm text-primary-700 z-20">
          <div className="flex items-center space-x-2">
            <span>Use</span>
            <kbd className="px-2 py-1 bg-primary-100 rounded text-xs">←</kbd>
            <kbd className="px-2 py-1 bg-primary-100 rounded text-xs">→</kbd>
            <span>to navigate</span>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default App;