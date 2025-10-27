import { createSignal, onMount, Show } from "solid-js";
// import { Motion } from 'solid-motionone';

import { MoonIcon, SunIcon } from "@/icons/solid";

export const ThemeToggle = () => {
  const [theme, setTheme] = createSignal("light");

  const updateTheme = (newTheme: "light" | "dark") => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    const event = new CustomEvent("themeChange", {
      detail: { theme: newTheme },
    });
    document.dispatchEvent(event);
  };

  onMount(() => {
    let initialTheme: "light" | "dark" = "light";
    const locallySavedTheme = localStorage.getItem("theme");
    if (
      locallySavedTheme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      initialTheme = "dark";
    }
    updateTheme(initialTheme);
  });

  const toggleTheme = () => {
    const newTheme = theme() === "light" ? "dark" : "light";
    updateTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      <Show
        when={theme() == "light"}
        fallback={
          <SunIcon
            strokeColor="var(--color-secondary)"
            size={20}
            class="hover:cursor-pointer"
          />
        }
      >
        <MoonIcon
          strokeColor="var(--color-secondary)"
          size={20}
          class="hover:cursor-pointer"
        />
      </Show>
    </button>
  );
};
