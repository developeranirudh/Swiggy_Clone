import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/about";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const appRouter =createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>
  },
  {
    path:"/about",
    element: <About/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
