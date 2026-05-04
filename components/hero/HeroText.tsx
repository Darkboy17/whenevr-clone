/**
 * Main hero copy.
 *
 * The headline markup is intentionally kept close to the original
 * so typography, spacing, and the registered symbol positioning remain unchanged.
 */
export default function HeroText() {
  return (
    <div
      data-framer-name="Text"
      className="relative z-[1] flex w-full flex-col items-start justify-center gap-6 overflow-visible"
    >
      <div className="w-full max-w-[290px] min-[810px]:max-w-[465px] min-[1200px]:max-w-[550px]">
        <h1 className="framer-text-features text-balance text-left text-[44px] font-semibold leading-[1.03] tracking-[-0.07em] text-black min-[810px]:text-wrap min-[810px]:text-[70px] min-[1200px]:text-[82px]">
          World-class design
          <span className="font-medium tracking-[-0.06em]"> </span>
          <span className="serif-italic tracking-[-0.08em]">whenevr</span>
          <span className="font-medium tracking-[-0.06em]"> </span>
          you need it.
        </h1>
      </div>

      <p className="framer-text-features w-full max-w-none text-balance text-left text-[20px] font-medium leading-[1.4] tracking-[-0.05em] text-[#7c7c7c] min-[810px]:max-w-[500px] min-[810px]:text-wrap min-[1200px]:max-w-[476px]">
        A monthly design subscription for startups, creators, and teams who need
        work done without the wait.
      </p>

      <p
        aria-hidden="true"
        className="framer-text-features absolute left-[287px] top-[44px] text-[24px] font-semibold leading-none text-black min-[810px]:left-[463px] min-[810px]:top-[84px] min-[1200px]:left-[537px] min-[1200px]:top-[94px]"
      >
        &reg;
      </p>
    </div>
  );
}