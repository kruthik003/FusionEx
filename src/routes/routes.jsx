import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Home/Home";
import EventPage from "../pages/Event";
import ChiefGuestsPage from '../pages/Chief_Guests/Chief_Guests'

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
        path : '/chiefguests',
        element : <ChiefGuestsPage />,
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
