import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import Header from "./components/Header";
import Products from "./Pages/Products";
import Shop from "./Pages/Shop";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import appStore from "./redux/appStore";


function AppLayout() {
  
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/mens",
        element: <Products />,
      },
      {
        path: "/womens",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
