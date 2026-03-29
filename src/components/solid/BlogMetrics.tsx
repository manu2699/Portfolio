import { createSignal, onMount } from "solid-js";
import { HeartIcon } from "@/icons/solid/heart.tsx";
import { Motion } from "solid-motionone";
import { ViewIcon } from "@/icons/solid/view";

interface BlogMetricsProps {
  slug: string;
}

export const BlogMetrics = (props: BlogMetricsProps) => {
  const [views, setViews] = createSignal<number | null>(null);
  const [likes, setLikes] = createSignal<number | null>(null);
  const [isLiked, setIsLiked] = createSignal(false);

  const fetchMetrics = async () => {
    try {
      const res = await fetch(`/api/blog-metrics?slug=${props.slug}`);
      const data = await res.json();
      setViews(data.views);
      setLikes(data.likes);
    } catch (e) {
      console.error("Failed to fetch metrics", e);
    }
  };

  const incrementView = async () => {
    try {
      await fetch("/api/blog-metrics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: props.slug, type: "view" }),
      });
      fetchMetrics(); // Refresh data after increment
    } catch (e) {
      console.error("Failed to increment view", e);
    }
  };

  const handleLike = async () => {
    if (isLiked()) return; // Simple dedupe per session/local

    try {
      setIsLiked(true);
      setLikes((l) => (l !== null ? l + 1 : 1));
      
      const res = await fetch("/api/blog-metrics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: props.slug, type: "like" }),
      });
      if (res.ok) {
        localStorage.setItem(`liked_${props.slug}`, "true");
      }
    } catch (e) {
      console.error("Failed to send like", e);
    }
  };

  onMount(() => {
    if (localStorage.getItem(`liked_${props.slug}`)) {
      setIsLiked(true);
    }
    incrementView();
  });

  return (
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <ViewIcon size={24} />
        <span class="text font-medium">
          {views() === null ? "..." : views()}
        </span>
      </div>
      
      <div class="flex flex-col items-center group">
        <div class="flex items-center space-x-2">
          <HeartIcon size={24} isLiked={isLiked()} onClick={handleLike}/>
          <span class="text font-medium">
            {likes() === null ? "..." : likes()}
          </span>
        </div>
      </div>
    </div>
  );
};
