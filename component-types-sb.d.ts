import {StoryblokStory} from 'storyblok-generate-ts'

export interface ConfigStoryblok {
  header_menu?: MenuLinkStoryblok[];
  footer_menu?: MenuLinkStoryblok[];
  street?: string;
  housenumber?: string;
  postalCode?: string;
  city?: string;
  e?: string;
  phoneNumber?: string;
  _uid: string;
  component: "config";
  [k: string]: any;
}

export interface FeatureStoryblok {
  name?: string;
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: (
    | ConfigStoryblok
    | FeatureStoryblok
    | GridStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | TeaserStoryblok
    | HeroStoryblok
  )[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      target?: "_self" | "_blank";
      [k: string]: any;
    };

export interface MenuLinkStoryblok {
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "menu_link";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (
    | ConfigStoryblok
    | FeatureStoryblok
    | GridStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | TeaserStoryblok
    | HeroStoryblok
  )[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  _uid: string;
  component: "teaser";
  [k: string]: any;
}

export interface AssetStoryblok {
  _uid?: string;
  id: number | null;
  alt: string | null;
  name: string;
  focus: string | null;
  source: string | null;
  title: string | null;
  filename: string;
  copyright: string | null;
  fieldtype?: string;
  meta_data?: null | {
    [k: string]: any;
  };
  is_external_url?: boolean;
  [k: string]: any;
}

export interface HeroStoryblok {
  title: string;
  text?: string;
  backgroundImage?: AssetStoryblok;
  buttons?: ButtonStoryblok[];
  _uid: string;
  component: "hero";
  [k: string]: any;
}
