import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getDataByHash } from "../mockdata"

type data = Awaited<ReturnType<typeof getDataByHash>>


export async function transactionLoader({ params }: LoaderFunctionArgs<string>) {
  const data: data = await getDataByHash(params.hashTx)
  return { data }
}

export default function TransactionDetail() {
  const { data } = useLoaderData() as Awaited<ReturnType<typeof transactionLoader>>
  return (
    <div>
      <p>DATA: {data?.hashTx}</p>
    </div>
  )
}