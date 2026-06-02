/* =========================================================================
   Bilingual content dictionary (繁體中文 / English)
   ---------------------------------------------------------------------------
   This is the single source of truth for all text on the site.
   To edit copy, change the strings below — no need to touch the pages.
   `zh` = 繁體中文, `en` = English.
   ========================================================================= */

export const languages = {
  zh: '中文',
  en: 'EN',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'zh';

/* The fixed facts about the association, shared by both languages. */
export const org = {
  nameZh: '七賢膠彩藝術研究會',
  nameEn: 'Seven Sages Gouache Art Research Association',
  foundedISO: '2023-10-10',
  founderZh: '陳嬋娟',
  founderEn: 'Chen Chan-chuan',
  addressZh: '高雄市 801 鹽埕區七賢二路 249 號 8 樓',
  addressEn: '8F, No. 249, Qixian 2nd Rd., Yancheng Dist., Kaohsiung 801, Taiwan',
  facebook: 'https://www.facebook.com/chihart',
  messenger: 'https://m.me/chihart',
  mapsQuery: '高雄市七賢二路249號8樓',
};

type Nav = { home: string; about: string; art: string; gallery: string; classes: string; news: string; contact: string };

interface Dict {
  /* global */
  htmlLang: string;
  nav: Nav;
  cta: { trial: string; trialNote: string; contact: string; viewGallery: string; learnMore: string; allWorks: string; backHome: string };
  footer: { tagline: string; quickLinks: string; visit: string; follow: string; rights: string; builtNote: string };

  /* home */
  home: {
    heroKicker: string;
    heroTitle: string;
    heroSub: string;
    introEyebrow: string;
    introTitle: string;
    introBody: string[];
    statFounded: string;
    statFree: string;
    statRegion: string;
    statFreeLabel: string;
    statRegionLabel: string;
    statFoundedLabel: string;
    featEyebrow: string;
    featTitle: string;
    featSub: string;
    pathsTitle: string;
    paths: { title: string; body: string; link: string; href: string }[];
    quote: string;
    quoteBy: string;
  };

  /* about */
  about: {
    eyebrow: string;
    title: string;
    lede: string;
    storyTitle: string;
    story: string[];
    founderTitle: string;
    founderRole: string;
    founderBody: string[];
    valuesTitle: string;
    values: { title: string; body: string }[];
  };

  /* the art — 認識膠彩 */
  art: {
    eyebrow: string;
    title: string;
    lede: string;
    whatTitle: string;
    whatBody: string[];
    materialsTitle: string;
    materials: { name: string; body: string }[];
    historyTitle: string;
    history: string[];
    processTitle: string;
    process: { step: string; title: string; body: string }[];
  };

  /* gallery */
  gallery: {
    eyebrow: string;
    title: string;
    lede: string;
    note: string;
    filterAll: string;
    categories: Record<string, string>;
  };

  /* classes */
  classes: {
    eyebrow: string;
    title: string;
    lede: string;
    freeTitle: string;
    freeBody: string[];
    forWhomTitle: string;
    forWhom: string[];
    bringTitle: string;
    bring: string[];
    scheduleTitle: string;
    scheduleNote: string;
    howTitle: string;
    how: string[];
  };

  /* news */
  news: {
    eyebrow: string;
    title: string;
    lede: string;
    fbNote: string;
    readMore: string;
  };

  /* contact */
  contact: {
    eyebrow: string;
    title: string;
    lede: string;
    addressLabel: string;
    hoursLabel: string;
    hours: string;
    followLabel: string;
    mapLabel: string;
    messageLabel: string;
    messageBody: string;
  };
}

export const ui: Record<Lang, Dict> = {
  /* ===================================================================== */
  /* 繁體中文                                                               */
  /* ===================================================================== */
  zh: {
    htmlLang: 'zh-Hant',
    nav: {
      home: '首頁',
      about: '關於我們',
      art: '認識膠彩',
      gallery: '作品集',
      classes: '課程體驗',
      news: '最新消息',
      contact: '聯絡我們',
    },
    cta: {
      trial: '預約免費體驗',
      trialNote: '無繪畫經驗也歡迎',
      contact: '聯絡我們',
      viewGallery: '欣賞作品',
      learnMore: '了解更多',
      allWorks: '查看全部作品',
      backHome: '返回首頁',
    },
    footer: {
      tagline: '推廣膠彩畫於南台灣，讓藝術走進日常。',
      quickLinks: '網站導覽',
      visit: '前來拜訪',
      follow: '追蹤我們',
      rights: '版權所有',
      builtNote: '本會為非營利藝術推廣團體',
    },
    home: {
      heroKicker: '高雄 · 膠彩藝術',
      heroTitle: '以礦石與膠，\n繪出溫潤的光',
      heroSub: '七賢膠彩藝術研究會在高雄推廣膠彩畫，邀請藝術同好與從未提筆的朋友，一同認識這門細緻典雅的東方繪畫。',
      introEyebrow: '關於本會',
      introTitle: '一個讓膠彩走入南台灣的所在',
      introBody: [
        '為了將膠彩畫推廣到南部，台灣綠水膠彩畫會理事長陳嬋娟老師於 2023 年 10 月 10 日，在高雄七賢二路成立了七賢膠彩藝術研究會。',
        '這裡是一處開放的學習空間：無論您是資深畫者，或是從未拿過畫筆的初學者，都能免費前來體驗、認識膠彩之美。',
      ],
      statFounded: '2023',
      statFoundedLabel: '創立年份',
      statFree: '免費',
      statFreeLabel: '體驗課程',
      statRegion: '高雄',
      statRegionLabel: '深耕南台灣',
      featEyebrow: '作品集',
      featTitle: '筆下的四季與花鳥',
      featSub: '膠彩以天然礦物顏料層層敷染，色澤厚潤而不喧嘩。以下為老師與學員的部分作品。',
      pathsTitle: '從這裡開始',
      paths: [
        { title: '認識膠彩', body: '什麼是膠彩畫？從材料、歷史到技法，帶您走進這門藝術。', link: '了解更多', href: '/art' },
        { title: '免費體驗課程', body: '不需基礎，不需自備工具，歡迎預約一堂屬於您的膠彩初體驗。', link: '查看課程', href: '/classes' },
        { title: '欣賞作品', body: '瀏覽老師與學員的膠彩創作，感受礦物顏料的溫潤質地。', link: '前往作品集', href: '/gallery' },
      ],
      quote: '膠彩畫的美，在於時間與耐心——一層一層，讓顏色慢慢長出來。',
      quoteBy: '陳嬋娟　創會老師',
    },
    about: {
      eyebrow: '關於我們',
      title: '讓膠彩在南方生根',
      lede: '七賢膠彩藝術研究會，是一處為熱愛藝術的人們而設的開放畫室，也是膠彩在南台灣的一顆種子。',
      storyTitle: '我們的故事',
      story: [
        '長久以來，膠彩畫的學習資源多集中於中部與北部。為了讓更多南部的朋友也能親近這門藝術，台灣綠水膠彩畫會理事長陳嬋娟老師於 2023 年 10 月 10 日成立了七賢膠彩藝術研究會。',
        '本會座落於高雄七賢二路，是一個兼具教學、創作與交流的空間。牆上掛著學員的花鳥四季，桌上排著一罐罐天然礦物顏料——這裡歡迎每一位想要認識膠彩的人。',
        '我們相信藝術不該有門檻。無論年齡、無論基礎，只要願意提筆，膠彩的世界便為您敞開。',
      ],
      founderTitle: '創會老師　陳嬋娟',
      founderRole: '台灣綠水膠彩畫會 理事長',
      founderBody: [
        '陳嬋娟老師現任台灣綠水膠彩畫會理事長，長年投入膠彩畫的創作與教學，作品多次入選與獲獎。',
        '懷抱著「讓膠彩走入南台灣」的心願，她在高雄成立本會，親自帶領學員從零開始，認識礦物顏料、膠的調和與層層敷色的技法。',
      ],
      valuesTitle: '我們珍視的事',
      values: [
        { title: '開放共學', body: '免費體驗、無經驗門檻，讓藝術成為人人可親近的日常。' },
        { title: '傳承技藝', body: '承襲膠彩的傳統技法與材料知識，讓這門東方繪畫繼續流傳。' },
        { title: '在地深耕', body: '以高雄為據點，凝聚南台灣的膠彩愛好者與創作能量。' },
      ],
    },
    art: {
      eyebrow: '認識膠彩',
      title: '什麼是膠彩畫',
      lede: '膠彩，是以天然礦物顏料調和動物膠，於紙或絹上層層敷染而成的繪畫。色澤厚潤典雅，是東方繪畫中極為細緻的一支。',
      whatTitle: '礦石化為色彩',
      whatBody: [
        '膠彩畫使用研磨自天然礦石、土壤與貝殼的顏料，以動物膠（如牛皮膠、鹿膠）為媒介調和，再以毛筆敷塗於紙或絹上。',
        '由於顏料為不透明的礦物粉末，畫家需一層層耐心敷染、堆疊，色彩因此呈現出溫潤而不刺眼的獨特質地，歷久不褪。',
      ],
      materialsTitle: '膠彩的材料',
      materials: [
        { name: '礦物顏料', body: '由天然礦石、土壤、貝殼研磨而成的色粉，依顆粒粗細呈現不同色感。' },
        { name: '動物膠', body: '作為黏著媒介，與色粉調和後使顏料附著於畫面，是膠彩的靈魂。' },
        { name: '紙與絹', body: '常用雲肌麻紙或絹本為基底，先行裱褙，方能承受層層敷色。' },
        { name: '金箔與胡粉', body: '金銀箔用於裝飾與背景，胡粉（貝殼白）則用於打底與提亮。' },
      ],
      historyTitle: '膠彩在台灣',
      history: [
        '膠彩畫於日治時期自日本傳入台灣，曾以「東洋畫」之名活躍於官辦美展，培養出眾多本土畫家。',
        '1977 年，畫家林之助先生倡議以「膠彩畫」為名——以媒材而非地域為名，化解了名稱上的爭議，也確立了這門藝術在台灣的定位。',
        '1985 年起，膠彩正式進入大學美術教育，自此薪火相傳。本會即承此脈絡，於南台灣繼續推廣。',
      ],
      processTitle: '一幅膠彩的誕生',
      process: [
        { step: '01', title: '構圖起稿', body: '以鉛筆或淡墨勾勒輪廓，確立畫面的構成。' },
        { step: '02', title: '調膠和色', body: '將礦物色粉與動物膠在碟中以指腹調勻，控制濃淡。' },
        { step: '03', title: '層層敷染', body: '由淡至濃、由薄至厚，反覆敷塗，讓色彩自然堆疊。' },
        { step: '04', title: '收尾點金', body: '細節提染、必要處貼箔，完成最後的層次與光澤。' },
      ],
    },
    gallery: {
      eyebrow: '作品集',
      title: '筆下風景',
      lede: '老師與學員的膠彩創作，題材多為花鳥、四季與自然。礦物顏料的層疊，使每一幅都有獨特的溫潤光澤。',
      note: '此處圖片為版面示意。請將實際作品照片放入 public/gallery／並於 src/data/gallery.ts 更新標題與資訊。',
      filterAll: '全部',
      categories: {
        flora: '花卉',
        nature: '自然',
        students: '學員作品',
      },
    },
    classes: {
      eyebrow: '課程體驗',
      title: '免費膠彩體驗',
      lede: '不需任何基礎，也不需自備材料——歡迎您預約一堂免費體驗，親手感受膠彩的魅力。',
      freeTitle: '人人皆可入門',
      freeBody: [
        '本會提供免費的膠彩體驗，由陳嬋娟老師與資深學員帶領，從認識材料開始，陪伴您完成第一幅小品。',
        '我們相信，膠彩的門其實很寬——只要您願意坐下、提筆，便已踏入這門藝術。',
      ],
      forWhomTitle: '適合對象',
      forWhom: [
        '對膠彩、東方繪畫有興趣的朋友',
        '從未學過畫、想嘗試新事物的初學者',
        '已有繪畫基礎、想轉換媒材的創作者',
        '想培養靜心嗜好的長者與上班族',
      ],
      bringTitle: '需要準備什麼',
      bring: [
        '一顆好奇與放鬆的心',
        '材料與工具由本會提供，無需自備',
        '可著舒適、不怕沾染的衣物',
      ],
      scheduleTitle: '上課時間',
      scheduleNote: '實際開課時間與名額，請透過 Facebook 私訊洽詢、預約。',
      howTitle: '如何報名',
      how: [
        '透過 Facebook 粉絲專頁私訊本會',
        '告知您方便的時段與人數',
        '依約前來高雄七賢二路畫室，即可開始體驗',
      ],
    },
    news: {
      eyebrow: '最新消息',
      title: '展覽與活動',
      lede: '本會與綠水膠彩畫會的展覽、徵件與活動訊息。最即時的動態，請鎖定我們的 Facebook 專頁。',
      fbNote: '想看最新貼文與活動花絮？',
      readMore: '前往 Facebook',
    },
    contact: {
      eyebrow: '聯絡我們',
      title: '歡迎前來',
      lede: '無論是想預約體驗、洽詢課程，或單純想認識膠彩，都歡迎與我們聯繫。',
      addressLabel: '畫室地址',
      hoursLabel: '開放時間',
      hours: '依課程與活動而定，請先私訊預約。',
      followLabel: '社群',
      mapLabel: '在地圖上開啟',
      messageLabel: '線上聯繫',
      messageBody: '目前本會主要透過 Facebook 與大家互動，私訊我們是最快的方式。',
    },
  },

  /* ===================================================================== */
  /* English                                                               */
  /* ===================================================================== */
  en: {
    htmlLang: 'en',
    nav: {
      home: 'Home',
      about: 'About',
      art: 'The Art',
      gallery: 'Gallery',
      classes: 'Classes',
      news: 'News',
      contact: 'Contact',
    },
    cta: {
      trial: 'Book a free trial',
      trialNote: 'No experience needed',
      contact: 'Contact us',
      viewGallery: 'View the gallery',
      learnMore: 'Learn more',
      allWorks: 'See all works',
      backHome: 'Back to home',
    },
    footer: {
      tagline: 'Bringing gansai painting to southern Taiwan — art as part of everyday life.',
      quickLinks: 'Explore',
      visit: 'Visit us',
      follow: 'Follow us',
      rights: 'All rights reserved',
      builtNote: 'A non-profit art-education association',
    },
    home: {
      heroKicker: 'Kaohsiung · Gansai Art',
      heroTitle: 'Light made gentle\nfrom mineral and glue',
      heroSub: 'The Seven Sages Gouache Art Research Association brings gansai painting to Kaohsiung — welcoming seasoned painters and absolute beginners alike to discover this refined Eastern art.',
      introEyebrow: 'About us',
      introTitle: 'A home for gansai in southern Taiwan',
      introBody: [
        'To bring gansai painting south, Teacher Chen Chan-chuan — chair of the Taiwan Green Water Gansai Painting Society — founded this association on Qixian 2nd Road, Kaohsiung, on 10 October 2023.',
        'It is an open studio for learning: whether you are an experienced painter or have never held a brush, you are welcome to come and experience the beauty of gansai, free of charge.',
      ],
      statFounded: '2023',
      statFoundedLabel: 'Founded',
      statFree: 'Free',
      statFreeLabel: 'Trial classes',
      statRegion: 'Kaohsiung',
      statRegionLabel: 'Rooted in the south',
      featEyebrow: 'Gallery',
      featTitle: 'Seasons, flowers & birds',
      featSub: 'Gansai is built from natural mineral pigments laid in patient layers — rich in colour, quiet in voice. A selection of works by our teacher and students.',
      pathsTitle: 'Start here',
      paths: [
        { title: 'The Art of Gansai', body: 'What is gansai painting? From materials and history to technique — step inside this art.', link: 'Learn more', href: '/en/art' },
        { title: 'Free trial class', body: 'No background, no tools required. Book your first encounter with gansai.', link: 'See classes', href: '/en/classes' },
        { title: 'View the gallery', body: 'Browse gansai works by our teacher and students, and feel the warmth of mineral pigment.', link: 'Go to gallery', href: '/en/gallery' },
      ],
      quote: 'The beauty of gansai is time and patience — layer by layer, you let the colour slowly grow.',
      quoteBy: 'Chen Chan-chuan, Founding Teacher',
    },
    about: {
      eyebrow: 'About us',
      title: 'Rooting gansai in the south',
      lede: 'The Seven Sages Gouache Art Research Association is an open studio for anyone who loves art — and a seed for gansai painting in southern Taiwan.',
      storyTitle: 'Our story',
      story: [
        'For a long time, the resources for learning gansai were concentrated in central and northern Taiwan. To bring this art closer to friends in the south, Teacher Chen Chan-chuan — chair of the Taiwan Green Water Gansai Painting Society — founded this association on 10 October 2023.',
        'Set on Qixian 2nd Road in Kaohsiung, the association is a space for teaching, creating and exchange. Students’ paintings of flowers, birds and the seasons line the walls; jars of natural mineral pigment line the tables. Everyone curious about gansai is welcome.',
        'We believe art should have no threshold. Whatever your age or experience, the moment you pick up a brush, the world of gansai opens to you.',
      ],
      founderTitle: 'Founding Teacher · Chen Chan-chuan',
      founderRole: 'Chair, Taiwan Green Water Gansai Painting Society',
      founderBody: [
        'Teacher Chen Chan-chuan chairs the Taiwan Green Water Gansai Painting Society and has devoted many years to creating and teaching gansai, with works repeatedly selected for and honoured in exhibitions.',
        'Carrying the wish to “bring gansai to southern Taiwan,” she founded this association in Kaohsiung, guiding students from the very beginning — the mineral pigments, the mixing of glue, and the technique of layered colour.',
      ],
      valuesTitle: 'What we value',
      values: [
        { title: 'Open learning', body: 'Free trials and no experience required — making art an approachable part of everyday life.' },
        { title: 'Passing on the craft', body: 'Carrying forward the traditional techniques and material knowledge of gansai for the next generation.' },
        { title: 'Rooted locally', body: 'Based in Kaohsiung, gathering the gansai lovers and creative energy of southern Taiwan.' },
      ],
    },
    art: {
      eyebrow: 'The Art',
      title: 'What is gansai painting',
      lede: 'Gansai is painting made by binding natural mineral pigments with animal glue, laid in patient layers on paper or silk. Rich and elegant in tone, it is among the most refined of Eastern painting traditions.',
      whatTitle: 'Stone made into colour',
      whatBody: [
        'Gansai uses pigments ground from natural minerals, earths and shells, bound with animal glue (such as cow-hide or deer glue) and applied with a brush onto paper or silk.',
        'Because the pigments are opaque mineral powders, the painter builds the image layer upon patient layer. The colour takes on a warm, unglaring quality all its own — and lasts for generations.',
      ],
      materialsTitle: 'The materials',
      materials: [
        { name: 'Mineral pigments', body: 'Colour powders ground from natural stones, earths and shells; grain size shapes each hue.' },
        { name: 'Animal glue', body: 'The binding medium that fixes pigment to the surface — the very soul of gansai.' },
        { name: 'Paper & silk', body: 'Hemp paper or silk, mounted in advance so it can bear many layers of colour.' },
        { name: 'Gold leaf & gofun', body: 'Gold and silver leaf for decoration and ground; gofun (shell white) for priming and highlights.' },
      ],
      historyTitle: 'Gansai in Taiwan',
      history: [
        'Gansai entered Taiwan from Japan during the Japanese era, flourishing under the name “Tōyōga” (Eastern painting) at the official salons and nurturing many local painters.',
        'In 1977, the painter Lin Chih-chu proposed the name “gansai painting” — naming the art by its medium rather than its region, resolving long debates and securing its place in Taiwan.',
        'From 1985, gansai formally entered university art education and has been handed down ever since. This association continues that lineage in the south.',
      ],
      processTitle: 'How a gansai painting is born',
      process: [
        { step: '01', title: 'Composition', body: 'The outline is sketched in pencil or pale ink to set the structure of the picture.' },
        { step: '02', title: 'Mixing colour', body: 'Mineral powder and animal glue are blended by fingertip in a dish to control depth.' },
        { step: '03', title: 'Layered washes', body: 'From pale to deep, thin to thick, colour is applied again and again to build up.' },
        { step: '04', title: 'Finishing & gilding', body: 'Final details are dyed in and leaf applied where needed for depth and sheen.' },
      ],
    },
    gallery: {
      eyebrow: 'Gallery',
      title: 'Scenes from the brush',
      lede: 'Gansai works by our teacher and students — flowers, birds, the seasons and nature. Layered mineral pigment gives each piece its own quiet, warm glow.',
      note: 'Images here are layout placeholders. Add real artwork photos to public/gallery/ and update titles in src/data/gallery.ts.',
      filterAll: 'All',
      categories: {
        flora: 'Flora',
        nature: 'Nature',
        students: 'Student works',
      },
    },
    classes: {
      eyebrow: 'Classes',
      title: 'Free gansai trial',
      lede: 'No background and no need to bring materials — book a free trial and feel the magic of gansai with your own hands.',
      freeTitle: 'Anyone can begin',
      freeBody: [
        'We offer a free gansai experience, led by Teacher Chen Chan-chuan and senior students. Starting from the materials, we accompany you in completing your first small piece.',
        'We believe the door to gansai is wide — the moment you sit down and lift a brush, you have already stepped inside.',
      ],
      forWhomTitle: 'Who it’s for',
      forWhom: [
        'Anyone drawn to gansai and Eastern painting',
        'Complete beginners who have never painted and want to try',
        'Artists with a background, looking to explore a new medium',
        'Seniors and working people seeking a calming pursuit',
      ],
      bringTitle: 'What to bring',
      bring: [
        'A curious and relaxed mind',
        'Materials and tools are provided — nothing to bring',
        'Comfortable clothes you don’t mind getting a little paint on',
      ],
      scheduleTitle: 'Class times',
      scheduleNote: 'For current schedules and availability, please message us on Facebook to enquire and book.',
      howTitle: 'How to register',
      how: [
        'Send us a message via our Facebook page',
        'Let us know a time that suits you and how many will attend',
        'Come to the studio on Qixian 2nd Rd., Kaohsiung — and begin',
      ],
    },
    news: {
      eyebrow: 'News',
      title: 'Exhibitions & events',
      lede: 'Exhibitions, open calls and events from the association and the Green Water Gansai Society. For the latest, follow our Facebook page.',
      fbNote: 'Want the latest posts and event highlights?',
      readMore: 'Visit Facebook',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Come and visit',
      lede: 'Whether to book a trial, ask about classes, or simply to get to know gansai — we’d love to hear from you.',
      addressLabel: 'Studio address',
      hoursLabel: 'Hours',
      hours: 'By class and event — please message ahead to book.',
      followLabel: 'Social',
      mapLabel: 'Open in maps',
      messageLabel: 'Reach us',
      messageBody: 'We mainly connect through Facebook — a direct message is the fastest way to reach us.',
    },
  },
};

/* ----------------------- helpers ----------------------- */

/** The site base path (e.g. '/' locally, '/chihart/' on GitHub Pages). Always ends with '/'. */
const BASE = import.meta.env.BASE_URL;

/** Prefix a root-absolute asset path with the site base, e.g. asset('/favicon.svg'). */
export function asset(p: string): string {
  const base = BASE.replace(/\/$/, '');
  return p.startsWith('/') ? base + p : p;
}

/**
 * Build a locale-prefixed, base-aware URL with a trailing slash.
 * localizedPath('/about', 'en') -> '/en/about/'  (or '/chihart/en/about/' under a base).
 */
export function localizedPath(path: string, lang: Lang): string {
  const clean = path === '/' ? '' : path.replace(/^\/(zh|en)/, '').replace(/^\//, '');
  const tail = clean ? `${lang}/${clean}/` : `${lang}/`;
  return `${BASE}${tail}`;
}

/** Build the main navigation as {label, href} for a given language. */
export function navItems(lang: Lang) {
  const n = ui[lang].nav;
  return [
    { label: n.home, href: localizedPath('/', lang) },
    { label: n.about, href: localizedPath('/about', lang) },
    { label: n.art, href: localizedPath('/art', lang) },
    { label: n.gallery, href: localizedPath('/gallery', lang) },
    { label: n.classes, href: localizedPath('/classes', lang) },
    { label: n.news, href: localizedPath('/news', lang) },
    { label: n.contact, href: localizedPath('/contact', lang) },
  ];
}
