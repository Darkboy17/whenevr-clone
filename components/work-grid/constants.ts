import { ClientHeadingWord } from "./types";

export const clientPairs = [
    ["/whenevr-assets/clients/client-03.png", "/whenevr-assets/clients/client-04.png"],
    ["/whenevr-assets/clients/client-05.png", "/whenevr-assets/clients/client-06.png"],
    ["/whenevr-assets/clients/client-07.png", "/whenevr-assets/clients/client-08.png"],
    ["/whenevr-assets/clients/client-09.png", "/whenevr-assets/clients/client-09.png"],
    ["/whenevr-assets/clients/client-11.png", "/whenevr-assets/clients/client-12.png"],
    ["/whenevr-assets/clients/client-13.png", "/whenevr-assets/clients/client-13.png"],
    ["/whenevr-assets/clients/client-14.png", "/whenevr-assets/clients/client-14.png"],
    ["/whenevr-assets/clients/client-15.png", "/whenevr-assets/clients/client-15.png"],
    ["/whenevr-assets/clients/client-16.png", "/whenevr-assets/clients/client-16.png"],
    ["/whenevr-assets/clients/client-17.png", "/whenevr-assets/clients/client-17.png"],
    ["/whenevr-assets/clients/client-10.png", "/whenevr-assets/clients/client-10.png"],
    ["/whenevr-assets/clients/client-01.png", "/whenevr-assets/clients/client-02.png"],
] as const;

/**
 * Each arm is rotated by 15 degrees to create the circular client orbit.
 */
export const arms = clientPairs.map((images, index) => ({
    images,
    rotation: index * 15,
}));

/**
 * Heading words are split so each word can receive its own reveal delay.
 */
export const clientHeadingWords: ClientHeadingWord[] = [
    { text: "100+" },
    { text: "clients" },
    { text: "getting" },
    { text: "better", serif: true },
    { text: "design," },
    { text: "faster." },
] as const;

export const INITIAL_ROTATION = 18.6;
export const SCROLL_VELOCITY_MULTIPLIER = 0.0005;
export const ROTATION_FRICTION = 0.98;
export const MIN_ROTATION_VELOCITY = 0.01;