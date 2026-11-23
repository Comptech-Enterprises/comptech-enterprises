import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Code2,
  MessageSquare,
  Send,
  Workflow,
  GitBranch,
  Plug,
  LayoutDashboard,
  ClipboardCheck,
  Globe2,
  GraduationCap,
  Megaphone,
  Building2,
  HeartPulse,
  LineChart,
  Shirt,
  ShoppingBag,
  FlaskConical,
  Sprout,
  Cpu,
  BookOpen,
  Target,
  Clock,
  Wrench,
  Handshake,
  Rocket,
  Search,
  FileCheck2,
  ShieldCheck,
  Activity,
  Mail,
  Database,
  TrendingUp,
  PenLine,
  Video,
  Mic,
  FileText,
  RefreshCw,
  Phone,
} from "lucide-react";

/* ───────── Hero network ───────── */
export const HERO_NODES: { icon: LucideIcon; title: string; sub: string }[] = [
  { icon: Bot, title: "Custom AI Agents", sub: "Agents that run inside your workflows" },
  { icon: Code2, title: "AI Software & Integration", sub: "Built on your stack, wired to your tools" },
  { icon: Search, title: "AI Audits, Strategy & Consulting", sub: "A ranked roadmap of where AI pays off" },
  { icon: Globe2, title: "Generative Engine Optimization", sub: "Get found and cited in AI search" },
];

/* ───────── Client ticker (files that exist in /public/clients) ───────── */
export const ABOUT_CLIENTS: { name: string; file: string; tall?: boolean }[] = [
  { name: "Casio", file: "casio" },
  { name: "N1.Care", file: "n1-care", tall: true },
  { name: "ITC", file: "itc" },
  { name: "Starbucks India", file: "starbucks-india" },
  { name: "Zomato", file: "zomato" },
  { name: "Pernod Ricard", file: "pernod-ricard" },
  { name: "Leela Hotels", file: "leela-hotels" },
  { name: "Urban Company", file: "urban-company" },
  { name: "Bata India", file: "bata-india" },
  { name: "BCG", file: "bcg" },
  { name: "DLF", file: "dlf" },
  { name: "IIT Delhi", file: "iit-delhi" },
  { name: "Rebel Foods", file: "rebel-foods" },
  { name: "Coca-Cola", file: "coca-cola" },
  { name: "Canara Bank", file: "canara-bank" },
  { name: "Fabstract", file: "fabstract", tall: true },
  { name: "Anthem", file: "anthem" },
  { name: "Stark Partners", file: "stark-partners" },
];

/* ───────── Solutions carousel ───────── */
export interface Solution {
  id: string;
  title: string;
  desc: string;
  href: string;
  icon: LucideIcon;
}
export const SOLUTIONS: Solution[] = [
  { id: "agents", title: "Custom AI Agents", desc: "Autonomous agents built around your exact workflows. They research, draft, act and hand off to your team.", href: "/ai-solutions", icon: Bot },
  { id: "geo", title: "Generative Engine Optimization", desc: "Get found and recommended by ChatGPT, Claude, Perplexity and AI search.", href: "/geo", icon: Globe2 },
  { id: "software", title: "Software Development", desc: "Custom AI applications and RAG pipelines built around your data and your users.", href: "/ai-solutions", icon: Code2 },
  { id: "training", title: "AI Workshops & Training", desc: "Hands-on workshops and customised training that build your team's AI skills.", href: "/ai-solutions", icon: GraduationCap },
  { id: "chatbots", title: "Intelligent Chatbots", desc: "Conversational AI that understands context and gives your customers fast, accurate answers.", href: "/ai-solutions", icon: MessageSquare },
  { id: "sales", title: "AI Sales Agent", desc: "Finds the right prospects, writes personal outreach and books the meetings, so lead generation runs itself.", href: "/ai-agents", icon: Send },
  { id: "automation", title: "Process Automation", desc: "End-to-end automation that streamlines operations and takes repeat manual work off your team.", href: "/ai-solutions", icon: Workflow },
  { id: "integrations", title: "API & Integrations", desc: "Connect AI to the CRM, inbox and tools you already use, with no rip-and-replace.", href: "/ai-solutions", icon: Plug },
  { id: "workflows", title: "Agentic Workflows", desc: "Multi-step processes where AI plans, decides between steps and acts across your tools.", href: "/ai-solutions", icon: GitBranch },
  { id: "dashboards", title: "AI Dashboards & Reporting", desc: "Live dashboards with an AI analyst built in. Ask in plain English, get daily briefings by Slack or email.", href: "/ai-solutions", icon: LayoutDashboard },
  { id: "audit", title: "AI Audit & Consulting", desc: "A structured audit and a roadmap that map your highest-ROI AI opportunities. Free to start.", href: "/contact", icon: ClipboardCheck },
];

/* ───────── Case study carousel ───────── */
export interface CaseCard {
  industry: string;
  title: string;
  label: string;
  body: string;
  icon: LucideIcon;
}
export const CASE_CARDS: CaseCard[] = [
  { industry: "Marketing agency", title: "We helped a marketing agency save 38 hours a week.", label: "What we built", body: "A lead-gen agent that finds, enriches and queues outreach every day.", icon: Megaphone },
  { industry: "B2B services firm", title: "We helped a services firm book 9 meetings a week.", label: "What we built", body: "A personalised outreach engine working from their target list.", icon: Building2 },
  { industry: "Healthtech", title: "We helped a healthtech startup automate patient workflows.", label: "What we built", body: "AI workflow and patient automation.", icon: HeartPulse },
  { industry: "Investment advisory", title: "We helped an advisory firm speed up research and reporting.", label: "What we built", body: "AI research and reporting agents.", icon: LineChart },
  { industry: "Fashion", title: "AI for fashion brands", label: "Where AI helps", body: "Catalogue, demand and customer-service automation.", icon: Shirt },
  { industry: "Retail and FoodTech", title: "AI for retail and food businesses", label: "Where AI helps", body: "Order, inventory and customer workflows that scale with demand.", icon: ShoppingBag },
  { industry: "Paints and chemicals", title: "AI for manufacturers and distributors", label: "Where AI helps", body: "Quoting, dealer support and reporting agents.", icon: FlaskConical },
  { industry: "AgriTech", title: "AI for agriculture businesses", label: "Where AI helps", body: "Field data, forecasting and advisory automation.", icon: Sprout },
  { industry: "Electronics", title: "AI for electronics companies", label: "Where AI helps", body: "Support, product knowledge and order-tracking agents.", icon: Cpu },
  { industry: "Edutech", title: "AI for education providers", label: "Where AI helps", body: "Enquiry handling, learner support and admin workflows.", icon: BookOpen },
];

export const IMPACT_STATS = [
  { v: "30 days", l: "average time to a live AI system" },
  { v: "250 hrs", l: "of work time saved" },
  { v: "100+", l: "live deployments" },
  { v: "$0", l: "cost of your first AI audit" },
];

/* ───────── AI employees ───────── */
export interface Employee {
  id: string;
  name: string;
  tag: string;
  icon: LucideIcon;
  cta: string;
  href: string;
  video?: string;
  chips: string[];
  steps: { t: string; d: string; icon: LucideIcon }[];
  stats: { v: string; l: string }[];
}
export const EMPLOYEES: Employee[] = [
  {
    id: "sales",
    name: "Sales AI Employee",
    tag: "Finds, qualifies and books clients.",
    icon: Bot,
    cta: "Explore Sales AI Employee",
    href: "/ai-agents",
    video: "/sales-ai-agent.mp4",
    chips: ["WhatsApp", "Web chat", "HubSpot", "Zoho"],
    steps: [
      { t: "Finds High-Value Prospects", d: "Matches your ideal customer and finds the decision maker", icon: Search },
      { t: "Researches Pain Points", d: "Tracks funding, news and urgent needs", icon: Activity },
      { t: "Personalised Outreach", d: "Relevant messages and follow-ups, with context", icon: Mail },
      { t: "Syncs with CRM", d: "Notes from every conversation, so context is never lost", icon: Database },
    ],
    stats: [
      { v: "10x", l: "faster outreach" },
      { v: "3x", l: "more qualified leads" },
      { v: "85%", l: "reply-rate lift" },
      { v: "24/7", l: "always running" },
    ],
  },
  {
    id: "social",
    name: "Social Media AI Employee",
    tag: "Plans, creates and publishes content.",
    icon: Megaphone,
    cta: "Explore Social Media AI Employee",
    href: "/social-media-ai-agent",
    video: "/short-social-media-ai.mp4",
    chips: ["LinkedIn", "Twitter/X", "Instagram"],
    steps: [
      { t: "Spots Trends & Plans", d: "Watches trends and mentions, plans your month", icon: TrendingUp },
      { t: "Creates On-Brand Content", d: "Copy, images and video in your voice", icon: PenLine },
      { t: "Publishes Automatically", d: "Schedules across all your channels", icon: Send },
      { t: "Engages & Optimises", d: "Replies to comments, learns what performs", icon: MessageSquare },
    ],
    stats: [
      { v: "5x", l: "faster publishing" },
      { v: "+180%", l: "engagement lift" },
      { v: "100%", l: "on-brand voice" },
      { v: "24/7", l: "always monitoring" },
    ],
  },
  {
    id: "meeting",
    name: "Meeting AI Employee",
    tag: "Joins calls, syncs every follow-up.",
    icon: Video,
    cta: "Explore Meeting AI Employee",
    href: "/ai-agents",
    chips: ["Zoom", "Google Meet", "Microsoft Teams", "Slack", "Jira", "CRM"],
    steps: [
      { t: "Joins Every Call", d: "Zoom, Google Meet and Microsoft Teams", icon: Phone },
      { t: "Answers Live", d: "Voice assistant pulls real-time data", icon: Mic },
      { t: "Captures Decisions", d: "Minutes with owners and deadlines", icon: FileText },
      { t: "Syncs Follow-ups", d: "Actions to Slack, Jira and your CRM", icon: RefreshCw },
    ],
    stats: [
      { v: "3", l: "call platforms" },
      { v: "0", l: "notes by hand" },
      { v: "Live", l: "answers" },
      { v: "24/7", l: "any meeting" },
    ],
  },
];

/* ───────── Process ───────── */
export const PROCESS_STEPS: { step: string; title: string; desc: string; badge: string; icon: LucideIcon }[] = [
  { step: "Step 1 · Start here", title: "AI Audit", desc: "We map your workflows and find where AI creates real ROI.", badge: "A ranked AI roadmap", icon: ClipboardCheck },
  { step: "Step 2", title: "Scoped Proposal", desc: "Clear deliverables. Fixed cost. Honest timeline.", badge: "A clear scope", icon: FileCheck2 },
  { step: "Step 3", title: "Custom Build", desc: "Private, air-gapped AI built around your data.", badge: "AI built around your data", icon: Code2 },
  { step: "Step 4", title: "Maintain & Own", desc: "We run it. You own it. No lock-in.", badge: "Full ownership", icon: ShieldCheck },
];

export const CERTIFIED: { name: string; logo: string }[] = [
  { name: "OpenAI", logo: "/logos/openai.svg" },
  { name: "Anthropic", logo: "/logos/anthropic.svg" },
  { name: "Gemini", logo: "/logos/gemini.svg" },
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "Azure", logo: "/logos/azure.svg" },
  { name: "NVIDIA", logo: "/logos/nvidia.svg" },
];

/* ───────── Why choose ───────── */
export const WHY_CARDS: { title: string; body: string; icon: LucideIcon }[] = [
  { title: "Delivery first", body: "Three decades of shipping real technology taught us what works in a business.", icon: Rocket },
  { title: "Live in about 30 days", body: "A scoped first build you can use, not a year-long programme.", icon: Clock },
  { title: "Built around you, owned by you", body: "Made for your workflows and tools. Your data stays private and you are never locked in.", icon: Wrench },
  { title: "One partner, end to end", body: "Audit, build, run and improve. AI agents, software and IT support under one roof.", icon: Handshake },
];

export const MISSION_STATS = [
  { v: "30+", l: "years of experience" },
  { v: "50+", l: "AI engineers" },
  { v: "50+", l: "projects delivered" },
  { v: "12+", l: "countries served" },
];

export const TEAM: { initial: string; name: string; role: string; bio: string }[] = [
  { initial: "M", name: "Mohit Purdhani", role: "Chief Executive Officer", bio: "Sets Comptech's direction and drives its growth. He runs our IT infrastructure business, from hardware to enterprise rollouts, and builds the partnerships that widen our reach." },
  { initial: "P", name: "Paawan Purdhani", role: "Chief Technology Officer", bio: "Turns AI from a buzzword into tools your team actually uses. He leads our 50+ engineers across custom agents, software and hands-on training." },
  { initial: "D", name: "Deepika Purdhani", role: "Chief Financial Officer", bio: "Leads financial strategy, operational efficiency and sustainable growth. She ensures every AI and infrastructure engagement delivers clear ROI for clients." },
  { initial: "S", name: "Supreet Kaur", role: "Head of Growth", bio: "Leads business development, partnerships and expansion into new markets. She drives client onboarding and success, so every engagement starts well and every client keeps growing." },
];

export const ABOUT_FAQS: { q: string; a: string }[] = [
  { q: "What does the free audit include?", a: "We map your workflows and find where AI creates real ROI. You leave with a ranked list of opportunities and a view of what we'd build, whether or not you work with us." },
  { q: "How long until something is live?", a: "Our lead-generation build for a marketing agency went live in 30 days. Your proposal states an honest timeline before you commit." },
  { q: "Do we own what you build?", a: "Yes. We run it if you want us to, but you own it, and there is no lock-in." },
  { q: "Is our data kept private?", a: "We build private, air-gapped AI around your data." },
  { q: "What is Generative Engine Optimization?", a: "GEO improves how often and how well tools like ChatGPT, Claude and Perplexity recommend your business when people ask them questions." },
  { q: "Do you also provide IT services?", a: "Yes. Software, hardware and annual maintenance contracts are on our IT services page." },
];

/* keep tree-shaker quiet about icons used only by sub-components */
export const ICON_REFS = { Target };
