import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICES } from "@/lib/data/services";
import { ServiceHero } from "@/components/ServicePage/ServiceHero";
import { ServiceFeatures } from "@/components/ServicePage/ServiceFeatures";
import { ServiceProcess } from "@/components/ServicePage/ServiceProcess";
import { RelatedServices } from "@/components/ServicePage/RelatedServices";
import { LeadSection } from "@/components/LeadSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) return {};

  return {
    title: `${service.title} — Makaan Manager`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) notFound();

  return (
    <>
      <ServiceHero service={service} />
      <ServiceFeatures service={service} />
      <ServiceProcess service={service} />
      <RelatedServices currentId={service.id} />
      <LeadSection defaultService={service.title} />
    </>
  );
}
