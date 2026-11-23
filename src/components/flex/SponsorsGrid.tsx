import { storyblokEditable } from "@storyblok/react/rsc";

interface SponsorsGridProps {
  blok: {
    _uid: string;
    title?: string;
    logos?: unknown[];
  };
}

const SponsorsGrid = ({ blok }: SponsorsGridProps) => {
  // Logos render in the site footer (Footer.tsx) instead of in-page.
  return <div {...storyblokEditable(blok)} className="hidden" />;
};

export default SponsorsGrid;
