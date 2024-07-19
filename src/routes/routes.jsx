import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Home/Home";
import EventPage from "../pages/Event";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/events",
        element: <EventPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
