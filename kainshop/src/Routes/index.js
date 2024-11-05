import Layout from "../Components/layout";
import Home from "../Apps/Home";
import Blog from "../Apps/Blog";
import Contact from "../Apps/Contact";
import Product from "../Apps/Product";
import Login from "../Apps/Login";
import Cart from "../Apps/Cart";
import PrivateRoutes from "../Components/privateRoutes";
import Users from "../Apps/users";
import Logout from "../Apps/logout";
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
                path:"/blog",
                element:<Blog />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/product",
                element:<Product />
            },
            {
                path:"/cart",
                element:<Cart />
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                element:<PrivateRoutes />,
                children :[
                    {
                        path:"/users",
                        element:<Users />
                    },
                    {
                        path:"/logout",
                        element:<Logout />
                    }
                ]
            }
        ]
    }
]