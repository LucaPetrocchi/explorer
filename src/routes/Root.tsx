import { Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import Explorer from "../components/Explorer";
import { getData } from "../mockdata";

type Data = Awaited<ReturnType<typeof getData>>

export async function rootLoader() {
  const data: Data = await getData();
  return data
}

export default function Root() {

  const data = useLoaderData() as Awaited<ReturnType<typeof rootLoader>>

  return (
    <div>
      
      <Suspense
        fallback={<p>LOADING......</p>}
      >
        <Explorer data={data} />
      </Suspense>
    </div>
  )
}