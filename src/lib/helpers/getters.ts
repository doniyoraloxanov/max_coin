export const getUsername = (user: any) =>
  user.first_name || user.last_name || user.username || "";

const checkIfStringOnlyContainsNumbers = (str: string) => {
  return /^\d+$/.test(str);
};

export const getReferrerId = (match: string | RegExpMatchArray) => {
  if (
    typeof match === "string" ||
    typeof match === "number" ||
    typeof match === "bigint"
  ) {
    if (checkIfStringOnlyContainsNumbers(match.toString())) {
      return BigInt(match);
    }

    return null;
  }

  if (Array.isArray(match)) {
    return BigInt(match[1]);
  }

  return null;
};
