import type { MetadataRoute } from "next";
import { games } from "@/data/games";

export const dynamic = "force-static";

const domain = "https://combomaker.net";
const lastModifiedDate = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const gameUrls = games.map((game) => ({
    url: `${domain}/${game.id}`,
    lastModified: lastModifiedDate,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: `${domain}`,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${domain}/game`,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${domain}/about_us`,
      lastModified: lastModifiedDate,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    },
    {
      url: `${domain}/terms_and_conditions`,
      lastModified: lastModifiedDate,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    {
      url: `${domain}/privacy_policy`,
      lastModified: lastModifiedDate,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    {
      url: `${domain}/contact_us`,
      lastModified: lastModifiedDate,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    ...gameUrls,
  ];
}
