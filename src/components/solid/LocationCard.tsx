import { createSignal, onMount, onCleanup, createEffect } from "solid-js";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const CHENNAI_CENTER: [number, number] = [80.2707, 13.0827];
const ZOOM_LEVEL = 12;

// OpenFreeMap styles
const MAP_STYLES = {
  light: "https://tiles.openfreemap.org/styles/bright",
  dark: "https://tiles.openfreemap.org/styles/dark",
};

export const LocationCard = () => {
  let mapContainer: HTMLDivElement | undefined;
  let map: maplibregl.Map | undefined;

  const [theme, setTheme] = createSignal("light");

  onMount(() => {
    // Get initial theme
    const locallySavedTheme = localStorage.getItem("theme");
    if (locallySavedTheme) {
      setTheme(locallySavedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }

    // Listen for theme changes
    const handleThemeChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ theme: string }>;
      setTheme(customEvent.detail.theme);
    };

    document.addEventListener("themeChange", handleThemeChange);

    // Initialize MapLibre GL map
    if (mapContainer) {
      map = new maplibregl.Map({
        container: mapContainer,
        style: theme() === "dark" ? MAP_STYLES.dark : MAP_STYLES.light,
        center: CHENNAI_CENTER,
        zoom: ZOOM_LEVEL,
        interactive: false,
        attributionControl: false,
      });

      const markerEl = document.createElement("div");
      markerEl.className = "location-marker";
      markerEl.innerHTML = `
        <div class="marker-ping"></div>
        <div class="marker-dot"></div>
      `;

      new maplibregl.Marker({ element: markerEl })
        .setLngLat(CHENNAI_CENTER)
        .addTo(map);
    }

    onCleanup(() => {
      document.removeEventListener("themeChange", handleThemeChange);
      if (map) {
        map.remove();
      }
    });
  });

  createEffect(() => {
    const currentTheme = theme();
    if (map) {
      const newStyle =
        currentTheme === "dark" ? MAP_STYLES.dark : MAP_STYLES.light;
      map.setStyle(newStyle);
    }
  });

  return (
    <div class="card p-0">
      <div class="w-full h-full relative overflow-hidden rounded-[var(--radius-lg)]">
        <div ref={mapContainer} class="w-full h-full min-h-[200px]" />
        <span class="absolute bottom-2 left-0 right-0 text-center text-sm backdrop-blur-md bg-background/50 mx-4 py-1 px-2 rounded-md">
          Chennai, India
        </span>
      </div>

      <style>{`
        .location-marker {
          position: relative;
          width: 20px;
          height: 20px;
        }
        
        .marker-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          background: var(--primary);
          border-radius: 50%;
          border: 2px solid var(--card);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        
        .marker-ping {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background: var(--primary);
          border-radius: 50%;
          opacity: 0.4;
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes ping {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.4;
          }
          75%, 100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }

        .maplibregl-canvas {
          border-radius: var(--radius-lg);
        }
      `}</style>
    </div>
  );
};
