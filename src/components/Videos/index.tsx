import { useState, useEffect } from 'react';
import { Youtube, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Video } from '../../types';
import { youtubeService } from '../../services/youtubeService';
import { VideosSection, VideosContainer, VideosGrid, VideoCard, VideoContent, WatchButton } from './styles';

export function Videos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const youtubeVideos = await youtubeService.getRecentVideos();
        setVideos(youtubeVideos);
        setError(null);
      } catch (err) {
        console.error('Erro ao carregar vídeos:', err);
        setError('Não foi possível carregar os vídeos. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  const handleWatchVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <VideosSection id="videos">
      <VideosContainer>
        <motion.h2
          className="text-4xl font-bold text-rose-700 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Vídeos Recentes
        </motion.h2>

        {loading && (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-700 mx-auto"></div>
          </div>
        )}

        {error && (
          <div className="text-center text-rose-600 py-10">
            {error}
          </div>
        )}

        {!loading && !error && (
          <VideosGrid>
            {videos.map((video, index) => (
              <VideoCard
                key={video.id}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="thumbnail-container">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Youtube className="h-16 w-16 text-white opacity-90" />
                  </div>
                </div>
                <VideoContent>
                  <h3>{video.title}</h3>
                  <WatchButton
                    onClick={() => handleWatchVideo(video.id)}
                    as={motion.button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Play size={20} />
                    Assistir Agora
                  </WatchButton>
                </VideoContent>
              </VideoCard>
            ))}
          </VideosGrid>
        )}
      </VideosContainer>
    </VideosSection>
  );
}
