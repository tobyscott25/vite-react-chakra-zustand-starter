import { ColorModeScript } from '@chakra-ui/react'
import * as React from 'react'
import { Root, createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Router } from '@remix-run/router'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

import { Layout } from './Layout'
import { RouterError } from './pages/RouterError'
import { Home } from './pages/Home'
import { ZustandExample } from './pages/ZustandExample'
import { NotFound } from './pages/NotFound'

const router: Router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <RouterError />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'zustand-example',
				element: <ZustandExample />,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
])

const container = document.getElementById('root') as HTMLElement
if (!container) throw new Error('Failed to find the root element')
const root: Root = createRoot(container)

root.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ColorModeScript />
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>,
)
