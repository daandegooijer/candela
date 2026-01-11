import { storyblokEditable } from "@storyblok/react";
import { Link } from "next-view-transitions";

const MenuLink = ({ blok }) => {
  return (
    <Link
      href={blok.link.cached_url}
      className="text-base font-medium text-gray-500 hover:text-gray-900"
      {...storyblokEditable(blok)}
    >
      {blok.link.story.name}
    </Link>
  );
};
export default MenuLink;
