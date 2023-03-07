import React, { useEffect } from 'react'
import {
  Box,
  Flex,
  Spacer,
  Link,
  Button,
  useColorModeValue,
  useColorMode,
  Image,
  Stack,
  useToast
} from '@chakra-ui/react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { FaSignOutAlt } from 'react-icons/fa'
import { useRootStore } from '../store'

function Layout () {
  const { userStore } = useRootStore()
  const toast = useToast()
  const navigate = useNavigate()
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('gray.200', 'gray.700')
  const navBgColor = useColorModeValue('gray.800', 'gray.50')

  const { user, logout } = userStore

  useEffect(() => {
    if (user && user.token && user.token !== '') {
      console.log('用户已登录', user)
      // navigate('/sign_in')
    }
  }, [navigate, user])

  const handleLogout = async () => {
    const res = await logout()
    if (res.success) {
      toast({
        title: `退出成功`,
        status: 'success',
        isClosable: true,
        position: 'top'
      })
      navigate('/sign_in')
    } else {
      toast({
        title: `退出失败`,
        status: 'warning',
        isClosable: true,
        position: 'top'
      })
    }
  }
  return (
    <>
      <Box className='App' bgColor={bgColor}>
        <Box className='App-main' bgColor={bgColor}>
          <Flex
            bgColor={navBgColor}
            className='navbar'
            fontSize='16px'
            alignItems='center'
          >
            <Link
              as={NavLink}
              to='/'
              px='4'
              color='#61dafb'
              _hover={{ color: 'tomato' }}
            >
              首页
            </Link>
            <Spacer />

            <Box hidden={user.token && user.image}>
              <Link
                as={NavLink}
                to='/sign_in'
                px='4'
                color='#61dafb'
                _hover={{ color: 'tomato' }}
              >
                登录
              </Link>
              <Link
                as={NavLink}
                to='/sign_up'
                px='4'
                color='#61dafb'
                _hover={{ color: 'tomato' }}
              >
                注册
              </Link>
            </Box>
            <Flex
              hidden={!user.token && !user.image}
              alignItems='center'
              color='gray.200'
            >
              {' '}
              <Stack spacing='0' align='center' alignItems='center' mx='2'>
                <Box>
                  <Image
                    borderRadius='full'
                    w='20px'
                    h='20px'
                    src={user.image}
                  />
                </Box>
                <Box fontSize='12px'>{user.username}</Box>
              </Stack>
              <Button size='sm' colorScheme='orange' onClick={handleLogout}>
                <FaSignOutAlt />
              </Button>
            </Flex>
          </Flex>
          <Outlet />
        </Box>
      </Box>

      <Button pos='fixed' right='0' bottom='0' onClick={toggleColorMode}>
        切换{colorMode === 'light' ? 'dark' : 'light'}模式
      </Button>
    </>
  )
}

export default Layout
