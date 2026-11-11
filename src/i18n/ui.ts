/* =========================================================================
   Bilingual content dictionary (繁體中文 / English)
   高雄市膠彩藝術發展協會 / Glue Painting · Glue Project (KGPAA)
   Unknown facts are marked 【待補】 / [TBD] and must not be invented.
   ========================================================================= */

export const languages = {
  zh: '中文',
  en: 'EN',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'zh';

export const org = {
  nameZh: '高雄市膠彩藝術發展協會',
  nameEn: 'Glue Painting / Glue Project',
  abbr: 'KGPAA',
  email: 'kgpaa.art@gmail.com',
  addressZh: '【待補】',
  addressEn: '[TBD]',
};

type Nav = {
  home: string;
  news: string;
  members: string;
  exhibitions: string;
  about: string;
  officers: string;
  contact: string;
};

interface Dict {
  htmlLang: string;
  nav: Nav;
  cta: {
    learnMore: string;
    readMore: string;
    viewAll: string;
    backHome: string;
    downloadQr: string;
    contact: string;
    viewMembers: string;
    viewExhibitions: string;
    viewNews: string;
    backToNews: string;
    backToMembers: string;
    backToExhibitions: string;
    backToAbout: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contact: string;
    rights: string;
    builtNote: string;
    addressLabel: string;
    emailLabel: string;
  };
  home: {
    heroKicker: string;
    heroTitle: string;
    heroSub: string;
    newsEyebrow: string;
    newsTitle: string;
    exhibitionEyebrow: string;
    exhibitionTitle: string;
    worksEyebrow: string;
    worksTitle: string;
    worksSub: string;
    worksCaption: string;
  };
  news: {
    eyebrow: string;
    title: string;
    lede: string;
    placeholderBadge: string;
    empty: string;
  };
  members: {
    eyebrow: string;
    title: string;
    lede: string;
    roleLabel: string;
    bioLabel: string;
    resumeLabel: string;
    educationLabel: string;
    awardsLabel: string;
    exhibitionsLabel: string;
    worksLabel: string;
    contactLabel: string;
    qrLabel: string;
    qrHelp: string;
    lineNameLabel: string;
  };
  exhibitions: {
    eyebrow: string;
    title: string;
    lede: string;
    currentTitle: string;
    pastTitle: string;
    pastEmpty: string;
    datesLabel: string;
    venueLabel: string;
    organizersLabel: string;
    worksLabel: string;
    relatedLabel: string;
    currentBadge: string;
    pastBadge: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lede: string;
    introTitle: string;
    intro: string[];
    storyTitle: string;
    story: string;
    officersTitle: string;
    officersLede: string;
    officersCta: string;
  };
  officers: {
    eyebrow: string;
    title: string;
    lede: string;
    titleLabel: string;
    nameLabel: string;
    vacant: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lede: string;
    emailLabel: string;
    addressLabel: string;
  };
  lightbox: {
    label: string;
    close: string;
    prev: string;
    next: string;
  };
  a11y: {
    skip: string;
    mainMenu: string;
    openMenu: string;
    closeMenu: string;
  };
}

export const ui: Record<Lang, Dict> = {
  zh: {
    htmlLang: 'zh-Hant',
    nav: {
      home: '首頁',
      news: '協會活動',
      members: '會員',
      exhibitions: '展覽',
      about: '關於協會',
      officers: '理監事／幹部',
      contact: '聯絡我們',
    },
    cta: {
      learnMore: '了解更多',
      readMore: '閱讀全文',
      viewAll: '查看全部',
      backHome: '返回首頁',
      downloadQr: '下載 QR code',
      contact: '聯絡我們',
      viewMembers: '瀏覽會員',
      viewExhibitions: '查看展覽',
      viewNews: '查看消息',
      backToNews: '返回協會活動',
      backToMembers: '返回會員名單',
      backToExhibitions: '返回展覽',
      backToAbout: '返回關於協會',
    },
    footer: {
      tagline: '高雄市膠彩藝術發展協會（KGPAA）官方網站。英文品牌：Glue Painting / Glue Project。',
      quickLinks: '網站導覽',
      contact: '聯絡資訊',
      rights: '版權所有',
      builtNote: '本會為非營利藝術團體',
      addressLabel: '地址',
      emailLabel: '電子信箱',
    },
    home: {
      heroKicker: 'KGPAA · Glue Painting / Glue Project',
      heroTitle: '高雄市膠彩藝術發展協會',
      heroSub: '本站為協會官方網站，提供協會活動、會員介紹與展覽資訊。協會宗旨與沿革文案【待補】。',
      newsEyebrow: '協會活動',
      newsTitle: '最新消息',
      exhibitionEyebrow: '展覽',
      exhibitionTitle: '本期展覽',
      worksEyebrow: '會員作品',
      worksTitle: '膠彩作品精選',
      worksSub: '以下預設圖為陳嬋娟膠彩《黑面琵鷺》，於正式作品到齊前作為缺圖備案，並非正式的個人作品歸屬。',
      worksCaption: '黑面琵鷺（陳嬋娟 膠彩）',
    },
    news: {
      eyebrow: '協會活動',
      title: '最新消息',
      lede: '協會活動、公告與展覽相關訊息。目前條目若標示【待補】，即為網站架構占位，非正式公告。',
      placeholderBadge: '占位',
      empty: '目前尚無消息。【待補】',
    },
    members: {
      eyebrow: '會員',
      title: '會員介紹',
      lede: '以下名單依 LINE 群組顯示名稱整理，作為網站架構的起始名冊。職稱、經歷、照片與作品均為【待補】，尚未核對正式會員名冊。',
      roleLabel: '職稱',
      bioLabel: '簡介',
      resumeLabel: '學經歷／得獎／展歷',
      educationLabel: '學經歷',
      awardsLabel: '得獎',
      exhibitionsLabel: '展歷',
      worksLabel: '作品',
      contactLabel: '聯絡方式',
      qrLabel: '個人頁 QR code',
      qrHelp: '可下載後印製於名片，掃描即可開啟此會員頁面。',
      lineNameLabel: 'LINE 顯示名稱',
    },
    exhibitions: {
      eyebrow: '展覽',
      title: '展覽資訊',
      lede: '當期展覽與過往展覽紀錄。日期、主辦單位與作品說明若尚未確認，會標示【待補】或【待確認】。',
      currentTitle: '本期展覽',
      pastTitle: '過往展覽',
      pastEmpty: '尚無過往展覽資料。【待補】',
      datesLabel: '展覽日期',
      venueLabel: '地點',
      organizersLabel: '主辦單位',
      worksLabel: '參展作品',
      relatedLabel: '相關活動',
      currentBadge: '本期',
      pastBadge: '過往',
    },
    about: {
      eyebrow: '關於協會',
      title: '高雄市膠彩藝術發展協會',
      lede: '英文品牌 Glue Painting / Glue Project，簡稱 KGPAA。',
      introTitle: '協會簡介',
      intro: [
        '高雄市膠彩藝術發展協會（KGPAA）以膠彩藝術的推廣、交流與展覽為核心。完整的成立緣起、宗旨與組織沿革【待補】。',
        '本網站提供協會活動、會員頁面與展覽資訊。會員個人經歷與理監事名單將於正式資料提供後更新。',
      ],
      storyTitle: '沿革與宗旨',
      story: '【待補】',
      officersTitle: '理監事／幹部',
      officersLede: '理監事與幹部名單尚未提供，頁面上的職稱與姓名均為【待補】，並未套用會員名冊。',
      officersCta: '查看理監事／幹部',
    },
    officers: {
      eyebrow: '關於協會',
      title: '理監事／幹部',
      lede: '正式理監事與幹部名冊【待補】。以下為頁面架構占位，職稱、姓名與照片皆未填入，亦未使用會員名單中的姓名。',
      titleLabel: '職稱',
      nameLabel: '姓名',
      vacant: '【待補】',
    },
    contact: {
      eyebrow: '聯絡我們',
      title: '與協會聯繫',
      lede: '歡迎來信洽詢展覽、活動或入會相關事宜。',
      emailLabel: '電子信箱',
      addressLabel: '地址',
    },
    lightbox: {
      label: '作品放大檢視',
      close: '關閉',
      prev: '上一張',
      next: '下一張',
    },
    a11y: {
      skip: '跳至主內容',
      mainMenu: '主選單',
      openMenu: '開啟選單',
      closeMenu: '關閉選單',
    },
  },
  en: {
    htmlLang: 'en',
    nav: {
      home: 'Home',
      news: 'News & events',
      members: 'Members',
      exhibitions: 'Exhibitions',
      about: 'About',
      officers: 'Officers',
      contact: 'Contact',
    },
    cta: {
      learnMore: 'Learn more',
      readMore: 'Read more',
      viewAll: 'View all',
      backHome: 'Back to home',
      downloadQr: 'Download QR code',
      contact: 'Contact us',
      viewMembers: 'Browse members',
      viewExhibitions: 'View exhibitions',
      viewNews: 'View news',
      backToNews: 'Back to news',
      backToMembers: 'Back to members',
      backToExhibitions: 'Back to exhibitions',
      backToAbout: 'Back to about',
    },
    footer: {
      tagline: 'Official website of the Kaohsiung mineral-pigment painting association KGPAA (Glue Painting / Glue Project).',
      quickLinks: 'Explore',
      contact: 'Contact',
      rights: 'All rights reserved',
      builtNote: 'A non-profit arts association',
      addressLabel: 'Address',
      emailLabel: 'Email',
    },
    home: {
      heroKicker: 'KGPAA · Glue Painting / Glue Project',
      heroTitle: 'Glue Painting / Glue Project',
      heroSub: 'This is the association’s official website for news, member pages and exhibitions. The formal mission statement is [TBD].',
      newsEyebrow: 'News & events',
      newsTitle: 'Latest news',
      exhibitionEyebrow: 'Exhibitions',
      exhibitionTitle: 'Current exhibition',
      worksEyebrow: 'Members’ works',
      worksTitle: 'Selected paintings',
      worksSub: 'The default image is Chen Chan-juan’s mineral-pigment painting Black-faced Spoonbills, used when an official work has not yet been supplied. It is not a formal attribution to other members. Official individual works remain [TBD].',
      worksCaption: 'Black-faced Spoonbills (mineral-pigment painting by Chen Chan-juan)',
    },
    news: {
      eyebrow: 'News & events',
      title: 'News',
      lede: 'Association events, notices and exhibition updates. Items marked [TBD] are layout placeholders, not official announcements.',
      placeholderBadge: 'Placeholder',
      empty: 'No news yet. [TBD]',
    },
    members: {
      eyebrow: 'Members',
      title: 'Our members',
      lede: 'This roster starts from LINE display names and is a scaffolding list only. Titles, biographies, portraits and works are [TBD] and have not been checked against an official membership roll.',
      roleLabel: 'Title',
      bioLabel: 'Biography',
      resumeLabel: 'Education, awards & exhibition history',
      educationLabel: 'Education & experience',
      awardsLabel: 'Awards',
      exhibitionsLabel: 'Exhibitions',
      worksLabel: 'Works',
      contactLabel: 'Contact',
      qrLabel: 'Profile QR code',
      qrHelp: 'Download this image to print on a business card. Scanning it opens this member page.',
      lineNameLabel: 'LINE display name',
    },
    exhibitions: {
      eyebrow: 'Exhibitions',
      title: 'Exhibitions',
      lede: 'Current and past exhibitions. Unconfirmed dates, organizers or artwork notes are marked [TBD] or [To be confirmed].',
      currentTitle: 'Current exhibition',
      pastTitle: 'Archive',
      pastEmpty: 'No past exhibitions have been recorded yet. [TBD]',
      datesLabel: 'Dates',
      venueLabel: 'Venue',
      organizersLabel: 'Organizers',
      worksLabel: 'Works',
      relatedLabel: 'Related events',
      currentBadge: 'Current',
      pastBadge: 'Past',
    },
    about: {
      eyebrow: 'About',
      title: 'Glue Painting / Glue Project',
      lede: 'English brand: Glue Painting / Glue Project. Abbreviation: KGPAA.',
      introTitle: 'About the association',
      intro: [
        'KGPAA is devoted to the promotion, exchange and exhibition of mineral-pigment (jiaocai) painting. The official founding story, mission and organizational history are [TBD].',
        'This website hosts news, member pages and exhibition information. Officer titles and personal biographies will be updated once an official roster is provided.',
      ],
      storyTitle: 'History and mission',
      story: '[TBD]',
      officersTitle: 'Board and officers',
      officersLede: 'The officer roster has not been provided. Titles and names on that page are [TBD] and do not use the member list.',
      officersCta: 'View officers',
    },
    officers: {
      eyebrow: 'About',
      title: 'Board and officers',
      lede: 'The official roster of board members and officers is [TBD]. The cards below are layout placeholders: titles, names and photos are unfilled, and no names from the member list have been assigned.',
      titleLabel: 'Title',
      nameLabel: 'Name',
      vacant: '[TBD]',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Get in touch',
      lede: 'Please email us about exhibitions, events or membership.',
      emailLabel: 'Email',
      addressLabel: 'Address',
    },
    lightbox: {
      label: 'Enlarged artwork view',
      close: 'Close',
      prev: 'Previous image',
      next: 'Next image',
    },
    a11y: {
      skip: 'Skip to content',
      mainMenu: 'Main menu',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
  },
};

const BASE = import.meta.env.BASE_URL;

export function asset(p: string): string {
  const base = BASE.replace(/\/$/, '');
  return p.startsWith('/') ? base + p : p;
}

export function localizedPath(path: string, lang: Lang): string {
  const clean = path === '/' ? '' : path.replace(/^\/(zh|en)/, '').replace(/^\//, '');
  const tail = clean ? `${lang}/${clean}/` : `${lang}/`;
  return `${BASE}${tail}`;
}

export function navItems(lang: Lang) {
  const n = ui[lang].nav;
  return [
    { label: n.home, href: localizedPath('/', lang), key: 'home' as const },
    { label: n.news, href: localizedPath('/news', lang), key: 'news' as const },
    { label: n.members, href: localizedPath('/members', lang), key: 'members' as const },
    { label: n.exhibitions, href: localizedPath('/exhibitions', lang), key: 'exhibitions' as const },
    { label: n.about, href: localizedPath('/about', lang), key: 'about' as const },
    { label: n.contact, href: localizedPath('/contact', lang), key: 'contact' as const },
  ];
}

export function isLang(value: string | undefined): value is Lang {
  return value === 'zh' || value === 'en';
}
