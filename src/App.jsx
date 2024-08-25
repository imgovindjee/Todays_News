import React from 'react'

import { BrowserRouter, createBrowserRouter, Outlet, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import NavBar from './components/NavBar/NavBar'
import router from './Routes/routes'
import Search from './components/Search/Search'
import News from './components/News/News'



const App = () => {

  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <News country="in" newsCategory="general" key={"general"} />
        </>
      ),
      children: router.map((path) => (
        <Route
          key={uuidv4()}
          path={path?.path}
          element={
            <News
              country={path.country}
              newsCategory={path.category}
              key={path.key}
            />
          }
        />
      )),
    },
    {
      path: '/search/:query',
      element: <Search />
    }
  ])


  return (
    <RouterProvider router={browserRouter}>
      <Outlet />
    </RouterProvider>
  )
}

export default App
