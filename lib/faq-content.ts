/** Shared FAQ entries for the FAQ page and homepage preview */
export const globalFaqs = [
  {
    question: "What is Amar Club in simple terms?",
    answer:
      "Amar Club is referenced throughout this site as a modern online gaming brand. Here, we publish independent guides that explain navigation concepts, mobile access patterns, and feature vocabulary—without promising outcomes or account services.",
  },
  {
    question: "Is this the official Amar Club website?",
    answer:
      "No. This is an editorial resource. For official policies, promotions, and account support, you should rely on the operator’s verified channels and in-product help.",
  },
  {
    question: "Does this site offer Amar Club login or account access?",
    answer:
      "No. We do not provide login systems, authentication, or account handling. Our login guide explains common sign-in concepts so you can use official apps and websites more confidently.",
  },
  {
    question: "Where can I read about Amar Club mobile and app access?",
    answer:
      "Start with the App and Download guides, then explore the mobile-focused blog posts. They focus on layout habits, safe updating practices, and how to keep sessions tidy on smaller screens.",
  },
  {
    question: "How do you approach Amar Club bonus topics?",
    answer:
      "We explain how promotional language typically works at a high level and what to verify in official terms. We do not publish guaranteed bonus amounts or time-sensitive offer codes.",
  },
  {
    question: "Who is the content for?",
    answer:
      "Adults who want clear, calm explanations while researching online gaming platforms. If gambling is not legal in your region—or you are not of legal age—you should not use these guides to circumvent local rules.",
  },
  {
    question: "How often is the content updated?",
    answer:
      "We revise pages when product vocabulary or common user questions shift. Dates on blog posts reflect the last meaningful editorial pass.",
  },
  {
    question: "How can I contact you?",
    answer:
      "Use the Contact page to reach our editorial inbox. It is a static form for demonstration; replace endpoints if you connect email delivery in production.",
  },
  {
    question: "Do you collect personal data on this demo site?",
    answer:
      "Read the Privacy Policy for a plain-language overview. This build is frontend-only; any future analytics should be disclosed and configured responsibly.",
  },
  {
    question: "Can I share these guides?",
    answer:
      "Yes—sharing is welcome. Please link to the specific guide so readers always get the full context and disclaimers.",
  },
] as const;

export const homeFaqPreview = globalFaqs.slice(0, 4);

export const bonusFaqs = [
  {
    question: "What should I verify before participating in any promotion?",
    answer:
      "Check eligibility, expiry, wagering or playthrough language, game restrictions, and regional rules in the operator’s official terms. If anything is unclear, ask support before opting in.",
  },
  {
    question: "Why do bonus details change?",
    answer:
      "Operators adjust campaigns for compliance, seasonality, and risk. A guide can explain patterns, but only the official terms at the time you claim an offer are authoritative.",
  },
  {
    question: "How does Amar Club bonus language usually appear?",
    answer:
      "You will often see headings for welcome packages, reload cadence, and loyalty milestones. Treat numbers as examples until confirmed in the official cashier or promo center.",
  },
] as const;
