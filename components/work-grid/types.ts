
/**
 * Heading words are split so each word can receive its own reveal delay.
 * The `serif` property is used to apply a different font style to specific words.
 * This type is used in the `clientHeadingWords` array in `constants.ts` and the `ClientHeading` component.
 * The `text` property is required for all words, while `serif` is optional and defaults to `false` if not provided.
 */
export type ClientHeadingWord = {
    text: string;
    serif?: boolean;
};