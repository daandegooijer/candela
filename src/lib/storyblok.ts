"use server";

export async function getStoryblokStory(
  slug: string,
  resolveRelations: string[] = [],
  resolveLinks: string[] = []
) {
  const token = process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN;
  const version =
    process.env.STORYBLOK_DRAFT === "true" ? "draft" : "published";

  if (!token) {
    throw new Error("Storyblok access token not configured");
  }

  const resolveRelationsParam =
    resolveRelations.length > 0
      ? `&resolve_relations=${resolveRelations.join(",")}`
      : "";

  const allResolveLinks = resolveLinks.length > 0 ? [...resolveLinks] : [];

  if (!allResolveLinks.includes("story")) {
    allResolveLinks.push("story");
  }

  const resolveLinksParam =
    allResolveLinks.length > 0
      ? `&resolve_links=${allResolveLinks.join(",")}`
      : "";

  const params = `${resolveRelationsParam}${resolveLinksParam}&cv=${Date.now()}`;

  try {
    const response = await fetch(
      `https://api.storyblok.com/v2/cdn/stories/${slug}?version=${version}&token=${token}${params}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch story: ${slug}`);
    }

    return response.json();
  } catch (error) {
    console.error("Storyblok API error:", error);
    throw error;
  }
}

export async function getStoryblokStories(folder: string) {
  const token = process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN;

  if (!token) {
    throw new Error("Storyblok access token not configured");
  }

  const version =
    process.env.STORYBLOK_DRAFT === "true" ? "draft" : "published";

  try {
    const response = await fetch(
      `https://api.storyblok.com/v2/cdn/stories?version=${version}&starts_with=${folder}&token=${token}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch stories from folder: ${folder}`);
    }

    return response.json();
  } catch (error) {
    console.error("Storyblok API error:", error);
    throw error;
  }
}

export async function getStoryblokStoriesByFolder(
  folder: string,
  excludeStartpage: boolean = true,
  perPage: number = 50,
  page: number = 1
) {
  const token = process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN;

  if (!token) {
    throw new Error("Storyblok access token not configured");
  }

  const version =
    process.env.STORYBLOK_DRAFT === "true" ? "draft" : "published";

  const filterQuery = excludeStartpage ? "&is_startpage=0" : "";

  try {
    const response = await fetch(
      `https://api.storyblok.com/v2/cdn/stories?version=${version}&starts_with=${folder}${filterQuery}&per_page=${perPage}&page=${page}&token=${token}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch stories from folder: ${folder}`);
    }

    return response.json();
  } catch (error) {
    console.error("Storyblok API error:", error);
    throw error;
  }
}
