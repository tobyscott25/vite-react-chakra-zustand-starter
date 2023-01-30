import { FunctionComponent, ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

import { NavBar } from './components/NavBar'

export const Layout: FunctionComponent = (): ReactElement => {
	return (
		<Box>
			<NavBar />

			{/* An <Outlet> renders whatever child route is currently active,
			so you can think about this as a placeholder for the child routes
			we defined in index.tsx */}
			<Box p={8}>
				<Outlet />
			</Box>

			{/* <Footer /> */}
		</Box>
	)
}
