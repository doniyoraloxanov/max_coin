export const isEmpty = (obj: any) => {
  if (obj === null || typeof obj !== "object") return false;

  return Object.keys(obj).length === 0;
};

export const noop = () => {};
export const promiseNoop = () => Promise.resolve();
export const DEVELOPER_ID = "1839588386";
