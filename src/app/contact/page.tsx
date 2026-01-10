import "@/src/lib/provider"; // Ensure Storyblok is initialized
import { getStoryblokStory } from "@/src/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { generateSeoMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { story } = await getStoryblokStory("contact");

  const seoData = story.content.seo;

  return generateSeoMetadata(seoData, {
    title: story.name,
    description:
      story.content?.pageDescription ||
      "Neem contact met ons op voor vragen, boekingen of om lid te worden",
    image: story.content?.image?.filename,
  });
}

export default async function ContactPage() {
  const { story } = await getStoryblokStory("contact");

  return (
    <div className="page">
      <StoryblokStory story={story} />
    </div>
  );
}
