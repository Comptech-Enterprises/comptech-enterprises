// FAQ copy per page. Source: "FAQs Comptech Website" doc. Pages still marked "to be added" there
// (GEO, AI Training, AI Employees, IT Infrastructure) get an entry here once copy is supplied.

export interface FAQItem {
  q: string;
  a: string;
}

export const HOME_FAQS: FAQItem[] = [
  {
    q: "What are custom AI agents and how can they help my business?",
    a: "Custom AI agents are autonomous software systems built around your specific business workflows. They research, draft, execute, and escalate tasks without manual intervention. Unlike generic AI tools like ChatGPT, custom AI agents integrate directly with your existing tools such as CRMs, calendars, and communication platforms. Businesses use them to automate sales outreach, customer support, content creation, and internal operations, saving hundreds of hours per month. Comptech Enterprises builds custom AI agents tailored for mid-size businesses that want to scale without hiring large tech teams.",
  },
  {
    q: "What is Generative Engine Optimization (GEO) and how is it different from SEO?",
    a: "Generative Engine Optimization (GEO) is the practice of optimizing your brand to get cited, recommended, and ranked inside AI-powered search engines like ChatGPT, Google Gemini, and Perplexity. Traditional SEO focuses on ranking in Google’s link-based search results, while GEO focuses on getting your business mentioned in AI-generated answers. Both are important. SEO drives website traffic, GEO builds brand visibility where more and more people are searching. Comptech Enterprises offers both SEO and GEO services to ensure your business is visible across traditional and AI search.",
  },
  {
    q: "How can mid-size businesses start adopting AI without a technical team?",
    a: "Mid-size businesses can start with AI by identifying repetitive, time-consuming tasks like lead qualification, meeting notes, or social media management and automating them with pre-built AI employees or custom AI agents. You don’t need an in-house tech team because companies like Comptech Enterprises handle the entire process: auditing your workflows, building the AI solution, integrating it with your existing tools, and providing ongoing support. Most businesses go live with their first AI system within 30 days. We also offer hands-on AI training workshops so your teams can confidently work alongside AI.",
  },
  {
    q: "What industries and countries does Comptech Enterprises serve?",
    a: "Comptech Enterprises serves mid-size businesses across industries including hospitality, education, manufacturing, retail, automotive, and professional services. We work with clients in the United Arab Emirates, Canada, the United Kingdom, Australia, Germany, and across Europe, in addition to India. Our AI solutions, GEO services, and AI training workshops are delivered remotely and on-site, making it easy to work with teams across time zones. Whether you’re a 50-person company or a 500-person enterprise, our solutions are designed to scale with your needs.",
  },
  {
    q: "What does a free AI audit include and how do I get started?",
    a: "The free AI audit is a detailed assessment of your current workflows to identify where AI can save time, cut costs, and improve output. We analyze your sales process, customer support, content operations, and internal tools to recommend specific AI agents or automations that fit your business. The audit takes one consultation call and you receive a clear action plan with estimated timelines and results. To get started, simply fill out the contact form on our website or message us on WhatsApp at +91 8595073837.",
  },
];


export const AI_AGENTS_FAQS: FAQItem[] = [
  {
    q: "What is a custom AI agent and how does it work?",
    a: "A custom AI agent is an autonomous software system designed to perform specific business tasks on its own. It connects to your existing tools like CRMs, email platforms, calendars, and communication apps, and carries out tasks like lead qualification, data entry, report generation, and customer follow-ups. Unlike basic chatbots that only respond to questions, AI agents take initiative, make decisions based on rules you set, and escalate to humans when needed. The global AI agents market is projected to reach $10.9 billion in 2026, growing at 45.8% annually, as more businesses shift from manual workflows to autonomous systems. Comptech Enterprises has deployed over 100 custom AI agents for businesses worldwide.",
  },
  {
    q: "How are custom AI agents different from using ChatGPT or other AI tools?",
    a: "ChatGPT and similar tools are general-purpose assistants that respond when you type a prompt. Custom AI agents are purpose-built for your business and work autonomously without you needing to prompt them every time. They integrate directly into your systems, follow your business rules, and handle complete workflows end to end. For example, a sales AI agent can qualify leads, update your CRM, and book meetings on your calendar automatically, all without manual input. Over 51% of enterprises now run AI agents in production, and that number is growing as businesses realize the difference between using generic AI tools and deploying agents built for their specific operations.",
  },
  {
    q: "What business tasks can AI agents automate?",
    a: "AI agents can automate a wide range of tasks across sales, operations, customer support, and content. Common use cases include lead qualification and CRM updates, scheduling and calendar management, customer support ticket handling, social media content creation and publishing, meeting transcription and action item tracking, and data extraction from documents and emails. Over 70% of Comptech's clients are non-tech companies that started by automating one repetitive task and scaled from there. The best starting point is tasks that are repetitive, rule-based, and time-consuming for your team.",
  },
  {
    q: "How long does it take to build and deploy a custom AI agent?",
    a: "Most custom AI agents go live within 30 days. The process starts with a workflow audit where we map out the tasks you want to automate. Then we build the agent, integrate it with your tools, and test it with real scenarios before going live. Simpler agents like meeting note-takers or email responders can be ready in under two weeks. Comptech Enterprises has completed over 100 live deployments using this process, with dedicated support and a 12-hour average response time for any issues after launch.",
  },
  {
    q: "Is my business data safe when using AI agents?",
    a: "Yes. All custom AI agents built by Comptech Enterprises follow strict data security protocols. Your data stays within your own systems and is not used to train any third-party AI models. We use encrypted API connections, role-based access controls, and audit logs so you always know what the agent accessed and when. With over 100 deployments serving clients across multiple countries, data security is built into every stage of our process. For businesses with specific compliance requirements, we build agents that meet industry standards for data privacy and security.",
  },
];

export function faqJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
