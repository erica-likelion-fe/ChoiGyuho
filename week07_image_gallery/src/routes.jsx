import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Posting from "./pages/Posting";
import Posted from "./pages/Posted";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "posting",
        element: <Posting />,
      },
      {
        path: "posted/:id",
        element: <Posted />,
      },
      {
        path: "edit/:id",
        element: <Edit />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
