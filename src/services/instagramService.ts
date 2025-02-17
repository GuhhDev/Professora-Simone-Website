import { InstagramPost } from '../types';

const INSTAGRAM_ACCESS_TOKEN = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;

export const instagramService = {
  async getRecentPosts(): Promise<InstagramPost[]> {
    try {
      console.log('🔵 Iniciando busca de posts do Instagram...');
      const token = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
      const userId = import.meta.env.VITE_INSTAGRAM_USER_ID;
      console.log('🔑 Token encontrado:', token ? 'Sim' : 'Não');
      console.log('👤 User ID encontrado:', userId ? 'Sim' : 'Não');

      if (!token || !userId) {
        throw new Error('Instagram credentials not configured');
      }

      // Usando o endpoint correto para o Instagram Graph API
      const url = `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption,timestamp&access_token=${token}&limit=6`;
      console.log('🌐 Fazendo requisição para:', url);

      const response = await fetch(url);
      console.log('📡 Status da resposta:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('❌ Erro da API do Instagram:', errorData);
        throw new Error(`Failed to fetch Instagram posts: ${response.status}`);
      }

      const data = await response.json();
      console.log('✅ Resposta da API:', data);
      console.log('📊 Número de posts recebidos:', data.data?.length || 0);

      if (!data.data) {
        throw new Error('No data received from Instagram API');
      }

      const posts = data.data.map((post: any) => {
        const mappedPost = {
          id: post.id,
          image: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
          likes: 0,
          comments: 0,
          permalink: post.permalink
        };
        console.log('🖼️ Post processado:', mappedPost);
        return mappedPost;
      });

      console.log('🎉 Posts processados com sucesso:', posts.length);
      return posts;
    } catch (error) {
      console.error('❌ Erro ao buscar posts:', error);
      console.log('⚠️ Retornando posts simulados...');
      
      // Posts simulados para desenvolvimento
      return [
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1599091333925-14b66b0d5be4?w=500&q=80",
          likes: 1234,
          comments: 45,
          permalink: "https://www.instagram.com/"
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=500&q=80",
          likes: 2345,
          comments: 67,
          permalink: "https://www.instagram.com/"
        },
        {
          id: 3,
          image: "https://images.unsplash.com/photo-1604931668626-ab49cb27d952?w=500&q=80",
          likes: 3456,
          comments: 89,
          permalink: "https://www.instagram.com/"
        }
      ];
    }
  }
};
