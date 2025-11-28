"use client";

import { PropsWithChildren } from "react";
import { getStoryblokApi } from "../lib/provider";

export default function StoryblokProvider({ children }: PropsWithChildren<{}>) {
  getStoryblokApi();
  return children;
}
