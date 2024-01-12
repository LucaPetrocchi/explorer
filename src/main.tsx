import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './layouts/Layout'
import Root from './routes/Root'
import TransactionDetail from './routes/TransactionDetail'
import ErrorPage from './error-page'

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage/>,
        children: [{
          path: "/",
          element: <Root />,
          // loader: rootLoader,
        },
        {
          path: "transaction/:hashTx",
          element: <TransactionDetail />,
          // loader: transactionLoader,
        }]
    }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
