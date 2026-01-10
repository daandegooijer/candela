import { Metadata } from "next";

export interface SeoBlock {
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: {
    filename?: string;
    alt?: string;
  };
}

export function generateSeoMetadata(
  seo: SeoBlock | SeoBlock[] | undefined,
  defaults: {
    title: string;
    description: string;
    image?: string;
  }
): Metadata {
  // Handle seo as array (from bloks field)
  const seoData = Array.isArray(seo) ? seo[0] : seo;

  // Check if seoImage.filename is not empty string
  const hasSeoImage =
    seoData?.seoImage?.filename && seoData.seoImage.filename.trim() !== "";
  const seoTitle = seoData?.seoTitle?.trim();
  const seoDescription = seoData?.seoDescription?.trim();

  return {
    title: seoTitle || defaults.title + " | Gospelkoor Candela",
    description: seoDescription || defaults.description,
    openGraph: {
      title: seoTitle || defaults.title,
      description: seoDescription || defaults.description,
      ...(hasSeoImage
        ? {
            images: [
              {
                url: seoData.seoImage.filename,
                width: 1200,
                height: 630,
                alt: seoData.seoImage.alt || seoTitle || defaults.title,
              },
            ],
          }
        : defaults.image
        ? {
            images: [
              {
                url: defaults.image,
                width: 1200,
                height: 630,
                alt: defaults.title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle || defaults.title,
      description: seoDescription || defaults.description,
      ...(hasSeoImage || defaults.image
        ? {
            image: hasSeoImage ? seoData.seoImage.filename : defaults.image,
          }
        : {}),
    },
  };
}
