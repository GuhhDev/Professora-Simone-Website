import { Youtube, Instagram as InstagramIcon, Car as Yarn } from 'lucide-react';
import { motion } from 'framer-motion';
import { FooterContainer, FlexContainer, LogoContainer, LogoText, SocialLinks, SocialLink, CopyrightText } from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <FlexContainer>
          <LogoContainer whileHover={{ scale: 1.05 }}>
            <Yarn style={{ height: '2rem', width: '2rem' }} />
            <LogoText>Professora Simone</LogoText>
          </LogoContainer>
          <SocialLinks>
            <SocialLink
              href="https://www.youtube.com/@professorasimone"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Youtube style={{ height: '1.5rem', width: '1.5rem' }} />
            </SocialLink>
            <SocialLink
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <InstagramIcon style={{ height: '1.5rem', width: '1.5rem' }} />
            </SocialLink>
          </SocialLinks>
        </FlexContainer>
        <motion.div
          className="mt-8 text-center text-rose-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <CopyrightText>&copy; 2024 Professora Simone. Todos os direitos reservados.</CopyrightText>
        </motion.div>
      </motion.div>
    </FooterContainer>
  );
}