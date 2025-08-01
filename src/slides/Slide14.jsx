import React from 'react';
import { motion } from 'framer-motion';
import { Award, User, Briefcase, GraduationCap, Star, MapPin, Calendar, Target } from 'lucide-react';

const Slide14 = () => {
  const teamMembers = [
    {
      name: "Marie-Claire Dubois",
      role: "Founder & CEO",
      background: "Former L'Oréal Brand Manager with 12 years in beauty industry",
      education: "MBA Harvard Business School, BS Chemistry",
      expertise: ["Brand Strategy", "Product Development", "International Markets"],
      achievements: "Launched 3 successful beauty brands, $50M+ revenue experience",
      avatar: "MD",
      color: "primary"
    },
    {
      name: "Jean-Baptiste Laurent",
      role: "Co-Founder & COO",
      background: "Supply chain expert with deep connections in Haiti's agricultural sector",
      education: "MS Supply Chain Management, BS Agricultural Science",
      expertise: ["Operations", "Sourcing", "Quality Control"],
      achievements: "15+ years in sustainable sourcing, built ethical supply networks",
      avatar: "JL",
      color: "secondary"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Marketing",
      background: "Digital marketing specialist with focus on beauty and lifestyle brands",
      education: "MA Marketing, Certified Google & Meta Partner",
      expertise: ["Digital Marketing", "Social Media", "Influencer Relations"],
      achievements: "Grew 5 beauty brands to 7-figure revenue through digital marketing",
      avatar: "SJ",
      color: "accent"
    },
    {
      name: "Dr. Evelyne Pierre",
      role: "Head of R&D",
      background: "Cosmetic chemist specializing in natural and traditional ingredients",
      education: "PhD Cosmetic Chemistry, BS Biochemistry",
      expertise: ["Product Formulation", "Ingredient Science", "Regulatory Affairs"],
      achievements: "20+ patents in natural cosmetics, published researcher",
      avatar: "EP",
      color: "earth"
    }
  ];

  const advisors = [
    {
      name: "Patricia Williams",
      role: "Strategic Advisor",
      background: "Former VP of Multicultural Marketing at Unilever",
      value: "Beauty industry expertise and market insights"
    },
    {
      name: "Marcus Thompson",
      role: "Financial Advisor",
      background: "Investment banker with focus on consumer goods",
      value: "Financial strategy and growth capital expertise"
    },
    {
      name: "Dr. Nadine Charlot",
      role: "Cultural Advisor",
      background: "Haitian cultural historian and ethnobotanist",
      value: "Authenticity and cultural heritage preservation"
    }
  ];

  return (
    <div className="slide-container bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-accent-100 px-4 py-2 rounded-full text-accent-800 mb-6">
            <Award className="w-5 h-5" />
            <span className="font-semibold">Slide 14</span>
          </div>
          
          <h1 className="slide-title">
            The Team
          </h1>
          
          <p className="slide-subtitle max-w-4xl mx-auto">
            Meet the leadership team with the experience and passion to build Kreyol Essence into a market leader.
          </p>
        </motion.div>

        {/* Team Overview Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <div className="card bg-gradient-to-r from-accent-600 to-primary-600 text-white text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-accent-100">Combined Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">8</div>
                <div className="text-accent-100">Advanced Degrees</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$200M+</div>
                <div className="text-accent-100">Revenue Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-accent-100">Successful Exits</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Photo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="card bg-white/90 backdrop-blur-sm max-w-4xl mx-auto overflow-hidden">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img 
                src="/images/portfolio-full_0004.jpg"
                alt="Kreyol Essence Leadership Team and Advisors"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-900/90 via-transparent to-primary-900/90">
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white max-w-md">
                  <h3 className="text-3xl font-bold mb-3">Expert Leadership</h3>
                  <p className="text-lg mb-4">Leadership Team & Advisors</p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="font-bold text-accent-300">50+</div>
                      <div>Years Experience</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="font-bold text-primary-300">$200M+</div>
                      <div>Revenue Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Team Members */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.15, duration: 0.8 }}
            >
              <div className="card bg-white/90 backdrop-blur-sm h-full">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${member.color}-600 to-${member.color}-700 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-xl">{member.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary-800 mb-1">{member.name}</h3>
                    <p className={`text-${member.color}-600 font-semibold mb-2`}>{member.role}</p>
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-primary-800 text-sm mb-1 flex items-center">
                      <Briefcase className="w-4 h-4 mr-2" />
                      Background
                    </h4>
                    <p className="text-neutral-700 text-sm leading-relaxed">{member.background}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary-800 text-sm mb-1 flex items-center">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Education
                    </h4>
                    <p className="text-neutral-700 text-sm">{member.education}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary-800 text-sm mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, i) => (
                        <span key={i} cls

                        sName={`px-2 py-1 bg-${member.color}-50 text-${member.color}-700 text-xs rounded-full`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`p-3 bg-${member.color}-50 rounded-lg`}>
                    <p className={`text-${member.color}-800 text-sm font-medium italic`}>
                      "{member.achievements}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisory Board */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="pt-8 border-t border-accent-200"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-2">Advisory Board</h2>
            <p className="text-neutral-700">Strategic advisors providing industry expertise and guidance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.6 }}
              >
                <div className="card bg-white/80 backdrop-blur-sm text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-neutral-400 to-neutral-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-primary-800 mb-1">{advisor.name}</h3>
                  <p className="text-accent-600 font-semibold text-sm mb-2">{advisor.role}</p>
                  <p className="text-neutral-700 text-xs mb-3">{advisor.background}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-primary-50 rounded-full">
                    <span className="text-primary-700 font-semibold text-xs">{advisor.value}</span>
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

export default Slide14;