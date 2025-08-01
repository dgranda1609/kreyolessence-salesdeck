import React from 'react';
import { motion } from 'framer-motion';
import { Package, Star, Droplets, Sparkles, Leaf, Heart, Award, Shield } from 'lucide-react';

const Slide06 = () => {
  const products = [
    {
      name: "Haitian Black Castor Oil",
      category: "Hair Growth & Strengthening",
      price: "$24.99",
      description: "Pure, cold-pressed black castor oil from Haitian castor beans",
      benefits: ["Promotes hair growth", "Strengthens roots", "Reduces breakage"],
      icon: Droplets,
      color: "primary"
    },
    {
      name: "Coconut & Hibiscus Hair Mask",
      category: "Deep Conditioning Treatment",
      price: "$32.99",
      description: "Intensive weekly treatment with organic coconut oil and hibiscus extract",
      benefits: ["Deep moisturizing", "Repairs damage", "Adds shine"],
      icon: Sparkles,
      color: "secondary"
    },
    {
      name: "Natural Hair Growth Serum",
      category: "Daily Treatment",
      price: "$28.99",
      description: "Lightweight serum blend with essential oils and botanical extracts",
      benefits: ["Daily nourishment", "Scalp health", "Gentle formula"],
      icon: Leaf,
      color: "accent"
    },
    {
      name: "Moisturizing Body Butter",
      category: "Skin Care",
      price: "$19.99",
      description: "Rich body butter with shea butter and natural Haitian oils",
      benefits: ["Deep hydration", "Smooth skin", "Natural glow"],
      icon: Heart,
      color: "earth"
    }
  ];

  return (
    <div className="slide-container bg-gradient-to-br from-earth-50 to-primary-50">
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-earth-100 px-4 py-2 rounded-full text-earth-800 mb-6">
            <Package className="w-5 h-5" />
            <span className="font-semibold">Slide 06</span>
          </div>
          
          <h1 className="slide-title">
            Product Portfolio
          </h1>
          
          <p className="slide-subtitle max-w-4xl mx-auto">
            Our complete lineup of natural hair, skin, and wellness products featuring authentic Haitian ingredients.
          </p>
        </motion.div>

        {/* Product Categories Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card bg-gradient-to-br from-primary-100 to-primary-200 text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-primary-800 mb-2">Hair Care</h3>
              <p className="text-sm text-primary-700">8 Products</p>
            </div>
            <div className="card bg-gradient-to-br from-secondary-100 to-secondary-200 text-center">
              <div className="w-16 h-16 bg-secondary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-primary-800 mb-2">Skin Care</h3>
              <p className="text-sm text-secondary-700">4 Products</p>
            </div>
            <div className="card bg-gradient-to-br from-accent-100 to-accent-200 text-center">
              <div className="w-16 h-16 bg-accent-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-primary-800 mb-2">Wellness</h3>
              <p className="text-sm text-accent-700">3 Products</p>
            </div>
            <div className="card bg-gradient-to-br from-earth-100 to-earth-200 text-center">
              <div className="w-16 h-16 bg-earth-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-primary-800 mb-2">Gift Sets</h3>
              <p className="text-sm text-earth-700">5 Collections</p>
            </div>
          </div>
        </motion.div>

        {/* Product Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="card bg-white/90 backdrop-blur-sm max-w-5xl mx-auto overflow-hidden">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img 
                src="/images/2048x1546_1804 BANNER FINAL.jpg"
                alt="Kreyol Essence Complete Product Collection - Natural Haitian Beauty Products"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-transparent to-earth-900/80">
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white max-w-md">
                  <h3 className="text-4xl font-bold mb-4">Complete Collection</h3>
                  <p className="text-xl mb-4">Authentic Haitian products for hair, skin & wellness</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <div className="font-bold text-primary-300">15+</div>
                      <div>Products</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <div className="font-bold text-secondary-300">100%</div>
                      <div>Natural</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
              >
                <div className="card bg-white/90 backdrop-blur-sm h-full">
                  <div className="flex items-start space-x-4">
                    <div className={`w-20 h-20 bg-${product.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-10 h-10 text-${product.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-primary-800">{product.name}</h3>
                          <p className="text-sm text-neutral-600 mb-1">{product.category}</p>
                          <div className="flex items-center space-x-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                            ))}
                            <span className="text-sm text-neutral-600 ml-2">(4.8/5)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-800">{product.price}</div>
                          <div className="text-sm text-green-600">In Stock</div>
                        </div>
                      </div>
                      
                      <p className="text-neutral-700 mb-4 leading-relaxed">{product.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-primary-800 text-sm">Key Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.benefits.map((benefit, i) => (
                            <span key={i} className={`px-3 py-1 bg-${product.color}-50 text-${product.color}-700 text-sm rounded-full`}>
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Product Guarantees */}
        <motion.div
          className="pt-8 border-t border-earth-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-gradient-to-br from-green-50 to-green-100 text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-primary-800 mb-2">30-Day Guarantee</h3>
              <p className="text-sm text-neutral-700">Full refund if not satisfied</p>
            </div>
            <div className="card bg-gradient-to-br from-blue-50 to-blue-100 text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-primary-800 mb-2">Certified Organic</h3>
              <p className="text-sm text-neutral-700">USDA Organic certified ingredients</p>
            </div>
            <div className="card bg-gradient-to-br from-purple-50 to-purple-100 text-center">
              <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-primary-800 mb-2">Cruelty-Free</h3>
              <p className="text-sm text-neutral-700">Never tested on animals</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide06;