import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { Instagram } from './components/Instagram';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { PortfolioItem } from './types';
import { Portfolio } from './components/Portfolio';
import { Videos } from './components/Videos';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  date: string;
}

function App() {
  const [recentVideos, setRecentVideos] = useState<Video[]>([]);
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

  const portfolioItems: PortfolioItem[] = [
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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div className="min-h-screen bg-rose-50">
        <Header activeSection={activeSection} />
        <Hero />
        <Portfolio portfolioItems={portfolioItems} />
        <Videos videos={recentVideos} />
        <Instagram />
        <Footer />
      </div>

    </ThemeProvider>
  );
}

export default App;