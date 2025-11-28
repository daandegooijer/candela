import { getStoryblokStory } from "@/src/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";
import "@/src/lib/provider"; // Ensure Storyblok is initialized

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const pageSlug = slug.join("/");

  try {
    const { story } = await getStoryblokStory(pageSlug, [], ["story"]);

    if (!story) {
      notFound();
    }

    return (
      <div className="page">
        <StoryblokStory story={story} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
