import styled from 'styled-components';
import { motion } from 'framer-motion';

export const InstagramSection = styled.section`
  padding: 4rem 0;
`;

export const InstagramContainer = styled.div`
  max-width: 1550px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PostCard = styled(motion.div)`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  aspect-ratio: 1;
  
  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PostOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  opacity: 0;
  transition: opacity 0.2s;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
  }
`;
