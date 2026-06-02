/* =========================================================================
   Gallery items.
   ---------------------------------------------------------------------------
   To use REAL artwork photos:
     1. Drop the image files into  public/gallery/  (e.g. cherry-blossom.jpg)
     2. Set `image: '/gallery/cherry-blossom.jpg'` on the item below.
   If `image` is omitted, an elegant coloured placeholder tile is shown instead,
   so the layout always looks complete.
   `category` must be one of: 'flora' | 'nature' | 'students'
   `tone` sets the placeholder colour (a soft mineral-pigment hue).
   ========================================================================= */

export type GalleryCategory = 'flora' | 'nature' | 'students';

export interface Work {
  id: string;
  titleZh: string;
  titleEn: string;
  category: GalleryCategory;
  tone: string;        // placeholder background colour
  image?: string;      // e.g. '/gallery/lotus.jpg' — overrides the placeholder
  feature?: boolean;   // show on the home page "featured" strip
}

export const works: Work[] = [
  { id: 'cherry-calf', titleZh: '櫻下小犢', titleEn: 'Calf Beneath Cherry Blossom', category: 'nature', tone: '#e9c8c4', feature: true },
  { id: 'lotus', titleZh: '荷塘清趣', titleEn: 'Lotus Pond', category: 'flora', tone: '#cdd9c4', feature: true },
  { id: 'roses', titleZh: '薔薇盛開', titleEn: 'Roses in Bloom', category: 'flora', tone: '#e7cdd6', feature: true },
  { id: 'peony', titleZh: '富貴牡丹', titleEn: 'Peony', category: 'flora', tone: '#e3c7b0', feature: true },
  { id: 'autumn', titleZh: '秋林', titleEn: 'Autumn Grove', category: 'nature', tone: '#d8c39a' },
  { id: 'camellia', titleZh: '山茶', titleEn: 'Camellia', category: 'flora', tone: '#d6b9bd' },
  { id: 'bird-branch', titleZh: '枝頭', titleEn: 'Bird on a Branch', category: 'nature', tone: '#c4cdb6' },
  { id: 'student-flowers', titleZh: '學員習作 · 花卉', titleEn: 'Student Study · Flowers', category: 'students', tone: '#cfd4c0' },
  { id: 'student-lotus', titleZh: '學員習作 · 荷', titleEn: 'Student Study · Lotus', category: 'students', tone: '#c7cebb' },
  { id: 'still-life', titleZh: '靜物小品', titleEn: 'Still Life', category: 'nature', tone: '#dac9ae' },
  { id: 'iris', titleZh: '鳶尾', titleEn: 'Iris', category: 'flora', tone: '#c8c8d8' },
  { id: 'student-fruit', titleZh: '學員習作 · 果實', titleEn: 'Student Study · Fruit', category: 'students', tone: '#e0c6a8' },
];

export const featuredWorks = works.filter((w) => w.feature);
