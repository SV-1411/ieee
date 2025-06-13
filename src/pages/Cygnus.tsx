import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Trophy, Code, Zap, Brain, Gamepad2, ExternalLink, Timer, Star } from 'lucide-react';

interface CygnusEvent {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  date: string;
  time: string;
  duration: string;
  maxParticipants: number;
  currentParticipants: number;
  prizes: string[];
  requirements: string[];
  registrationLink: string;
  color: string;
  iconColor: string;
}

const Cygnus: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<CygnusEvent | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Event date - set to a future date
  const eventDate = new Date('2024-04-20T09:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const events: CygnusEvent[] = [
    {
      id: '1',
      title: 'CODESTRIKE: Stellar CodeCraft',
      description: 'The Force is strong in this one.\n Enter the galactic forge — a 48-hour interstellar hackathon where rebel squads bend code to their will, solving crises that echo across the stars.',
      icon: Code,
      date: '2024-04-20',
      time: '09:00 AM',
      duration: '48 hours',
      maxParticipants: 200,
      currentParticipants: 156,
      prizes: ['₹50,000 Supernova Prize', '₹30,000 Red Giant Award', '₹20,000 White Dwarf Prize', 'Constellation Achievement Badges'],
      requirements: ['Team of 2-4 stellar navigators', 'Laptop with development constellation', 'Valid student starmap ID'],
      registrationLink: '#',
      color: 'from-red-600/10 to-red-800/10',
      iconColor: 'text-red-400'
    },
    {
      id: '2',
      title: 'BINARY DUEL',
      description: 'Enter the Programming Pit — where logic sabers clash and algorithms duel in light-speed problem-solving.',
      icon: Trophy,
      date: '2024-04-21',
      time: '02:00 PM',
      duration: '3 hours',
      maxParticipants: 150,
      currentParticipants: 89,
      prizes: ['₹25,000 Alpha Centauri Prize', '₹15,000 Proxima Award', '₹10,000 Stellar Core Prize', 'Premium Coding Constellation Access'],
      requirements: ['Solo stellar warrior', 'Coding platform account', 'Stellar problem-solving abilities'],
      registrationLink: '#',
      color: 'from-gray-600/10 to-gray-800/10',
      iconColor: 'text-gray-400'
    },
    {
      id: '3',
      title: 'AI PROPHECY',
      description: 'Harness the neural Force — breathe life into AI models forged from the nebulae of knowledge and code.',
      icon: Brain,
      date: '2024-04-22',
      time: '10:00 AM',
      duration: '24 hours',
      maxParticipants: 100,
      currentParticipants: 67,
      prizes: ['₹40,000 Galactic Brain Prize', '₹25,000 Neural Network Award', '₹15,000 Deep Space Prize', 'Quantum Computing Credits'],
      requirements: ['Team of 1-3 AI astronomers', 'Machine learning stardust experience', 'Cosmic dataset constellation provided'],
      registrationLink: '#',
      color: 'from-red-600/10 to-red-800/10',
      iconColor: 'text-red-400'
    },
    {
      id: '4',
      title: 'FIREWALL FRONT',
      description: "'Defend the galaxy in this Capture The Flag operation — only the bravest cyber sentinels will breach the enemy firewalls and secure the galaxy's secrets.'",
      icon: Zap,
      date: '2024-04-23',
      time: '11:00 AM',
      duration: '6 hours',
      maxParticipants: 80,
      currentParticipants: 45,
      prizes: ['₹30,000 Guardian of Galaxy Prize', '₹20,000 Stellar Shield Award', '₹10,000 Cosmic Defender Prize', 'Interstellar Security Certifications'],
      requirements: ['Team of 1-4 space guardians', 'Basic cosmic security knowledge', 'Personal stellar workstation required'],
      registrationLink: '#',
      color: 'from-gray-700/10 to-gray-900/10',
      iconColor: 'text-gray-400'
    }
  ];

  const CountdownBox = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-lg border border-red-400/30 rounded-lg p-4 text-center min-w-[80px] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
      <div className="relative z-10">
        <div className="text-3xl font-bold text-red-400 mb-1">{value.toString().padStart(2, '0')}</div>
        <div className="text-sm text-white/80 uppercase tracking-wide">{label}</div>
      </div>
    </motion.div>
  );

  return (
    <div className="pt-16 min-h-screen bg-black">

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-8">
              <h1 className="text-6xl md:text-8xl font-bold text-white">
                CYGNUS
              </h1>
            </div>
            <p className="text-2xl md:text-3xl text-red-200 mb-4 font-serif">
            A New Code Awakens
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
            “In a galaxy not so far away, a signal has echoed across the stars... CYGNUS has returned.”
            </p>

            {/* Countdown Timer */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
                <Timer className="w-6 h-6 mr-2 text-red-400" />
                Galactic Alignment Countdown
              </h2>
              <div className="flex justify-center space-x-4">
                <CountdownBox value={timeLeft.days} label="Days" />
                <CountdownBox value={timeLeft.hours} label="Hours" />
                <CountdownBox value={timeLeft.minutes} label="Minutes" />
                <CountdownBox value={timeLeft.seconds} label="Seconds" />
              </div>
            </div>

            <motion.button
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-bold py-4 px-8 rounded-full border-2 border-red-400 shadow-lg transition-all duration-300 text-lg inline-flex items-center"
            >
              Join the Rebellion
              <ExternalLink className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            Stellar Competition Events
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedEvent(event)}
                className={`relative overflow-hidden rounded-2xl bg-black bg-gradient-to-br ${event.color} p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group border border-white/10`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 -mr-10 -mt-10 rounded-full bg-white/10 blur-2xl" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <event.icon className={`w-12 h-12 ${event.iconColor}`} />
                    <div className="text-right">
                      <div className="text-white/80 text-sm">Star Navigators</div>
                      <div className="text-white font-bold">
                        {event.currentParticipants}/{event.maxParticipants}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-white/80 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 text-sm text-white/70">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time} • {event.duration}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="text-white/80 text-sm mb-2">Stellar Reward:</div>
                    <div className="text-white font-bold">{event.prizes[0]}</div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold flex items-center">
                      Explore the Event
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-red-400/30 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4">
                <Star className="w-8 h-8 text-red-400/30 fill-current" />
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <selectedEvent.icon className={`w-8 h-8 ${selectedEvent.iconColor} mr-3`} />
                  <h2 className="text-3xl font-bold text-white">{selectedEvent.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-white/60 hover:text-red-400 text-2xl transition-colors"
                >
                  ×
                </button>
              </div>

              <p className="text-white/80 mb-6 text-lg">{selectedEvent.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-red-400 font-semibold mb-2 flex items-center">
                      <Star className="w-4 h-4 mr-2 fill-current" />
                      Stellar Details
                    </h3>
                    <div className="space-y-2 text-white/70">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(selectedEvent.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {selectedEvent.time} • {selectedEvent.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {selectedEvent.currentParticipants}/{selectedEvent.maxParticipants} navigators registered
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-red-400 font-semibold mb-2">Cosmic Requirements</h3>
                    <ul className="space-y-1 text-white/70">
                      {selectedEvent.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <Star className="w-3 h-3 mr-2 mt-1 text-red-400/60 fill-current flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-red-400 font-semibold mb-2">Stellar Rewards</h3>
                  <ul className="space-y-2 text-white/70">
                    {selectedEvent.prizes.map((prize, index) => (
                      <li key={index} className="flex items-center">
                        <Trophy className="w-4 h-4 mr-2 text-red-400" />
                        {prize}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-center">
                <motion.a
                  href={selectedEvent.registrationLink}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-bold py-3 px-6 rounded-full border-2 border-red-400 shadow-lg transition-all duration-300 inline-flex items-center"
                >
                  Join {selectedEvent.title}
                  <ExternalLink className="ml-2 w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Event Info Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-br from-red-900/20 to-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative">
                <MapPin className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <Star className="w-6 h-6 text-white/30 fill-current absolute -top-2 -right-2 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cosmic Venue</h3>
              <p className="text-white/70">
                Stellar Observatory Hall<br />
                Constellation Wing, Floor 3<br />
                Galactic University Campus
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative">
                <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <Star className="w-6 h-6 text-white/30 fill-current absolute -top-2 -right-2 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Star Navigators</h3>
              <p className="text-white/70">
                500+ Registered Explorers<br />
                50+ Stellar Institutions<br />
                4 Days of Cosmic Innovation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative">
                <Trophy className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <Star className="w-6 h-6 text-white/30 fill-current absolute -top-2 -right-2 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Galactic Rewards</h3>
              <p className="text-white/70">
                ₹2,00,000+ Stellar Prize Pool<br />
                Interstellar Internship Portals<br />
                Cosmic Industry Mentorship
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cygnus;