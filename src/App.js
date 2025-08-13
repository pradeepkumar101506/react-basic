import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const name = "Dummy User";
    setUser(name);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Outlet />
        </main>
        App Component
      </div>
    </UserContext.Provider>
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
        path: "grocery",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Grocery />
          </Suspense>
        ),
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
