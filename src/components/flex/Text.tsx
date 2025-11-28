import { createElement } from "react";
import RichText from "./RichText";

const Text = ({ blok }: { blok: any }) => {
  const { title, content, centerText, showBackgroundColor } = blok;
  const headingType = blok.headingType[0] || "h2";

  const sizeMap: Record<string, string> = {
    h1: "font-serif text-4xl md:text-5xl ",
    h2: "font-serif text-3xl md:text-4xl ",
    h3: "font-serif text-2xl md:text-3xl ",
    h4: "font-serif text-xl md:text-2xl ",
    h5: "font-serif text-lg md:text-xl ",
    h6: "font-serif text-base md:text-lg ",
  };

  const className = `${sizeMap[headingType] || sizeMap.h2} font-bold mb-6`;

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-12 gap-6 mb-8">
        <div
          className={`col-span-12 xl:col-span-10 xl:col-start-2 ${
            centerText ? "text-center" : "text-left"
          }`}
        >
          {title &&
            (["h1", "h2", "h3", "h4", "h5", "h6"].includes(headingType) ? (
              <div className="mb-8">
                {createElement(headingType, { className }, title)}
              </div>
            ) : null)}

          <RichText
            content={content}
            className="prose text-lg text-gray-700 lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed [&>p]:mb-8 *:prose-a:text-tertiary *:prose-a:hover:underline"
          />
        </div>
      </div>
    </div>
  );
};

export default Text;
