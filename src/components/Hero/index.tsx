import { motion } from 'framer-motion';
import { HeroSection, HeroContainer, HeroContent, TextContent, ImageContent } from './styles';

export function Hero() {
  return (
    <HeroSection id="hero">
      <HeroContainer>
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TextContent>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-rose-700 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Professora Simone
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Aprenda crochê de forma fácil e divertida com tutoriais!
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a 
                href="#videos" 
                className="bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors"
              >
                Ver Tutoriais
              </a>
              <a 
                href="#portfolio" 
                className="border-2 border-rose-500 text-rose-500 px-6 py-3 rounded-lg hover:bg-rose-50 transition-colors"
              >
                Portfolio
              </a>
            </motion.div>
          </TextContent>
          
          <ImageContent>
            <motion.img
              src="./public/mae.jpeg"
              alt="Crochê artesanal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="shadow-xl"
            />
          </ImageContent>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
}
