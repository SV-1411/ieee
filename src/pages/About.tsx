import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { History, Users, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  const timeline = [
    {
      year: '1946',
      title: 'The Beginning',
      description: 'The IEEE Computer Society is born — laying the foundation for a global network of computing professionals and visionaries.',
      icon: History,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200'
    },
    {
      year: '2011',
      title: 'GHRCE Joins the Mission',
      description: 'GHRCE establishes its IEEE CS Student Chapter, becoming a beacon of tech-driven learning, leadership, and innovation.',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=200'
    },
    {
      year: '2017',
      title: 'The Rising Impact',
      description: 'From workshops to hackathons, the chapter begins to make waves — empowering students and elevating the campus tech culture.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=200'
    },
    {
      year: '2025',
      title: 'Future Forward',
      description: 'Rooted in legacy, driven by vision — the chapter steps into the future with fresh ideas, stronger collaborations, and a passion to lead.',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=200'
    },
  ];

  const projectImages = [
    {
      url: '/assets/war1.jpg',
      title: 'Tech Innovation'
    },
    {
      url: '/assets/war2.jpg',
      title: 'Digital Future'
    },
    {
      url: '/assets/war3.jpg',
      title: 'Tech Innovation'
    }, 
    {
      url: '/assets/war4.jpg',
      title: 'Tech Innovation'
    },
    {
      url: '/assets/war5.jpg',
      title: 'Tech Innovation'
    },
    {
      url: '/assets/starwar.jpg',
      title: 'Tech Innovation'
    }, 
    {
      url: '/assets/1.jpg',
      title: 'Tech Innovation'
    },
    {
      url: '/assets/2.jpg',
      title: 'Tech Innovation'
    },
    {
      url: '/assets/3.jpg',
      title: 'Tech Innovation'
    },
    {
      url: '/assets/war2.jpg',
      title: 'Digital Future'
    },
    
    
  ];

  const [currentImages, setCurrentImages] = useState(projectImages);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages(prevImages => {
        const newImages = [...prevImages];
        const randomIndex = Math.floor(Math.random() * newImages.length);
        const currentUrls = newImages.map(img => img.url);
const availableImages = projectImages.filter(img => !currentUrls.includes(img.url));

        if (availableImages.length > 0) {
          const randomNewImage = availableImages[Math.floor(Math.random() * availableImages.length)];
          newImages[randomIndex] = randomNewImage;
        }
        return newImages;
      });
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16">
      {/* Dark Overlay */}
<div className="absolute inset-0 bg-black/55 z-10" />

    {/* Background Image */}
    <div className="fixed inset-0 z-0">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/3.jpg')",
        }}
      />
      
    </div>

      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center animate-glow"
        >
          <h1 className="page-title animate-glow">Our Journey Through Time</h1>
          <p className="text-xl text-[#f2f3f4]/80 max-w-3xl mx-auto font-creative">
            From the dawn of computing to the frontiers of technology, we've been shaping the future of computer science.
          </p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-4 md:gap-8 glass-card p-6 rounded-lg"
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right order-1' : 'order-3'}`}>
                  <h3 className="text-2xl font-bold text-[#ffd300]">{item.year}</h3>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-[#f2f3f4]/80">{item.description}</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-[#191919] border-2 border-[#ffd300] flex items-center justify-center flex-shrink-0 order-2">
                  <item.icon className="w-8 h-8 text-[#ffd300]" />
                </div>
                <div className={`flex-1 ${index % 2 === 0 ? 'order-3' : 'order-1'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-32 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 animate-glow font-dainty">
          Our Moments
        </h2>
        <div className="grid grid-cols-5 gap-4">
          {currentImages.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square glass-card rounded-lg overflow-hidden group"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-[#f2f3f4] font-dainty font-semibold text-sm">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;