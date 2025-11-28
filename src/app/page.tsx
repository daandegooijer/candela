import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokStory } from "../lib/storyblok";
import "../lib/provider"; // Ensure Storyblok is initialized

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
