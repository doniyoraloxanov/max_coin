type Point = {
  id: string;
  userId: bigint;
  amount: number;
  pointReason: string;
  createdAt: Date;
  updatedAt: Date;
};

type ReferredUsers = {
  id: bigint;
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
  id: bigint;
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
};

export type TopPointUsersProps = {
  TopPointUsers: User[];
};

export const medals = [
  "🥇",
  "🥈",
  "🥉",
  "🏅",
  "🏅",
  "🏅",
  "🏅",
  "🏅",
  "🏅",
  "🏅",
];

export const apiConfig = {
  chatgpt_version: "gpt-4",
};

export enum PointReasons {
  REFERRAL = "Referral",
  INDIRECT_REFERRAL = "IndirectReferral",
}

export const REFERRAL_ONE_USER = 100;
export const INDIRECT_INVITE_POINTS = 20;
