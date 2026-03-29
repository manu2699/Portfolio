import type { ComponentProps } from "solid-js";

interface ViewIconProps extends ComponentProps<"div"> {
  size?: number;
}

export const ViewIcon = (props: ViewIconProps) => {
  const size = props.size ?? 24;


  return (
    <div
      class={props.class}
      style={{
        width: `${props.size || 28}px`,
        height: `${props.size || 28}px`,
        cursor: "pointer",
      }}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={"none"}
        stroke={"currentColor"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path
            d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"

          />
          <circle
            cx="12"
            cy="12"
            r="3"
          />
      </svg>
    </div>
  );
};


