"use client";

import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import RichText from "./RichText";

interface AgendaTeaserProps {
  blok: {
    _uid: string;
    name?: string;
    date?: string;
    location?: string;
    locationAddress?: any;
    openingTime?: any;
    image?: {
      filename?: string;
      alt?: string;
    };
  };
}

const AgendaTeaser = ({ blok }: AgendaTeaserProps) => {
  // Parse date and time from "2025-12-18 20:00" format
  const parseDateTime = (dateString: string) => {
    if (!dateString) return { date: "", time: "" };
    const [date, time] = dateString.split(" ");
    return { date, time };
  };

  const { date: dateOnly, time } = parseDateTime(blok.date || "");
  const formattedDate = dateOnly
    ? new Date(dateOnly).toLocaleDateString("nl-NL", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {blok.image?.filename && (
          <div className="relative h-64 md:h-auto md:col-span-1">
            <Image
              src={blok.image.filename}
              alt={blok.image.alt || blok.name || "Event image"}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Content Column */}
        <div
          className={`p-8 ${
            blok.image?.filename ? "md:col-span-2" : "md:col-span-3"
          }`}
        >
          <div className="flex flex-col gap-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{blok.name}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
            {/* Date */}
            <div className="flex items-center gap-3 text-gray-700">
              <Calendar className="h-5 w-5 text-primary shrink-0" />
              <span>{formattedDate}</span>
            </div>

            {/* Time */}
            {time && (
              <div className="flex items-center gap-3 text-gray-700">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>{time}</span>
              </div>
            )}

            {/* Location */}
            {blok.location && (
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>{blok.location}</span>
              </div>
            )}
          </div>

          {/* Opening Time */}
          {blok.openingTime && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <RichText
                content={blok.openingTime}
                className="prose prose-sm text-gray-600"
              />
            </div>
          )}

          {/* Location Address */}
          {blok.locationAddress && (
            <div className="mt-4">
              <RichText
                content={blok.locationAddress}
                className="prose prose-sm text-gray-600"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgendaTeaser;
