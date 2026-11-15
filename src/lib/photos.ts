/* =========================================================================
   Photo library — reads the image files in public/gallery/<Category>/ at
   build time, so the gallery always reflects whatever is in those folders.
   To add/remove photos, just drop files into (or delete from):
     public/gallery/Painting   public/gallery/Class   public/gallery/Event
   No code changes needed.
   ========================================================================= */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('public/gallery');
const IMG = /\.(jpe?g|png|webp|avif)$/i;

/** List web paths for all images in a category folder (sorted, stable order). */
export function listPhotos(category: string): string[] {
  try {
    return fs
      .readdirSync(path.join(ROOT, category))
      .filter((f) => IMG.test(f))
      .sort()
      .map((f) => `/gallery/${category}/${f}`);
  } catch {
    return [];
  }
}

/* Hand-picked standout artworks for the homepage hero + featured strip.
   (If you rename/remove these files, swap the paths or they'll be skipped.) */
const FEATURED = [
  '/gallery/Painting/645519242_122162384342978917_2190346166638670302_n.jpg', // cow under cherry blossom
  '/gallery/Painting/640394848_122160419474978917_1837707706512633222_n.jpg', // lotus pond with bird
  '/gallery/Painting/605284380_122141063876978917_3146772505251699728_n.jpg', // fox
  '/gallery/Painting/615270637_122147345246978917_1612927967177870400_n.jpg', // blue daisies
  '/gallery/Painting/636770024_122158950764978917_3848184359351659316_n.jpg', // frangipani (round fan)
  '/gallery/Painting/605532267_122141063786978917_5519615723327722395_n.jpg', // cockatiel
  '/gallery/Painting/608961860_122141063828978917_3453952795038217662_n.jpg', // sparrow
  '/gallery/Painting/639400879_122159974778978917_2295020951560546457_n.jpg', // tree-lined path
];

/** Featured artworks that actually exist on disk. Falls back to the folder. */
export function featuredPaintings(): string[] {
  const all = new Set(listPhotos('Painting'));
  const picked = FEATURED.filter((p) => all.has(p));
  if (picked.length >= 4) return picked;
  return listPhotos('Painting').slice(0, 8); // fallback if filenames changed
}

/** A studio "atmosphere" shot (the wall of mineral pigments). */
export function studioImage(): string | undefined {
  return listPhotos('Others').find((p) => p.includes('537136674')) ?? listPhotos('Class')[0];
}

/** A representative class photo. */
export function classImage(): string | undefined {
  return (
    listPhotos('Class').find((p) => p.includes('615442272')) ?? listPhotos('Class')[0]
  );
}

/** Founder portrait, if the user has added public/founder.jpg (or .png/.webp). */
export function founderImage(): string | undefined {
  for (const ext of ['jpg', 'jpeg', 'png', 'webp']) {
    if (fs.existsSync(path.resolve(`public/founder.${ext}`))) return `/founder.${ext}`;
  }
  return undefined;
}

/** One image per "values" card: open learning (class), craft (artwork), local roots (event). */
export function valueImages(): string[] {
  const want = [
    '/gallery/Class/615442272_122147345504978917_3801973126064514741_n.jpg',
    '/gallery/Painting/571167766_122124220592978917_6842107543266501649_n.jpg',
    '/gallery/Event/598304064_122141063960978917_4935138589475987553_n.jpg',
  ];
  const exists = (p: string) => fs.existsSync(path.resolve('public' + p));
  const fb = [listPhotos('Class')[0], listPhotos('Painting')[0], listPhotos('Event')[0]];
  return want.map((p, i) => (exists(p) ? p : fb[i]));
}
