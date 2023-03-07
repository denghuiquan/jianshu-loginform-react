import { createBrowserRouter, Await } from 'react-router-dom'
import React, { lazy } from 'react'
import Home from './pages/Home'
import Layout from './pages/Layout'
// import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp'

const SignIn = lazy(() =>
  import(/* webpackChunkName: "SignIn" */ './pages/SignIn')
)
const SignUp = lazy(() =>
  import(/* webpackChunkName: "SignUp" */ './pages/SignUp')
)
const Lazy = Ele => (
  <React.Suspense fallback={<div>loading...</div>}>
    <Await
      resolve={Ele}
      errorElement={<div>Could not load {Ele}😬</div>}
      children={<Ele />}
    />
  </React.Suspense>
)

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      {
        path: '/sign_in',
        element: Lazy(SignIn)
      },
      {
        path: '/sign_up',
        element: Lazy(SignUp)
      }
    ]
  }
])
export default Router
