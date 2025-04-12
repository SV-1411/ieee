import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  type: 'upcoming' | 'past';
  time: string;
  registrationLink?: string;
  longDescription?: string;
  agenda?: string[];
  speakers?: Array<{
    name: string;
    role: string;
  }>;
}

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const events: Event[] = [
    {
      id: '1',
      title: 'AI & Ethics Symposium',
      date: '2024-04-15',
      location: 'Virtual Event',
      image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80',
      description: 'Join us for a comprehensive discussion on the ethical implications of AI development and its impact on society.',
      longDescription: 'This symposium brings together leading experts in AI ethics to discuss crucial topics including bias in AI systems, privacy concerns, and the future of AI governance. Through interactive sessions and panel discussions, participants will gain deep insights into the ethical challenges facing AI development.',
      type: 'upcoming',
      time: '10:00 AM PST',
      registrationLink: '#',
      agenda: [
        'Opening Keynote: The Future of AI Ethics',
        'Panel Discussion: Bias in AI Systems',
        'Workshop: Implementing Ethical AI Practices',
        'Closing Remarks and Networking'
      ],
      speakers: [
        { name: 'Dr. Sarah Chen', role: 'AI Ethics Researcher' },
        { name: 'Prof. James Wilson', role: 'Technology Policy Expert' }
      ]
    },
    {
      id: '2',
      title: 'Quantum Computing Workshop',
      date: '2024-05-20',
      location: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
      description: 'Hands-on workshop exploring the latest advances in quantum computing.',
      longDescription: 'Dive deep into the world of quantum computing with hands-on sessions and expert guidance. Learn about quantum algorithms, error correction, and the practical applications of quantum computing in various industries.',
      type: 'upcoming',
      time: '9:00 AM PST',
      registrationLink: '#',
      agenda: [
        'Introduction to Quantum Computing Principles',
        'Hands-on Lab: Quantum Algorithms',
        'Industry Applications Workshop',
        'Future of Quantum Computing'
      ],
      speakers: [
        { name: 'Dr. Emily Wong', role: 'Quantum Computing Researcher' },
        { name: 'Dr. Michael Brown', role: 'Quantum Systems Engineer' }
      ]
    },
    {
      id: '3',
      title: 'Web3 Development Conference',
      date: '2024-02-10',
      location: 'New York, NY',
      image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80',
      description: 'A deep dive into blockchain technology and decentralized applications.',
      longDescription: 'Explore the latest developments in Web3 technology, blockchain infrastructure, and decentralized applications. Connect with industry leaders and learn about building the future of the internet.',
      type: 'past',
      time: '11:00 AM EST',
      agenda: [
        'Web3 Architecture Overview',
        'Smart Contract Development',
        'DeFi Applications Workshop',
        'Networking Session'
      ],
      speakers: [
        { name: 'Alex Rivera', role: 'Blockchain Architect' },
        { name: 'Lisa Chen', role: 'DeFi Protocol Developer' }
      ]
    },
    {
      id: '4',
      title: 'Cybersecurity Summit',
      date: '2024-01-15',
      location: 'London, UK',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
      description: 'Expert panels on the latest cybersecurity threats and defense strategies.',
      longDescription: 'Join cybersecurity experts for an in-depth look at emerging threats, defense strategies, and the future of digital security. Learn about the latest attack vectors and how to protect against them.',
      type: 'past',
      time: '2:00 PM GMT',
      agenda: [
        'Threat Landscape Overview',
        'Zero Trust Architecture',
        'Incident Response Workshop',
        'Future of Cybersecurity'
      ],
      speakers: [
        { name: 'John Smith', role: 'Security Analyst' },
        { name: 'Maria Garcia', role: 'Threat Intelligence Expert' }
      ]
    }
  ];

  const filteredEvents = events.filter(event => 
    filter === 'all' ? true : event.type === filter
  );

  return (
    <div className="pt-16">
    {/* Dark Overlay */}
<div className="absolute inset-0 bg-black/55 z-10" />

  {/* Background Image */}
  <div className="fixed inset-0 z-0">
    <div
      className="w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/war2.jpg')",
      }}
    />
    <div
className="absolute inset-0 bg-black/40"

/>
  </div>


      <div className="relative z-10 min-h-[calc(100vh-4rem)] flex">
        {/* Fixed Left Section - 60% width */}
        <div className="w-[60%] p-12 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {selectedEvent ? (
              <motion.div
                key="event-details"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-3xl"
              >
                <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h1 className="text-4xl font-bold text-white mb-2">{selectedEvent.title}</h1>
                    <div className="flex items-center space-x-4 text-white/80">
                      <span className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {new Date(selectedEvent.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {selectedEvent.time}
                      </span>
                      <span className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {selectedEvent.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-[#ffd300] mb-4">About the Event</h2>
                    <p className="text-white/80 leading-relaxed">{selectedEvent.longDescription}</p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#ffd300] mb-4">Agenda</h2>
                    <ul className="space-y-2">
                      {selectedEvent.agenda?.map((item, index) => (
                        <li key={index} className="flex items-start text-white/80">
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#ffd300] mb-4">Speakers</h2>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedEvent.speakers?.map((speaker, index) => (
                        <div key={index} className="bg-white/5 p-4 rounded-lg">
                          <h3 className="text-white font-semibold">{speaker.name}</h3>
                          <p className="text-white/60 text-sm">{speaker.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedEvent.type === 'upcoming' && selectedEvent.registrationLink && (
                    <div className="flex justify-center">
                      <a
                        href={selectedEvent.registrationLink}
                        className="neon-button inline-flex items-center"
                      >
                        Register Now
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="default-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <img
                  src="/assets/ieee1.png"
                  alt="IEEE CS Logo"
                  className="h-48 mb-8 mx-auto"
                />
                <h2 className="text-4xl font-dainty font-bold text-[#f2f3f4] mb-6">IEEE Computer Society Events</h2>
                <p className="text-xl font-creative text-[#f2f3f4]/80 text-center max-w-2xl">
                  Discover our upcoming conferences, workshops, and tech symposiums. 
                  Select an event from the right to learn more.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Scrollable Right Section - 40% width */}
        <div className="w-[40%] border-l border-[#f2f3f4]/10 flex flex-col h-[calc(100vh-4rem)] bg-[#191919]/80 backdrop-blur-lg">
          {/* Filter Controls */}
          <div className="p-6 border-b border-[#f2f3f4]/10">
            <h2 className="text-2xl font-dainty font-bold text-[#f2f3f4] mb-4">Events</h2>
            <div className="flex space-x-2">
              {['all', 'upcoming', 'past'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type as 'all' | 'upcoming' | 'past')}
                  className={`px-4 py-1 text-sm font-creative transition-all duration-300 ${
                    filter === type
                      ? 'bg-[#ffd300] text-[#191919]'
                      : 'bg-[#f2f3f4]/10 text-[#f2f3f4] hover:bg-[#f2f3f4]/20'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable Events List */}
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-4 p-6">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedEvent?.id === event.id
                      ? 'bg-[#f2f3f4]/20'
                      : 'bg-[#f2f3f4]/10 hover:bg-[#f2f3f4]/15'
                  }`}
                >
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-1 text-xs font-creative ${
                        event.type === 'upcoming'
                          ? 'bg-[#ffd300] text-[#191919]'
                          : 'bg-[#f2f3f4]/20 text-[#f2f3f4]'
                      }`}>
                        {event.type === 'upcoming' ? 'Upcoming' : 'Past'}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-[#f2f3f4] font-dainty font-semibold text-lg mb-2">{event.title}</h3>
                    <div className="space-y-2 text-[#f2f3f4]/60 text-sm font-creative">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-2" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    {event.type === 'upcoming' && event.registrationLink && (
                      <motion.a
                        href={event.registrationLink}
                        className="mt-4 inline-flex items-center text-[#ffd300] hover:text-[#f2f3f4] transition-colors text-sm font-creative"
                        whileHover={{ x: 5 }}
                      >
                        Register Now
                        <ExternalLink size={14} className="ml-1" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;