import SquadDetails from "./components/SquadDetails";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const dynamic = "force-dynamic";

export default async function SquadPage({ params, searchParams }: Props) {
  const squadName = params.id;
  console.log("Squad ID: ", squadName, searchParams);

  return (
    <div>
      <SquadDetails squadName={squadName} />
    </div>
  );
}
