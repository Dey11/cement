import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Abstract from "./pages/Abstract";
import RootLayout from "./layouts/RootLayout";
import Literature from "./pages/Literature";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/abstract",
        element: <Abstract />,
      },
      {
        path: "/literature",
        element: <Literature />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
