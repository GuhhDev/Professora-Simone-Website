import { motion } from 'framer-motion';
import { HeroSection, HeroContent, ImageContent } from './styles';

export function Hero() {
  return (
    <HeroSection id="hero">
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ImageContent>
            <motion.img
              src="https://yt3.googleusercontent.com/XaLhMeST2mR8WJVkxTYBVeJCrS2X-q1X4uFUUTC8r5EtaW-JHAGTZRclhw9QytMdjwmuieDa40E=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
              alt="Crochê artesanal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="shadow-xl"
            />
          </ImageContent>
        </HeroContent>
    </HeroSection>
  );
}
