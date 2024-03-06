import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Overview } from "./routes/overview.jsx";
import { Retratos } from "./routes/retratos.jsx";
import { ErrorPage } from "./routes/ErroPage.jsx";
import { Eventos } from "./routes/Eventos.jsx";
import { Corporativo } from "./routes/Corporativo.jsx";
import { Moda } from "./routes/Moda.jsx";
import { GenteESom } from "./routes/GenteESom.jsx";
import { FestasEComemoracoes } from "./routes/FestasEComemoracoes.jsx";
import { FamiliaEInfantil } from "./routes/FamiliaEInfantil.jsx";

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
      { path: "/moda", element: <Moda /> },
      { path: "/gente-e-som", element: <GenteESom /> },
      { path: "/festas-e-comemoracoes", element: <FestasEComemoracoes /> },
      { path: "/familia-e-infantil", element: <FamiliaEInfantil /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
