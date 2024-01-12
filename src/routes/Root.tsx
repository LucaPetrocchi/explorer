import Explorer from "../components/Explorer";
import { Transaction, getData } from "../mockdata";
import { useEffect, useState } from "react";

// type Data = Awaited<ReturnType<typeof getData>>

// export async function rootLoader() {
//   const data: Data = await getData();
//   return data
// }

export default function Root() {
  // const data = useLoaderData() as Awaited<ReturnType<typeof rootLoader>>
  const [data, setData] = useState<Transaction[] | null>()

  useEffect(() => {
    getData().then((data) => {setData(data)})
  })

  if (data) {
    return (
      <Explorer data={data} />
    )
  }
}