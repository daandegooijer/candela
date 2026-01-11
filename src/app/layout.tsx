import "./globals.css";

import type React from "react";
import { Merriweather, Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { StoryblokBridge } from "../components/StoryblokBridge";
import { getStoryblokStory } from "../lib/storyblok";
import StoryblokProvider from "../components/StoryBlokProvider";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Gospelkoor Candela - Moderne Kerkmuziek",
  description:
    "Gospelkoor Candela: Inspirerende kerkmuziek, professionele dirigent Dennis de Bruin. Ontdek onze agenda en sluit je aan!",
  openGraph: {
    type: "website",
    locale: "nl_NL",
  },
  generator: "v0.app",
};

export const viewport = {
  themeColor: "#1a3a2e",
  userScalable: true,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { story, links } = await getStoryblokStory(
    "settings",
    ["footer_menu.link", "header_menu.link"],
    ["story"]
  );

  const linkMap = Object.fromEntries(links.map((link) => [link.slug, link]));

  return (
    <StoryblokProvider>
      <ViewTransitions>
        <html
          lang="nl"
          className={`${merriweather.variable} ${inter.variable}`}
        >
          <body className="font-sans bg-background text-foreground">
            <StoryblokBridge />
            <Header
              settings={story?.content}
              headerMenu={story.content.header_menu.map((item) => ({
                ...item,
                title: linkMap[item.link.cached_url.replaceAll("/", "")]?.name,
                url: item.link.cached_url,
              }))}
            />
            <main>{children}</main>
            <Footer
              settings={story?.content}
              footerMenu={story.content.footer_menu.map((item) => ({
                ...item,
                title: linkMap[item.link.cached_url]?.name,
                url: item.link.cached_url,
              }))}
            />
          </body>
        </html>{" "}
      </ViewTransitions>{" "}
    </StoryblokProvider>
  );
}
