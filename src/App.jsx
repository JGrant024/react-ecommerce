import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
// import Products, { loader as productsLoader } from "./routes/products";
import Products from "./routes/products";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./routes/Home";
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/products",
        element: <Products />,
        // loader: productsLoader,
      },
    ],
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
