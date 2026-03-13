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
    logo: "/logos/delta.svg",
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
    logo: "/logos/marriott.svg",
    balance: 120000,
    unit: "points",
    estimatedValue: 840,
    centsPerPoint: 0.7,
    color: "#8B1A4A",
  },
  {
    id: "united-mileageplus",
    name: "MileagePlus",
    provider: "United Airlines",
    logo: "/logos/united.svg",
    balance: 42000,
    unit: "miles",
    estimatedValue: 588,
    centsPerPoint: 1.4,
    color: "#002244",
  },
];
