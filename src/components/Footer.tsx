import { ConfigStoryblok } from "@/component-types-sb";
import Image from "next/image";
import Container from "./Container";

export function Footer({ settings }: { settings: ConfigStoryblok }) {
  return (
    <footer className="bg-tertiary text-white">
      <Container classNames="py-24">
        <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          {settings?.footerImage?.filename && (
            <div className="relative w-24 h-24 shrink-0">
              <Image
                src={settings.footerImage.filename}
                alt={settings.footerImage.alt || "Gospelkoor Candela"}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">
              Gospelkoor Candela
            </h3>
            <p className="text-white/80">{settings?.footerText}</p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Gospelkoor Candela. Alle rechten
            voorbehouden.
          </p>
        </div>
      </Container>
    </footer>
  );
}
