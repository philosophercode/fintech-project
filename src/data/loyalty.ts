import { asset } from "@/lib/basePath";

export interface LoyaltyProgram {
  id: string;
  name: string;
  provider: string;
  logo: string;
  balance: number;
  unit: string;
  estimatedValue: number;
  centsPerPoint: number;
  color: string;
}

export const loyaltyPrograms: LoyaltyProgram[] = [
  {
    id: "delta-skymiles",
    name: "SkyMiles",
    provider: "Delta Air Lines",
    logo: asset("/logos/delta.svg"),
    balance: 85000,
    unit: "miles",
    estimatedValue: 1020,
    centsPerPoint: 1.2,
    color: "#E31837",
  },
  {
    id: "marriott-bonvoy",
    name: "Bonvoy",
    provider: "Marriott",
    logo: asset("/logos/marriott.svg"),
    balance: 210000,
    unit: "points",
    estimatedValue: 1470,
    centsPerPoint: 0.7,
    color: "#8B1A4A",
  },
  {
    id: "united-mileageplus",
    name: "MileagePlus",
    provider: "United Airlines",
    logo: asset("/logos/united.svg"),
    balance: 127000,
    unit: "miles",
    estimatedValue: 1651,
    centsPerPoint: 1.3,
    color: "#002244",
  },
];
