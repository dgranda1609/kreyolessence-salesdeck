import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Quote, User, Zap, TrendingUp } from 'lucide-react';

const Slide08 = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "Miami, FL",
      product: "Haitian Black Castor Oil",
      rating: 5,
      quote: "After 3 months of using Kreyol Essence castor oil, my hair grew 4 inches! I've never seen results like this with any other product.",
      result: "4 inches of hair growth",
      timeframe: "3 months",
      avatar: "MR"
    },
    {
      name: "Jasmine Thompson",
      location: "Brooklyn, NY",
      product: "Coconut & Hibiscus Hair Mask",
      rating: 5,
      quote: "My damaged hair from years of chemical treatments is finally healthy again. The hibiscus mask restored my natural curl pattern.",
      result: "Hair damage reversed",
      timeframe: "6 weeks",
      avatar: "JT"
    },
    {
      name: "Sarah Williams",
      location: "Los Angeles, CA",
      product: "Natural Hair Growth Serum",
      rating: 5,
      quote: "I was skeptical at first, but the serum not only grew my hair but made it so much stronger. My stylist can't believe the difference!",
      result: "50% less breakage",
      timeframe: "8 weeks",
      avatar: "SW"
    }
  ];

  const metrics = [
    { label: "Customer Satisfaction", value: "96%", icon: Heart },
    { label: "Repeat Purchase Rate", value: "84%", icon: TrendingUp },
    { label: "Average Rating", value: "4.8/5", icon: Star },
    { label: "Visible Results", value: "2-4 weeks", icon: Zap }
  ];

  return (
    <div className="slide-container bg-gradient-to-br from-green-50 to-primary-50">
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full text-green-800 mb-6">
            <Heart className="w-5 h-5" />
            <span className="font-semibold">Slide 08</span>
          </div>
          
          <h1 className="slide-title">
            Customer Success Stories
          </h1>
          
          <p className="slide-subtitle max-w-4xl mx-auto">
            Real results from real customers who have transformed their hair and skin with our products.
          </p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                >
                  <div className="card bg-white/90 backdrop-blur-sm text-center">
                    <IconComponent className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary-800 mb-2">{metric.value}</div>
                    <div className="text-neutral-700 text-sm">{metric.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Customer Success Images */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-white/90 backdrop-blur-sm overflow-hidden">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <img 
                  src="/images/SOS Serum_lifestyle_7.jpg"
                  alt="Before & After Hair Transformation with Kreyol Essence"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-lg mb-1">Before & After</p>
                    <p className="text-sm text-green-100">Hair Transformation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-white/90 backdrop-blur-sm overflow-hidden">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <img 
                  src="/images/SOS Spot Treatment _ Lifestyle_4.jpg"
                  alt="Happy Customer with Kreyol Essence Products"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-lg mb-1">Customer Reviews</p>
                    <p className="text-sm text-primary-100">Real Testimonials</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-white/90 backdrop-blur-sm overflow-hidden">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <img 
                  src="/images/SOS Serum_lifestyle_8.jpg"
                  alt="Hair Growth Progress with Kreyol Essence"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 via-transparent to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-lg mb-1">Growth Results</p>
                    <p className="text-sm text-secondary-100">Hair Length Progress</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Customer Testimonials */}
        <div className="space-y-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.2, duration: 0.8 }}
            >
              <div className="card bg-white/90 backdrop-blur-sm">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary-800">{testimonial.name}</h3>
                        <p className="text-neutral-600 text-sm">{testimonial.location}</p>
                        <p className="text-accent-600 text-sm font-medium">Used: {testimonial.product}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                          ))}
                        </div>
                        <div className="text-sm text-green-600 font-semibold">{testimonial.result}</div>
                        <div className="text-xs text-neutral-500">in {testimonial.timeframe}</div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Quote className="w-8 h-8 text-secondary-300 absolute -top-2 -left-2" />
                      <p className="text-neutral-700 italic text-lg leading-relaxed pl-6">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center pt-8 border-t border-green-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <div className="card bg-gradient-to-r from-primary-100 to-green-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Join Thousands of Satisfied Customers</h3>
              <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
                Start your hair transformation journey today with our most popular starter kit. 
                30-day money-back guarantee included.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <button className="btn-primary text-lg px-8 py-4">
                  Shop Starter Kit - $49.99
                </button>
                <button className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                  Read More Reviews
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide08;