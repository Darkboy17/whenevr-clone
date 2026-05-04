import type { BlogPost } from "./types";

/**
 * Static blog content for the landing page.
 *
 * Featured posts are rendered with a larger desktop layout while still
 * matching the standard card styling below 1200px.
 */
export const posts: BlogPost[] = [
    {
        category: "Branding",
        title: "Why Most Startups Keep Getting Design Wrong",
        excerpt:
            "Many teams move fast on product but fall behind on design. This post breaks down why that happens, how it holds you back, and what to do instead if you want to stay clear and competitive.",
        href: "/blog/startup-design-struggles",
        mobileExcerpt:
            "A quick look at why design slows teams down and how to turn it into a strength.",
        image: "https://framerusercontent.com/images/ueqZoCFRDc46Zk64JejcJN460.png",
        featured: true,
    },
    {
        category: "Operations",
        title: "How to Get More Done Without Hiring a Full Design Team",
        excerpt:
            "Lean teams are using design subscriptions to stay fast without hiring.",
        href: "/blog/lean-design-teams",
        image: "https://framerusercontent.com/images/A2Jpv443KkrqGb6fQMCtPKhklI.png",
    },
    {
        category: "Workflow",
        title: "What Working With a Design Subscription Actually Looks Like",
        excerpt:
            "A behind the scenes look at how founders use design subscriptions to move faster.",
        href: "/blog/design-subscription-workflow",
        image: "https://framerusercontent.com/images/mMGyaOXjCOlqMFzBYOOC6xcyeR0.png",
    },
    {
        category: "Growth",
        title: "The Real Cost of Bad Design (It's Not What You Think)",
        excerpt:
            "Poor design slows down decisions clutters your message and stalls growth.",
        href: "/blog/cost-of-bad-design",
        image: "https://framerusercontent.com/images/XqWtWOfsLoqWpqyf7St5rHsB2p4.png",
    },
];