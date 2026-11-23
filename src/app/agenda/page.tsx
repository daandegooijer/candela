import Container from "@/src/components/Container";
import AgendaTeaser from "@/src/components/flex/AgendaTeaser";
import "@/src/lib/provider"; // Ensure Storyblok is  initialized
import {
  getStoryblokStory,
  getStoryblokStoriesByFolder,
} from "@/src/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { generateSeoMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

// Revalidate on every request for immediate updates
// Once webhooks are fully configured, this can be increased or removed
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const { story } = await getStoryblokStory("agenda");

  const seoData = story.content.seo;

  return generateSeoMetadata(seoData, {
    title: story.name,
    description:
      story.content?.pageDescription || "Bekijk onze agenda en optredens",
    image: story.content?.image?.filename,
  });
}

interface Story {
  id: number;
  name: string;
  content?: Record<string, any>;
}

function sortByNearestDate(events: Story[]): Story[] {
  const now = Date.now();
  return [...events].sort((a, b) => {
    const rawA = a.content?.date;
    const rawB = b.content?.date;
    const dateA = rawA ? new Date(rawA.replace(" ", "T")).getTime() : null;
    const dateB = rawB ? new Date(rawB.replace(" ", "T")).getTime() : null;

    if (dateA === null && dateB === null) return 0;
    if (dateA === null) return -1;
    if (dateB === null) return 1;

    const futureA = dateA >= now;
    const futureB = dateB >= now;
    if (futureA !== futureB) return futureA ? -1 : 1;

    return dateA - dateB;
  });
}

export default async function AgendaPage() {
  const [agendaPage, agendaEvents] = await Promise.all([
    getStoryblokStory("agenda"),
    getStoryblokStoriesByFolder("agenda", true, 50, 1),
  ]);

  const sortedEvents = sortByNearestDate(
    (agendaEvents.stories as Story[]) || []
  );

  return (
    <div className="page">
      {/* Render the agenda page component (hero, text, etc.) */}
      <StoryblokStory story={agendaPage.story} />

      {/* Render agenda events */}
      <Container classNames="py-24">
        <div className="flex flex-col gap-6">
          {sortedEvents.map((event) => (
            <AgendaTeaser
              key={event.id}
              blok={{ name: event.name, ...event.content }}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
