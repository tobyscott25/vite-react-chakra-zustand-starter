import { FunctionComponent, ReactElement } from 'react'
import { Button, Text, Code } from '@chakra-ui/react'
import { useCounterStore } from '../stores/counterStore'

export const ZustandExample: FunctionComponent = (): ReactElement => {
	const incrementCount = useCounterStore((state) => state.incrementCount)
	return (
		<>
			<Text my={5}>
				Click the button to increment <Code>count</Code> in the Zustand{' '}
				<Code>counterStore</Code>.
			</Text>

			<Button onClick={incrementCount}>Increment Count</Button>
		</>
	)
}
