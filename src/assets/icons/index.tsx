import TickIcon from "./tick.svg";
import CoinIcon from "./coin.svg";
import RightIcon from "./right.svg";
import MedalIcon from "./medal.svg";
import IndirectIcon from "./indirect.svg";
import IconFirst from "./first.svg";
import IconSecond from "./second.svg";
import IconThird from "./third.svg";
import CloseIcon from "./close.svg";

const icons = {
  tick: TickIcon,
  coin: CoinIcon,
  right: RightIcon,
  medal: MedalIcon,
  indirect: IndirectIcon,
  first: IconFirst,
  second: IconSecond,
  third: IconThird,
  close: CloseIcon,
};

export default icons;

export type IconType = keyof typeof icons;
