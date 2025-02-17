import styled from 'styled-components';
import { motion } from 'framer-motion';

export const VideosSection = styled.section`
  padding: 4rem 0;
  background: ${({ theme }) => theme.colors.background};
`;

export const VideosContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const VideoCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

export const ThumbnailContainer = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const VideoInfo = styled.div`
  padding: 1rem;
  
  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primaryDark};
    margin-bottom: 0.5rem;
  }
`;

export const VideoStats = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
`;
