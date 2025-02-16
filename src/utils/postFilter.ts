import { SITE } from "@config";
import type { CollectionEntry } from "astro:content";

const postFilter = ({ data }: CollectionEntry<"blog">) => {
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;

  if (import.meta.env.DEV) {
    return true;
  }

  return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
};

export default postFilter;
