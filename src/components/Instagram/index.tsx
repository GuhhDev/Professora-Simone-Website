import { useState, useEffect } from 'react';
import { Instagram as InstagramIcon, Heart, MessageCircle } from 'lucide-react';
import { InstagramPost } from '../../types';
import { instagramService } from '../../services/instagramService';
import { InstagramSection, InstagramContainer, PostsGrid, PostCard, PostImage, PostOverlay } from './styles';

export function Instagram() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchPosts() {
      console.log('🔄 Componente Instagram: Iniciando fetchPosts...');
      try {
        console.log('📥 Componente Instagram: Chamando instagramService.getRecentPosts()');
        const instagramPosts = await instagramService.getRecentPosts();
        console.log('📦 Componente Instagram: Posts recebidos:', instagramPosts);
        setPosts(instagramPosts);
      } catch (err) {
        console.error('❌ Componente Instagram: Erro ao buscar posts:', err);
        setError('Erro ao carregar posts do Instagram');
      } finally {
        console.log('✅ Componente Instagram: Finalizado fetchPosts');
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    console.log('⏳ Componente Instagram: Renderizando loading...');
    return (
      <InstagramSection id="instagram">
        <InstagramContainer>
          <div className="flex items-center justify-center">
            <p>Carregando posts...</p>
          </div>
        </InstagramContainer>
      </InstagramSection>
    );
  }

  if (error) {
    console.log('❌ Componente Instagram: Renderizando erro:', error);
    return (
      <InstagramSection id="instagram">
        <InstagramContainer>
          <div className="flex items-center justify-center">
            <p className="text-red-500">{error}</p>
          </div>
        </InstagramContainer>
      </InstagramSection>
    );
  }

  console.log('🎨 Componente Instagram: Renderizando', posts.length, 'posts');
  return (
    <InstagramSection id="instagram">
      <InstagramContainer>
        <div className="flex items-center justify-center gap-2 mb-8">
          <InstagramIcon className="w-8 h-8 text-rose-500" />
          <h2 className="text-3xl font-bold text-rose-700">Instagram</h2>
        </div>
        
        <PostsGrid>
          {posts.map((post, index) => {
            console.log(`🖼️ Renderizando post ${index + 1}:`, post);
            return (
              <PostCard
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                as="a"
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PostImage src={post.image} alt={`Post do Instagram ${post.id}`} />
                <PostOverlay className="overlay">
                  <span>
                    <Heart size={20} />
                    {post.likes}
                  </span>
                  <span>
                    <MessageCircle size={20} />
                    {post.comments}
                  </span>
                </PostOverlay>
              </PostCard>
            );
          })}
        </PostsGrid>
      </InstagramContainer>
    </InstagramSection>
  );
}
