// Topic registry helpers for Punthuk Setumbu guide.
// Content lives in topics-a.ts, topics-b.ts and topics-c.ts to keep each file manageable.

import type { Topic, TopicGroup, Language, TopicContent } from "./topics-a";
import { topicsA } from "./topics-a";
import { topicsB } from "./topics-b";
import { topicsC } from "./topics-c";

export type { Topic, TopicGroup, Language, TopicContent, TopicSection, TopicFaq } from "./topics-a";

export const topics: Topic[] = [...topicsA, ...topicsB, ...topicsC];

export const topicSlugs: string[] = topics.map((t) => t.slug);

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export const GROUP_LABELS: Record<TopicGroup, Record<Language, string>> = {
  sunrise: { id: "Matahari terbit & Fotografi", en: "Sunrise & photography" },
  prepare: { id: "Tiket & Persiapan Kunjungan", en: "Tickets & visit prep" },
  transport: { id: "Transportasi & Cara ke Sini", en: "Transport & getting here" },
  food: { id: "Kuliner & Kopi", en: "Food & coffee" },
  nearby: { id: "Wisata Sekitar & Budaya", en: "Nearby & culture" },
  itinerary: { id: "Rencana Perjalanan", en: "Itineraries" },
};

export function groupLabel(lang: Language, group: TopicGroup): string {
  return GROUP_LABELS[group][lang];
}

export function groupTopics(lang: Language, group: TopicGroup): Topic[] {
  return topics.filter((t) => t.group === group);
}
