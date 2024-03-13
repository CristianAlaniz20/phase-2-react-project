import React from "react"
import App from "./App";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Ball from "./pages/Ball";
import AddBall from "./pages/AddBall";

const routes = ([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/ball',
                element: <Ball />,
            },
            {
                path: "/add-ball",
                element: <AddBall />
            }
        ]
    }
])

export default routes;

