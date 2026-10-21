const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'carousel');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const cards = [
  {
    name: 'openai',
    title: 'OpenAI SearchGPT',
    subtitle: 'Conversational Citations & Synthesis',
    bg: '#0F172A',
    accent: '#10A37F',
    icon: `<path fill="#10A37F" d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.2 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.08z"/>`
  },
  {
    name: 'gemini',
    title: 'Google Gemini',
    subtitle: 'AI Overviews Knowledge Graph',
    bg: '#0B132B',
    accent: '#38BDF8',
    icon: `<path fill="#38BDF8" d="M12 0C12 6.6 6.6 12 0 12C6.6 12 12 17.4 12 24C12 17.4 17.4 12 24 12C17.4 12 12 6.6 12 0Z"/>`
  },
  {
    name: 'perplexity',
    title: 'Perplexity AI',
    subtitle: 'Footnote Citations & Domain Trust',
    bg: '#18181B',
    accent: '#2DD4BF',
    icon: `<path fill="#2DD4BF" d="M22.4 7.09h-2.31V.07l-7.51 6.35V.16h-1.16v6.2L4.49 0v7.09H1.6v10.4h2.89V24l6.93-6.36v6.2h1.16v-6.05l6.93 6.18v-6.49h2.89V7.09z"/>`
  },
  {
    name: 'anthropic',
    title: 'Anthropic Claude',
    subtitle: 'Deep Reasoning & Long-Context Authority',
    bg: '#1C1917',
    accent: '#F59E0B',
    icon: `<path fill="#F59E0B" d="M17.3 3.54h-3.67l6.7 16.92H24Zm-10.61 0L0 20.46h3.74l1.37-3.55h7.01l1.37 3.55h3.74L10.54 3.54Zm-.37 10.22 2.29-5.94 2.29 5.94Z"/>`
  },
  {
    name: 'grok',
    title: 'xAI Grok',
    subtitle: 'Real-Time News Stream & DeepSearch',
    bg: '#09090B',
    accent: '#F43F5E',
    icon: `<path fill="#F43F5E" d="M9.27 15.29l7.98-5.9c.39-.29.95-.18 1.14.27.98 2.37.54 5.22-1.41 7.17-1.95 1.95-4.67 2.38-7.15 1.41l-2.71 1.25c3.89 2.67 8.61 2 11.56-.95 2.34-2.34 3.07-5.54 2.39-8.42l.01.01c-.98-4.23.24-5.92 2.75-9.38.06-.08.12-.17.18-.25l-3.3 3.31v-.01L9.27 15.29"/>`
  },
  {
    name: 'meta',
    title: 'Meta AI',
    subtitle: 'Open Llama Vector Retrieval',
    bg: '#0F172A',
    accent: '#818CF8',
    icon: `<path fill="#818CF8" d="M6.92 4.03C4.95 4.03 3.23 5.31 2.04 7.14.7 9.21 0 11.88 0 14.45c0 .7.07 1.37.21 1.97.24.96.64 1.62 1.38 2.05 1.05.62 2.35.62 3.97-.8 1.25-1.1 2.1-2.4 3.42-4.76l.76-1.34.18-.32.19.3 2.15 3.6c.72 1.2 1.67 2.55 2.47 3.31 1.05.99 1.99 1.22 3.06 1.22 1.08 0 1.88-.35 2.46-.84.54-.45.86-1.13.86-2.13 0-2.72-.68-5.36-2.08-7.45-1.28-1.91-2.96-2.93-4.72-2.93-1.05 0-2.09.47-3.05 1.31-.65.57-1.26 1.29-1.82 2.05-.69-.88-1.34-1.55-1.96-2.06-1.18-.96-2.31-1.3-3.45-1.3z"/>`
  }
];

cards.forEach(c => {
  const content = `<svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="grad-${c.name}" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="${c.accent}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${c.bg}" stop-opacity="1"/>
    </radialGradient>
    <pattern id="grid-${c.name}" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="${c.bg}"/>
  <rect width="100%" height="100%" fill="url(#grad-${c.name})"/>
  <rect width="100%" height="100%" fill="url(#grid-${c.name})"/>
  <circle cx="300" cy="210" r="75" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
  <g transform="translate(252, 162) scale(4)">
    ${c.icon}
  </g>
  <text x="300" y="360" font-family="system-ui, -apple-system, sans-serif" font-size="30" font-weight="800" fill="#FFFFFF" text-anchor="middle" letter-spacing="-0.5">${c.title}</text>
  <text x="300" y="405" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="500" fill="rgba(255,255,255,0.7)" text-anchor="middle">${c.subtitle}</text>
  <rect x="210" y="455" width="180" height="38" rx="19" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
  <text x="300" y="479" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="${c.accent}" text-anchor="middle" letter-spacing="1.5">GEO CITATION ENGINE</text>
</svg>`;

  fs.writeFileSync(path.join(outDir, `${c.name}.svg`), content);
});

console.log('Successfully generated 6 SVG cards in public/carousel/');
