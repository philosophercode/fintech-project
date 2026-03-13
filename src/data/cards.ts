import { asset } from "@/lib/basePath";

export interface CreditCard {
  id: string;
  name: string;
  issuer: string;
  lastFour: string;
  color: string;
  textColor: string;
  logo: string;
  perks: string[];
  earningRates: { category: string; multiplier: string }[];
  annualFee: string;
}

export const cards: CreditCard[] = [
  {
    id: "chase-sapphire-reserve",
    name: "Sapphire Reserve",
    issuer: "Chase",
    lastFour: "4892",
    color: "linear-gradient(135deg, #1a1a3e 0%, #0d1b3e 50%, #1a2744 100%)",
    textColor: "#ffffff",
    logo: asset("/logos/chase.svg"),
    perks: [
      "3x on travel & dining",
      "$300 travel credit",
      "Priority Pass lounge access",
    ],
    earningRates: [
      { category: "Travel", multiplier: "3x" },
      { category: "Dining", multiplier: "3x" },
      { category: "Everything else", multiplier: "1x" },
    ],
    annualFee: "$550",
  },
  {
    id: "amex-gold",
    name: "Gold Card",
    issuer: "American Express",
    lastFour: "3718",
    color: "linear-gradient(135deg, #c9a84c 0%, #b8943d 50%, #a67c2e 100%)",
    textColor: "#1a1a1a",
    logo: asset("/logos/amex.svg"),
    perks: [
      "4x at restaurants & groceries",
      "3x on flights",
      "$120 dining credit",
    ],
    earningRates: [
      { category: "Restaurants", multiplier: "4x" },
      { category: "Groceries", multiplier: "4x" },
      { category: "Flights", multiplier: "3x" },
      { category: "Everything else", multiplier: "1x" },
    ],
    annualFee: "$250",
  },
  {
    id: "capital-one-venture-x",
    name: "Venture X",
    issuer: "Capital One",
    lastFour: "5210",
    color: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
    textColor: "#ffffff",
    logo: asset("/logos/capitalone.png"),
    perks: [
      "2x on everything",
      "10x on hotels via Capital One Travel",
      "Priority Pass lounge access",
    ],
    earningRates: [
      { category: "Cap One Travel hotels", multiplier: "10x" },
      { category: "Cap One Travel flights", multiplier: "5x" },
      { category: "Everything else", multiplier: "2x" },
    ],
    annualFee: "$395",
  },
];
