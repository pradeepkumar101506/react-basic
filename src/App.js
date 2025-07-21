import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
      App Component
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
        path: "", // This is the default path ("/")
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "about", // This becomes "/about"
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "contact",
        element: <ContactUs />,
        errorElement: <Error />,
      },
      {
        path: "/restaurants/:restId",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
