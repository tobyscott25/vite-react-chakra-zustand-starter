import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/',
	plugins: [react(), viteTsconfigPaths()],
	server: {
		open: true, // Open the browser when the dev server starts
		port: 3000,
	},
	test: {
		globals: true,
		environment: 'jsdom',
	},
})
