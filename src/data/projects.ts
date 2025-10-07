import { CircleDollarSign, Download, Dumbbell, FileSpreadsheet, Globe, ScanText } from 'lucide-react';

export const portfolioProjects = [
  {
    id: 1,
    title: 'Balkan Remote',
    description:
      'Karijerni hub za remote talente sa Balkana: poreski kalkulator, agregator poslova, resursi, alati i Q&A forum.',
    type: 'WEB PLATFORM',
    technologies: ['Next.js 15', 'Supabase', 'Tailwind', 'Vercel', 'GitHub Actions'],
    gradient: 'from-cyan-500 via-blue-500 to-purple-600',
    icon: Globe,
    url: 'https://balkan-remote.vercel.app',
    repo: 'https://github.com/zoxknez/BalkanRemote',
  },
  {
    id: 2,
    title: 'Pumpaj Video Downloader',
    description:
      'Video downloader koji sam orkestrirao kombinujući Next.js klijent, Express API i Electron shell uz pomoć AI pair-programminga. Pokriva 100+ platformi и prikazuje progres u realnom vremenu.',
    type: 'MULTI PLATFORM',
    technologies: ['Next.js', 'Express', 'Electron', 'yt-dlp', 'Supabase'],
    gradient: 'from-amber-500 via-orange-500 to-rose-500',
    icon: Download,
    url: 'https://pumpajvideodown.vercel.app',
    repo: 'https://github.com/zoxknez/pumpajvideodownloader',
  },
  {
    id: 3,
    title: 'SEF eFakture',
    description:
      'Kompletan eFaktura sistem za srpski SEF gde vodim arhitekturu, integracije и QA dok tim i AI asistenti pomažu oko detaljnog kodiranja (dashboard, UBL 2.1, API, webhookovi, audit trail).',
    type: 'ENTERPRISE',
    technologies: ['React', 'Node.js', 'Prisma', 'PostgreSQL', 'Redis'],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    icon: FileSpreadsheet,
    url: 'https://esef-olive.vercel.app',
    repo: 'https://github.com/zoxknez/eFakturaSef',
  },
  {
    id: 4,
    title: 'PDF Skrejper',
    description:
      'Open-source alat za indeksiranje PDF dokumenata где sam vodio koncept, automatizaciju i orkestraciju, dok su AI asistenti pomagali oko kodiranja scrape rutina i lokalizovanog UI-ja.',
    type: 'DATA TOOL',
    technologies: ['Python', 'Flask', 'SQLite', 'Tailwind', 'Docker'],
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-600',
    icon: ScanText,
    repo: 'https://github.com/zoxknez/pdfskrejper',
  },
  {
    id: 5,
    title: 'MMA Balkan',
    description:
      'Regionalni hub za MMA zajednicu sa vestima, eventima i korporativnim partnerstvima. Moja uloga: arhitektura, automatizovana ingest pipeline-ova и AI podrška za sadržaj.',
    type: 'COMMUNITY',
    technologies: ['Next.js', 'Supabase', 'Tailwind', 'Vercel'],
    gradient: 'from-rose-500 via-red-500 to-orange-500',
    icon: Dumbbell,
    repo: 'https://github.com/zoxknez/mma-balkan',
  },
  {
    id: 6,
    title: 'eFina',
    description:
      'Fintech rešenje za hrvatsko tržište: e-računi, fiskalizacija i cashflow dashboard. Vodiо sam product discovery i integracije dok AI agenti pokrivaju repetitivni kod.',
    type: 'FINTECH',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'Azure'],
    gradient: 'from-emerald-500 via-sky-500 to-indigo-500',
    icon: CircleDollarSign,
    repo: 'https://github.com/zoxknez/FinaeFakturaHR',
  },
];
