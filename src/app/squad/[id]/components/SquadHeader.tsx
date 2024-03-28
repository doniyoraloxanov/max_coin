import classNames from "classnames/bind";
import styles from "./SquadHeader.module.scss";
import Image from "next/image";
import Link from "next/link";

const cn = classNames.bind(styles);

type Props = {
  squadName: string;
};

const SquadHeader = (props: Props) => {
  return (
    <div className={cn("squad__header")}>
      <Image
        src="/images/squad/dictator.png"
        alt="Squad"
        width={110}
        height={110}
      />
      <div className={cn("squad__header-title")}>
        {props.squadName}{" "}
        <Image src="/icons/link.svg" alt="link" width={20} height={20} />
      </div>
      <div className={cn("squad__header-subtitle")}>
        <Image src="/icons/bronze-cup.svg" alt="link" width={20} height={20} />
        <span>Bronze</span>
        <Image src="/icons/right-arrow.svg" alt="link" width={11} height={16} />
      </div>
      <Link href="/squad" className={cn("squad__header-link")}>
        How it works?
      </Link>
    </div>
  );
};

export default SquadHeader;
