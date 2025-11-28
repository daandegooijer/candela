import Container from "@/src/components/Container";
import AgendaTeaser from "@/src/components/flex/AgendaTeaser";
import "@/src/lib/provider"; // Ensure Storyblok is  initialized
import {
  getStoryblokStory,
  getStoryblokStoriesByFolder,
} from "@/src/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

interface Story {
  id: number;
  name: string;
  content?: Record<string, any>;
}

export default async function AgendaPage() {
  const [agendaPage, agendaEvents] = await Promise.all([
    getStoryblokStory("agenda"),
    getStoryblokStoriesByFolder("agenda", true, 50, 1),
  ]);

  return (
    <div className="page">
      {/* Render the agenda page component (hero, text, etc.) */}
      <StoryblokStory story={agendaPage.story} />

      {/* Render agenda events */}
      <Container classNames="py-24">
        {(agendaEvents.stories as Story[])?.map((event) => (
          <AgendaTeaser
            key={event.id}
            blok={{ name: event.name, ...event.content }}
          />
        ))}
      </Container>
    </div>
  );
}
