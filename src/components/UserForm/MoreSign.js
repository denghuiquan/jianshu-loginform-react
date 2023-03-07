import React from 'react'
import { FaWeixin, FaWeibo, FaQq } from 'react-icons/fa'
import { Stack, Text, List, ListItem, ListIcon, Link } from '@chakra-ui/react'
export default function MoreSign ({ type }) {
  return (
    <Stack className='more-sign'>
      <Text as='h6'>社交帐号{type === 'sign_in' ? '登录' : '直接注册'}</Text>
      <List mb='10px'>
        <ListItem hidden={type === 'sign_up'} display='inline-block' mx='5px'>
          <Link
            href='/users/auth/weibo'
            display='block'
            w='50px'
            h='50px'
            lineHeight='50px'
          >
            <ListIcon as={FaWeibo} color='#e05244' fontSize='28px' mx='0' />
          </Link>
        </ListItem>
        <ListItem display='inline-block' mx='5px'>
          <Link
            href='/users/auth/wechat'
            display='block'
            w='50px'
            h='50px'
            lineHeight='50px'
          >
            <ListIcon as={FaWeixin} color='green.400' fontSize='28px' mx='0' />
          </Link>
        </ListItem>
        <ListItem display='inline-block' mx='5px'>
          <Link
            href='/users/auth/qq_connect'
            display='block'
            w='50px'
            h='50px'
            lineHeight='50px'
          >
            <ListIcon as={FaQq} color='blue.500' fontSize='28px' mx='0' />
          </Link>
        </ListItem>
      </List>
    </Stack>
  )
}
