import { Video } from '../types';

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

export const youtubeService = {
  async getRecentVideos(): Promise<Video[]> {
    try {
      console.log('🎥 Iniciando busca de vídeos do YouTube...');
      
      if (!YOUTUBE_API_KEY || !YOUTUBE_CHANNEL_ID) {
        throw new Error('Credenciais do YouTube não configuradas');
      }

      const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`;
      
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erro ao buscar vídeos: ${response.status}`);
      }

      const data = await response.json();

      const videos = data.items
        .filter((item: any) => item.id.kind === 'youtube#video')
        .map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          views: 'Novo', // A API de search não fornece estatísticas
          date: formatDate(new Date(item.snippet.publishedAt))
        }));

      return videos;
    } catch (error) {
      throw error;
    }
  }
};

function formatDate(publishedAt: Date): string {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - publishedAt.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) {
    return 'há 1 dia';
  } else if (diffDays < 7) {
    return `há ${diffDays} dias`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `há ${weeks} ${weeks === 1 ? 'semana' : 'semanas'}`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `há ${months} ${months === 1 ? 'mês' : 'meses'}`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `há ${years} ${years === 1 ? 'ano' : 'anos'}`;
  }
}
