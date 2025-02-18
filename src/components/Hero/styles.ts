import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
  padding-top: 4.3rem;
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.primary}11, ${({ theme }) => theme.colors.background});
`;

export const HeroContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const ImageContent = styled.div`
  width: 100%; /* Garante que ocupe 100% da largura */
  max-width: 100%; /* Evita que ultrapasse a largura da tela */
  overflow: hidden; /* Garante que nada ultrapasse o container */

  img {
    width: 100%; /* Faz a imagem ocupar 100% do container */
    height: auto; /* Mantém a proporção da imagem */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%; /* Mantém 100% da largura mesmo em telas maiores */
  }
`;
