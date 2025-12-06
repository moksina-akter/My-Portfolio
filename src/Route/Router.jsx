import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        // hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            //   {
            //     path: "*",
            //     element: <ErrorPage />,
            //   },
            //   {
            //     path: "/about",
            //     element: <AboutUs />,
            //   },
        ],
    },
]);
export default router;
