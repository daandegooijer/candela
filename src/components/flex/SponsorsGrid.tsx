import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";

interface SponsorLogo {
  id: number;
  filename: string;
  alt?: string;
}

interface SponsorsGridProps {
  blok: {
    _uid: string;
    title?: string;
    logos?: SponsorLogo[];
  };
}

const SponsorsGrid = ({ blok }: SponsorsGridProps) => {
  const logos = blok.logos || [];

  if (logos.length === 0) return null;

  return (
    <div {...storyblokEditable(blok)}>
      <div className="container mx-auto py-16 px-4">
        <div className="col-span-12 xl:col-span-10 xl:col-start-2">
          {blok.title && (
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-10 text-center">
              {blok.title}
            </h2>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
            {logos.map((logo) => (
              <div key={logo.id} className="relative h-20 grayscale hover:grayscale-0 transition-all">
                <Image
                  src={logo.filename}
                  alt={logo.alt || "Sponsor"}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsGrid;
