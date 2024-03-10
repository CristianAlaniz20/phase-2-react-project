import React from "react"
import App from "./App";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Ball from "./Ball";
import AboutBall from "./AboutBall";
import AddBall from "./AddBall";

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
                children: [
                    {
                        path: '/ball/:id',
                        element: <AboutBall />
                    }
                ]
            },
            {
                path: "/add-ball",
                element: <AddBall />
            }
        ]
    }
])

export default routes;

