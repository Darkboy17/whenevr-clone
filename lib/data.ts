
/**
 * The services array lists the different types of design work that Whenevr offers. Each service is represented as a string, which allows us to easily display the services on the website and communicate the range of design capabilities that Whenevr provides to its customers.
 */
export const services = [
  "Social Graphics",
  "UX Design",
  "Pitch Decks",
  "Web Design",
  "Branding",
  "Blog Graphics",
  "Landing Pages",
  "Illustrations",
  "Product Design",
  "Email Design",
  "UI Design",
  "App Design",
  "Style Guides",
  "Icon Design",
  "Ad Creatives",
];


/**
 * Each feature is represented as a tuple of [title, description]. This allows us to easily map over the features and display them in a consistent format on the website.
 */
export const features = [
  ["Simple design queue", "Track tasks easily in Notion."],
  ["One price, always", "Flat monthly rate, no surprises."],
  ["Quick turnaround", "Most requests done in a few days."],
  ["High-quality every time", "Senior designer, nothing less."],
  ["You're in control", "Change or pause your plan anytime."],
  ["100 percent yours", "Custom work, fully owned by you."],
];


/**
 * Testimonials are structured as an array of objects, each containing the name, role, avatar URL, and quote from the customer. This format allows us to easily display testimonials in a consistent and visually appealing way on the website.
 */
export const testimonials = [
  {
    name: "Alexia Fran",
    role: "Marketing Lead, RelayOne",
    avatar: "/whenevr-assets/avatar-01.png",
    quote:
      "I've loved working with Whenevr. I didn't need to explain things twice. The design just showed up looking exactly how I pictured it.",
  },
  {
    name: "Eli Ramos",
    role: "Founder, Minos",
    avatar: "/whenevr-assets/avatar-02.png",
    quote:
      "Every request was handled quickly and nailed on the first pass. Genuinely the most efficient design experience I've had.",
  },
  {
    name: "Maya Kim",
    role: "Head of Product, Haptik",
    avatar: "/whenevr-assets/avatar-03.png",
    quote:
      "Clean process, great work, and no hand-holding required. It felt like having a senior designer on standby without the back-and-forth.",
  },
  {
    name: "Tina Zhang",
    role: "Creative Director, Octave",
    avatar: "/whenevr-assets/avatar-04.png",
    quote:
      "The quality of design is top-tier and the process is frictionless. Whenevr feels like cheating in the best way.",
  },
  {
    name: "Jared Cole",
    role: "Startup Founder, Nimbus Systems",
    avatar: "/whenevr-assets/avatar-05.png",
    quote:
      "No meetings, no delays, no drama. Just smart design delivered when we needed it. I can't recommend Whenevr enough.",
  },
];


/**
 * Work items are represented as an array of tuples, where each tuple contains the image URL and a brief description of the project. This structure allows us to easily display the work items in a consistent format on the website, showcasing the variety and quality of design work that Whenevr provides.
 */
export const workItems = [
  ["/whenevr-assets/work-01.jpeg", "Brand identity and launch visuals"],
  ["/whenevr-assets/work-02.jpeg", "Landing page art direction"],
  ["/whenevr-assets/work-03.jpeg", "Investor deck system"],
  ["/whenevr-assets/work-04.jpeg", "Product campaign imagery"],
  ["/whenevr-assets/work-05.jpeg", "Editorial social graphics"],
  ["/whenevr-assets/work-06.jpeg", "Interface concept set"],
  ["/whenevr-assets/work-07.jpeg", "Marketing site visual language"],
  ["/whenevr-assets/work-08.jpeg", "Founder-led launch assets"],
];


/**
 * FAQs are structured as an array of tuples, where each tuple contains a question and its corresponding answer. This format allows us to easily display the FAQs in a consistent and organized manner on the website, making it easy for visitors to find the information they need.
 */
export const faqs = [
  [
    "How many design requests can I submit?",
    "You can submit as many requests as you'd like. They'll be handled one at a time, in the order they're added to your Notion board.",
  ],
  [
    "What kind of design work is included?",
    "Most requests related to web, product, and marketing design are covered. That includes landing pages, UI design, Framer builds, brand assets, and more.",
  ],
  [
    "How fast will I receive my designs?",
    "Most tasks are completed in two to three business days. Larger or more complex requests may take a bit longer, but we'll always keep you updated.",
  ],
  [
    "Can I pause my subscription?",
    "Yes. If you're in between projects, you can pause at any time. You'll keep the remaining days of your billing cycle to use later.",
  ],
  [
    "What if I need development too?",
    "Whenevr is focused on design, but Framer and web build support can be added when needed.",
  ],
];
