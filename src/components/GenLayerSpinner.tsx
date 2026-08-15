import { cn } from "@/lib/utils";

type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";

const sizeMap: Record<SpinnerSize, number> = {
  xs: 16,
  sm: 24,
  md: 40,
  lg: 64,
  xl: 112,
};

export interface GenLayerSpinnerProps {
  /** Rendered pixel size. Defaults to "md" (40px). */
  size?: SpinnerSize | number;
  /** Accessible label; set to null for purely decorative usage. */
  label?: string | null;
  /** Speed multiplier for the whole loop. 1 = 1.6s base cycle. */
  speed?: number;
  className?: string;
}

/**
 * GenLayer consensus spinner.
 *
 * Identity: three validator nodes orbit an intelligent-contract core.
 * A sweep arc travels the ring (the proposal), each node lights as it is
 * reached (the votes), and the core pulses once per full round (finality).
 * Pure SVG + CSS transforms — no JS timers, GPU-friendly, loops seamlessly.
 */
export function GenLayerSpinner({
  size = "md",
  label = "Loading",
  speed = 1,
  className,
}: GenLayerSpinnerProps) {
  const px = typeof size === "number" ? size : sizeMap[size];
  const duration = `${(1.6 / speed).toFixed(3)}s`;

  return (
    <span
      className={cn("gl-spinner", className)}
      style={{ width: px, height: px, ["--gl-dur" as string]: duration }}
      role={label ? "status" : undefined}
      aria-label={label ?? undefined}
      aria-hidden={label ? undefined : true}
    >
      <svg viewBox="0 0 48 48" width={px} height={px} fill="none">
        {/* track */}
        <circle cx="24" cy="24" r="17" className="gl-spinner__track" strokeWidth="2.5" />

        {/* consensus sweep */}
        <g className="gl-spinner__sweep">
          <circle
            cx="24"
            cy="24"
            r="17"
            className="gl-spinner__arc"
            strokeWidth="2.5"
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray="26 74"
          />
        </g>

        {/* validator nodes on the ring, 120° apart */}
        <g className="gl-spinner__nodes">
          <circle cx="24" cy="7" r="3.4" className="gl-spinner__node gl-spinner__node--1" />
          <circle cx="38.72" cy="32.5" r="3.4" className="gl-spinner__node gl-spinner__node--2" />
          <circle cx="9.28" cy="32.5" r="3.4" className="gl-spinner__node gl-spinner__node--3" />
        </g>

        {/* intelligent-contract core: GenLayer chevron mark */}
        <g className="gl-spinner__core">
          <path
            d="M24 14.2 L33 29.8 H15 Z"
            className="gl-spinner__core-shape"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </span>
  );
}

export default GenLayerSpinner;
