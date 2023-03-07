import React from 'react'
import { useToast, useBoolean } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import UserForm from '../components/UserForm'
import { useRootStore } from '../store'

function SignUp () {
  const toast = useToast()
  const [isRequesting, { toggle }] = useBoolean(false)
  const { userStore } = useRootStore()
  const navigate = useNavigate()
  const clickHandler = async formData => {
    toggle()
    const { username, email, password, phone } = formData
    const res = await userStore.signUp({
      username,
      email: email || phone,
      password
    })
    if (res.success) {
      // 提示注册成功，存储登录状态信息，展示后须页面
      toast({
        title: `注册成功`,
        status: 'success',
        isClosable: true,
        position: 'top'
      })
      navigate('/')
    } else {
      // 页面注册错误提示
      let errMsg = Object.keys(res.errors).reduce(
        (errmsg, key) => `${errmsg}${key} ${res.errors[key].join(',')}`,
        ''
      )
      toast({
        title: errMsg,
        status: 'error',
        isClosable: true,
        position: 'top'
      })
    }
    toggle()
  }
  return (
    <>
      <UserForm
        isRequesting={isRequesting}
        type='sign_up'
        clickHandler={clickHandler}
      />
    </>
  )
}

export default SignUp
