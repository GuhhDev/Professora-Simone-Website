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

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'portfolio', 'videos', 'instagram'];
      let currentSection = sections[0];
      let minDistance = Infinity;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
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
        {/* <Portfolio portfolioItems={portfolioItems} /> */}
        <Videos />
        {/* <Instagram /> */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;