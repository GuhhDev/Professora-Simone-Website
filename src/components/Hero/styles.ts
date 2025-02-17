import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
  padding-top: 6rem;
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.primary}11, ${({ theme }) => theme.colors.background});
`;

export const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1rem;
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

export const TextContent = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50%;
    margin-bottom: 0;
  }
`;

export const ImageContent = styled.div`
  width: 100%;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50%;
  }
  
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
  }
`;
