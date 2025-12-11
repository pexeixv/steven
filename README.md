# Steven Pereira - Portfolio Site

A modern, SEO-friendly React + Vite + Tailwind CSS portfolio site with static prerendering for optimal performance and Netlify deployment.

> ⚡ Built with vite-plugin-ssr for static prerendering and react-helmet-async for SEO-friendly meta tags.

---

## ✨ Features

- ⚛️ **React 19** (with TypeScript)
- ⚡ **Vite** — fast dev server and optimized builds
- 🎨 **Tailwind CSS v4**
- 🧩 **shadcn/ui** components pre-installed
- 🔍 **Static Prerendering** — vite-plugin-ssr for SEO and performance
- 📄 **Meta Tags** — react-helmet-async for dynamic, server-rendered SEO tags
- 🚀 **Netlify-ready** — optimized for static site deployment
- 🧹 Pre-configured with **Prettier**
- ✅ Example layout, pages, and component structure

---

## 📦 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.dev/)
- [vite-plugin-ssr](https://vite-plugin-ssr.com/)
- [react-helmet-async](https://github.com/staylor/react-helmet-async)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/pexeixv/steven-pereira
cd steven-pereira
```

### 2. Install dependencies

```bash
npm install --legacy-peer-deps
```

> **Note**: Use `--legacy-peer-deps` flag due to React 19 peer dependency constraints with some packages.

### 3. Start the development server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 4. Build for production

```bash
npm run build
```

This will:
1. Build the client bundle with Vite
2. Build the SSR bundle
3. Prerender all routes to static HTML files
4. Output to `dist/client/` directory

### 5. Preview the production build

```bash
npm run preview
```

This serves the prerendered static files from `dist/client/` using the `serve` package.

---

## 📁 Folder Structure

```
.
├── pages/                  # vite-plugin-ssr pages
│   └── index.page.tsx      # Home page with meta tags
├── renderer/               # SSR renderers
│   ├── _default.page.client.tsx
│   └── _default.page.server.tsx
├── scripts/
│   └── prerender.cjs       # Prerender script
├── src/
│   ├── components/         # Reusable UI components (shadcn/ui)
│   ├── pages/              # Page components and sections
│   ├── App.tsx             # Main app component
│   ├── entry-client.tsx    # Client-side entry point
│   └── entry-server.tsx    # Server-side entry point
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration with SSR plugin
└── netlify.toml            # Netlify deployment configuration
```

---

## 🌐 Deploying to Netlify

### Option 1: Deploy via Netlify UI

1. Push your code to GitHub
2. Log in to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Netlify will auto-detect the build settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist/client`

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Netlify Configuration

The `netlify.toml` file configures:
- Build command: `npm run build`
- Publish directory: `dist/client`
- Redirect rules for SPA routing

---

## 🔍 SEO & Meta Tags

Each page can define custom meta tags using `react-helmet-async`:

```tsx
import { Helmet } from 'react-helmet-async'

function MyPage() {
  return (
    <>
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="Page description" />
        <meta property="og:title" content="OG Title" />
        <meta property="og:description" content="OG Description" />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <link rel="canonical" href="https://example.com/my-page" />
      </Helmet>
      {/* Your page content */}
    </>
  )
}
```

These tags are:
- ✅ Included in the prerendered HTML
- ✅ Crawlable by search engines
- ✅ Visible in social media previews

---

## 🛠 Customization Tips

- Add new pages in `pages/` directory following the `.page.tsx` convention
- Use `src/components/ui/` for ready-to-use shadcn components
- Customize Tailwind in `tailwind.config.js`
- Modify layout and sections in `src/pages/Home/components/`
- Update meta tags in each page component using `react-helmet-async`

---

## 💡 Learn More

- [vite-plugin-ssr Documentation](https://vite-plugin-ssr.com/)
- [react-helmet-async Documentation](https://github.com/staylor/react-helmet-async)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Netlify Documentation](https://docs.netlify.com/)

---

## 📜 License

MIT
