export const currency = "Br";
export const currencySign = "Br";
export const DEFAULT_TAX_PERCENTAGE = 15;

export const levels = [
  {
    title: "Silver",
    icon: "/icons/silver-cup.svg",
    points: {
      regular: 12500,
      premium: 125000,
    },
  },
  {
    title: "Gold",
    icon: "/icons/gold-cup.svg",
    points: {
      regular: 25000,
      premium: 250000,
    },
  },
  {
    title: "Platinum",
    icon: "/icons/platinum-cup.svg",
    points: {
      regular: 50000,
      premium: 500000,
    },
  },
  {
    title: "Diamond",
    icon: "/icons/diamond-cup.svg",
    points: {
      regular: 100000,
      premium: 1000000,
    },
  },
];

export const getRandomIcon = () => {
  const randomIndex = Math.floor(Math.random() * levels.length);
  return levels[randomIndex].icon;
};

export const levelsMap = levels.reduce((acc, level) => {
  acc[level.points.regular] = level.title;

  return acc;
}, {} as Record<number, string>);

export const referredUsers = [
  {
    firstName: "MEM Max",
    level: "Bronze",
    points: [
      {
        amount: 7526,
      },
    ],
    status: "+ 43k",
  },
  {
    firstName: "Max Vulcan",
    level: "Diamod",
    points: [
      {
        amount: 0,
      },
    ],
    status: "No clicked yet",
  },
];

export const earnBoosters = [
  {
    id: 1,
    image: "/images/boosters/1.png",
    title: "Earn 1000 Max",
    amount: 3000,
  },
  {
    id: 2,
    image: "/images/boosters/2.png",
    title: "Invite 10 frens",
    amount: 100000,
  },
  {
    id: 3,
    image: "/images/boosters/3.png",
    title: "Join Squad",
    amount: 5000,
  },
];

export const specials = [
  {
    id: 1,
    image: "/images/specials/1.png",
    title: "Top up your wallet",
    amount: 3000,
    isCompleted: false,
  },
  {
    id: 2,
    image: "/images/specials/2.png",
    title: "The Open League",
    amount: 100000,
    isCompleted: false,
  },
  {
    id: 3,
    image: "/images/specials/3.png",
    title: "Follow Community",
    amount: 5000,
    isCompleted: false,
  },
  {
    id: 4,
    image: "/images/specials/4.png",
    title: "Earn 1000 Max",
    amount: 3000,
    isCompleted: false,
  },
  {
    id: 5,
    image: "/images/specials/1.png",
    title: "Follow Max Coin",
    amount: 100000,
    isCompleted: true,
  },
  {
    id: 6,
    image: "/images/specials/2.png",
    title: "Follow us on Twitter",
    amount: 5000,
    isCompleted: true,
  },
  {
    id: 7,
    image: "/images/specials/3.png",
    title: "Follow us on Instagram",
    amount: 3000,
    isCompleted: false,
  },
  {
    id: 8,
    image: "/images/specials/4.png",
    title: "The Open League",
    amount: 100000,
    isCompleted: false,
  },
  {
    id: 9,
    image: "/images/specials/3.png",
    title: "Follow Community",
    amount: 5000,
    isCompleted: true,
  },
];

export const web3world = [
  {
    id: 1,
    image: "/images/web3world/1.png",
    title: "Epic Battles inside Telegram",
    league: "Silver",
  },
  {
    id: 2,
    image: "/images/web3world/2.png",
    title: "Poker Competition",
    league: "Gold",
  },
  {
    id: 3,
    image: "/images/web3world/3.png",
    title: "Create TON Space",
    league: "Platinum",
  },
  {
    id: 4,
    image: "/images/web3world/4.png",
    title: "The Queue",
    league: "Diamond",
  },
  {
    id: 5,
    image: "/images/web3world/1.png",
    title: "Epic Battles inside Telegram",
    league: "Silver",
  },
  {
    id: 6,
    image: "/images/web3world/2.png",
    title: "Poker Competition",
    league: "Gold",
  },
  {
    id: 7,
    image: "/images/web3world/3.png",
    title: "The Open League",
    league: "Platinum",
  },
];

export const squads = [
  {
    id: 1,
    image: "/images/squad/1.png",
    title: "MEM Max",
    level: "Diamond",
    icon: "/icons/diamond-cup.svg",
  },
  {
    id: 2,
    image: "/images/squad/1.png",
    title: "Max Vulcan",
    level: "Bronze",
    icon: "/icons/bronze-cup.svg",
  },
  {
    id: 3,
    image: "/images/squad/1.png",
    title: "BLOCK4BLOCK",
    level: "Gold",
    icon: "/icons/gold-cup.svg",
  },
  {
    id: 4,
    image: "/images/squad/1.png",
    title: "Dictator Crypto",
    level: "Platinum",
    icon: "/icons/platinum-cup.svg",
  },
  {
    id: 5,
    image: "/images/squad/1.png",
    title: "Haracrypto",
    level: "Diamond",
    icon: "/icons/diamond-cup.svg",
  },
  {
    id: 6,
    image: "/images/squad/1.png",
    title: "Max kan",
    level: "Bronze",
    icon: "/icons/bronze-cup.svg",
  },
];

export const squadMembers = [
  {
    id: 1,
    name: "Anton",
    image: undefined,
    amount: 856245,
  },
  {
    id: 2,
    name: "Sandro",
    image: "/images/avatar.png",
    amount: 856245,
  },
  {
    id: 3,
    name: "aLEX56rm",
    image: "/images/avatar.png",
    amount: 856245,
  },
  {
    id: 4,
    name: "MEM Max",
    image: undefined,
    amount: 856245,
  },
];

export const skins = [
  {
    id: 1,
    image: "/images/skins/basic.svg",
    title: "Basic",
    task: undefined,
    isEnabled: true,
  },
  {
    id: 2,
    image: "/images/skins/lonely.svg",
    title: "You look lonely",
    task: undefined,
    isEnabled: false,
  },
  {
    id: 3,
    image: "/images/skins/pizza.svg",
    title: "Pizza",
    task: undefined,
    isEnabled: false,
  },
  {
    id: 4,
    image: "/images/skins/dragon.svg",
    title: "Dragon Skin",
    task: "Invite 3 friends",
    isEnabled: false,
  },
  {
    id: 5,
    image: "/images/skins/dragon.svg",
    title: "Basic",
    task: undefined,
    isEnabled: false,
  },
  {
    id: 6,
    image: "/images/skins/lonely.svg",
    title: "You look lonely",
    task: undefined,
    isEnabled: false,
  },
  {
    id: 7,
    image: "/images/skins/basic.svg",
    title: "Pizza",
    task: undefined,
    isEnabled: false,
  },
  {
    id: 8,
    image: "/images/skins/pizza.svg",
    title: "Dragon Skin",
    task: "Invite 3 friends",
    isEnabled: false,
  },
];

export const boostHowItWorks = [
  {
    id: 1,
    image: "/icons/coin.svg",
    title: "Tap-to-earn Max",
    description: "Yes, that’s easy",
  },
  {
    id: 2,
    image: "/images/lightning.png",
    title: "Upgrade your Boosts",
    description: "And earn Notcoin for tasks",
  },
  {
    id: 3,
    image: "/icons/diamond-cup.svg",
    title: "Climb to the top",
    description: "Get to the Diamond league",
  },
  {
    id: 4,
    image: "/images/boosters/deal.png",
    title: "Join Squad",
    description: "More fun together",
  },
];

export type UserData = {
  badge: string;
  balance: number;
  current_league: string;
  energy: number;
  first_name: string;
  last_click_time: string;
  last_name: string;
  link: string;
  squad: string;
  telegram_username: string;
  total_score: number;
  user_id: string;
};

type Member = {
  user_id: string;
  telegram_username: string;
  first_name: string;
  league: string;
  balance: number;
};

export type DetailSquad = {
  name: string;
  no_of_players: number;
  members: Member[];
};

type Point = {
  id: string;
  userId: bigint;
  amount: number;
  pointReason: string;
  createdAt: Date;
  updatedAt: Date;
};

type ReferredUsers = {
  id: string;
  firstName: string;
  lastName?: string | null | undefined;
  userName?: string | null | undefined;
  level: string;
  referralStatus: string;
  role: string;
  status: string;
  languageCode: string | null;
  createdAt: Date;
  updatedAt: Date;
  point: Point[];
};

type User = {
  id: string;
  firstName: string;
  lastName?: string | null | undefined;
  userName?: string | null | undefined;
  level: string;
  referralStatus: string;
  role: string;
  status: string;
  languageCode: string | null;
  createdAt: Date;
  updatedAt: Date;
  point: Point[];
  referredUsers: ReferredUsers[];
  totalScore: number;
  energy: number;
};

export type TopPointUsersProps = {
  TopPointUsers: User[];
};
