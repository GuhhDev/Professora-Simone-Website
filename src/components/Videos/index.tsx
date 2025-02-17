import { Youtube } from 'lucide-react';
import { Video } from '../../types';
import { VideosSection, VideosContainer, VideosGrid, VideoCard, ThumbnailContainer, VideoInfo, VideoStats } from './styles';

interface VideosProps {
  videos: Video[];
}

export function Videos({ videos }: VideosProps) {
  return (
    <VideosSection id="videos">
      <VideosContainer>
        <div className="flex items-center justify-center gap-2 mb-8">
          <Youtube className="w-8 h-8 text-rose-500" />
          <h2 className="text-3xl font-bold text-rose-700">Últimos Vídeos</h2>
        </div>
        
        <VideosGrid>
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <ThumbnailContainer>
                <img src={video.thumbnail} alt={video.title} />
              </ThumbnailContainer>
              <VideoInfo>
                <h3>{video.title}</h3>
                <VideoStats>
                  <span>{video.views} visualizações</span>
                  <span>{video.date}</span>
                </VideoStats>
              </VideoInfo>
            </VideoCard>
          ))}
        </VideosGrid>
      </VideosContainer>
    </VideosSection>
  );
}
