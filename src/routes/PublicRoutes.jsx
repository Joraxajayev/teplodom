import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

const PublicRoutes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <AppLayout/>,
            children: [
                {
                    index: true,
                    element: <Home/>,
                },
                {
                    path: '/menu',
                    element: <Menu/>,
                    loader:loader,
                },
                {
                    path: '/cart',
                    element: <Cart/>,

                },
                {
                    path: '/order/new',
                    element: <Create/>
                }
            ]
        }
    ])
}

export default PublicRoutes
