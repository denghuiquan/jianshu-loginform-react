import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import {
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  FormControl,
  Input,
  Checkbox,
  Flex,
  FormLabel,
  Button,
  Spacer,
  Link,
  Text,
  useBoolean
} from '@chakra-ui/react'
import {
  FaUserAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaMobileAlt
} from 'react-icons/fa'

export function Form ({ type, clickHandler, isRequesting }) {
  const [showpw, valueCtrl] = useBoolean(false)
  const [rememberMe, { toggle }] = useBoolean(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  })
  // 对props类型进行限制
  // console.log(type, clickHandler)

  const handleChange = field => {
    return event => setFormData({ ...formData, [field]: event.target.value })
  }

  return (
    <Stack className='user-form' as='form' spacing='0'>
      {type === 'sign_up' ? (
        <>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement
                bgColor='hsla(0,0%,71%,.1)'
                children={<FaUserAlt />}
              />
              <Input
                value={formData.username}
                onChange={handleChange('username')}
                placeholder='用户名'
                bgColor='hsla(0,0%,71%,.1)'
                color='#969696'
                borderBottomRadius='none'
                focusBorderColor='gray.300'
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement
                bgColor='hsla(0,0%,71%,.1)'
                children={<FaMobileAlt />}
              />
              <Input
                value={formData.phone}
                onChange={handleChange('phone')}
                placeholder='手机号'
                bgColor='hsla(0,0%,71%,.1)'
                color='#969696'
                name='mobile_number'
                borderRadius='none'
                focusBorderColor='gray.300'
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement
                bgColor='hsla(0,0%,71%,.1)'
                children={<FaLock />}
              />
              <Input
                value={formData.password}
                onChange={handleChange('password')}
                placeholder='设置密码'
                type={showpw ? 'text' : 'password'}
                bgColor='hsla(0,0%,71%,.1)'
                color='#969696'
                borderTopRadius='none'
                focusBorderColor='gray.300'
              />
              <InputRightElement onClick={valueCtrl.toggle}>
                {showpw ? <FaEyeSlash /> : <FaEye />}
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </>
      ) : (
        <>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement
                bgColor='hsla(0,0%,71%,.1)'
                children={<FaUserAlt />}
              />
              <Input
                value={formData.email}
                onChange={handleChange('email')}
                placeholder='手机号或邮箱'
                bgColor='hsla(0,0%,71%,.1)'
                color='#969696'
                borderBottomRadius='none'
                focusBorderColor='gray.300'
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement
                bgColor='hsla(0,0%,71%,.1)'
                children={<FaLock />}
              />
              <Input
                value={formData.password}
                onChange={handleChange('password')}
                placeholder='密码'
                type={showpw ? 'text' : 'password'}
                bgColor='hsla(0,0%,71%,.1)'
                color='#969696'
                borderTopRadius='none'
                focusBorderColor='gray.300'
              />
              <InputRightElement onClick={valueCtrl.toggle}>
                {showpw ? <FaEyeSlash /> : <FaEye />}
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </>
      )}
      <Flex
        hidden={type !== 'sign_in'}
        mt='15px !important'
        alignItems='center'
      >
        <Checkbox
          defaultChecked
          id='deal'
          value={rememberMe}
          onChange={toggle}
          mr='2'
        />
        <FormLabel htmlFor='deal' padding='0' m='0' color='gray'>
          记住我
        </FormLabel>
        <Spacer />
        <Text>
          <Link href='/loginqna' color='gray'>
            登录遇到问题?
          </Link>
        </Text>
      </Flex>
      <Button
        colorScheme={type === 'sign_in' ? 'blue' : 'green'}
        w='100%'
        borderRadius='full'
        mt='20px !important'
        onClick={() => clickHandler(formData)}
        isLoading={isRequesting}
        // disabled={isRequesting}
      >
        {type === 'sign_in' ? '登录' : type === 'sign_up' ? '注册' : '确定'}
      </Button>

      <Text className='sign-up-msg'>
        <span>点击 “注册” 即表示您同意并愿意遵守简书</span> <br />
        <Link target='_blank' href='http://www.jianshu.com/p/c44d171298ce'>
          用户协议
        </Link>
        {' 和 '}
        <Link target='_blank' href='http://www.jianshu.com/p/2ov8x3'>
          隐私政策
        </Link>
        。
      </Text>
    </Stack>
  )
}
export default observer(Form)
