import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Videos from './pages/Videos';
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import VideoDetail from './pages/VideoDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Home /> },
            { path: '/videos', element: <Videos /> },
            { path: '/videos/:videoId', element: <VideoDetail /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
