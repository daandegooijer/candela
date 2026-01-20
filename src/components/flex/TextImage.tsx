import { createElement } from "react";
import Image from "next/image";
import RichText from "./RichText";
import { storyblokEditable } from "@storyblok/react/rsc";

const TextImage = ({ blok }: { blok: any }) => {
  const { title, content, headingType, image, mirror } = blok;
  const selectedHeadingType = headingType?.[0] || "h2";

  const sizeMap: Record<string, string> = {
    h1: "font-serif text-4xl md:text-5xl ",
    h2: "font-serif text-3xl md:text-4xl ",
    h3: "font-serif text-2xl md:text-3xl ",
    h4: "font-serif text-xl md:text-2xl ",
    h5: "font-serif text-lg md:text-xl ",
    h6: "font-serif text-base md:text-lg ",
  };

  const className = `${
    sizeMap[selectedHeadingType] || sizeMap.h2
  } font-bold mb-6`;

  const imageComponent = image?.filename && (
    <div className="relative w-full h-96 md:h-full rounded-xl overflow-hidden">
      <Image
        src={image.filename}
        alt={image.alt || ""}
        fill
        className="object-cover"
      />
    </div>
  );

  const textComponent = (
    <div>
      {title &&
        (["h1", "h2", "h3", "h4", "h5", "h6"].includes(selectedHeadingType) ? (
          <div className="mb-8">
            {createElement(selectedHeadingType, { className }, title)}
          </div>
        ) : null)}

      <RichText
        content={content}
        className="prose text-lg text-gray-700 lg:max-w-3xl xl:max-w-4xl leading-relaxed [&>p]:mb-8 *:prose-a:text-tertiary *:prose-a:hover:underline"
      />
    </div>
  );

  return (
    <div
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
      {...storyblokEditable(blok)}
    >
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-12 gap-6">
          {mirror ? (
            <>
              {/* Image on left */}
              <div className="col-span-12 md:col-span-6">{imageComponent}</div>
              {/* Text on right */}
              <div className="col-span-12 md:col-span-6 flex items-center">
                {textComponent}
              </div>
            </>
          ) : (
            <>
              {/* Text on left */}
              <div className="col-span-12 md:col-span-6 flex items-center">
                {textComponent}
              </div>
              {/* Image on right */}
              <div className="col-span-12 md:col-span-6">{imageComponent}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextImage;
