
/**
 * @description Type definition for a testimonial.
 * @typedef {Object} Testimonial
 * @property {string} name - The name of the person giving the testimonial.
 * @property {string} role - The role or title of the person giving the testimonial.
 * @property {string} avatar - The URL of the avatar image of the person giving the testimonial.
 * @property {string} quote - The testimonial quote provided by the person.
 */
export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};