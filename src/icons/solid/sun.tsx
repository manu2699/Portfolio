import type { ComponentProps } from "solid-js";
import { createSignal, onMount } from "solid-js";
import { Motion } from "solid-motionone";

export interface SunIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface SunIconProps extends ComponentProps<"div"> {
  size?: number;
  strokeColor?: string;
  onMouseEnter?: (e: MouseEvent) => void;
  onMouseLeave?: (e: MouseEvent) => void;
}

const pathDs = [
  "M12 2v2",
  "m19.07 4.93-1.41 1.41",
  "M20 12h2",
  "m17.66 17.66 1.41 1.41",
  "M12 20v2",
  "m6.34 17.66-1.41 1.41",
  "M2 12h2",
  "m4.93 4.93 1.41 1.41",
];

export const SunIcon = (props: SunIconProps) => {
  const [animating, setAnimating] = createSignal(false);
  let isControlled = false;

  const startAnimation = () => setAnimating(true);
  const stopAnimation = () => setAnimating(false);

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

  onMount(() => {
    startAnimation();
  });

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 28}
        height={props.size || 28}
        viewBox="0 0 24 24"
        fill="none"
        stroke={props.strokeColor || "currentColor"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        {pathDs.map((d, index) => {
          return (
            <Motion.path
              d={d}
              initial={{ opacity: 1 }}
              animate={{ opacity: animating() ? [0, 1] : 1 }}
              transition={
                animating()
                  ? { duration: 0.3, delay: index * 0.1 }
                  : { duration: 0.1 }
              }
              style={{ stroke: props.strokeColor || "currentColor" }}
            />
          );
        })}
      </svg>
    </div>
  );
};
