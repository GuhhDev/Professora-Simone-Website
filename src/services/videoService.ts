import { Video } from '../types';

// This is a mock service. In a real application, you would fetch from YouTube API
export const videoService = {
  async getRecentVideos(channelId: string): Promise<Video[]> {
    // Simulated data
    const simulatedVideos: Video[] = [
      {
        id: '1',
        title: "PASSO A PASSO TAPETE RETANGULAR EM CROCHÊ",
        thumbnail: "https://images.unsplash.com/photo-1604949210966-c66b5c06827b?w=500&q=80",
        views: "50k",
        date: "2 dias atrás"
      },
      {
        id: '2',
        title: "PASSO A PASSO TAPETE REDONDO EM CROCHÊ",
        thumbnail: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=500&q=80",
        views: "35k",
        date: "5 dias atrás"
      },
      {
        id: '3',
        title: "PASSO A PASSO JOGO AMERICANO EM CROCHÊ",
        thumbnail: "https://images.unsplash.com/photo-1612459284970-e8f027596582?w=500&q=80",
        views: "42k",
        date: "1 semana atrás"
      }
    ];

    return simulatedVideos;
  }
};
