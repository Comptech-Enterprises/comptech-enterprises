export const COMPANY = {
  name: "Comptech Enterprises",
  tagline: "Enterprise IT Solutions",
  phone: "+91 22 1234 5678",
  email: "info@comptech.in",
  whatsapp: "912212345678",
  address: "Janakpuri, Delhi, India",
  founded: "2008",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "AI", href: "/ai-solutions" },
  { label: "Our Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
  { label: "About", href: "/about" },
];

export const PARTNERS = [
  { name: "Dell", color: "#007DB8" },
  { name: "HP", color: "#0096D6" },
  { name: "Lenovo", color: "#E1251B" },
  { name: "Microsoft", color: "#00A4EF" },
  { name: "Intel", color: "#0071C5" },
  { name: "NVIDIA", color: "#76B900" },
  { name: "Canon", color: "#CC0000" },
  { name: "Samsung", color: "#1428A0" },
  { name: "Epson", color: "#009AC7" },
  { name: "Sony", color: "#003087" },
];

export const SERVICES = [
  {
    id: "infrastructure",
    icon: "server",
    title: "Enterprise Infrastructure",
    desc: "Dell, HP, and Lenovo server and storage solutions engineered for mission-critical enterprise workloads.",
    href: "/services/infrastructure",
  },
  {
    id: "euc",
    icon: "monitor",
    title: "End User Compute",
    desc: "From desktops to laptops and mobile devices, our comprehensive offerings ensure that your employees have the tools they need to be productive, whether in the office or on the go.",
    href: "/services/euc",
  },
  {
    id: "ai",
    icon: "cpu",
    title: "AI Solutions",
    desc: "Unlock the potential of AI with our cutting-edge GPUs. We offer the best-in-class graphics processing units for unparalleled performance and innovation.",
    href: "/ai-solutions",
  },
  {
    id: "datacenter",
    icon: "database",
    title: "Data Centre Solutions",
    desc: "Upgrade your infrastructure with our Data Centre Solutions, including servers, ensuring scalability, reliability, and optimal performance for your business needs.",
    href: "/services/datacenter",
  },
  {
    id: "networking",
    icon: "network",
    title: "Network Solutions",
    desc: "Optimise your connectivity with our Networking Solutions. From robust infrastructure to advanced configurations, we deliver solutions for seamless and efficient networking.",
    href: "/services/networking",
  },
  {
    id: "security",
    icon: "shield",
    title: "Security Solutions",
    desc: "Enhance your security with our CCTV Solutions. We provide advanced surveillance systems for comprehensive monitoring and peace of mind.",
    href: "/services/security",
  },
  {
    id: "cloud",
    icon: "cloud",
    title: "Cloud Solutions",
    desc: "Azure, AWS, and GCP migrations, hybrid cloud architecture, and managed cloud operations.",
    href: "/services/cloud",
  },
  {
    id: "amc",
    icon: "tool",
    title: "Annual Maintenance Contracts",
    desc: "Keep your IT systems running smoothly with our Computer AMC service. We provide comprehensive maintenance and support for smooth operations.",
    href: "/services/amc",
  },
];

export const STATS = [
  { value: "15", suffix: "+", label: "Years Experience", desc: "Since 2008" },
  { value: "500", suffix: "+", label: "Projects Delivered", desc: "Across India" },
  { value: "200", suffix: "+", label: "Enterprise Clients", desc: "Active accounts" },
  { value: "24", suffix: "/7", label: "Support Coverage", desc: "Always available" },
  { value: "99.9", suffix: "%", label: "Uptime SLA", desc: "Guaranteed" },
  { value: "50", suffix: "+", label: "Certified Engineers", desc: "OEM certified" },
  { value: "10", suffix: "+", label: "OEM Partnerships", desc: "Tier-1 vendors" },
  { value: "4.8", suffix: "/5", label: "Client Satisfaction", desc: "Avg. CSAT score" },
];

export const INDUSTRIES = [
  {
    icon: "heart-pulse",
    title: "Healthcare",
    desc: "Hospital networks, PACS systems, and medical IT infrastructure.",
  },
  {
    icon: "graduation",
    title: "Education",
    desc: "Campuswide Wi-Fi, smart classrooms, and student device programs.",
  },
  {
    icon: "landmark",
    title: "Government",
    desc: "Secure infrastructure for government offices and municipalities.",
  },
  {
    icon: "factory",
    title: "Manufacturing",
    desc: "OT/IT convergence, ERP servers, and plant-floor computing.",
  },
  {
    icon: "shopping-bag",
    title: "Retail",
    desc: "POS systems, inventory servers, and CCTV for retail chains.",
  },
  {
    icon: "banknote",
    title: "Finance",
    desc: "High-availability trading and banking IT infrastructure.",
  },
  {
    icon: "code-2",
    title: "IT Services",
    desc: "Dev workstations, collaboration tools, and cloud infrastructure.",
  },
];

export const CASE_STUDIES = [
  {
    tag: "Healthcare",
    headline: "Multi-hospital Server Consolidation",
    client: "3-hospital Group",
    metrics: [
      { value: "60%", label: "Cost reduction" },
      { value: "99.98%", label: "Uptime achieved" },
      { value: "3 wks", label: "Migration duration" },
    ],
    excerpt:
      "Consolidated 47 physical servers into 6 Dell PowerEdge nodes with VMware virtualization, eliminating hardware sprawl and cutting capex by 60%.",
    tags: ["Dell PowerEdge", "VMware", "Infrastructure"],
  },
  {
    tag: "Education",
    headline: "University-wide Wi-Fi 6E Rollout",
    client: "Mumbai University Campus",
    metrics: [
      { value: "5,000+", label: "Concurrent users" },
      { value: "8 bldgs", label: "Coverage" },
      { value: "4 wks", label: "Deployment" },
    ],
    excerpt:
      "Designed and deployed a campus-wide Wi-Fi 6E network across 8 buildings supporting 5,000+ concurrent users with centralized management.",
    tags: ["Wi-Fi 6E", "Aruba", "Networking"],
  },
  {
    tag: "Government",
    headline: "Municipal CCTV Surveillance",
    client: "Municipal Corporation",
    metrics: [
      { value: "500+", label: "IP cameras" },
      { value: "24/7", label: "AI monitoring" },
      { value: "99.5%", label: "Uptime" },
    ],
    excerpt:
      "Deployed 500+ IP cameras with AI-powered video analytics and a central command center for 24/7 surveillance operations.",
    tags: ["IP CCTV", "AI Analytics", "Security"],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Comptech Enterprises has transformed our business with their comprehensive Data Center Solutions. Their expertise in scalable infrastructure and reliable support ensure seamless operations, making them an invaluable partner in our success.",
    name: "Ashiwini Palaha",
    title: "MD, Fabstract Clothing Pvt. Ltd.",
    initials: "AP",
  },
  {
    quote:
      "Comptech Enterprises provides exceptional AMC service for our school's computers, ensuring uninterrupted learning. Their timely maintenance keeps our technology running smoothly. Thank you for your dedication to our school's success.",
    name: "Saroop Singh",
    title: "MD, St. Cecilia School",
    initials: "SS",
  },
  {
    quote:
      "Comptech has truly revolutionized our operations with their exceptional end-user compute solutions. Their timely deliveries ensure uninterrupted workflow, making them our go-to IT partner.",
    name: "Sanjay Puri",
    title: "MD, Active Motors",
    initials: "SP",
  },
  {
    quote:
      "Comptech has helped us understand, learn and use AI in the simplest way possible. Their workshops are precise and very informative.",
    name: "HOD, Data Science",
    title: "LBSIM",
    initials: "DS",
  },
];

export const BLOG_POSTS = [
  {
    category: "Cloud",
    title: "Azure vs AWS for Indian Enterprises: A 2025 Comparison",
    excerpt:
      "Cost, compliance, latency, and support — the factors that actually matter when choosing a cloud platform for Indian enterprise workloads.",
    readTime: "7 min",
    date: "Dec 15, 2024",
    featured: true,
  },
  {
    category: "AI",
    title: "5 AI Use Cases Delivering Real ROI in Indian Enterprises",
    excerpt:
      "From predictive maintenance to intelligent document processing — the AI applications generating measurable returns across sectors.",
    readTime: "5 min",
    date: "Dec 8, 2024",
  },
  {
    category: "Security",
    title: "Why Analog CCTV is a Security Liability in 2025",
    excerpt:
      "IP cameras with AI analytics aren't just better — they're essential. Here's what you're risking with legacy surveillance systems.",
    readTime: "4 min",
    date: "Nov 28, 2024",
  },
  {
    category: "Infrastructure",
    title: "HCI vs 3-Tier Architecture: Which is Right for Your Workloads?",
    excerpt:
      "Hyper-converged infrastructure promises simplicity; traditional 3-tier delivers flexibility. How to choose for your specific needs.",
    readTime: "6 min",
    date: "Nov 18, 2024",
  },
  {
    category: "AMC",
    title: "Proactive vs Reactive IT Maintenance: The Cost of Waiting",
    excerpt:
      "Reactive maintenance costs 3-5x more than preventive AMC. The data behind why enterprise IT leaders are switching models.",
    readTime: "5 min",
    date: "Nov 5, 2024",
  },
  {
    category: "Networking",
    title: "Wi-Fi 6E in 2025: What Enterprises Need to Know",
    excerpt:
      "The 6 GHz band changes everything. Higher throughput, lower latency, and why your campus network is due for an upgrade.",
    readTime: "4 min",
    date: "Oct 25, 2024",
  },
];
