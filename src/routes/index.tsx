import App from "@/App";
import Counter from "@/pages/Counter";
import DemoButton from "@/pages/DemoButton";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Tasks></Tasks>,
      },
      {
        path: "/tasks",
        element: <Tasks></Tasks>,
      },
      {
        path: "/user",
        element: <User></User>,
      },
      {
        path: "/counter",
        element: <Counter></Counter>,
      },
      {
        path: "/demoButton",
        element: <DemoButton></DemoButton>,
      },
    ],
  },
]);

export default router;
