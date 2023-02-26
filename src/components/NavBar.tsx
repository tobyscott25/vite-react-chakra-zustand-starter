import { FunctionComponent, ReactElement } from 'react'

import { Link as ReactRouterLink } from 'react-router-dom'
import { Box, Flex, Text, Link, useColorMode } from '@chakra-ui/react'
// We need to use Chakra UI's <Link> component for consistency with the rest of the UI.
// But we need to use React Router's <Link> component for the routing to work properly.
// So we import Chakra UI's <Link> component, and then import React Router's <Link> component as ReactRouterLink.
// We can then pass the "as" prop to Chakra UI's <Link> component. See: https://chakra-ui.com/docs/components/link/usage#usage-with-routing-library

import { ColorModeSwitcher } from './ColorModeSwitcher'
import { useCounterStore } from '../stores/counterStore'

export const NavBar: FunctionComponent = (): ReactElement => {
	const { colorMode } = useColorMode()
	const count = useCounterStore((state) => state.count)
	return (
		<Flex
			alignItems={'center'}
			justifyContent={'space-between'}
			borderBottom={1}
			borderStyle={'solid'}
			borderColor={colorMode === 'light' ? 'gray.100' : 'gray.900'}
			shadow={'sm'}
			px={10}
			py={1}
			fontSize={'sm'}
		>
			<Box>
				<Link as={ReactRouterLink} to="/" mr={10}>
					Home
				</Link>
				<Link as={ReactRouterLink} to="/zustand-example" mr={10}>
					Zustand Example
				</Link>
				<Link as={ReactRouterLink} to="/abc123" mr={10}>
					404 Example
				</Link>
			</Box>

			<Flex alignItems={'center'} justifyContent={'space-between'}>
				<Text mr={10}>{process.env.REACT_APP_EXAMPLE_ENV_VAR}</Text>
				<Text>Count: {count}</Text>
				<ColorModeSwitcher justifySelf="flex-end" />
			</Flex>
		</Flex>
	)
}
