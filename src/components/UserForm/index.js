import React from 'react'
import { Stack, Box, Link, Text } from '@chakra-ui/react'
import { Form } from './Form'
import { useLocation, NavLink } from 'react-router-dom'
import MoreSign from './MoreSign'

export default function Index (props) {
  let { type } = props
  const { pathname } = useLocation()
  type = type
    ? type
    : pathname === '/sign_in'
    ? 'sign_in'
    : pathname === '/sign_up'
    ? 'sign_up'
    : ''

  return (
    <Stack className='main'>
      <Box
        as='h4'
        fontWeight='bold'
        fontSize='18px'
        className='title'
        border='none'
      >
        <Link
          as={NavLink}
          to='/sign_in'
          className={pathname === '/sign_in' ? 'active' : ''}
          padding='10px'
        >
          登录
        </Link>
        <Text as='b' padding='10px'>
          ·
        </Text>
        <Link
          as={NavLink}
          to='/sign_up'
          className={pathname === '/sign_up' ? 'active' : ''}
          padding='10px'
        >
          注册
        </Link>
      </Box>

      <Box className='sign-container'>
        <Form type={type} {...props} />
        <MoreSign type={type} />
      </Box>
    </Stack>
  )
}
