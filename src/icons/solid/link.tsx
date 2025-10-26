import type { ComponentProps } from "solid-js";
import { createSignal, onMount } from "solid-js";
import { Motion } from "solid-motionone";

interface ExternalLinkIconProps extends ComponentProps<"div"> {
  size?: number;
  strokeColor?: string;
}

export const ExternalLinkIcon = (props: ExternalLinkIconProps) => {
  const [isAnimating, setIsAnimating] = createSignal(false);
  let isControlled = false;
  const size = props.size ?? 24;

  const startAnimation = () => setIsAnimating(true);
  const stopAnimation = () => setIsAnimating(false);

  onMount(() => {
    startAnimation();
  });

  const handleMouseEnter = (e: MouseEvent) => {
    if (!isControlled) {
      startAnimation();
    }
  };

  const handleMouseLeave = (e: MouseEvent) => {
    if (!isControlled) {
      stopAnimation();
    }
  };

  return (
    <div
      class={props.class}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: `${size}px`, height: `${size}px` }}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        stroke={props.strokeColor || "currentColor"}
      >
        {/* Box */}
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <Motion.g
          transform-origin="21px 3px"
          animate={
            isAnimating()
              ? { x: [0, 2, 0], y: [0, -2, 0], rotate: [0, -5, 0] }
              : { x: 0, y: 0, rotate: 0 }
          }
          transition={
            isAnimating()
              ? { duration: 0.5, easing: "ease-in-out" }
              : { duration: 0.25, easing: "ease-in-out" }
          }
        >
          {/* Top bar */}
          <path d="M15 3h6v6" />
          {/* Arrow shaft */}
          <path d="M10 14 21 3" />
          <path d="M21 7V3h-4" />
        </Motion.g>
      </svg>
    </div>
  );
};
