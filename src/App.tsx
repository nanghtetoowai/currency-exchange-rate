import { Suspense } from 'react';
import { setupAxiosInterceptors } from '@utils/apiHandler/apiHandler.ts';
import { MantineProvider } from '@mantine/core';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { routers } from '@routers/routers.tsx';
import { COLOR_SCHEME } from '@configs/enum.ts';
import { queryClient } from '@configs/queryClient.ts';
import '@mantine/core/styles.css';
import './App.css';

function App() {
	setupAxiosInterceptors();
	return (
		<MantineProvider defaultColorScheme={COLOR_SCHEME.LIGHT}>
			<QueryClientProvider client={queryClient}>
				<Suspense fallback="loading">
					<RouterProvider router={routers} />
				</Suspense>
			</QueryClientProvider>
		</MantineProvider>
	);
}

export default App;
