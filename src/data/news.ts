/* =========================================================================
   News & events.
   ---------------------------------------------------------------------------
   Add a new entry at the TOP of the array for the latest item.
   `date` is ISO (YYYY-MM-DD). `link` is optional (e.g. a Facebook post URL).
   Provide both Chinese and English fields.
   ========================================================================= */

export interface NewsItem {
  date: string;
  titleZh: string;
  titleEn: string;
  bodyZh: string;
  bodyEn: string;
  tag: 'exhibition' | 'competition' | 'class' | 'notice';
  link?: string;
}

export const newsItems: NewsItem[] = [
  {
    date: '2026-01-01',
    tag: 'competition',
    titleZh: '2026 第十三屆《綠水賞》全國徵件比賽',
    titleEn: '2026 13th “Green Water Award” National Open Call',
    bodyZh: '台灣綠水膠彩畫會年度全國徵件比賽開始收件，歡迎膠彩創作者踴躍投件。詳細辦法與時程請見 Facebook 公告。',
    bodyEn: 'The annual national open call of the Taiwan Green Water Gansai Painting Society is now accepting entries. Gansai artists are warmly invited to submit. See our Facebook page for full details and timeline.',
    link: 'https://www.facebook.com/chihart',
  },
  {
    date: '2025-10-10',
    tag: 'notice',
    titleZh: '七賢膠彩藝術研究會 二週年',
    titleEn: 'Association celebrates its second anniversary',
    bodyZh: '感謝這兩年來每一位走進畫室的朋友。我們將持續在高雄推廣膠彩，免費體驗課程長期開放，歡迎私訊預約。',
    bodyEn: 'Thank you to everyone who has stepped into the studio over these two years. We continue to promote gansai in Kaohsiung, with free trial classes always open — message us to book.',
  },
  {
    date: '2025-06-01',
    tag: 'class',
    titleZh: '免費膠彩體驗課，長期開放預約',
    titleEn: 'Free gansai trial classes — booking open year-round',
    bodyZh: '不需基礎、材料免費提供。由陳嬋娟老師帶領，陪您完成第一幅膠彩小品。請透過 Facebook 私訊預約時段。',
    bodyEn: 'No experience needed and materials provided free. Led by Teacher Chen Chan-chuan, complete your first gansai piece. Message us on Facebook to reserve a time.',
  },
];
