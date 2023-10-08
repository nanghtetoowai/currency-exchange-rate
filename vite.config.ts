import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

const resolvePath = (pwd: string) => path.resolve(__dirname, pwd);

export default defineConfig({
	server: { port: 3000 },
	plugins: [react()],
	resolve: {
		alias: {
			'@assets': resolvePath('./src/assets'),
			'@base': resolvePath('./src/base'),
			'@configs': resolvePath('./src/configs'),
			'@containers': resolvePath('./src/containers'),
			'@layouts': resolvePath('./src/layouts'),
			'@pages': resolvePath('./src/pages'),
			'@routers': resolvePath('./src/routers'),
			'@services': resolvePath('./src/services'),
			'@types': resolvePath('./src/types'),
			'@utils': resolvePath('./src/utils'),
			'~': resolvePath('./src'),
		},
	},
});
