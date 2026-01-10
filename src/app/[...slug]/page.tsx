import { getStoryblokStory, getAllStoryblokStories } from "@/src/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";
import "@/src/lib/provider"; // Ensure Storyblok is initialized
import { generateSeoMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

// Revalidate on every request for immediate updates
// Once webhooks are fully configured, this can be increased or removed
export const revalidate = 0;

export async function generateStaticParams() {
  try {
    const { stories } = await getAllStoryblokStories(true);

    // Filter out stories that are part of excluded folders and the home story
    const excludedFolders = ["home", "agenda", "contact", "media"];

    const validStories = stories.filter((story: any) => {
      const slug = story.slug;
      // Exclude stories from specific folders and home
      return (
        !excludedFolders.some((folder) => slug.startsWith(folder)) &&
        slug !== "home"
      );
    });

    return validStories.map((story: any) => {
      // Split the story slug into segments for the [...slug] route
      const slug = story.slug.split("/").filter(Boolean);
      return { slug };
    });
  } catch (error) {
    console.error("Error generating static params:", error);
    // Return empty array if fetch fails - individual pages will fall back to dynamic rendering
    return [];
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageSlug = slug.join("/");

  try {
    const { story } = await getStoryblokStory(pageSlug, [], ["story"]);

    if (!story) {
      return {
        title: "Page Not Found",
      };
    }

    const seoData = story.content.seo;

    return generateSeoMetadata(seoData, {
      title: story.name,
      description: story.content?.description || "Welcome to Candela",
      image: story.content?.image?.filename,
    });
  } catch (error) {
    // Return default metadata on error - don't throw as metadata errors shouldn't crash the page
    console.error(`Failed to generate metadata for ${pageSlug}:`, error);
    return {
      title: "Error",
    };
  }
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
    console.error(`Failed to render page ${pageSlug}:`, error);
    notFound();
  }
}
