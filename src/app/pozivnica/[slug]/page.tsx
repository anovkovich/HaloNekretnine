import { notFound } from "next/navigation";
import { getWeddingData, getAllWeddingSlugs } from "@/data/pozivnice";
import InvitationClient from "./InvitationClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all known wedding slugs
export async function generateStaticParams() {
  const slugs = getAllWeddingSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function InvitationPage({ params }: PageProps) {
  const { slug } = await params;
  const weddingData = getWeddingData(slug);

  if (!weddingData) {
    notFound();
  }

  return <InvitationClient data={weddingData} />;
}
