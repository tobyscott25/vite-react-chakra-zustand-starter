// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
	// System sets initial value.
	initialColorMode: 'system',
	// App subscribes to system color mode changes.
	useSystemColorMode: true,
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme
