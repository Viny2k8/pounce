export type ArtworkCategory = 'All' | 'Abstract' | 'Portraits' | 'Pastels' | 'Bold Pop';

export interface PigmentSwatch {
  name: string;
  hex: string;
  role: string;
}

export interface Artwork {
  id: string;
  title: string;
  year: number;
  category: 'Abstract' | 'Portraits' | 'Pastels' | 'Bold Pop';
  medium: string;
  dimensions: string;
  image: string;
  status: 'Available' | 'Reserved' | 'In Private Collection';
  price?: string;
  curatorNote: string;
  palette: PigmentSwatch[];
}

export interface Workshop {
  id: string;
  title: string;
  subtitle: string;
  level: string;
  duration: string;
  capacity: string;
  price: string;
  theme: 'maroon' | 'blue' | 'cream';
  highlights: string[];
  nextDate: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  location: string;
  artworkReferenced?: string;
}
