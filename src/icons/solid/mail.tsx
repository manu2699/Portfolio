import type { ComponentProps } from "solid-js";
import { createSignal, onMount } from "solid-js";
import { Motion } from "solid-motionone";

interface MailIconProps extends ComponentProps<"div"> {
  size?: number;
}

export const MailIcon = (props: MailIconProps) => {
  const size = props.size ?? 24;
  const [hover, setHover] = createSignal(false);

  // Opening animation states
  const bodyNormal = { opacity: 1, pathLength: 1, scale: 1 };
  const bodyAnimate = { opacity: [0, 1], pathLength: [0, 1], scale: [0.98, 1] };

  const flapClosed = { rotate: 0 };
  const flapOpen = { rotate: -35 }; // tilt flap upward; adjust as preferred

  // Kick off open-on-load once hydrated
  onMount(() => setHover(true));

  return (
    <div
      class={props.class}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ width: `${size}px`, height: `${size}px` }}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        {/* Envelope body (draw/pop) */}
        <Motion.rect
          x="2"
          y="4"
          width="20"
          height="16"
          rx="2"
          initial={bodyNormal}
          animate={hover() ? bodyAnimate : bodyNormal}
          transition={hover() ? { duration: 0.5 } : { duration: 0.3 }}
        />

        {/* Flap: rotate around top edge center */}
        {/* Use transform-box: fill-box and transform-origin so rotation pivots at the flap hinge */}
        <Motion.g
          style={{ transformBox: "fill-box" }}
          transform-origin="12px 7px"
          animate={hover() ? flapOpen : flapClosed}
          transition={
            hover()
              ? { duration: 0.45, easing: "ease-in-out" }
              : { duration: 0.3 }
          }
        >
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
        </Motion.g>
      </svg>
    </div>
  );
};
