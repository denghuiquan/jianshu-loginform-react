import React from 'react'
import { Text, useColorModeValue, Image } from '@chakra-ui/react'
import logo from '../logo.svg'

function Home () {
  const color = useColorModeValue('gray.800', 'gray.50')
  return (
    <>
      <Image src={logo} className='App-logo' alt='logo' />
      <Text as='p' color={color}>
        This is a demo for{' '}
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          React
        </a>{' '}
        and{' '}
        <a
          className='App-link'
          href='https://chakra-ui.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Chakra UI
        </a>{' '}
        <br />
        And it is a wrapped Component page
        <br />
        for the JianShu SignIn and SignUp page with react router.
      </Text>
    </>
  )
}

export default Home
