import { createSignal, onMount, Show } from "solid-js";

import MapLight from "@/assets/map_light.png";
import MapDark from "@/assets/map_dark.png";

export const LocationCard = () => {
  const [theme, setTheme] = createSignal("light");

  onMount(() => {
    const locallySavedTheme = localStorage.getItem("theme");
    if (locallySavedTheme) {
      setTheme(locallySavedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }

    const handleThemeChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ theme: string }>;
      setTheme(customEvent.detail.theme);
    };

    document.addEventListener("themeChange", handleThemeChange);

    return () => {
      document.removeEventListener("themeChange", handleThemeChange);
    };
  });

  return (
    <div class="card p-0">
      <div class="w-full h-full relative">
        <Show
          when={theme() === "dark"}
          fallback={
            <img
              src={MapLight.src}
              alt="Map of Chennai"
              class="w-full h-full rounded-none object-cover"
            />
          }
        >
          <img
            src={MapDark.src}
            alt="Map of Chennai"
            class="w-full h-full rounded-none object-cover"
          />
        </Show>
        <p class="absolute bottom-4 left-0 right-0 text-center text-sm">
          Chennai, India
        </p>
      </div>
    </div>
  );
};
