"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ConfigStoryblok, MenuLinkStoryblok } from "@/component-types-sb";
import Image from "next/image";
import { Link } from "next-view-transitions";

export function Header({
  settings,
  headerMenu,
}: {
  settings: ConfigStoryblok;
  headerMenu: MenuLinkStoryblok[];
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 xl:col-span-10 xl:col-start-2">
            {" "}
            <div className="flex justify-between items-center h-20">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.webp"
                  alt="Candela Logo"
                  width={300}
                  height={90}
                  className="h-16 w-auto"
                />
              </Link>
              <div className="hidden md:flex space-x-8">
                {headerMenu.map((item) => (
                  <Link
                    key={item._uid}
                    href={item.link?.cached_url || "#"}
                    className="hover:underline transition-colors text-gray-700 hover:text-tertiary"
                  >
                    {item.label ?? item.title}
                  </Link>
                ))}
              </div>

              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-4 py-4 space-y-3">
                {headerMenu.map((item) => (
                  <Link
                    key={item._uid}
                    href={item.link?.cached_url || "#"}
                    className="block w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
