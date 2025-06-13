import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Award, Briefcase, Calendar } from 'lucide-react';

interface Member {
  name: string;
  position: string;
  image: string;
  bio: string;
  achievements: string[];
  experience: string;
  joinDate: string;
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const Members: React.FC = () => {
  const members: Member[] = [
    {
      name: 'Bharat Jambhulkar',
      position: 'IEEE CS CHAIR',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
      bio: 'Leading AI researcher with 15+ years of experience in machine learning and neural networks.',
      achievements: [
        'IEEE Computer Society Golden Core Member',
        'Published 50+ research papers',
        'Led 3 major AI initiatives'
      ],
      experience: '15+ years in AI & ML',
      joinDate: 'Member since 2008',
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        email: 'mailto:sarah@ieee.org'
      }
    },
    {
      name: 'Vaibhavi Mangrulkar',
      position: 'IEEE CS VICE-CHAIR',
      image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80',
      bio: 'Full-stack developer specializing in cloud architecture and distributed systems.',
      achievements: [
        'AWS Certified Solutions Architect',
        'Led cloud migration for 20+ enterprises',
        'Open source contributor'
      ],
      experience: '12 years in Cloud Architecture',
      joinDate: 'Member since 2012',
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      }
    },
    {
      name: 'Rutuj Langde',
      position: 'SECRETARY',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      bio: 'Expert in community building and technical event management with global experience.',
      achievements: [
        'Organized 100+ tech conferences',
        'Community Leadership Award',
        'IEEE Distinguished Speaker'
      ],
      experience: '8 years in Event Management',
      joinDate: 'Member since 2016',
      social: {
        linkedin: 'https://linkedin.com',
        email: 'mailto:james@ieee.org'
      }
    },
    {
      name: 'Shivansh Verma',
      position: 'WEBMASTER',
      image: '/assets/Shivansh Verma..jpg',
      bio: 'wannabe software developer',
      achievements: [
        'exist',
        'um',
        'Patent holder for methane treatment paper'
      ],
      experience: '1 year',
      joinDate: 'September 2024',
      social: {
        linkedin: 'www.linkedin.com/in/shivansh-verma-751850298',
        email: 'shivansh1411@gmail.com'
      }
    },
    {
      name: 'SHREYASH BAHE',
      position: 'CO-WEBMASTER',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      bio: 'Expert in community building and technical event management with global experience.',
      achievements: [
        'Organized 100+ tech conferences',
        'Community Leadership Award',
        'IEEE Distinguished Speaker'
      ],
      experience: '8 years in Event Management',
      joinDate: 'Member since 2016',
      social: {
        linkedin: 'https://linkedin.com',
        email: 'mailto:james@ieee.org'
      }
    }
  ];

  return (
    <div className="pt-16">


      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto bg-black/80 p-10 rounded-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            
            <h1 className="page-title text-neon-white animate-glow">Meet Our Team</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Dedicated professionals driving innovation and excellence in computer science.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group [perspective:1000px]"
              >
                <div className="relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] h-[360px]">
                  {/* Front of card */}
                  <div className="absolute inset-0 bg-deep-space/80 backdrop-blur-sm overflow-hidden transform skew-x-2 hover:skew-x-0 transition-transform duration-300 [backface-visibility:hidden]" 
                       style={{
                         clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
                       }}>
                    <div className="h-full flex flex-col">
                      <div className="relative h-[240px] overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent" />
                      </div>
                      <div className="p-4 flex-grow flex flex-col justify-end">
                        <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-sm text-neon-yellow font-medium">{member.position}</p>
                      </div>
                      <div className="p-2 border-t border-white/10 flex justify-center space-x-3">
                        {member.social.github && (
                          <a href={member.social.github} className="text-white/70 hover:text-neon-yellow transition-colors">
                            <Github size={16} />
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} className="text-white/70 hover:text-neon-yellow transition-colors">
                            <Linkedin size={16} />
                          </a>
                        )}
                        {member.social.email && (
                          <a href={member.social.email} className="text-white/70 hover:text-neon-yellow transition-colors">
                            <Mail size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 bg-deep-space/80 backdrop-blur-sm overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]"
                       style={{
                         clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
                       }}>
                    <div className="h-full p-4 flex flex-col">
                      <h3 className="text-lg font-bold text-neon-yellow mb-2">{member.name}</h3>
                      
                      <p className="text-white/80 text-xs mb-3 line-clamp-2">{member.bio}</p>
                      
                      <div className="space-y-1 mb-3">
                        <div className="flex items-center text-white/70">
                          <Briefcase size={12} className="mr-1.5" />
                          <span className="text-xs">{member.experience}</span>
                        </div>
                        <div className="flex items-center text-white/70">
                          <Calendar size={12} className="mr-1.5" />
                          <span className="text-xs">{member.joinDate}</span>
                        </div>
                      </div>

                      <div className="flex-grow">
                        <div className="flex items-center mb-2">
                          <Award size={12} className="text-neon-yellow mr-1.5" />
                          <h4 className="text-xs font-semibold text-white">Achievements</h4>
                        </div>
                        <ul className="space-y-1 text-xs text-white/70 list-disc list-inside">
                          {member.achievements.map((ach, i) => (
                            <li key={i}>{ach}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 border-t border-white/10 flex justify-center space-x-3">
                        {member.social.github && (
                          <a href={member.social.github} className="text-white/70 hover:text-neon-yellow transition-colors">
                            <Github size={16} />
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} className="text-white/70 hover:text-neon-yellow transition-colors">
                            <Linkedin size={16} />
                          </a>
                        )}
                        {member.social.email && (
                          <a href={member.social.email} className="text-white/70 hover:text-neon-yellow transition-colors">
                            <Mail size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;