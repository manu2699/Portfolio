import type { ComponentProps } from "solid-js";
import { createSignal, onMount } from "solid-js";
import { Motion } from "solid-motionone";

export interface MoonIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface MoonIconProps extends ComponentProps<"div"> {
  size?: number;
  strokeColor?: string;
  onMouseEnter?: (e: MouseEvent) => void;
  onMouseLeave?: (e: MouseEvent) => void;
}

export const MoonIcon = (props: MoonIconProps) => {
  const [isAnimating, setIsAnimating] = createSignal(false);
  let isControlled = false;

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
      style={{
        width: `${props.size || 28}px`,
        height: `${props.size || 28}px`,
      }}
      {...props}
    >
      <Motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 28}
        height={props.size || 28}
        viewBox="0 0 24 24"
        fill="none"
        stroke={props.strokeColor || "currentColor"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        animate={
          isAnimating() ? { rotate: [0, -10, 10, -5, 5, 0] } : { rotate: 0 }
        }
        transition={
          isAnimating()
            ? { duration: 1.2, easing: "ease-in-out", repeat: Infinity }
            : { duration: 0.3, easing: "ease-in-out" }
        }
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </Motion.svg>
    </div>
  );
};
