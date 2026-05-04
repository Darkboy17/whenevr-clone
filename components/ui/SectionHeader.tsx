type Props = {
  eyebrow: string;
  title: string;
};

/**
 * SectionHeader
 *
 * A reusable section header component used across landing page sections.
 *
 * Structure:
 * - Eyebrow (small label above the title)
 * - Title (main heading)
 *
 * Responsibilities:
 * - enforce consistent spacing and alignment for section headers
 * - standardize typography across sections
 *
 * Notes:
 * - centered layout by default (common for marketing sections)
 * - relies on external utility classes (`mono-label`, `heading-lg`)
 *   for typography styling
 */
export default function SectionHeader({ eyebrow, title }: Props) {
  return (
    <div className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
      {/**
       * Eyebrow label:
       * - typically used for small context labels (e.g. "Features", "Pricing")
       */}
      <p className="mono-label mb-4">{eyebrow}</p>

      {/**
       * Main section title:
       * - constrained width for readability
       * - uses shared heading styles
       */}
      <h2 className="heading-lg mx-auto max-w-4xl">{title}</h2>
    </div>
  );
}