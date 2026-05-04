import type { Testimonial } from "./types";

/**
 * The number of dots to show in the testimonial slider.
 * This should ideally match the number of testimonials we have, but can be adjusted for design purposes.
 * If the number of testimonials exceeds this count, the slider will need to implement pagination or looping.
 * For now, we have 5 testimonials, so we'll set this to 5.
 */
export const DOT_COUNT = 5;

/**
 * The list of testimonials to display in the slider.
 * Each testimonial includes the person's name, role, avatar image URL, and their quote about the product/service.
 * This data can be fetched from an API in a real application, but for this static example, we're hardcoding it here.
 * Make sure to update the avatar URLs and quotes as needed to reflect real testimonials from your users or clients.
 * The structure of each testimonial should match the Testimonial type defined in types.ts for type safety.
 * If you want to add more testimonials, simply add more objects to this array, ensuring they follow the same structure.
 * Remember to also update the DOT_COUNT if you add more testimonials to ensure the slider displays correctly.
 */
export const testimonials: Testimonial[] = [
    {
        name: "Alexia Fran",
        role: "Marketing Lead, RelayOne",
        avatar: "/whenevr-assets/testimonials/testimonial-01.png",
        quote:
            "I've loved working with Whenevr. I didn't need to explain things twice. The design just showed up looking exactly how I pictured it.",
    },
    {
        name: "Eli Ramos",
        role: "Founder, Minos",
        avatar: "/whenevr-assets/testimonials/testimonial-02.png",
        quote:
            "Every request was handled quickly and nailed on the first pass. Genuinely the most efficient design experience I've had.",
    },
    {
        name: "Maya Kim",
        role: "Head of Product, Haptik",
        avatar: "/whenevr-assets/testimonials/testimonial-03.png",
        quote:
            "Clean process, great work, and no hand-holding required. It felt like having a senior designer on standby without the back-and-forth.",
    },
    {
        name: "Tina Zhang",
        role: "Creative Director, Octave",
        avatar: "/whenevr-assets/testimonials/testimonial-04.png",
        quote:
            "The quality of design is top-tier and the process is frictionless. Whenevr feels like cheating in the best way.",
    },
    {
        name: "Jared Cole",
        role: "Startup Founder, Nimbus Systems",
        avatar: "/whenevr-assets/testimonials/testimonial-05.png",
        quote:
            "No meetings, no delays, no drama. Just smart design delivered when we needed it. I can't recommend Whenevr enough.",
    },
];

export const quotePath =
    "M6.11121 23.0947C4.73755 21.6366 4 19.9999 4 17.3471C4 12.6811 7.27535 8.49821 12.0408 6.43091L13.231 8.26772C8.78405 10.6739 7.91491 13.7947 7.56752 15.7627C8.28351 15.3925 9.22077 15.2622 10.1396 15.3474C12.5454 15.5703 14.4416 17.5454 14.4416 19.9999C14.4416 22.5773 12.3522 24.6666 9.77488 24.6666C8.34413 24.6666 6.97595 24.0127 6.11121 23.0947ZM19.4445 23.0947C18.0709 21.6366 17.3333 19.9999 17.3333 17.3471C17.3333 12.6811 20.6087 8.49821 25.3741 6.43091L26.5644 8.26772C22.1173 10.6739 21.2483 13.7947 20.9008 15.7627C21.6168 15.3925 22.5541 15.2622 23.4729 15.3474C25.8788 15.5703 27.7749 17.5454 27.7749 19.9999C27.7749 22.5773 25.6856 24.6666 23.1083 24.6666C21.6775 24.6666 20.3093 24.0127 19.4445 23.0947Z";