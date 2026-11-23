import { richTextResolver, BlockTypes } from "@storyblok/richtext";

const IMG_FILTERS = "filters:quality(80):format(webp)";
const IMG_SRCSET_WIDTHS = [400, 800, 1200, 1600];
const IMG_SIZES = "(max-width: 600px) 100vw, 50vw";

function buildOptimizedImgAttrs(src: string) {
  return {
    src: `${src}/m/${IMG_FILTERS}`,
    srcset: IMG_SRCSET_WIDTHS.map(
      (w) => `${src}/m/${w}x0/${IMG_FILTERS} ${w}w`
    ).join(", "),
    sizes: IMG_SIZES,
    loading: "lazy",
  };
}

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

  // Convert inline images. An image's "Title" field doubling as a URL makes
  // the image itself clickable (editable in Storyblok's image picker).
  const html = richTextResolver({
    resolvers: {
      [BlockTypes.IMAGE]: (node: any, context: any) => {
        const { src, alt, title } = node.attrs || {};
        const isLink = title && /^https?:\/\//.test(title);
        const img = context.render("img", {
          alt,
          ...(isLink ? {} : { title }),
          ...buildOptimizedImgAttrs(src),
        });
        if (isLink) {
          return context.render(
            "a",
            { href: title, target: "_blank", rel: "noopener noreferrer" },
            img
          );
        }
        return img;
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
