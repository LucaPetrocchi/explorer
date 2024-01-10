import { useLoaderData } from "react-router-dom";
import Explorer from "../components/Explorer";
import { getData } from "../mockdata";
import Search from "../components/Search";

type data = Awaited<ReturnType<typeof getData>>

export async function rootLoader() {
  const data: data = await getData();
  return data
}

export default function Root() {

  const data = useLoaderData() as Awaited<ReturnType<typeof rootLoader>>;

  return (
    <div>
      <Search />
      <Explorer data={data} />
    </div>
  )
}