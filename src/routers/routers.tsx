import RootLayout from '@layouts/RootLayout';
import { createBrowserRouter } from 'react-router-dom';
import Home from '@pages/home/Home.tsx';

export const routers = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
]);
