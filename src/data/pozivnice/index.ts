import { WeddingData } from "@/app/pozivnica/[slug]/types";

// Import all wedding data files
import emilijaAleksa from "./emilija-aleksa";
import anastasijaJovan from "./anastasija-jovan";

// Map slugs to their wedding data
const weddingDataMap: Record<string, WeddingData> = {
  "emilija-aleksa": emilijaAleksa,
  "anastasija-jovan": anastasijaJovan,
  // Add more weddings here as needed:
  // "marko-ana": markoAna,
};

export function getWeddingData(slug: string): WeddingData | null {
  console.log("Fetching wedding data for slug:", slug);
  console.log("Available slugs:", Object.keys(weddingDataMap));
  return weddingDataMap[slug] || null;
}

export function getAllWeddingSlugs(): string[] {
  return Object.keys(weddingDataMap);
}
