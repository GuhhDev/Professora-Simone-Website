export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  date: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

export interface InstagramPost {
  id: string;
  mediaUrl: string;
  caption: string;
  timestamp: string;
  mediaType: string;
  permalink: string;
}
