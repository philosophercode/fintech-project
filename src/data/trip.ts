export interface TripActivity {
  time: string;
  title: string;
  description: string;
  icon: string;
  cost: number | null;
  bookable: boolean;
}

export interface TripDay {
  day: number;
  date: string;
  title: string;
  activities: TripActivity[];
}

export const tripDays: TripDay[] = [
  {
    day: 1,
    date: "Apr 12",
    title: "Arrival",
    activities: [
      { time: "11:00 AM", title: "Depart JFK → NRT", description: "United UA 79 · Economy · Nonstop · 13h 15m", icon: "plane", cost: null, bookable: false },
      { time: "2:15 PM+1", title: "Arrive Tokyo Narita", description: "Narita Express to Shinagawa (¥3,250 / ~$22)", icon: "train", cost: 22, bookable: false },
      { time: "5:00 PM", title: "Check in: Tokyo Marriott Hotel", description: "Deluxe Room · Shinagawa · 40,000 Bonvoy pts/night", icon: "hotel", cost: null, bookable: false },
      { time: "7:30 PM", title: "Dinner: Afuri Ramen", description: "Famous yuzu shio ramen in Ebisu · 10 min by train", icon: "utensils", cost: 30, bookable: false },
    ],
  },
  {
    day: 2,
    date: "Apr 13",
    title: "Explore",
    activities: [
      { time: "10:00 AM", title: "TeamLab Borderless", description: "Digital art museum in Azabudai Hills · Tickets $32/person", icon: "camera", cost: 64, bookable: true },
      { time: "1:00 PM", title: "Lunch: Tsukiji Outer Market", description: "Self-guided food tour · fresh sushi, tamagoyaki, street food", icon: "utensils", cost: 40, bookable: false },
      { time: "3:30 PM", title: "Meiji Shrine", description: "Serene Shinto shrine in Harajuku forest · Free", icon: "map-pin", cost: 0, bookable: false },
      { time: "7:00 PM", title: "Dinner: Shibuya Yokocho", description: "Izakaya alley with 20+ stalls under one roof", icon: "utensils", cost: 50, bookable: false },
    ],
  },
  {
    day: 3,
    date: "Apr 14",
    title: "Culture",
    activities: [
      { time: "9:30 AM", title: "Senso-ji Temple", description: "Tokyo's oldest temple in Asakusa · Nakamise shopping street", icon: "map-pin", cost: 0, bookable: false },
      { time: "12:00 PM", title: "Lunch: Sometaro", description: "Make-your-own okonomiyaki in a 100-year-old house", icon: "utensils", cost: 35, bookable: false },
      { time: "2:00 PM", title: "Akihabara", description: "Electronics, anime, and gaming district · Self-guided", icon: "shopping-bag", cost: 0, bookable: false },
      { time: "7:00 PM", title: "Dinner: Ichiran Ramen", description: "Solo booth tonkotsu ramen — a Tokyo must-do", icon: "utensils", cost: 25, bookable: false },
    ],
  },
  {
    day: 4,
    date: "Apr 15",
    title: "Day Trip",
    activities: [
      { time: "8:30 AM", title: "Shinkansen to Hakone", description: "Bullet train from Shinagawa · 35 min · Hakone Free Pass ¥6,100", icon: "train", cost: 42, bookable: true },
      { time: "10:30 AM", title: "Hakone Open-Air Museum", description: "Sculptures and Picasso gallery with mountain views", icon: "camera", cost: 18, bookable: true },
      { time: "1:00 PM", title: "Lake Ashi Cruise + Ropeway", description: "Included with Hakone Free Pass · Views of Mt. Fuji", icon: "map-pin", cost: 0, bookable: false },
      { time: "4:00 PM", title: "Onsen: Hakone Yuryo", description: "Private open-air hot spring · ¥2,200", icon: "map-pin", cost: 15, bookable: true },
      { time: "7:30 PM", title: "Return to Tokyo + Dinner", description: "Shinkansen back · Dinner at hotel or nearby", icon: "utensils", cost: 45, bookable: false },
    ],
  },
  {
    day: 5,
    date: "Apr 16",
    title: "Shopping & Farewell",
    activities: [
      { time: "10:00 AM", title: "Harajuku & Omotesando", description: "Takeshita Street, Cat Street, luxury boutiques on Omotesando", icon: "shopping-bag", cost: 0, bookable: false },
      { time: "1:00 PM", title: "Lunch: Bills Omotesando", description: "Famous souffle pancakes + flat whites", icon: "utensils", cost: 40, bookable: false },
      { time: "3:00 PM", title: "Shibuya Sky", description: "Observation deck · 360° Tokyo views · Tickets $18/person", icon: "camera", cost: 36, bookable: true },
      { time: "7:00 PM", title: "Farewell Dinner: Gonpachi", description: "The 'Kill Bill' restaurant · Izakaya in Nishi-Azabu", icon: "utensils", cost: 80, bookable: true },
    ],
  },
  {
    day: 6,
    date: "Apr 17",
    title: "Departure",
    activities: [
      { time: "9:00 AM", title: "Check out: Tokyo Marriott", description: "Pack up, leave luggage if needed", icon: "hotel", cost: null, bookable: false },
      { time: "10:30 AM", title: "Narita Express to NRT", description: "Shinagawa → Narita Airport · ~70 min", icon: "train", cost: 22, bookable: false },
      { time: "2:30 PM", title: "Depart NRT → JFK", description: "United UA 78 · Economy · Nonstop · 12h 45m", icon: "plane", cost: null, bookable: false },
    ],
  },
];

export interface PaymentLineItem {
  category: string;
  icon: string;
  amount: string;
  method: string;
  card: string;
  cardLogo: string;
  pointsEarned: string;
  savings: string | null;
  whyThisCard: string;
}

export const paymentBreakdown: PaymentLineItem[] = [
  {
    category: "Flights",
    icon: "plane",
    amount: "$172 (taxes & fees)",
    method: "140,000 United miles + cash",
    card: "Capital One Venture X",
    cardLogo: "/logos/capitalone.svg",
    pointsEarned: "344 miles (2x)",
    savings: "$2,188 saved",
    whyThisCard: "Venture X earns 2x on all purchases — best for taxes/fees when miles cover the fare",
  },
  {
    category: "Hotel",
    icon: "hotel",
    amount: "200,000 Marriott pts",
    method: "Points redemption",
    card: "—",
    cardLogo: "",
    pointsEarned: "—",
    savings: "$1,400 saved",
    whyThisCard: "Direct points redemption at 0.7 cpp — saves $1,400 vs. $300/night cash rate",
  },
  {
    category: "Activities",
    icon: "camera",
    amount: "$180",
    method: "Credit card",
    card: "Amex Gold",
    cardLogo: "/logos/amex.svg",
    pointsEarned: "720 MR (4x)",
    savings: null,
    whyThisCard: "Activities include dining — Amex Gold earns 4x MR at restaurants, beating Chase's 3x",
  },
  {
    category: "Ground Transport",
    icon: "train",
    amount: "$95",
    method: "Credit card",
    card: "Chase Sapphire Reserve",
    cardLogo: "/logos/chase.svg",
    pointsEarned: "285 UR (3x)",
    savings: null,
    whyThisCard: "Sapphire Reserve earns 3x on travel including transit — your best rate for transport",
  },
];

export const paymentSummary = {
  totalCash: 447,
  pointsUsed: "140K United miles + 200K Marriott points",
  pointsEarned: "1,349 new points",
  totalSaved: 3588,
};
