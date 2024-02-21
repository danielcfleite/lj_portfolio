import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Overview } from "./routes/overview.jsx";
import { Retratos } from "./routes/retratos.jsx";
import { ErrorPage } from "./routes/ErroPage.jsx";
import { Eventos } from "./routes/Eventos.jsx";
import { Corporativo } from "./routes/Corporativo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/retratos", element: <Retratos /> },
      { path: "/eventos", element: <Eventos /> },
      { path: "/corporativo", element: <Corporativo /> },
      { path: "/", element: <Overview /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
