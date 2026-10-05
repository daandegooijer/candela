import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";
import RichText from "./RichText";

interface ProjectPhoto {
  id: number;
  filename: string;
  alt?: string;
}

interface GalleryProjectProps {
  blok: {
    _uid: string;
    title?: string;
    text?: any;
    photos?: ProjectPhoto[];
  };
}

const GalleryProject = ({ blok }: GalleryProjectProps) => {
  const photos = blok.photos || [];

  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white rounded-xl shadow-lg overflow-hidden mb-12"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
        {photos.map((photo) => (
          <div key={photo.id} className="relative aspect-square">
            <Image
              src={photo.filename}
              alt={photo.alt || blok.title || "Foto"}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="p-8">
        {blok.title && (
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {blok.title}
          </h3>
        )}
        {blok.text && (
          <RichText content={blok.text} className="prose text-gray-700" />
        )}
      </div>
    </div>
  );
};

export default GalleryProject;
