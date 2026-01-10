import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "../components/Page";
import Hero from "../components/flex/Hero";
import Text from "../components/flex/Text";
import Teaser from "../components/flex/Teaser";
import Cta from "../components/flex/Cta";
import HeroPlain from "../components/flex/HeroPlain";
import ContactPage from "../components/pages/ContactPage";
import MediaPage from "../components/pages/MediaPage";

const components = {
  page: Page,
  hero: Hero,
  heroPlain: HeroPlain,
  text: Text,
  teaser: Teaser,
  cta: Cta,
  contact: ContactPage,
  media_page: MediaPage,
};

export const getStoryblokApi = () => {
  return storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
    use: [apiPlugin],
    apiOptions: {
      region: "eu",
    },
    components,
  });
};

// Initialize immediately on import
getStoryblokApi();
