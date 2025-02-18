import styled from 'styled-components';
import { motion } from 'framer-motion';

export const VideosSection = styled.section`
  background-color: white;
  padding: 4rem 1rem;
`;

export const VideosContainer = styled.div`
  max-width: 1550px;
  margin: 0 auto;
`;

export const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  padding: 1rem 0;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;

export const VideoCard = styled(motion.div)`
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }

  .thumbnail-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
    background-color: #f3f4f6;
    overflow: hidden;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const VideoContent = styled.div`
  padding: 1.25rem;
  
  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 1rem;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 3rem;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #6b7280;
    font-size: 0.875rem;
    margin-bottom: 1.25rem;
    padding: 0 0.25rem;
  }
`;

export const WatchButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  background-color: #e11d48;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  letter-spacing: 0.025em;

  &:hover {
    background-color: #be123c;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
