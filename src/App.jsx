import { Home, loader } from "./Components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Errorpage from "./Errorpage";
import Products from "./Components/Products"
import Blogarchives from "./Components/Blog-Archives/Blogarchives";
import Blogs2 from "./Blogs2"

const router = createBrowserRouter([{
  path:"/",
  element:<Home/>,
  errorElement: <Errorpage/>,
  loader: loader,
  children: [
    {
      path:"/products",
      element: <Products/>,
      errorElement: <Errorpage/>,
    },
    {
      path:"/nextblog",
      element: <Blogarchives Blog={Blogs2}/>,
      errorElement: <Errorpage/>,
    }
  ]
}

])
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
