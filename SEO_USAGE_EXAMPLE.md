// Example: How to use the SEO component in your pages // This shows how to add
generateMetadata to your dynamic pages

import { getStoryblokStory } from "@/src/lib/storyblok"; import {
generateSeoMetadata, SeoBlock } from "@/src/lib/seo"; import { StoryblokStory }
from "@storyblok/react/rsc"; import { notFound } from "next/navigation"; import
"@/src/lib/provider"; import { Metadata } from "next";

interface PageProps { params: Promise<{ slug: string[]; }>; }

// Example for dynamic pages ([...slug]/page.tsx) export async function
generateMetadata({ params, }: PageProps): Promise<Metadata> { const { slug } =
await params; const pageSlug = slug.join("/");

try { const { story } = await getStoryblokStory(pageSlug, [], ["story"]);

    if (!story) {
      return {
        title: "Page Not Found",
      };
    }

    // Note: seo is a bloks field (array), function handles both array and object
    const seoData = story.content.seo;

    return generateSeoMetadata(seoData, {
      title: story.name,
      description: story.content?.description || "Welcome to Candela",
      image: story.content?.image?.filename,
    });

} catch (error) { return { title: "Error", }; } }

export default async function DynamicPage({ params }: PageProps) { const { slug
} = await params; const pageSlug = slug.join("/");

try { const { story } = await getStoryblokStory(pageSlug, [], ["story"]);

    if (!story) {
      notFound();
    }

    return (
      <div className="page">
        <StoryblokStory story={story} />
      </div>
    );

} catch (error) { notFound(); } }
