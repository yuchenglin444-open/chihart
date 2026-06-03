# 七賢膠彩藝術研究會 — 官方網站

Seven Sages Gouache Art Research Association — bilingual (繁體中文 / English) website.

以 **Astro + Tailwind CSS** 打造的靜態網站，採「雅緻畫廊風」設計，主色取自膠彩礦物顏料、綠水（celadon）與印泥朱紅。

---

## 一、快速開始 Getting started

需要先安裝 [Node.js](https://nodejs.org)（18 以上）。

```bash
npm install      # 第一次先安裝套件
npm run dev      # 啟動本機預覽 → http://localhost:4321
npm run build    # 產生正式檔案到 dist/
npm run preview  # 預覽 build 後的成品
```

---

## 二、網站結構 Site map

| 中文 | English | 路徑 |
|------|---------|------|
| 首頁 | Home | `/zh/` · `/en/` |
| 關於我們 | About | `/zh/about` · `/en/about` |
| 認識膠彩 | The Art | `/zh/art` · `/en/art` |
| 作品集 | Gallery | `/zh/gallery` · `/en/gallery` |
| 課程體驗 | Classes | `/zh/classes` · `/en/classes` |
| 最新消息 | News | `/zh/news` · `/en/news` |
| 聯絡我們 | Contact | `/zh/contact` · `/en/contact` |

根網址 `/` 會自動導向 `/zh/`。

---

## 三、如何修改內容 How to edit content

**幾乎所有文字都集中在一個檔案**，不需要懂程式也能改：

### ✏️ 文字內容
👉 `src/i18n/ui.ts`
- 每一段文字都有 `zh`（中文）與 `en`（英文）兩個版本，成對修改即可。
- 最上方的 `org` 區塊放「固定資料」：名稱、地址、創會日期、Facebook 連結等。

### 🖼️ 作品集圖片
👉 `src/data/gallery.ts`
1. 把作品照片放進 `public/gallery/` 資料夾（例如 `lotus.jpg`）。
2. 在對應作品加上 `image: '/gallery/lotus.jpg'`。
3. 沒有放圖片的作品，會自動顯示一塊優雅的色塊佔位圖，版面不會破。
- `category` 可填 `'flora'`（花卉）／`'nature'`（自然）／`'students'`（學員作品），對應作品集的篩選按鈕。
- `feature: true` 的作品會出現在首頁精選區。

### 👩‍🎨 老師照片
把照片命名為 `founder.jpg` 放進 `public/`，再到
`src/components/pages/AboutContent.astro` 把佔位色塊換成 `<img src="/founder.jpg" ... />`。
（檔案中已有中文註解標示位置。）

### 📰 最新消息／活動
👉 `src/data/news.ts`
- 在陣列「最上方」新增一筆即為最新消息。
- 每筆需填中英標題與內文、日期 `date`（格式 YYYY-MM-DD）、`tag`（exhibition／competition／class／notice），`link` 選填。

---

## 四、調整外觀 Design tokens

所有顏色、字型都定義在 👉 `src/styles/global.css` 最上方的 `@theme` 區塊。
例如把主色 `--color-jade` 換掉，全站的按鈕與重點色就會一起改變。

主要色彩（teal 主色調）：

| 變數 | 用途 | 色碼 |
|------|------|------|
| `--color-paper` | 頁面背景（和紙暖白） | `#f6f1e7` |
| `--color-jade` | **主色 primary（青綠 teal）** | `#33c6ba` |
| `--color-jade-deep` | 深青綠（深色區塊、按鈕 hover） | `#2e5c58` |
| `--color-jade-soft` | 淺水藍（柔和底色） | `#94eee3` |
| `--color-seal` | 鮮明強調色（朱紅 vermilion） | `#ef3e18` |
| `--color-gold` | 高對比強調文字（暗紅 maroon） | `#78161e` |
| `--color-ink` | 主要文字 | `#2a2420` |

> ⚠️ 主色 `#33c6ba` 偏亮，**填色按鈕／標誌上用深色文字**（白字在亮青綠上看不清楚）。
> 深色區塊改用 `--color-jade-deep`（深青綠）配白字。

字型使用 Google Fonts 的 **Noto Serif TC**（標題）與 **Noto Sans TC**（內文）。

### 無障礙字級（為長者讀者設計）
全站基準字級在 `src/styles/global.css` 的 `html { font-size: 19px }`，比一般網站大約 +19%；
內文字重為 500（較粗）、標題 700。若想再放大或縮小整站文字，只要改這個數字即可。

### 圖示 Icons
使用 **Phosphor Icons（Bold 粗體）** — 免費（MIT 授權），與 Noto 字型風格相襯，且筆畫夠粗、長者易辨識。
透過 CDN 載入（見 `src/layouts/Layout.astro`），用法：`<i class="ph-bold ph-<名稱>"></i>`，
可在 <https://phosphoricons.com> 查圖示名稱。大小用 Tailwind 字級控制（如 `text-2xl`）。

---

## 五、發佈上線 Deploy

網站已部署在 **GitHub Pages**：

🔗 **https://yuchenglin444-open.github.io/chihart/**

- 原始碼倉庫：<https://github.com/yuchenglin444-open/chihart>（`main` 分支）
- 線上版本：`gh-pages` 分支（由 `npm run build` 產生的 `dist/`）

### 更新線上網站（改完內容後）

```bash
git add -A && git commit -m "更新內容"   # 1. 存檔原始碼
git push                                  # 2. 推上 GitHub（保存）
npm run deploy                            # 3. 重新建置並發佈到線上
```

`npm run deploy` 會自動 build 並把成品推到 `gh-pages` 分支，約 1 分鐘後線上即更新。

> 若想改用自訂網域，請到 `astro.config.mjs` 把 `site` 設為新網址、`base` 改回 `'/'`，
> 並在 GitHub 倉庫 Settings → Pages 設定自訂網域。

### 其他免費平台 Alternatives
Netlify / Cloudflare Pages / Vercel 也可：Build command `npm run build`，Publish directory `dist`
（改用根網域時記得把 `base` 改回 `'/'`）。

---

## 六、目前的待補項目 To-do（給網站擁有者）

- [ ] 放入真實作品照片（`public/gallery/` + `src/data/gallery.ts`）
- [ ] 放入陳嬋娟老師照片（`public/founder.jpg`）
- [ ] 確認／補充聯絡方式（目前僅 Facebook；若有電話或 Email 可加入 `src/i18n/ui.ts` 的 `org`）
- [ ] 校對英文翻譯細節
- [ ] 更新 `astro.config.mjs` 的正式網址

---

## 七、資料來源 Notes

網站基本資訊整理自本會 Facebook 專頁
（<https://www.facebook.com/chihart>）：創會緣起、地址、創會老師陳嬋娟、免費體驗等。
部分作品標題與最新消息為「示意內容」，請依實際情況替換。

> 「膠彩畫的美，在於時間與耐心——一層一層，讓顏色慢慢長出來。」
