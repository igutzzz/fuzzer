import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Error from './error'
import ProdutoInfo from './routes/ProdutoInfo'
import { ChakraProvider } from '@chakra-ui/react'
import theme  from './theme/theme'
import { createBrowserRouter, RouterProvider, Route, } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />
  },
  {
    path: '/produto/:id',
    element: <ProdutoInfo />,
    errorElement: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ChakraProvider>
)
