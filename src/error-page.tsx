import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError()
  return (
    <div>
      ERROR! { (error as Error).message || (error as {statusText?: string})?.statusText} 
    </div>
  )
}