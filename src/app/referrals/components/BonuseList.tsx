import { Box } from "@/components/Box";
import RippleBase from "@/components/RippleBase";
import { Typography } from "@/components/Typography";
import classNames from "classnames/bind";
import { useRouter } from "next/navigation";
import Image from "next/image";

import styles from "./BonuseList.module.scss";

const cn = classNames.bind(styles);

type Props = {};

const BonuseList = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <Typography className={cn("bonus__heading")} variant="h3">
        Invite frends to get bonuses
      </Typography>

      <Box className={cn("bonus")}>
        <Box className={cn("bonus__item")}>
          <Box className={cn("bonus__item-sticker")}>
            <Image src="/icons/coin.svg" alt="tick" width={40} height={40} />
          </Box>
          <div>
            <Typography className={cn("bonus__item-title")} variant="h4">
              Invite frens
            </Typography>
            <div className={cn("bonus__item-text")}>
              <Image src="/icons/coin.svg" alt="tick" width={15} height={15} />
              <span className={cn("bonus__item-text-number")}>2,500</span>
              <span>for you and fren</span>
            </div>
          </div>
        </Box>
        <Box className={cn("bonus__item")}>
          <Box className={cn("bonus__item-sticker")}>
            <Image
              src="/icons/tg-premium.svg"
              alt="tick"
              width={40}
              height={40}
            />
          </Box>
          <div>
            <Typography className={cn("bonus__item-title")} variant="h4">
              Fren with <span>Telegram Premium</span>
            </Typography>
            <div className={cn("bonus__item-text")}>
              <Image src="/icons/coin.svg" alt="tick" width={15} height={15} />
              <span className={cn("bonus__item-text-number")}>50,000</span>
              <span>for you and fren </span>
            </div>
          </div>
        </Box>
        <RippleBase
          className={cn("bonus__item-details")}
          onClick={() => {
            router.push("/referrals/details");
          }}
        >
          <Typography variant="h4" className={cn("bonus__item-details-text")}>
            Open details
          </Typography>
        </RippleBase>
      </Box>
    </>
  );
};

export default BonuseList;
