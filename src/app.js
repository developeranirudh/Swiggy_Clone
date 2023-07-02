import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Error from "./Components/Error";
import ResturantMenu from "./Components/ResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About name={"Anirudh"}/>
      },
      {
        path: "/resturants/:resid",
        element:<ResturantMenu/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
