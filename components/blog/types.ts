/**
 * Blog post shape used by the Blog section.
 *
 * `mobileExcerpt` allows the featured card to use shorter copy on smaller
 * screens without changing the full desktop excerpt.
 */
export type BlogPost = {
    category: string;
    title: string;
    excerpt: string;
    mobileExcerpt?: string;
    href: string;
    image: string;
    featured?: boolean;
};