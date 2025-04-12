import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';
import HyperdriveEffect from '../components/HyperdriveEffect';
import { Users, Calendar, Award, Github, Twitter, Linkedin, Mail,  Star,
  Zap,
  Cpu,
  Wifi,
  Activity,
  Atom,
  Cloud,
  Eye,
  Shield,
  Rocket,
  Code2,
  GitBranch,
  Server,
  MousePointerClick,
  Radar,
  SatelliteDish,
  Bug,
  Sparkles,
  CircleDot,
  Database, } from 'lucide-react';

const Home: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      setShowContent(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const doodles = [
    { icon: Star, position: 'top-6 left-10' },
    { icon: Zap, position: 'top-10 right-16' },
    { icon: Cpu, position: 'top-32 left-8' },
    { icon: Wifi, position: 'top-36 right-12' },
    { icon: Star, position: 'top-56 left-[5%]' },
    { icon: Zap, position: 'top-[30%] right-[8%]' },
    { icon: Cpu, position: 'bottom-[30%] left-[12%]' },
    { icon: Wifi, position: 'bottom-[35%] right-[6%]' },
    { icon: Star, position: 'bottom-10 left-[5%]' },
    { icon: Zap, position: 'bottom-[20%] right-[10%]' },
    { icon: Cpu, position: 'top-[70%] left-[25%]' },
    { icon: Wifi, position: 'top-[65%] right-[20%]' },
    { icon: Star, position: 'top-[15%] left-[60%]' },
    { icon: Zap, position: 'bottom-[10%] right-[30%]' },
    { icon: Cpu, position: 'top-[18%] right-[25%]' },
    { icon: Wifi, position: 'bottom-[25%] left-[30%]' },
  ];
  

  const stats = [
    {
      icon: Users,
      color: 'from-purple-500 to-purple-700',
      iconColor: 'text-purple-300',
      end: 100000,
      label: 'Global Members',
      description: 'Professionals worldwide shaping the future of computing'
    },
    {
      icon: Calendar,
      color: 'from-blue-500 to-blue-700',
      iconColor: 'text-blue-300',
      end: 500,
      label: 'Annual Events',
      description: 'Conferences, workshops, and tech symposiums'
    },
    {
      icon: Award,
      color: 'from-emerald-500 to-emerald-700',
      iconColor: 'text-emerald-300',
      end: 400,
      label: 'Active Chapters',
      description: 'Local communities driving innovation globally'
    },
    {
      icon: Users,
      color: 'from-amber-500 to-amber-700',
      iconColor: 'text-amber-300',
      end: 1000,
      label: 'Expert Mentors',
      description: 'Industry leaders sharing knowledge and experience'
    }
  ];

  return (
    
    <div className="min-h-screen relative">

      {/* Dark Overlay */}
<div className="absolute inset-0 bg-black/60 z-10" />

      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-deep-space flex items-center justify-center"
          >
            <HyperdriveEffect />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 2 }}
              className="text-center z-10"
            >
              <img
                src="/assets/ieee1.png"
                alt="IEEE CS Logo"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <div className="relative z-10">
            {/* Floating Doodles */}
            {doodles.map((Doodle, index) => (
              <motion.div
                key={index}
                className={`floating-doodle ${Doodle.position} hidden lg:block`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{
                  duration: 1,
                  delay: index * 0.2 + 1,
                }}
              >
                <Doodle.icon size={32} />
              </motion.div>
            ))}

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-center z-10 px-4"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    
                  }}
                  className="sm:h-32 mx-auto mb-8"
                >
                  <img
                    src="/assets/ieee1.png"
                    alt="IEEE CS Logo"
                    className="w-full h-full object-contain logo-glow"
                  />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="text-5xl md:text-7xl font-bold mb-6"
                >
                  We Live in a{' '}
                  <span className="text-neon-yellow animate-glow">
                    Computer Society.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8"
                >
                  The force of code is strong with us.
                </motion.p>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="neon-button"
                >
                  Join Us <Rocket className="inline-block ml-2" size={20} />
                </motion.button>
              </motion.div>
            </section>

            {/* Stats Section */}
            <section className="page-section">
              <div className="page-container">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-center mb-16 animate-glow"
                >
                  Our Impact in Numbers
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${stat.color} p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 -mr-10 -mt-10 rounded-full bg-white/10 blur-2xl" />
                      <div className="relative">
                        <div className="mb-4">
                          <stat.icon className={`w-10 h-10 ${stat.iconColor}`} />
                        </div>
                        <AnimatedCounter end={stat.end} label={stat.label} color={stat.iconColor} />
                        <p className="text-sm text-white/80 mt-2">{stat.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Quick Intro Section */}
            <section className="relative py-20 flex justify-center items-center bg-transparent">
  <div className="relative z-10 w-[95%] max-w-5xl px-10 py-16 bg-black/50 rounded-3xl border border-white/20 backdrop-blur-md shadow-2xl">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-yellow-400 drop-shadow">
        Advancing Technology for Humanity
      </h2>
      <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
        The IEEE Computer Society is the premier source for information, inspiration, and collaboration in computer science and engineering.
        Connecting members worldwide, we drive technology innovation and excellence for the benefit of humanity.
      </p>
    </motion.div>
  </div>
</section>



            {/* Footer */}
            <footer className="bg-black text-white border-t border-white/10 backdrop-blur-sm">
  <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-10">
    {/* Logo + About */}
    <div className="md:col-span-4 space-y-4">
      <div className="flex items-center gap-3">
        <img
          src="/assets/ieee1.png"
          alt="IEEE CS Logo"
          className="w-10 h-10 object-contain"
        />
        <h2 className="text-xl font-bold text-yellow-400">IEEE Computer Society</h2>
      </div>
      <p className="text-sm text-gray-400">
        Empowering technologists for the digital future through innovation, collaboration, and excellence.
      </p>
      <div className="flex space-x-4 pt-2">
        <a href="#" className="hover:text-yellow-400 transition-transform hover:scale-110"><Github size={20} /></a>
        <a href="#" className="hover:text-yellow-400 transition-transform hover:scale-110"><Twitter size={20} /></a>
        <a href="#" className="hover:text-yellow-400 transition-transform hover:scale-110"><Linkedin size={20} /></a>
        <a href="#" className="hover:text-yellow-400 transition-transform hover:scale-110"><Mail size={20} /></a>
      </div>
    </div>

    {/* Quick Links */}
    <div className="md:col-span-2 space-y-3">
      <h3 className="text-yellow-400 font-semibold text-lg">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        {["Membership", "Publications", "Conferences", "Education"].map((link, idx) => (
          <li key={idx}>
            <a href="#" className="hover:text-white text-gray-400 transition-colors duration-200">{link}</a>
          </li>
        ))}
      </ul>
    </div>

    {/* Resources */}
    <div className="md:col-span-3 space-y-3">
      <h3 className="text-yellow-400 font-semibold text-lg">Resources</h3>
      <ul className="space-y-2 text-sm">
        {["Digital Library", "Career Center", "Standards", "Research"].map((link, idx) => (
          <li key={idx}>
            <a href="#" className="hover:text-white text-gray-400 transition-colors duration-200">{link}</a>
          </li>
        ))}
      </ul>
    </div>

    {/* Contact Info */}
    <div className="md:col-span-3 space-y-3">
      <h3 className="text-yellow-400 font-semibold text-lg">Contact</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        <li className="flex items-center gap-2"><span>📞</span> 1-800-XXX-XXXX</li>
        <li className="flex items-center gap-2"><span>📧</span> info@computer.org</li>
        <li className="flex items-center gap-2"><span>📍</span> Washington, DC 20001</li>
      </ul>
    </div>
  </div>

  <div className="border-t border-white/10 text-center py-6 text-xs text-white/50">
    © {new Date().getFullYear()} IEEE Computer Society. All rights reserved.
  </div>
</footer>

          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;