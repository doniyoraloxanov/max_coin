import GlobalLoader from "@webbot/packages/mini-app/components/global-locker/GlobalLoader";
import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <div>
      <GlobalLoader />
    </div>
  );
};

export default loading;
