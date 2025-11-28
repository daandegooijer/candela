import { richTextResolver } from "@storyblok/richtext";

export default function RichText({
  content,
  className,
}: {
  content: any;
  className?: string;
}) {
  if (!content) {
    return null;
  }

  // Convert inline images
  const html = richTextResolver({
    optimizeImages: {
      class: "img-responsive",
      loading: "lazy",
      width: 800,
      height: 600,
      srcset: [400, 800, 1200, 1600],
      sizes: ["(max-width: 400px) 100vw", "50vw"],
      filters: {
        format: "webp",
        quality: 10,
        grayscale: true,
        blur: 10,
        brightness: 10,
      },
    },
  }).render(content);

  if (!html) {
    return;
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}
