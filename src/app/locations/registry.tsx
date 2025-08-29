// app/locations/registry.ts
export type CityKey =
  | "chicago"
  | "naperville"
  | "aurora"
  | "schaumburg"
  | "rockford"
  | "peoria";
export type IndustryKey =
  | "automotive"
  | "healthcare"
  | "real-estate"
  | "legal-services"
  | "home-services"
  | "professional-services"
  | "financial-services"
  | "technology"
  | "manufacturing"
  | "retail"
  | "restaurants";

export const CITIES: Record<CityKey, { name: string; state: string }> = {
  chicago: { name: "Chicago", state: "IL" },
  naperville: { name: "Naperville", state: "IL" },
  aurora: { name: "Aurora", state: "IL" },
  schaumburg: { name: "Schaumburg", state: "IL" },
  rockford: { name: "Rockford", state: "IL" },
  peoria: { name: "Peoria", state: "IL" },
};

export const INDUSTRIES: Record<
  IndustryKey,
  { name: string; short?: string; published: boolean }
> = {
  automotive: { name: "Automotive & Dealerships", published: true },
  healthcare: { name: "Healthcare & Medical", published: true },
  "real-estate": { name: "Real Estate", published: true },
  "legal-services": { name: "Legal Services", published: true },
  "home-services": { name: "Home Services", published: false }, // coming soon
  "professional-services": { name: "Professional Services", published: false },
  "financial-services": { name: "Financial Services", published: false },
  technology: { name: "Technology", published: false },
  manufacturing: { name: "Manufacturing", published: false },
  retail: { name: "Retail", published: false },
  restaurants: { name: "Restaurants & Food Service", published: true },
};
