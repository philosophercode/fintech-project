export interface FlightOption {
  airline: string;
  airlineLogo: string;
  route: string;
  class: string;
  stops: string;
  departTime: string;
  arriveTime: string;
  duration: string;
  pricePerPerson: number | null;
  pointsCost: number | null;
  pointsUnit: string | null;
  taxesPerPerson: number | null;
}

export interface HotelOption {
  name: string;
  brand: string;
  brandLogo: string;
  stars: number;
  location: string;
  pricePerNight: number | null;
  pointsPerNight: number | null;
  pointsUnit: string | null;
  nights: number;
}

export interface TradeOff {
  label: string;
  value: string;
  positive: boolean;
}

export interface ItineraryOption {
  id: string;
  name: string;
  tag: string;
  tagColor: string;
  recommended: boolean;
  flight: FlightOption;
  hotel: HotelOption;
  totalCash: number;
  pointsUsed: string | null;
  pointsValue: string | null;
  bestCard: string;
  bestCardLogo: string;
  whyThis: string;
  tradeOffs: TradeOff[];
}

export const itineraryOptions: ItineraryOption[] = [
  {
    id: "value",
    name: "Value",
    tag: "Lowest cost",
    tagColor: "#22c55e",
    recommended: false,
    flight: {
      airline: "Delta",
      airlineLogo: "/logos/delta.svg",
      route: "JFK → NRT",
      class: "Economy",
      stops: "1 stop (SEA)",
      departTime: "11:30 AM",
      arriveTime: "4:45 PM+1",
      duration: "15h 15m",
      pricePerPerson: 680,
      pointsCost: null,
      pointsUnit: null,
      taxesPerPerson: null,
    },
    hotel: {
      name: "Shibuya Stream Excel Hotel",
      brand: "Shibuya Stream",
      brandLogo: "/logos/hotel-generic.svg",
      stars: 3,
      location: "Shibuya, Tokyo",
      pricePerNight: 120,
      pointsPerNight: null,
      pointsUnit: null,
      nights: 5,
    },
    totalCash: 1960,
    pointsUsed: null,
    pointsValue: null,
    bestCard: "Chase Sapphire Reserve",
    bestCardLogo: "/logos/chase.svg",
    whyThis:
      "The most budget-friendly option at $1,960 total. You'll earn 5,880 Ultimate Rewards points (worth ~$88) by paying with your Chase Sapphire Reserve at 3x on travel. The one-stop flight adds ~3 hours but saves $1,000 per person vs. nonstop.",
    tradeOffs: [
      { label: "Cost", value: "Lowest out-of-pocket at $1,960", positive: true },
      { label: "Points earned", value: "5,880 UR via Chase 3x travel", positive: true },
      { label: "Travel time", value: "+2h layover in Seattle", positive: false },
      { label: "Hotel", value: "3-star, functional but basic", positive: false },
    ],
  },
  {
    id: "comfort",
    name: "Comfort",
    tag: "Best experience",
    tagColor: "#a855f7",
    recommended: false,
    flight: {
      airline: "ANA",
      airlineLogo: "/logos/ana.svg",
      route: "JFK → NRT",
      class: "Premium Economy",
      stops: "Nonstop",
      departTime: "1:15 PM",
      arriveTime: "4:30 PM+1",
      duration: "13h 15m",
      pricePerPerson: 1180,
      pointsCost: null,
      pointsUnit: null,
      taxesPerPerson: null,
    },
    hotel: {
      name: "Park Hyatt Tokyo",
      brand: "Hyatt",
      brandLogo: "/logos/hyatt.svg",
      stars: 5,
      location: "Shinjuku, Tokyo",
      pricePerNight: 320,
      pointsPerNight: null,
      pointsUnit: null,
      nights: 5,
    },
    totalCash: 3960,
    pointsUsed: null,
    pointsValue: null,
    bestCard: "Chase Sapphire Reserve",
    bestCardLogo: "/logos/chase.svg",
    whyThis:
      "Premium experience with ANA's acclaimed service and the iconic Park Hyatt (Lost in Translation vibes). Nonstop flight saves 2 hours. You'll earn 11,880 points via Chase Sapphire Reserve. Near your full $4K budget but maximizes comfort.",
    tradeOffs: [
      { label: "Experience", value: "ANA Premium Economy + 5-star Park Hyatt", positive: true },
      { label: "Points earned", value: "11,880 UR via Chase 3x — highest earn", positive: true },
      { label: "Cost", value: "Near budget cap at $3,960", positive: false },
      { label: "Points used", value: "None — all cash", positive: false },
    ],
  },
  {
    id: "points-max",
    name: "Points-Max",
    tag: "Recommended",
    tagColor: "#00D4AA",
    recommended: true,
    flight: {
      airline: "United",
      airlineLogo: "/logos/united.svg",
      route: "JFK → NRT",
      class: "Economy",
      stops: "Nonstop",
      departTime: "11:00 AM",
      arriveTime: "2:15 PM+1",
      duration: "13h 15m",
      pricePerPerson: null,
      pointsCost: 35000,
      pointsUnit: "United miles",
      taxesPerPerson: 86,
    },
    hotel: {
      name: "Tokyo Marriott Hotel",
      brand: "Marriott",
      brandLogo: "/logos/marriott.svg",
      stars: 4,
      location: "Shinagawa, Tokyo",
      pricePerNight: null,
      pointsPerNight: 25000,
      pointsUnit: "Bonvoy points",
      nights: 5,
    },
    totalCash: 572,
    pointsUsed: "70K United miles + 125K Marriott points",
    pointsValue: "~$3,400",
    bestCard: "Capital One Venture X",
    bestCardLogo: "/logos/capitalone.svg",
    whyThis:
      "Maximize your existing points for $3,400+ in value. United miles redeem at 1.4 cpp (above average) and Marriott points at 0.92 cpp (good for a 4-star). You only pay $572 cash for taxes and fees. Use Capital One Venture X for the remaining cash to earn 2x on everything.",
    tradeOffs: [
      { label: "Cash cost", value: "Only $572 out-of-pocket", positive: true },
      { label: "Points value", value: "United at 1.4 cpp + Marriott at 0.92 cpp", positive: true },
      { label: "Flight", value: "Nonstop on United, economy class", positive: true },
      { label: "Points balance", value: "Uses 70K miles + 125K Bonvoy", positive: false },
    ],
  },
];
