import classNames from "classnames/bind";
import styles from "./Boost.module.scss";
import BoostHeader from "./BoostHeader";
import BoostBoosters from "./BoostBoosters";
import BoostSkins from "./BoostSkins";

const cn = classNames.bind(styles);

type Props = {};

const Boost = (props: Props) => {
  return (
    <div className={cn("boost")}>
      <div className="container">
        <BoostHeader />
        <BoostBoosters />
        <BoostSkins />
      </div>
    </div>
  );
};

export default Boost;
