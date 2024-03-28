"use client";
// @ts-ignore
import Ripple from "material-ripple-effects";

export const useRipple = () => {
  const onClick = (event: React.SyntheticEvent) => {
    const ripple = new Ripple();

    ripple.create(event);
  };

  return onClick;
};

export default Ripple;
