import { storyblokEditable } from "@storyblok/react/rsc";

const Teaser = ({ blok }: { blok: TeaserStoryblok }) => {
  return <div {...storyblokEditable(blok)}></div>;
};

export default Teaser;
