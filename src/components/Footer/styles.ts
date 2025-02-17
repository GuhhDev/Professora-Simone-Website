import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterContainer = styled.footer`
  background: linear-gradient(180deg, #be123c 0%, #9f1239 100%);
  color: white;
  padding: 3rem 0;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 0;
  }
`;

export const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const SocialLink = styled(motion.a)`
  color: white;
  transition: color 0.2s;

  &:hover {
    color: #fecdd3;
  }
`;

export const CopyrightText = styled.div`
  margin-top: 2rem;
  text-align: center;
  color: #fecdd3;
`;