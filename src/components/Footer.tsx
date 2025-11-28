"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { ConfigStoryblok, MenuLinkStoryblok } from "@/component-types-sb";
import Instagram from "./icons/Instagram";
import Facebook from "./icons/Facebook";
import Container from "./Container";

export function Footer({
  settings,
  footerMenu,
}: {
  settings: ConfigStoryblok;
  footerMenu: MenuLinkStoryblok[];
}) {
  return (
    <footer className="bg-tertiary text-white">
      <Container classNames="py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">
              Gospelkoor Candela
            </h3>
            <p className="text-white/80 pr-12">{settings?.footerText}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Navigatie</h3>
            <ul className="space-y-2 ">
              {footerMenu.map((item) => (
                <li key={item._uid}>
                  <Link
                    href={item.link?.cached_url || "#"}
                    className="text-white/80 hover:text-white hover:underline transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex gap-2 items-start">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <a
                  className="hover:underline text-white/80 hover:text-white transition-colors"
                  href={`tel:${settings?.phoneNumber}`}
                >
                  {settings?.phoneNumber}
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a
                  className="hover:underline text-white/80 hover:text-white transition-colors"
                  href={`mailto:${settings?.e}`}
                >
                  {settings?.e}
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>
                  {settings?.street} {settings?.houseNumber}, {settings?.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/20 pt-8 flex justify-between items-center">
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/gospelkoor_candela/"
              rel="noopener noreferrer"
              className="hover:text-accent text-white transition-colors"
            >
              <Instagram />
            </a>
            <a
              href="https://www.facebook.com/p/Gospelkoor-Candela-100064851871679/?locale=nl_NL"
              rel="noopener noreferrer"
              className="hover:text-accent text-white transition-colors"
            >
              <Facebook />
            </a>
          </div>
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Gospelkoor Candela. Alle rechten
            voorbehouden.
          </p>
        </div>
      </Container>
    </footer>
  );
}
