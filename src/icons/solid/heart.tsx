import type { ComponentProps } from "solid-js";
import { Motion } from "solid-motionone";

interface HeartIconProps extends ComponentProps<"div"> {
  size?: number;
  isLiked?: boolean;
}

export const HeartIcon = (props: HeartIconProps) => {
  const size = props.size ?? 24;

  return (
    <div
      class={props.class}
      style={{ width: `${size}px`, height: `${size}px`, cursor: "pointer", overflow: "visible" }}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={props.isLiked ? "#ef4444" : "none"}
        stroke={props.isLiked ? "#ef4444" : "currentColor"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <Motion.path
          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
          animate={
            props.isLiked
              ? { scale: [1, 1.3, 1], fill: ["none", "#ef4444", "#ef4444"] }
              : { scale: 1 }
          }
          transition={{ duration: 0.3, easing: "ease-in-out" }}
        />
      </svg>
    </div>
  );
};
