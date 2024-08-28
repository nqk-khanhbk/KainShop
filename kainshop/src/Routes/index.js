import Layout from "../Components/layout";
import Home from "../Apps/Home";
import Blog from "../Apps/Blog";
import Contact from "../Apps/Contact";
import Product from "../Apps/Product";
import Login from "../Apps/Login";
import Cart from "../Apps/Cart";
export const Routes = [
    {
        path: "/",
        element:<Layout />,
        children:[
            {
                path:"/",
                element:<Home />,
              
            },
            {
                path:"blog",
                element:<Blog />
            },
            {
                path:"contact",
                element:<Contact />
            },
            {
                path:"product",
                element:<Product />
            },
            {
                path:"cart",
                element:<Cart />
            },
            {
                path:"login",
                element:<Login />
            }
        ]
    }
]