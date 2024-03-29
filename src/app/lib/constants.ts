export enum POINT_REASON {
  JOINED__CHANNEL = "JOINED__CHANNEL",
}

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
