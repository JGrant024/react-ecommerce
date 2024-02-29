import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Products from "./routes/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },

  {
    path: "/products",
    element: <Products />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <div>Welcome to E-commerce!</div>
    </>
  );
}

export default App;
