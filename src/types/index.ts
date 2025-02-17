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
  id: number;
  image: string;
  likes: number;
  comments: number;
  permalink: string;
}
