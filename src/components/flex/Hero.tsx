import { HeroStoryblok } from "@/component-types-sb";
import Image from "next/image";
import Link from "next/link";

const Hero = ({ blok }: { blok: HeroStoryblok }) => {
  return (
    <div className="relative h-[800px] overflow-hidden">
      <div className="absolute inset-0 bg-tertiary">
        {blok.image && (
          <Image
            src={blok.image.filename}
            alt={blok.image.alt || ""}
            fill
            className="w-full h-full object-cover opacity-40"
          />
        )}
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            {blok.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            {blok.content}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {blok.buttons &&
              blok.buttons.map((button, index) => {
                return (
                  <Link
                    key={index}
                    href={`/${button.link?.cached_url}` || "/sluit-je-aan"}
                    className="px-8 py-3 bg-white text-tertiary rounded-lg font-semibold hover:bg-tertiary hover:text-white transition-colors"
                  >
                    {button.label}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
