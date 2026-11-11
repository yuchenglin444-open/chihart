/** Site-wide default artwork / cover image, used whenever a work or cover is missing. */
export const DEFAULT_ARTWORK = '/images/default-artwork.jpg';

export const DEFAULT_ARTWORK_ALT = {
  zh: '黑面琵鷺（陳嬋娟 膠彩）',
  en: 'Black-faced Spoonbills (mineral-pigment painting by Chen Chan-juan)',
} as const;

const LEGACY_PLACEHOLDER =
  /\/images\/placeholders\/placeholder-(artwork-\d+|exhibition-hero|news-\d+)\.(jpe?g|png|webp)$/i;

export function isDefaultArtwork(src?: string | null): boolean {
  if (!src) return true;
  return src === DEFAULT_ARTWORK || LEGACY_PLACEHOLDER.test(src);
}

/** Resolve a work or cover path, falling back to the site default. */
export function artworkSrc(src?: string | null): string {
  return isDefaultArtwork(src) ? DEFAULT_ARTWORK : src!;
}

/** Alt text for a work or cover: credit the default painting, otherwise use the provided fallback. */
export function artworkAlt(lang: 'zh' | 'en', src?: string | null, fallback = ''): string {
  return isDefaultArtwork(src) ? DEFAULT_ARTWORK_ALT[lang] : fallback;
}
