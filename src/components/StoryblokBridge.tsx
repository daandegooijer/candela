"use client";

/**
 * Storyblok Visual Editor Bridge
 * Loads the Storyblok JavaScript bridge for live editing in the visual editor
 */

export function StoryblokBridge() {
  // Only load bridge in development or when in preview mode
  if (typeof window !== "undefined") {
    // @ts-ignore
    if (!window.storyblokBridge) {
      const script = document.createElement("script");
      script.src = "https://app.storyblok.com/f/storyblok-v2-latest.js";
      script.async = true;
      script.onload = () => {
        // @ts-ignore
        window.storyblokInstance.reload();
      };
      document.head.appendChild(script);
    }
  }

  return null;
}
