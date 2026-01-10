import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokStory } from "../lib/storyblok";
import "../lib/provider"; // Ensure Storyblok is initialized

import { generateSeoMetadata, SeoBlock } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
  const { story } = await fetchData();

  const seoData = story.content.seo as SeoBlock | undefined;

  return generateSeoMetadata(seoData, {
    title: story.name,
    description: "Default description",
    image: story.content?.image?.filename,
  });
}
export default async function Home() {
  const { story } = await fetchData();

  return (
    <div className="page">
      <StoryblokStory story={story} />
    </div>
  );
}

export async function fetchData() {
  return await getStoryblokStory("home", [], ["story"]);
}
