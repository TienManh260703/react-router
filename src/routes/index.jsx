import PrivateRoutes from "../components/PrivateRoutes/PrivateRoutes";
import LayoutDefault from "../layout/LayoutDefault/LayoutDefault";
import About from "../pages/About";
import Blog from "../pages/Blog/Blog";
import BlogAll from "../pages/Blog/BlogAll";
import BlogDetail from "../pages/Blog/BlogDetail";
import BlogNew from "../pages/Blog/BlogNew";
import BlogRelated from "../pages/Blog/BlogRelated";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import InfoUser from "../pages/InfoUser/InfoUser";
import Login from "../pages/Login/Login";

export const routes = [
    {
        path: "/",
        element: <LayoutDefault />, // Để thêm các route bên trong :
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            }, {
                path: "contact",
                element: <Contact />
            },
            {
                path: "blog",
                element: <Blog />,
                children: [
                    {
                        index: true,
                        element: <BlogAll />
                    }, {
                        path: "news",
                        element: <BlogNew />
                    },
                    {
                        path: "related",
                        element: <BlogRelated />
                    },
                    {
                        path: "detail/:id",
                        element: <BlogDetail />
                    }
                ]
            },
            {
                path: "login",
                element: <Login />
            },
            {
                element: <PrivateRoutes />,
                children: [
                    {
                        path: "info-user",
                        element: <InfoUser />
                    }
                ]
            },
            {
                path: "*",
                element: <Error404 />
            }
        ]
    }
];