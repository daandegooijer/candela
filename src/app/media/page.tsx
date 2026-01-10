import "@/src/lib/provider";
import { getStoryblokStory } from "@/src/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { generateSeoMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { story } = await getStoryblokStory("media");

  const seoData = story.content.seo;

  return generateSeoMetadata(seoData, {
    title: story.name,
    description:
      story.content?.pageDescription ||
      "Bekijk en beluister hoogtepunten van onze optredens en repetities",
    image: story.content?.image?.filename,
  });
}

export default async function MediaPage() {
  const { story } = await getStoryblokStory("media");
  return (
    <div className="page">
      <StoryblokStory story={story} />
    </div>
  );
}
