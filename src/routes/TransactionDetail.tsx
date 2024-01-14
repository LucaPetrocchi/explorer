import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDataByHash } from "../mockdata"
import { Transaction } from "../mockdata";
import TransactionBox from "../components/TransactionBox";
import Loading from "../components/Loading";
import ErrorPage from "../error-page";


export default function TransactionDetail() {

  const params = useParams<{ hashTx: string }>()

  const [data, setData] = useState<Transaction | null>()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    if (params.hashTx) {
      getDataByHash(params.hashTx).then((data) => {
        setData(data)
        setLoading(false)
      })
    }
  }, [params])

  return (
    <>
      {isLoading 
        ? <Loading />
        : data
          ? <TransactionBox data={data} />
          : <ErrorPage />
      }
    </>
  )

}