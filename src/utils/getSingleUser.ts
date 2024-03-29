import useSWR from "swr";
import { fetcher } from "./fetcher";
import { User } from "@prisma/client";

function GetSingleUser(id?: string) {
  const { data, error, isLoading, mutate } = useSWR(
    id ? `/api/user/${id}` : undefined,
    fetcher
  );

  return {
    user: data as User,
    isLoading,
    isError: error,
    mutate,
  };
}

export { GetSingleUser };
