import fs from "fs";
import path from "path";
import { BlogPost } from "./types";

function loadContent(slug: string): string {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "blog",
    "content",
    `${slug}.md`,
  );
  return fs.readFileSync(filePath, "utf-8");
}

export const blogPosts: BlogPost[] = [
  {
    slug: "sta-je-audio-guest-book",
    title: "Šta je Audio Guest Book i Zašto je Hit na Venčanjima u Srbiji?",
    description:
      "Saznajte šta je audio guest book, kako funkcioniše na venčanjima u Srbiji, i zašto sve više parova bira ovu uslugu umesto klasične knjige utisaka. HALO Uspomene objašnjava sve.",
    category: "Vodič",
    tags: [
      "audio guest book",
      "venčanje",
      "Srbija",
      "knjiga utisaka",
      "HALO Uspomene",
    ],
    publishDate: "2025-09-15",
    readTime: 8,
    featured: true,
    content: loadContent("sta-je-audio-guest-book"),
  },
  {
    slug: "audio-guest-book-vs-knjiga-utisaka",
    title: "Audio Guest Book vs Klasična Knjiga Utisaka: Kompletno Poređenje",
    description:
      "Detaljno poređenje audio guest book-a i klasične knjige utisaka za venčanja. Prednosti, mane, cene i iskustva parova u Srbiji. Saznajte koja opcija je bolja za vaše venčanje.",
    category: "Poređenje",
    tags: [
      "audio guest book",
      "knjiga utisaka",
      "poređenje",
      "venčanje Srbija",
      "HALO Uspomene",
    ],
    publishDate: "2025-10-01",
    readTime: 10,
    featured: true,
    content: loadContent("audio-guest-book-vs-knjiga-utisaka"),
  },
  {
    slug: "kako-funkcionise-audio-guest-book",
    title: "Kako Funkcioniše Audio Guest Book: Vodič od A do Ž",
    description:
      "Kompletni vodič o tome kako funkcioniše audio guest book na venčanjima. Od rezervacije do preuzimanja snimaka — korak po korak objašnjenje HALO Uspomene usluge u Srbiji.",
    category: "Vodič",
    tags: [
      "kako funkcioniše",
      "audio guest book",
      "vodič",
      "venčanje",
      "HALO Uspomene",
      "Srbija",
    ],
    publishDate: "2025-10-15",
    readTime: 9,
    featured: true,
    content: loadContent("kako-funkcionise-audio-guest-book"),
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getPostsByCategory(category: BlogPost["category"]): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getRelatedPosts(currentSlug: string, limit = 2): BlogPost[] {
  const current = getBlogPost(currentSlug);
  if (!current) return [];

  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .sort((a, b) => {
      const aSharedTags = a.tags.filter((t) => current.tags.includes(t)).length;
      const bSharedTags = b.tags.filter((t) => current.tags.includes(t)).length;
      return bSharedTags - aSharedTags;
    })
    .slice(0, limit);
}
