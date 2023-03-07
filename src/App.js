import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
import { RouterProvider } from 'react-router-dom'
import { Global } from '@emotion/react'
import AppStyles from './styles/App.style'
import router from './Router'
import { RootStoreProvider } from './store'

chakraTheme.config.initialColorMode = 'dark'

function App () {
  return (
    <ChakraProvider theme={chakraTheme}>
      <CSSReset />
      <Global styles={AppStyles} />
      <RootStoreProvider>
        <RouterProvider router={router} />
      </RootStoreProvider>
    </ChakraProvider>
  )
}

export default App
