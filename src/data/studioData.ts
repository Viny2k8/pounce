import { Artwork, Workshop, Testimonial } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_poppy_canvas_1792679209888.jpg';
export const ARTIST_PORTRAIT = '/src/assets/images/artist_portrait_1792679211097.jpg';
export const ABSTRACT_BLOOM_IMAGE = '/src/assets/images/gallery_abstract_bloom_1792679211034.jpg';
export const PORTRAIT_MUSE_IMAGE = '/src/assets/images/gallery_portrait_muse_1792679211364.jpg';

export const ARTWORKS: Artwork[] = [
  {
    id: 'crimson-awakening',
    title: 'Crimson Awakening No. 1',
    year: 2025,
    category: 'Bold Pop',
    medium: 'Impasto Oil & Cold Wax on Belgian Linen',
    dimensions: '48 × 36 in (122 × 91 cm)',
    image: HERO_IMAGE,
    status: 'Available',
    price: '$6,400',
    curatorNote: 'Thick, sculpted strokes of Alizarin Crimson and fluorescent poppy pink erupt over a velvety wine-maroon ground. Powder-blue impasto marks evoke dawn sky cutting through petals.',
    palette: [
      { name: 'Wine Maroon', hex: '#4A0E17', role: 'Foundation Canvas' },
      { name: 'Vivid Poppy', hex: '#FF3366', role: 'Dominant Petals' },
      { name: 'Powder Sky', hex: '#D0E1FD', role: 'Atmospheric Scrim' },
      { name: 'Vermilion Glow', hex: '#FF5E36', role: 'Focal Core' }
    ]
  },
  {
    id: 'botanical-reverie',
    title: 'Botanical Reverie (Symphony)',
    year: 2025,
    category: 'Abstract',
    medium: 'Raw Pigment, Acrylic & Oil Stick on Raw Linen',
    dimensions: '40 × 40 in (101 × 101 cm)',
    image: ABSTRACT_BLOOM_IMAGE,
    status: 'Available',
    price: '$5,200',
    curatorNote: 'Gestural, energetic arcs trace the explosive motion of blooming petals. Raw linen texture breathes through spontaneous splatter and thick cerulean blue passages.',
    palette: [
      { name: 'Dark Burgundy', hex: '#38040E', role: 'Shadow Mass' },
      { name: 'Fluorescent Magenta', hex: '#FF2A85', role: 'Kinetic Lines' },
      { name: 'French Cerulean', hex: '#68A4F8', role: 'Counterpoint' },
      { name: 'Pale Bone', hex: '#FAF8F5', role: 'Raw Support' }
    ]
  },
  {
    id: 'muse-in-poppy',
    title: 'The Poppy Muse & The Geometry',
    year: 2024,
    category: 'Portraits',
    medium: 'Oil & Gouache on Wood Panel',
    dimensions: '36 × 36 in (91 × 91 cm)',
    image: PORTRAIT_MUSE_IMAGE,
    status: 'Reserved',
    price: '$7,800',
    curatorNote: 'Modern figurative study balancing sharp color-blocked planes of sky blue and deep wine with sculptural, expressive petals encircling a calm feminine profile.',
    palette: [
      { name: 'Deep Burgundy', hex: '#4A0E17', role: 'Structural Blocks' },
      { name: 'Hot Poppy', hex: '#FF3366', role: 'Halo Botanicals' },
      { name: 'Soft Azure', hex: '#D0E1FD', role: 'Negative Space' },
      { name: 'Honey Ochre', hex: '#D4943E', role: 'Facial Planes' }
    ]
  },
  {
    id: 'nocturne-bloom',
    title: 'Nocturne in Carmine & Indigo',
    year: 2024,
    category: 'Abstract',
    medium: 'Heavy Impasto Palette Knife & Oil Glazes',
    dimensions: '42 × 32 in (107 × 81 cm)',
    image: HERO_IMAGE,
    status: 'In Private Collection',
    price: '$5,900',
    curatorNote: 'Deep atmospheric investigation of petals in nocturnal light. Midnight wine borders open into radiant carmine centers that catch ambient gallery light.',
    palette: [
      { name: 'Midnight Wine', hex: '#2A040B', role: 'Deep Matrix' },
      { name: 'Pure Poppy Red', hex: '#E60033', role: 'Core Flare' },
      { name: 'Powder Lilac', hex: '#DCE5FD', role: 'Edge Tint' },
      { name: 'Burnt Umber', hex: '#3D2018', role: 'Stem Form' }
    ]
  },
  {
    id: 'dawn-petals-pastel',
    title: 'Morning Bloom on Paper',
    year: 2025,
    category: 'Pastels',
    medium: 'Soft Pastels & Gouache on 400gsm Cotton Rag',
    dimensions: '28 × 22 in (71 × 56 cm)',
    image: ABSTRACT_BLOOM_IMAGE,
    status: 'Available',
    price: '$2,800',
    curatorNote: 'Gentle powdery textures where soft cerulean blues and whisper pinks merge into rich maroon linework, celebrating botanical fragility.',
    palette: [
      { name: 'Powder Blue', hex: '#D0E1FD', role: 'Field Wash' },
      { name: 'Blush Rose', hex: '#FF85A2', role: 'Petal Body' },
      { name: 'Wine Velvet', hex: '#5A121E', role: 'Stamens' },
      { name: 'Warm Cream', hex: '#FFFBF5', role: 'Deckled Margin' }
    ]
  },
  {
    id: 'scarlet-velocity',
    title: 'Scarlet Velocity: Study II',
    year: 2025,
    category: 'Bold Pop',
    medium: 'Mixed Media, Oil & Neon Enamel on Canvas',
    dimensions: '36 × 48 in (91 × 122 cm)',
    image: PORTRAIT_MUSE_IMAGE,
    status: 'Available',
    price: '$6,100',
    curatorNote: 'Unapologetic graphic energy inspired by post-impressionism and modern editorial design. Crisp geometric transitions clash against wild botanical petals.',
    palette: [
      { name: 'Electric Carmine', hex: '#FF1A55', role: 'Primary Shock' },
      { name: 'Obsidian Maroon', hex: '#33050D', role: 'Anchor Field' },
      { name: 'Glacier Blue', hex: '#C2DBFE', role: 'Highlight Strike' },
      { name: 'Coral Pop', hex: '#FF6F59', role: 'Dynamic Edge' }
    ]
  }
];

export const WORKSHOPS: Workshop[] = [
  {
    id: 'canvas-masterclass',
    title: 'Canvas Masterclass: Impasto & Layered Florals',
    subtitle: 'Hands-on intensive for painters exploring thick textures and chromatic clash.',
    level: 'Intermediate to Advanced',
    duration: '2 Full Days (Weekend Intensive)',
    capacity: 'Strictly 8 Artists per Session',
    price: '$750',
    theme: 'maroon',
    nextDate: 'November 15–16, 2026',
    highlights: [
      'Palette knife sculpting & cold wax formulation',
      'The "Bold Poppy" color balancing system',
      'Direct 1-on-1 critique with Viviane Vance',
      'All master-grade French linen & oil pigments provided'
    ]
  },
  {
    id: 'private-commissions',
    title: 'Private Architectural Scale Commissions',
    subtitle: 'Custom bespoke canvases tailored to collector residences & private institutions.',
    level: 'Collectors & Interior Architects',
    duration: '6–8 Weeks Development',
    capacity: 'Limited to 3 Quarterly Slots',
    price: 'Starting at $4,500',
    theme: 'blue',
    nextDate: 'Now Booking Q1 2027',
    highlights: [
      'Site lighting & interior palette harmonizing analysis',
      'Custom stretched Belgian linen up to 96 inches',
      'Digital color maquettes & progress video journal',
      'Certificate of authenticity & bespoke hardwood framing'
    ]
  },
  {
    id: 'creative-consultation',
    title: 'Color Direction & Spatial Curation',
    subtitle: 'Personalized advisory on curating expressive art collections for residences & galleries.',
    level: 'Curators & Designers',
    duration: 'Single Session or Retainer',
    capacity: 'Rolling Calendar',
    price: '$350 / session',
    theme: 'cream',
    nextDate: 'Flexible Scheduling',
    highlights: [
      'Spatial color theory mapping for mood and focal flow',
      'Artwork selection & scale harmonization',
      'Curated sourcing list of emerging contemporary painters',
      'Lighting and framing specification dossiers'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Viviane’s work commands the room. The contrast between that velvet maroon and the shocking pink poppies brought an electric vitality to our Manhattan loft that visitors never stop praising.',
    author: 'Clara Delacroix',
    title: 'Collector & Architectural Director',
    location: 'New York City',
    artworkReferenced: 'Crimson Awakening No. 1'
  },
  {
    id: 'test-2',
    quote: 'Her workshop completely unblocked my approach to oils. Learning how she balances heavy wine undertones with powdery blues gave my paintings an entirely new dimension of emotional weight.',
    author: 'Marcus Vance-Lin',
    title: 'Masterclass Alumni & Visual Artist',
    location: 'London',
    artworkReferenced: 'Impasto Masterclass 2025'
  },
  {
    id: 'test-3',
    quote: 'Studio Pounce produces the rare kind of painting that looks both timelessly classical in its technique and fearlessly avant-garde in its color harmony.',
    author: 'Elena Rostova',
    title: 'Senior Curator, Galerie Saint-Germain',
    location: 'Paris',
    artworkReferenced: 'Solo Exhibition: The Red Verge'
  }
];

export const STUDIO_STATS = [
  { label: 'Original Works in Collections', value: '140+' },
  { label: 'Solo & Duo Exhibitions', value: '18' },
  { label: 'Masterclass Alumni', value: '420+' },
  { label: 'Museum & Institutional Honors', value: '6' }
];

export const COLOR_PALETTES = [
  {
    id: 'poppy-signature',
    name: 'Bold Poppy Signature',
    description: 'The core Studio Pounce signature: deep wine anchor with shocking hot pink and calm sky blue.',
    colors: [
      { hex: '#4A0E17', name: 'Deep Maroon', role: 'Anchor' },
      { hex: '#FF3366', name: 'Hot Poppy', role: 'Focal Shock' },
      { hex: '#D0E1FD', name: 'Powder Blue', role: 'Atmosphere' },
      { hex: '#FAF8F5', name: 'Clean Cream', role: 'Light' }
    ]
  },
  {
    id: 'nocturne-velvet',
    name: 'Nocturne Velvet',
    description: 'Moody, rich nocturnal chords with burning magenta and shadowy violet-maroon.',
    colors: [
      { hex: '#2A040B', name: 'Midnight Wine', role: 'Anchor' },
      { hex: '#651522', name: 'Oxblood Red', role: 'Midtone' },
      { hex: '#FF2A85', name: 'Neon Rose', role: 'Flare' },
      { hex: '#B9D3FC', name: 'Periwinkle Frost', role: 'Accent' }
    ]
  },
  {
    id: 'cerulean-dawn',
    name: 'Cerulean Bloom',
    description: 'High-key fresh spring atmosphere where light blue dominates with carmine accents.',
    colors: [
      { hex: '#D0E1FD', name: 'Powder Blue', role: 'Dominant' },
      { hex: '#4A0E17', name: 'Maroon Stems', role: 'Contrast' },
      { hex: '#FF5E36', name: 'Poppy Orange', role: 'Warm Flare' },
      { hex: '#FAF8F5', name: 'Crisp Linen', role: 'Base' }
    ]
  }
];
