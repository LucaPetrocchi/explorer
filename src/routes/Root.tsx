import Explorer from "../components/Explorer";
import { Transaction, getData } from "../mockdata";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ErrorPage from "../error-page";


export default function Root() {
  const [data, setData] = useState<Transaction[] | null>()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getData().then((data) => {
      setData(data)
      setLoading(false)
    })
  }, [])


  return (
    <>
      {isLoading 
        ? <Loading />
        : data
          ? <Explorer data={data} />
          : <ErrorPage />
      
      }
    </>
  )
}