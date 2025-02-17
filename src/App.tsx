import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Youtube, Instagram as InstagramIcon, Car as Yarn, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { Instagram } from './components/Instagram';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { Video } from './types';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  date: string;
}

function App() {
  const [recentVideos, setRecentVideos] = useState<Video[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const channelId = 'UCxK0Mq4bwNhZbeQrB0yxDKw';

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const simulatedVideos = [
          {
            id: '1',
            title: "PASSO A PASSO TAPETE RETANGULAR EM CROCHÊ",
            thumbnail: "https://images.unsplash.com/photo-1604949210966-c66b5c06827b?w=500&q=80",
            views: "50k",
            date: "2 dias atrás"
          },
          {
            id: '2',
            title: "PASSO A PASSO TAPETE REDONDO EM CROCHÊ",
            thumbnail: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=500&q=80",
            views: "35k",
            date: "5 dias atrás"
          },
          {
            id: '3',
            title: "PASSO A PASSO JOGO AMERICANO EM CROCHÊ",
            thumbnail: "https://images.unsplash.com/photo-1612459284970-e8f027596582?w=500&q=80",
            views: "42k",
            date: "1 semana atrás"
          }
        ];
        setRecentVideos(simulatedVideos);
      } catch (error) {
        console.error('Erro ao buscar vídeos:', error);
      }
    };

    fetchVideos();
  }, [channelId]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'portfolio', 'videos', 'instagram'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: "Xale Primavera",
      image: "https://images.unsplash.com/photo-1598871956222-26b66d6559ff?w=500&q=80",
      description: "Xale delicado em tons pastéis"
    },
    {
      id: 2,
      title: "Amigurumi Unicórnio",
      image: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=500&q=80",
      description: "Boneco de pelúcia em crochê"
    },
    {
      id: 3,
      title: "Bolsa Verão",
      image: "https://images.unsplash.com/photo-1617142108319-66c7ab45c711?w=500&q=80",
      description: "Bolsa de praia em crochê"
    }
  ];

  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1599091333925-14b66b0d5be4?w=500&q=80",
      likes: 1234,
      comments: 45
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=500&q=80",
      likes: 2345,
      comments: 67
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1604931668626-ab49cb27d952?w=500&q=80",
      likes: 3456,
      comments: 89
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="min-h-screen bg-rose-50">
        {/* Header */}
        <motion.header 
          className="fixed w-full bg-white/80 backdrop-blur-md shadow-md z-50"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Yarn className="h-8 w-8 text-rose-500" />
                <span className="text-2xl font-bold text-rose-700">Professora Simone</span>
              </motion.div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6">
                {['portfolio', 'videos', 'instagram'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className={`text-gray-600 hover:text-rose-500 capitalize ${
                      activeSection === item ? 'text-rose-500 font-semibold' : ''
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden text-gray-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </motion.button>
            </nav>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden bg-white"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="container mx-auto px-4 py-4">
                  {['portfolio', 'videos', 'instagram'].map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item}`}
                      className="block py-2 text-gray-600 hover:text-rose-500 capitalize"
                      whileHover={{ x: 4 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>

        {/* Hero Section */}
        <section id="hero" className="pt-24 bg-gradient-to-b from-rose-100 to-rose-50">
          <div className="container mx-auto px-4 py-20">
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold text-rose-800 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Aprenda crochê com a Professora Simone
                </motion.h1>
                <motion.p 
                  className="text-lg text-gray-700 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Tutoriais, dicas e inspiração para suas criações em crochê
                </motion.p>
                <motion.div 
                  className="flex space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.a 
                    href="https://www.youtube.com/@professorasimone" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 bg-rose-500 text-white px-6 py-3 rounded-full"
                    whileHover={{ scale: 1.05, backgroundColor: "#e11d48" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Youtube className="h-5 w-5" />
                    <span>Inscreva-se</span>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <InstagramIcon className="h-5 w-5" />
                    <span>Seguir</span>
                  </motion.a>
                </motion.div>
              </div>
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?w=800&q=80" 
                  alt="Professora Simone fazendo crochê" 
                  className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center text-gray-800 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Meu Portifólio
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                  <motion.div 
                    className="p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Videos Section */}
        <section id="videos" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center text-gray-800 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Vídeos Recentes
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative group">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                    <motion.div 
                      className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
                      whileHover={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Youtube className="h-12 w-12 text-white opacity-80" />
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{video.title}</h3>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{video.views} visualizações</span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <Instagram />

        {/* Footer */}
        <footer className="bg-gradient-to-b from-rose-700 to-rose-800 text-white py-12">
          <motion.div 
            className="container mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div 
                className="flex items-center space-x-2 mb-6 md:mb-0"
                whileHover={{ scale: 1.05 }}
              >
                <Yarn className="h-8 w-8" />
                <span className="text-2xl font-bold">Professora Simone</span>
              </motion.div>
              <div className="flex space-x-6">
                <motion.a 
                  href="https://www.youtube.com/@professorasimone" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-rose-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Youtube className="h-6 w-6" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="hover:text-rose-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <InstagramIcon className="h-6 w-6" />
                </motion.a>
              </div>
            </div>
            <motion.div 
              className="mt-8 text-center text-rose-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p>&copy; 2024 Professora Simone. Todos os direitos reservados.</p>
            </motion.div>
          </motion.div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;