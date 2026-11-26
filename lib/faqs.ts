// FAQ copy per page. Source: "FAQs Comptech Website" doc. IT Infrastructure is still "to be added" there.

export type FAQBlock =
  | { type: "p"; text: string }
  | { type: "list"; ordered?: boolean; items: { title?: string; text: string }[] }
  | { type: "table"; head: string[]; rows: string[][] };

export interface FAQItem {
  q: string;
  /** Opening paragraph of the answer. */
  a: string;
  /** Extra answer content (lists, tables), shown under the opening paragraph. */
  blocks?: FAQBlock[];
  links?: { label: string; href: string }[];
}

const sentence = (s: string) => (/[.!?:"”)]$/.test(s) ? s : `${s}.`);

/** The whole visible answer as plain text, so the schema always matches the page. */
export function faqAnswerText({ a, blocks = [] }: FAQItem): string {
  const rest = blocks.map((b) => {
    if (b.type === "p") return b.text;
    if (b.type === "list") return b.items.map((i) => sentence(i.title ? `${i.title}: ${i.text}` : i.text)).join(" ");
    return b.rows
      .map((row) => sentence(`${row[0]}: ${row.slice(1).map((c, j) => `${b.head[j + 1]}: ${c}`).join("; ")}`))
      .join(" ");
  });
  return [a, ...rest].join(" ");
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

export const GEO_FAQS: FAQItem[] = [
  {
    "q": "What is Generative Engine Optimization (GEO), and how does Comptech get businesses cited in AI search engines?",
    "a": "Generative Engine Optimization (GEO) is the technical and semantic practice of structuring digital assets, knowledge graphs, and brand authority so AI engines—including ChatGPT, Google AI Overviews, Perplexity, and Claude—cite and recommend your enterprise as a trusted primary source.",
    "blocks": [
      {
        "type": "p",
        "text": "Unlike standard search engines that match keywords to blue links, conversational AI models synthesize multi-source answers using Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG). Comptech positions your brand inside these AI answers through a three-pillar framework:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          {
            "title": "Entity Disambiguation & Schema",
            "text": "We build comprehensive JSON-LD knowledge graphs (Organization, TechArticle, sameAs) linked to authoritative nodes like Wikidata and Crunchbase, ensuring LLMs understand exactly what your company does and who it serves."
          },
          {
            "title": "Information Gain Capsules",
            "text": "We restructure your content into dense, authoritative, extractable data blocks (original benchmarks, structured tables, and quotable definitions) that RAG algorithms prioritize for direct citation."
          },
          {
            "title": "Multi-Platform Brand Syndication",
            "text": "We cultivate high-authority mentions across technical forums, digital PR networks, and trusted industry repositories that AI models use as ground-truth training and retrieval corpora."
          }
        ]
      }
    ]
  },
  {
    "q": "How does Generative Engine Optimization (GEO) differ from traditional SEO, and does my business still need both?",
    "a": "While traditional SEO optimizes for search engine ranking positions and organic clicks on search results pages, GEO optimizes for AI answer synthesis, brand citations, and direct recommendations across conversational models. Both work together: SEO provides foundational crawlability and domain authority, while GEO captures high-intent, zero-click conversational queries.",
    "blocks": [
      {
        "type": "table",
        "head": [
          "Strategy Dimension",
          "Traditional SEO",
          "Generative Engine Optimization (GEO)"
        ],
        "rows": [
          [
            "Primary Target Engines",
            "Google, Bing, Yahoo search crawlers",
            "ChatGPT, Perplexity, Google AI Overviews, Claude, Microsoft Copilot"
          ],
          [
            "Optimization Focus",
            "Keywords, backlinks, page titles, crawl depth",
            "Entity authority, knowledge graphs, information gain, semantic clarity"
          ],
          [
            "User Journey",
            "Search query → SERP list → Website click",
            "Prompt → Synthesized AI answer with embedded citations → Direct referral"
          ],
          [
            "Content Structure",
            "Long-form articles optimized for keyword density",
            "Modular data capsules, quotable definitions, and structured comparison tables"
          ],
          [
            "Primary Metric",
            "SERP Rankings, Organic Traffic, Click-Through Rate",
            "AI Citation Share of Voice (SOV), Prompt Recommendation Frequency, Referral Leads"
          ],
          [
            "Search Paradigm",
            "10 Blue links (Discovery mode)",
            "Zero-click synthesized answer (Decision mode)"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Why you need both: Traditional SEO ensures your technical foundation, indexing, and base organic visibility remain solid. GEO ensures that when potential buyers ask an AI engine \"What are the top enterprise IT providers?\", your brand is explicitly named, summarized, and recommended."
      }
    ]
  },
  {
    "q": "How does Comptech optimize brands for both Indian enterprise search and international markets (US, UK, UAE, Australia)?",
    "a": "Comptech deploys localized semantic entity frameworks and multi-region digital PR syndication to align with how regional LLM clusters retrieve information. In India, optimization emphasizes localized directory citations, regional authority benchmarks, and vernacular nuance; for global markets like North America, the UK, UAE, and Australia, we engineer topical authority nodes, international press graphs, and regulatory-compliant schema.",
    "blocks": [
      {
        "type": "list",
        "ordered": false,
        "items": [
          {
            "title": "For the Indian Domestic Market",
            "text": "We optimize for localized enterprise buying intent, integration with Indian digital infrastructure (e.g., GST-compliant B2B systems, local cloud zones, regional case studies), and high-authority Indian business publications that train domestic AI retrieval models."
          },
          {
            "title": "For Global & Cross-Border Markets (US, UK, UAE, Australia)",
            "text": "We build internationalized entity profiles using multi-region AboutPage and Service schema, multi-currency proof points, and syndicate thought leadership across global tech publications (e.g., Medium, Substack, industry portals, GitHub, global directories) indexed by foundational US/EU-based LLM crawlers."
          }
        ]
      }
    ]
  },
  {
    "q": "What technical infrastructure and Schema markup are required to make a website GEO-ready?",
    "a": "GEO readiness requires a structured semantic web foundation: nested JSON-LD schema (Organization, About, Mentions, SameAs linked to Wikidata/Crunchbase), flat crawl architectures, fast mobile rendering, and extractable information-dense content blocks designed for LLM token ingestion.",
    "blocks": [
      {
        "type": "p",
        "text": "Comptech’s technical GEO deployment covers four foundational layers:"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          {
            "title": "Nested Semantic JSON-LD",
            "text": "We deploy interconnected Schema graphs (Organization, Service, TechArticle, ItemPage, FAQPage) linking your brand identity to canonical public entities (sameAs properties pointing to Wikipedia, Wikidata, LinkedIn, and government registries)."
          },
          {
            "title": "Entity Disambiguation",
            "text": "Eliminating ambiguity across brand names, services, and proprietary products so generative models never confuse your offerings with competitors or generic industry terminology."
          },
          {
            "title": "Structured Information Gain",
            "text": "Formatting critical technical facts into compact tables, chronological changelogs, and definition blocks that LLMs can ingest and quote with minimal compute overhead."
          },
          {
            "title": "LLM Crawler Accessibility",
            "text": "Configuring robots.txt and server firewalls to allow verified AI scrapers (e.g., GPTBot, PerplexityBot, Google-Extended, ClaudeBot) to crawl content without triggering rate-limiting or security blocking."
          }
        ]
      }
    ]
  },
  {
    "q": "How do you measure GEO performance and track AI search visibility?",
    "a": "Unlike traditional rank tracking, GEO performance is measured through AI Citation Share of Voice (SOV), prompt sentiment benchmarking, referral traffic from conversational engines (Perplexity, ChatGPT, Copilot), and qualified multi-touch pipeline attribution.",
    "blocks": [
      {
        "type": "p",
        "text": "Comptech tracks GEO ROI across four concrete benchmarks:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          {
            "title": "AI Prompt Share of Voice (SOV)",
            "text": "Systematically querying model APIs across 50+ enterprise buyer prompts (e.g., \"Best IT infrastructure integrators in Delhi NCR / India\", \"Enterprise cloud migration experts\") to measure how often Comptech or your brand is cited."
          },
          {
            "title": "Citation Accuracy & Sentiment",
            "text": "Tracking whether generative engines mention your brand favorably, describe your offerings accurately, and provide active clickable citation links."
          },
          {
            "title": "Direct AI Referral Traffic",
            "text": "Analyzing GA4 and server logs for referral traffic coming from chatgpt.com, perplexity.ai, copilot.microsoft.com, and Google AI Overview clicks."
          },
          {
            "title": "Assisted Pipeline Conversions",
            "text": "Monitoring enterprise leads whose research journeys originated from conversational AI inquiries."
          }
        ]
      }
    ]
  },
  {
    "q": "How long does it take for a brand to appear in AI search answers through GEO?",
    "a": "Live-retrieval AI search engines (Perplexity, Google AI Overviews, ChatGPT Search) typically begin citing updated, schema-rich content within 4 to 8 weeks. Base-model training retention across foundational models generally takes 3 to 6 months as models re-index web corpuses and update parametric weights.",
    "blocks": [
      {
        "type": "p",
        "text": "The rollout follows three distinct phases:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          {
            "title": "Phase 1",
            "text": "Retrieval-Augmented Generation (RAG) Pickup (Weeks 4–8): As live search engines crawl your updated JSON-LD schema, entity definitions, and authoritative content, engines with real-time web access (Perplexity, ChatGPT Search, Bing Copilot) begin citing your pages in fresh queries."
          },
          {
            "title": "Phase 2",
            "text": "Entity Graph Consolidation (Weeks 8–16): Google’s Knowledge Graph and third-party entity databases index your brand relationships, leading to consistent mentions in Google AI Overviews and summarized business snapshots."
          },
          {
            "title": "Phase 3",
            "text": "Base Foundation Model Memory (Months 4–6+): As next-generation base models and fine-tuned checkpoints re-train on web-scale text, your brand becomes part of the model’s internal parametric weights, generating unprompted organic recommendations."
          }
        ]
      }
    ]
  }
];

export const AI_TRAINING_FAQS: FAQItem[] = [
  {
    "q": "What does Comptech’s enterprise AI training cover, and how is it different from generic online courses?",
    "a": "Unlike generic video tutorials or theoretical courses, Comptech Enterprises delivers hands-on, role-based corporate workshops tailored to your company's actual tools, data, and daily workflows. Teams don’t just learn prompt theory—they build custom AI agents, automated workflows, and reusable prompt libraries directly applicable to their jobs, backed by McKinsey-benchmarked 20% to 30% operational productivity gains."
  },
  {
    "q": "Do our teams need technical or coding backgrounds to attend AI training?",
    "a": "No. Over 70% of Comptech’s enterprise clients are non-technical businesses. We run distinct, role-specific learning tracks:",
    "blocks": [
      {
        "type": "list",
        "ordered": false,
        "items": [
          {
            "title": "Leadership & Executive Track",
            "text": "AI strategy, ROI evaluation, risk management, and governance."
          },
          {
            "title": "Non-Technical Business Teams (Sales, HR, Marketing, Operations, Finance)",
            "text": "Practical automation, research synthesis, advanced prompting, and meeting/reporting assistants using no-code tools."
          },
          {
            "title": "Technical & IT Teams",
            "text": "Custom AI agent development, API integrations, enterprise model fine-tuning, and local/VPC LLM deployments."
          }
        ]
      }
    ]
  },
  {
    "q": "How do you ensure company data security and prevent data leaks during AI training?",
    "a": "Data privacy is built into every workshop. We train your teams using private enterprise sandboxes with zero-data-retention (ZDR) architecture, ensuring your proprietary business data, financials, and client records are never used to train public AI models. We also help leadership draft corporate AI Acceptable Use Policies (AUP) to eliminate the risk of unmonitored \"Shadow AI.\""
  },
  {
    "q": "How are the workshops delivered for Indian and international clients, and what support is included?",
    "a": "Comptech provides flexible delivery modalities tailored to your team’s geography:",
    "blocks": [
      {
        "type": "list",
        "ordered": false,
        "items": [
          {
            "title": "India (On-Site)",
            "text": "Intensive 1-day or multi-day executive workshops and team bootcamps delivered at your corporate offices across Delhi NCR, Mumbai, Bengaluru, and pan-India."
          },
          {
            "title": "International (US, UK, UAE, Canada, Australia)",
            "text": "Live, instructor-led interactive virtual cohorts delivered across your local business time zones with hands-on breakout sandboxes."
          },
          {
            "title": "Post-Training Enablement",
            "text": "Every training includes 30 days of implementation support and adoption office hours to ensure teams successfully apply their new skills in daily production."
          }
        ]
      }
    ]
  }
];

export const AI_EMPLOYEES_FAQS: FAQItem[] = [
  {
    q: "What is an AI agent and how is it different from a chatbot?",
    a: "An AI agent is an autonomous software system that performs complete business tasks on its own, similar to a human employee following a job description. A chatbot only answers questions when someone types a message. An AI agent takes initiative, follows multi-step workflows, makes decisions based on your business rules, and integrates with your existing tools like CRMs, calendars, and communication platforms. Gartner predicts that by 2027, AI agents will autonomously handle 80% of common customer service interactions without human involvement. Comptech’s AI agents handle sales, social media, and meeting management end to end, not just question-and-answer.",
  },
  {
    q: "How does Comptech build and deploy custom AI agents for businesses?",
    a: "Comptech follows a 4-step process to build and deploy custom AI agents. First, we run a workflow audit to map out the exact tasks you want automated. Second, we design the AI agent around your business rules, data, and existing tools. Third, we integrate the agent with your platforms like Zoho, HubSpot, Salesforce, Google Workspace, Slack, or WhatsApp Business and test it with real scenarios. Fourth, we go live and provide ongoing support. Most AI agents are deployed within 30 days. Comptech has completed over 100 live deployments using this process. All agents run on private infrastructure with encrypted connections and role-based access controls. McKinsey reports that companies deploying AI automation see measurable ROI within 6 to 12 months of implementation.",
  },
  {
    q: "How much does an AI agent cost compared to hiring a human employee?",
    a: "AI agents typically cost 70 to 90% less than hiring a full-time human employee for the same tasks. A human sales development representative in the US costs $50,000 to $70,000 per year in salary alone. An AI sales agent handles the same lead qualification and outreach tasks for a fraction of that cost, works 24/7, and does not need benefits, training, or vacation time. According to IBM, businesses using AI automation save an average of $14.7 billion annually across operations. AI agents do not replace your entire team. They handle repetitive tasks so your human team focuses on strategy and relationships.",
  },
  {
    q: "How long does it take to deploy an AI agent?",
    a: "Most AI agents go live within 30 days. The process starts with a workflow audit to map the tasks you want automated. Then we build, integrate with your existing tools, and test with real scenarios before going live. Simpler deployments like a Meeting AI Agent can be ready in under two weeks. Comptech has completed over 100 live deployments with a 12-hour average support response time for any issues after launch. McKinsey reports that companies deploying AI automation see measurable ROI within 6 to 12 months of implementation.",
  },
  {
    q: "How do I know where to use AI in my business?",
    a: "Start by identifying tasks that are repetitive, rule-based, and time-consuming for your team. Common starting points include lead qualification, appointment scheduling, data entry, customer follow-ups, social media posting, meeting notes, and report generation. If a task follows a predictable pattern and takes your team hours every week, it is a strong candidate for AI automation. According to McKinsey, 60% of all occupations have at least 30% of activities that can be automated with current AI technology. Comptech’s free AI audit helps you find exactly these opportunities. Our engineers analyze your sales process, customer support, content operations, and internal tools, then deliver a clear action plan showing which tasks to automate first, estimated timelines, and expected ROI. After the audit, Comptech handles the full process: building custom AI agents for your workflows, integrating them with your existing tools, and providing ongoing support with a 12-hour response time. Over 70% of Comptech’s clients are non-tech companies that started with one audit and now run multiple AI agents across their operations.",
  },
];

export const CONTACT_FAQS: FAQItem[] = [
  {
    q: "How do I book an AI training workshop for my company?",
    a: "Fill out the booking form on the contact page with your name, email, company name, team size, and use case. The team reviews every request within 24 hours and schedules a discovery call. Most workshops can be scheduled within two weeks of initial contact.",
  },
  {
    q: "Where is Comptech Enterprises located?",
    a: "Comptech Enterprises is headquartered at 207, DDA-1, District Center, Janakpuri, New Delhi, India. Office hours are Monday through Saturday, 9:00 AM to 7:00 PM IST. Training and AI agent deployments are delivered across India, the UAE, Europe, and the US.",
  },
  {
    q: "How quickly does the Comptech team respond to inquiries?",
    a: "Most inquiries receive a response within 24 hours during business days. For AI agent deployment projects, the average support response time is 12 hours. Inquiries go directly to the AI solutions team, not a generic support queue.",
  },
  {
    q: "Can Comptech deliver AI training outside of Delhi or remotely?",
    a: "Yes. Comptech delivers AI training onsite anywhere in India and through live virtual workshops for distributed teams, with sessions delivered in Delhi, Mumbai, Bangalore, the UAE, Europe, and the US. Over 40% of training engagements are fully remote.",
  },
  {
    q: "What information should I prepare before contacting Comptech about an AI project?",
    a: "For AI training: team size, technical background, and learning goals. For AI agent deployment: tasks to automate and current tools used. For GEO: target keywords or topics. None of this is required to reach out.",
  },
];

export const CAREERS_FAQS: FAQItem[] = [
  {
    q: "What types of roles are available at Comptech Enterprises?",
    a: "Comptech Enterprises hires across multiple domains including AI solutions engineering, enterprise IT infrastructure, networking and cybersecurity, cloud architecture, sales and marketing, accounting, HR, and technical support. We work on projects ranging from deploying custom AI agents for businesses to managing IT infrastructure for large enterprises across India.",
  },
  {
    q: "Does Comptech Enterprises hire freshers or entry-level candidates?",
    a: "Yes. Comptech actively hires freshers and entry-level candidates across engineering, sales, and support roles. Fresh graduates get hands-on exposure to enterprise AI projects, IT infrastructure deployments, and real client work from their first month.",
  },
  {
    q: "What is the work culture like at Comptech Enterprises?",
    a: "Comptech is a stable, 30-year-old enterprise technology company based in New Delhi that combines the reliability of an established business with the energy of working on modern AI and cloud projects. Teams are small enough that your work has visible impact, but the company handles large-scale enterprise clients across India.",
  },
  {
    q: "How do I apply for a job at Comptech Enterprises?",
    a: "You can apply directly on the careers page by filling out the application form with your full name, email, preferred domain, and uploading your resume in PDF or Word format. Once submitted, the team reviews your application and reaches out when there is a matching opening.",
  },
  {
    q: "What skills are most in demand at Comptech Enterprises right now?",
    a: "As of 2026, the highest-demand skills include AI agent development, prompt engineering, cloud infrastructure (AWS, Azure, Google Cloud), enterprise networking, cybersecurity, and B2B sales for technology services. India's AI workforce demand is projected to grow by 45% through 2027 according to a NASSCOM and BCG joint report.",
  },
];

export const SOCIAL_MEDIA_FAQS: FAQItem[] = [
  {
    q: "Which AI agent is best for social media content creation in 2026?",
    a: "Custom AI agents outperform generic tools like Jasper and HubSpot. Companies using custom-trained AI agents see 3x higher engagement rates than those using generic tools. Comptech Enterprises builds custom Social Media AI Agents trained on your brand voice that generate platform-specific content for Instagram, LinkedIn, Facebook, and X.",
  },
  {
    q: "Can an AI agent automate Instagram DMs and act as a chatbot for my business?",
    a: "Yes. An AI-powered Instagram chatbot responds to story replies, product inquiries, and FAQs within seconds, 24/7. It integrates with Instagram's Messaging API and your CRM, logging and scoring every conversation. Businesses responding within 5 minutes are 10x more likely to convert leads, and AI agents achieve sub-minute response times.",
  },
  {
    q: "How do AI agents help run social media on autopilot without losing brand voice?",
    a: "An autopilot AI agent handles trend monitoring, content generation, scheduling, posting, and engagement without human intervention. It trains on your existing content and brand guidelines to maintain 100% on-brand voice consistency. Unlike scheduling tools like Hootsuite or Buffer, it handles the entire workflow from ideation to analytics with 5x faster publishing.",
  },
  {
    q: "What is the difference between free AI social media tools and a custom AI social media agent?",
    a: "Free tools like ChatGPT and Canva handle one task at a time and still require manual work. A custom AI agent connects to your social accounts and autonomously monitors trends, generates content, schedules, publishes, and responds to engagement. Custom agents from Comptech start at INR 25,000/month, cheaper than a full-time social media manager.",
  },
  {
    q: "Can an AI agent create Instagram Reels, LinkedIn posts, and manage multiple platforms at the same time?",
    a: "Yes. A multi-platform AI agent creates platform-optimized content for Instagram Reels, LinkedIn articles, Facebook, X, and more simultaneously. Instagram Reels get 2x more reach than static posts, and LinkedIn document posts get 3x more engagement than text-only. Comptech's agent manages all platforms with distinct strategies and multilingual support.",
  },
];

export const SALES_AGENT_FAQS: FAQItem[] = [
  {
    q: "How does an AI sales agent work for B2B lead qualification?",
    a: "A B2B AI sales agent automates the entire top-of-funnel process. It engages inbound leads instantly through WhatsApp and web chat, qualifies them in multi-turn conversations, scores against your ideal customer profile, enriches data, and syncs to your CRM. It responds in under 10 seconds, runs 24/7, and handles unlimited concurrent conversations.",
  },
  {
    q: "Can an AI sales agent handle outbound prospecting and follow-ups?",
    a: "Yes. An AI sales agent handles multi-channel outbound across WhatsApp, email, and web chat. It sends personalized outreach, handles replies and objections, and runs unlimited multi-touch follow-up sequences. Companies using AI outbound report an 85% lift in reply rates compared to manual outreach.",
  },
  {
    q: "Can an AI sales agent replace cold calling with conversational selling?",
    a: "An AI sales agent replaces cold calling's goal with conversational engagement over WhatsApp and web chat. Cold calling averages 2-3% connection rate. Conversational AI achieves 10x higher engagement by reaching prospects on platforms they already use, qualifying them, and booking meetings directly.",
  },
  {
    q: "How is a sales AI agent different from sales automation software like a CRM?",
    a: "A CRM organizes data and runs automation rules. A sales AI agent actively thinks, decides, and acts. It reads prospect messages, qualifies leads through real conversations, handles objections, and takes actions like booking meetings autonomously. Businesses using AI agents see 3x more qualified leads than automation software alone.",
  },
  {
    q: "What is a conversational AI agent and how does it help with sales and marketing?",
    a: "A conversational AI agent engages leads through natural multi-turn conversations across WhatsApp, web chat, and social media. It understands context, handles objections, and adapts responses. Businesses using conversational AI convert 3.5x more website visitors into qualified leads compared to traditional form capture.",
  },
];

export const INTERNATIONAL_FAQS: FAQItem[] = [
  {
    "q": "What is Comptech Enterprises, and how does it help international businesses adopt AI?",
    "a": "Comptech Enterprises is an enterprise AI integration firm that builds custom autonomous AI agents, enterprise RAG systems, and workflow automations to help mid-market businesses adopt AI within 30 days.",
    "blocks": [
      {
        "type": "p",
        "text": "Founded in 1996 with three decades of enterprise IT infrastructure expertise, Comptech acts as an embedded technical partner for companies that want to scale output without hiring massive engineering teams."
      },
      {
        "type": "p",
        "text": "We engineer tailored AI solutions for international enterprises across:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          {
            "title": "UK & Europe (London, Frankfurt, Paris)",
            "text": "Privacy-first workflow automations strictly compliant with the EU AI Act and UK GDPR."
          },
          {
            "title": "Dubai & UAE",
            "text": "Bilingual AI customer agents and trade automations aligned with the UAE National AI Strategy."
          },
          {
            "title": "Australia (Sydney, Melbourne)",
            "text": "Scalable sales, logistics, and operational agents operating across APAC timezones."
          }
        ]
      }
    ]
  },
  {
    "q": "Why do UK, European, and Australian businesses choose Comptech over local domestic AI agencies?",
    "a": "International companies partner with Comptech Enterprises to secure senior-level AI engineering at a 60% to 70% cost reduction compared to London or Sydney rates, deploying production-ready custom AI agents within 30 days backed by 30 years of enterprise IT infrastructure security.",
    "blocks": [
      {
        "type": "table",
        "head": [
          "Evaluation Criteria",
          "Local Domestic Agencies (UK / AU / EU)",
          "Comptech Enterprises"
        ],
        "rows": [
          [
            "Typical Rates",
            "£150–£250 / €180–€300 / $220–$350 AUD per hr",
            "Transparent, fixed-sprint pricing (60–70% savings)"
          ],
          [
            "Deployment Timeline",
            "3 to 6 months of consulting",
            "30 days from audit to production"
          ],
          [
            "Core Background",
            "Recently pivoted marketing agencies",
            "30 years in Enterprise IT & Infrastructure (est. 1996)"
          ],
          [
            "Working Overlap",
            "Local business hours",
            "4 to 6 hours daily live overlap with GMT, BST, AEST, GST"
          ],
          [
            "Code & Model IP",
            "Vendor lock-in risk",
            "100% Client Ownership of code, data, and models"
          ]
        ]
      }
    ]
  },
  {
    "q": "How does Comptech ensure data privacy, GDPR, and compliance when deploying AI for UK, European, and UAE companies?",
    "a": "Comptech operates under a strict zero-data-retention and zero-model-training policy, ensuring client data is never used to train external LLMs. All AI agents, custom RAG pipelines, and vector databases are deployed directly within the client’s own sovereign cloud infrastructure (e.g., AWS London/Frankfurt, Azure, or on-premise), ensuring 100% compliance with UK GDPR, EU GDPR, and the EU AI Act.",
    "blocks": [
      {
        "type": "list",
        "ordered": true,
        "items": [
          {
            "title": "Private Sovereign Hosting (Data Never Leaves Your Jurisdiction)",
            "text": "We do not host your business data on third-party shared servers. We engineer and deploy AI agents inside your designated virtual private cloud (VPC)—such as AWS London (eu-west-2), AWS Frankfurt (eu-central-1), Microsoft Azure UK/Germany, or your local data centers in Dubai or Sydney."
          },
          {
            "title": "Enterprise API Guardrails (Zero Training on Client Data)",
            "text": "We utilize enterprise-grade API endpoints with legally binding zero-data-retention agreements. Your proprietary customer interactions, contracts, and financial data are never logged or repurposed for AI model retraining."
          },
          {
            "title": "Role-Based Access Control (RBAC) & Deterministic Guardrails",
            "text": "Every agent is equipped with strict deterministic boundaries. If an agent encounters sensitive personally identifiable information (PII) or unauthorized data requests, automated masking protocols sanitize the input before processing."
          },
          {
            "title": "Complete Legal & IP Protection",
            "text": "All international engagements include standard international Non-Disclosure Agreements (NDAs), Data Processing Agreements (DPAs) compliant with the UK Data Protection Act and EU GDPR, and full transfer of all code and model intellectual property to the client."
          }
        ]
      }
    ]
  },
  {
    "q": "How does Comptech manage remote AI development, daily communication, and timezone differences for international clients?",
    "a": "Comptech operates with 4 to 6 hours of guaranteed daily live working overlap across London (GMT/BST), Dubai (GST), and Sydney/Melbourne (AEST), assigning every client a dedicated, English-fluent Technical Delivery Lead. We integrate directly into your existing Slack, Microsoft Teams, and Jira environments with daily asynchronous standups and weekly sprint demos.",
    "blocks": [
      {
        "type": "list",
        "ordered": false,
        "items": [
          {
            "title": "UK & Europe (London, Paris, Berlin)",
            "text": "4 to 5 hours of direct afternoon overlap (11:00 AM to 4:00 PM GMT). Perfect for daily standups, live sprint planning, and emergency debugging."
          },
          {
            "title": "Dubai & UAE (GST)",
            "text": "Full workday alignment. Dubai is only 1.5 hours behind New Delhi (IST), allowing virtually 100% real-time collaboration throughout the standard working day."
          },
          {
            "title": "Australia & APAC (Sydney, Melbourne)",
            "text": "3 to 4 hours of morning overlap + \"Follow-the-Sun\" speed. Tasks or feature requests submitted by Australian teams at 5:00 PM AEST are engineered, tested, and ready for review by 8:00 AM Sydney time the following morning."
          },
          {
            "title": "Zero Communication Silos",
            "text": "Our engineering team joins your private Slack or Microsoft Teams workspace with transparent progress tracked in Jira, ClickUp, or Linear, backed by a < 2-hour emergency response SLA for live production agents."
          }
        ]
      }
    ]
  },
  {
    "q": "Who owns the code, intellectual property, and trained models when an international business hires Comptech?",
    "a": "You own 100% of all intellectual property, source code, and trained models. Upon milestone completion, Comptech transfers complete ownership of all Git repositories, custom RAG vector embeddings, and architecture documentation to your company, with zero vendor lock-in and zero recurring platform royalties.",
    "blocks": [
      {
        "type": "list",
        "ordered": true,
        "items": [
          {
            "title": "Total Code & Repository Ownership",
            "text": "All development takes place directly inside your organization’s private GitHub, GitLab, or Bitbucket repositories. You hold the master administrative keys from Day 1."
          },
          {
            "title": "100% Data & Vector Model Sovereignty",
            "text": "All custom prompt pipelines, system instructions, and RAG vector databases built with your business knowledge belong exclusively to you. Comptech claims zero rights over your proprietary data."
          },
          {
            "title": "Comprehensive International NDAs & IP Assignment",
            "text": "Every contract includes legally binding Intellectual Property Assignment Clauses and bilateral Non-Disclosure Agreements (NDAs) enforceable under international commercial contract law."
          },
          {
            "title": "Strict Non-Compete & Ethical Boundaries",
            "text": "We never repurpose your proprietary workflows, agent logic, or trade secrets to build competing solutions for other companies in your industry or market."
          },
          {
            "title": "Complete Handover Documentation",
            "text": "If your in-house team ever takes over maintenance, we provide complete architectural documentation and video walkthroughs for seamless self-sufficiency."
          }
        ]
      }
    ]
  }
];

export const GEO_TEASER_FAQS: FAQItem[] = [
  {
    "q": "What is Generative Engine Optimization (GEO), and why does our business need it?",
    "a": "Generative Engine Optimization (GEO) is the strategy of structuring your enterprise’s digital footprint so conversational AI engines like ChatGPT, Perplexity, Google AI Overviews, and Microsoft Copilot recommend and cite your brand when potential buyers ask for industry solutions. While standard SEO focuses on search engine clicks, GEO secures your visibility inside zero-click, AI-generated answers.",
    "links": [
      {
        "label": "Explore our complete Enterprise Generative Engine Optimization (GEO) Services",
        "href": "/geo"
      },
      {
        "label": "Read our guide to GEO",
        "href": "/blog/what-is-geo"
      }
    ]
  },
  {
    "q": "Does Comptech optimize brands for international AI search engines outside India?",
    "a": "Yes. Comptech engineers dual-market GEO strategies tailored for both Indian domestic enterprises and international markets across North America (US), the UK, the UAE, and Australia. We adapt your entity architecture, digital PR syndication, and schema markup to align with the specific retrieval models and localized corpora used by global LLMs.",
    "links": [
      {
        "label": "Learn how our Cross-Border GEO Architecture builds global topical authority for enterprise brands",
        "href": "/geo"
      }
    ]
  }
];

export const AI_CONSULTING_FAQS: FAQItem[] = [
  {
    "q": "What does an AI consultant do, and how do they help businesses implement artificial intelligence?",
    "a": "An AI consultant evaluates a company’s operational workflows to identify high-ROI automation opportunities, designs custom artificial intelligence architectures, and deploys secure AI agents—ensuring data privacy, compliance, and measured productivity gains without the overhead of hiring an internal research team.",
    "blocks": [
      {
        "type": "p",
        "text": "Core Deliverables of an Enterprise AI Consulting Engagement:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          {
            "title": "Phase 1",
            "text": "AI Feasibility & Readiness Audit: Auditing data infrastructure, legacy software compatibility, and identifying immediate automation quick wins."
          },
          {
            "title": "Phase 2",
            "text": "Architecture & Model Selection: Evaluating whether fine-tuned open-source models (Llama, Mistral) or enterprise APIs (Claude, OpenAI) best fit latency, cost, and security requirements."
          },
          {
            "title": "Phase 3",
            "text": "Secure Agentic Implementation: Developing and integrating autonomous AI workflows into existing CRMs, ERPs, and databases."
          },
          {
            "title": "Phase 4",
            "text": "Governance & Employee Enablement: Establishing corporate AI Acceptable Use Policies (AUP) and training internal staff on prompt engineering and oversight."
          }
        ]
      }
    ]
  },
  {
    "q": "How much does an AI consultant cost, and what are the typical pricing structures?",
    "a": "An AI consultant typically costs between $75 to $250 per hour, while fixed-scope Proof-of-Concepts (PoCs) range from $4,000 to $15,000. Full enterprise AI implementation retainers average $3,500 to $12,000 per month, depending on architecture complexity, data security tier, and integration requirements.",
    "blocks": [
      {
        "type": "p",
        "text": "Typical AI Consulting Engagement Structures:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          {
            "title": "AI Readiness Audit ($1,500 – $3,500, One-time)",
            "text": "Best for businesses exploring initial adoption. Includes feasibility report, ROI roadmap, and tech stack audit."
          },
          {
            "title": "Fixed-Scope PoC ($4,000 – $15,000, 3–6 Weeks)",
            "text": "Validating a specific agent or workflow with a working prototype tested on client data."
          },
          {
            "title": "Monthly Advisory / Fractional CAIO ($3,000 – $8,000 / month)",
            "text": "Ongoing strategic guidance, weekly steering, architecture reviews, and policy design."
          },
          {
            "title": "End-to-End Enterprise Deployment ($15,000 – $60,000+)",
            "text": "Full workflow overhaul, multi-agent pipelines, private VPC deployment, and ongoing AMC support."
          }
        ]
      }
    ]
  },
  {
    "q": "When should a business hire an AI consultant instead of recruiting a full-time in-house AI engineer?",
    "a": "Businesses should hire an AI consultant when they need rapid proof-of-concept validation, strategic technology roadmap design, and custom deployment within weeks without committing to $180,000+ annual in-house engineering salaries and long hiring cycles.",
    "blocks": [
      {
        "type": "p",
        "text": "Key Differences Between an AI Consultant and an In-House Engineer:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          {
            "title": "Time-to-Deployment",
            "text": "AI consultants begin prototyping in 1 to 3 weeks, compared to 2 to 4 months for in-house hiring and onboarding."
          },
          {
            "title": "Cost Commitment",
            "text": "Flexible project-based or monthly retainer pricing versus $150k–$220k/year fixed salary plus benefits and compute costs."
          },
          {
            "title": "Skill Breadth",
            "text": "Consulting teams offer multi-disciplinary expertise (agentic workflows, RAG, compliance, security) rather than a single specialized hire."
          },
          {
            "title": "Infrastructure Security",
            "text": "Supported by Comptech’s 30-year IT infrastructure background to secure servers, network boundaries, and private VPCs."
          }
        ]
      }
    ]
  },
  {
    "q": "How do AI consultants protect proprietary enterprise data and prevent intellectual property leaks?",
    "a": "Enterprise AI consultants enforce Zero Data Retention (ZDR) API contracts, deploy open-source models within isolated Virtual Private Clouds (VPC) or on-premise hardware, and implement strict role-based access controls (RBAC) to ensure client data is never used to train public foundation models.",
    "blocks": [
      {
        "type": "p",
        "text": "Comptech’s 4-Tier Security Protocol:"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          {
            "title": "Zero-Training Guarantee",
            "text": "Configuring enterprise API endpoints where vendor data logging and model training are programmatically disabled."
          },
          {
            "title": "Private VPC & On-Premise Sandboxing",
            "text": "Hosting local Large Language Models (LLMs) inside private corporate infrastructure for sensitive financial, healthcare, and defense clients."
          },
          {
            "title": "Data Anonymization & PII Masking",
            "text": "Automated pre-processing scrubbers remove personally identifiable information before prompts reach an inference engine."
          },
          {
            "title": "Complete IP Ownership",
            "text": "All custom agent code, proprietary prompts, and vector database embeddings remain 100% owned by the client."
          }
        ]
      }
    ]
  },
  {
    "q": "Can small and mid-sized businesses (SMBs) benefit from AI consulting, or is it only for large enterprises?",
    "a": "Small and mid-sized businesses gain significant ROI from AI consulting by deploying lightweight, autonomous agents that eliminate repetitive manual data entry, automate lead qualification, and streamline customer support without increasing payroll headcount.",
    "blocks": [
      {
        "type": "p",
        "text": "High-ROI Entry Points for Mid-Sized Businesses:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          {
            "title": "Autonomous Document Processing",
            "text": "Extracting invoices, purchase orders, and contracts into accounting systems in seconds."
          },
          {
            "title": "24/7 Intelligent Customer Operations",
            "text": "Tier-1 support agents that resolve 60–70% of routine inquiries directly from internal knowledge bases."
          },
          {
            "title": "Internal Knowledge Copilots",
            "text": "Secure search tools enabling employees to query decades of company SOPs, manuals, and technical documents instantly."
          }
        ]
      }
    ]
  }
];

export const WHITE_LABEL_FAQS: FAQItem[] = [
  {
    "q": "What is white-label software and AI agent deployment?",
    "a": "White-label AI deployment allows marketing agencies, IT consultants, and MSPs to sell proprietary AI agents and enterprise software under their own brand, custom domain, and billing structure. Comptech handles the underlying LLM orchestration, model hosting, infrastructure security, and continuous updates while remaining 100% invisible to your end clients.",
    "blocks": [
      {
        "type": "p",
        "text": "Key White-Label Deliverables:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          {
            "title": "Custom Domain & UI",
            "text": "Complete CNAME mapping (e.g., ai.youragency.com) with your agency's logo, color palette, and favicon."
          },
          {
            "title": "Unbranded Architecture",
            "text": "Zero vendor watermarks across client portals, email notifications, system prompts, and documentation."
          },
          {
            "title": "Multi-Tenant Administration",
            "text": "A centralized partner console to provision client workspaces, allocate token quotas, and configure role-based access."
          },
          {
            "title": "Retained Client Ownership",
            "text": "You own the client relationship, billing contract, and customer data with no direct provider intervention."
          }
        ]
      }
    ]
  },
  {
    "q": "What types of software and AI agents can agencies whitelabel through Comptech?",
    "a": "Agencies can whitelabel fully autonomous, task-oriented AI agents built on modern RAG pipelines and custom API tools. Comptech provides pre-architected, production-ready agent frameworks tailored for high-demand business workflows across multiple communication channels.",
    "blocks": [
      {
        "type": "p",
        "text": "Available White-Label Agent Solutions:"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          {
            "title": "Omnichannel Customer Support Agents",
            "text": "24/7 web-chat and WhatsApp Business bots trained on client documentation to resolve tier-1 queries and schedule appointments."
          },
          {
            "title": "Voice & Telephony Agents",
            "text": "Low-latency AI calling agents integrated with Twilio and SIP trunks for inbound qualification, cold outreach, and booking confirmations."
          },
          {
            "title": "Document Intelligence & OCR Agents",
            "text": "Automated workflows that ingest, classify, and extract structured data from invoices, contracts, and financial PDFs."
          },
          {
            "title": "Autonomous CRM & ERP Copilots",
            "text": "Agentic systems connected to HubSpot, Salesforce, or Zoho that trigger database updates, send quotes, and manage pipelines."
          },
          {
            "title": "Internal Enterprise Knowledge Bases",
            "text": "Secure, air-gapped search and chat portals for company policies, technical manuals, and SOPs."
          }
        ]
      }
    ]
  },
  {
    "q": "How does white-label pricing work, and what profit margins can resellers achieve?",
    "a": "Comptech operates on a predictable wholesale model (base platform subscription plus direct token/server utilization), allowing agency partners to price client retainers independently. Most white-label partners achieve gross profit margins between 50% and 75% on recurring client contracts.",
    "blocks": [
      {
        "type": "p",
        "text": "Agency Margin Structure Comparison:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          {
            "title": "Wholesale Partner Cost",
            "text": "$300 to $800 / month (or ₹25,000 to ₹65,000/mo) for multi-tenant infrastructure + metered LLM tokens at cost."
          },
          {
            "title": "Typical Client Retail Pricing",
            "text": "$1,200 to $3,500 / month (or ₹80,000 to ₹2,50,000/mo) per enterprise client for managed AI agent operations."
          },
          {
            "title": "Reseller Margin Potential",
            "text": "50% to 75%+ recurring margin per account."
          },
          {
            "title": "Token Billing Options",
            "text": "Pass through API costs directly to the client's OpenAI/Anthropic keys or charge bundled usage credits with a built-in markup."
          }
        ]
      }
    ]
  },
  {
    "q": "How is client data isolated and protected in a multi-tenant white-label setup?",
    "a": "Comptech implements strict logical and cryptographic multi-tenancy to guarantee zero data leakage between different agency clients. Every client organization operates within an isolated vector database namespace and virtual private cloud (VPC), backed by enterprise Zero Data Retention (ZDR) agreements.",
    "blocks": [
      {
        "type": "p",
        "text": "Data Governance Specifications:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          {
            "title": "Database Isolation",
            "text": "Strict tenant-level partitioning using PostgreSQL Row-Level Security (RLS) and isolated vector index namespaces (Pinecone/Milvus/Qdrant)."
          },
          {
            "title": "Zero Model Training (ZDR)",
            "text": "Commercial enterprise API endpoints guarantee that proprietary client prompts, embeddings, and uploads are never used to train foundational LLMs."
          },
          {
            "title": "Compliance & Encryption",
            "text": "Data encrypted with AES-256 at rest and TLS 1.3 in transit, fully compliant with SOC 2 Type II, GDPR, and ISO 27001 standards."
          },
          {
            "title": "Custom VPC / On-Premise Options",
            "text": "Enterprise agency clients with regulated accounts can opt for dedicated AWS/Azure instances or local server deployments."
          }
        ]
      }
    ]
  },
  {
    "q": "How quickly can an agency launch their own branded AI agent platform?",
    "a": "Agencies can deploy their fully branded, custom-domain AI platform within 7 to 14 business days, eliminating the 9+ months of R&D and high capital expenditure required to build an internal AI engineering department.",
    "blocks": [
      {
        "type": "p",
        "text": "Deployment Timeline:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          {
            "title": "Days 1–3 (Branding & Tenant Provisioning)",
            "text": "DNS configuration, custom domain SSL verification, white-label UI theming, and partner dashboard setup."
          },
          {
            "title": "Days 4–7 (Agent Configuration & Workflow Testing)",
            "text": "Connecting client data sources, tuning guardrails, configuring WhatsApp/SIP credentials, and testing API integrations."
          },
          {
            "title": "Days 8–10 (Security Audit & Staff Enablement)",
            "text": "Role-based permission verification, admin training, and hand-off of unbranded client onboarding collateral."
          },
          {
            "title": "Days 11–14 (Live Client Rollout)",
            "text": "Pilot testing and official public launch under your agency's brand."
          }
        ]
      }
    ]
  }
];

/** Grouped questions shown on /faq. `schema: false` keeps a group out of the FAQPage JSON-LD. */
export const FAQ_PAGE_GROUPS: { id: string; title: string; items: FAQItem[]; schema?: boolean }[] = [
  { id: "international", title: "AI for International Businesses", items: INTERNATIONAL_FAQS },
  { id: "geo", title: "AI Adoption & Generative Engine Optimization (GEO)", items: GEO_TEASER_FAQS, schema: false },
  { id: "consulting", title: "AI Consulting & Enterprise Strategy", items: AI_CONSULTING_FAQS },
  { id: "white-label", title: "Software & AI Agent Whitelabelling Solutions", items: WHITE_LABEL_FAQS },
];

export function faqJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: faqAnswerText(item) },
    })),
  };
}
