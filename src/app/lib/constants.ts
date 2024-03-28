export enum POINT_REASON {
  JOINED__CHANNEL = "JOINED__CHANNEL",
}

export const API_BASE_URL = "https://maxapi.testexus.live";

export const ENDPOINTS = {
  START: `${API_BASE_URL}/start`,
  PROFILE: `${API_BASE_URL}/profile`,
  SCORE: `${API_BASE_URL}/score`,
  LEAGUE_DETAILS: `${API_BASE_URL}/league-details`,
  ENERGY: `${API_BASE_URL}/energy`,
  JOIN_SQUAD: `${API_BASE_URL}/join-squad`,
  CREATE_SQUAD: `${API_BASE_URL}/create-squad`,
};

export type User = {
  user_id: string;
  telegram_username: string;
  first_name: string;
  last_name: string;
  link: string;
  mine_balance: number;
  task_balance: number;
  squad: null | string;
  energy: number;
  last_click_time: string;
  balance: number;
  league: string;
};
