import type { MetadataRoute } from "next";
import { games } from "@/data/games";

const domain = "https://combomaker.net";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const gameUrls = games.map((game) => ({
    url: `${domain}/${game.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  return [
    {
      url: `${domain}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${domain}/game`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${domain}/about_us`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    },
    {
      url: `${domain}/terms_and_conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    {
      url: `${domain}/privacy_policy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    {
      url: `${domain}/contact_us`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    ...gameUrls,
  ];
}
