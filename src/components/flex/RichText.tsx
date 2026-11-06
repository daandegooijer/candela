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
      loading: "lazy",
      srcset: [400, 800, 1200, 1600],
      sizes: ["(max-width: 600px) 100vw", "50vw"],
      filters: {
        format: "webp",
        quality: 80,
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
