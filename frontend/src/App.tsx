import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Abstract from "./pages/Abstract";
import RootLayout from "./layouts/RootLayout";
import Literature from "./pages/Literature";

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
