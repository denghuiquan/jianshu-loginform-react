import React from 'react'
import UserForm from '../components/UserForm'
import { useToast, useBoolean } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useRootStore } from '../store'

function SignIn () {
  const { userStore } = useRootStore()
  const [isRequesting, { toggle }] = useBoolean(false)
  const toast = useToast()
  const navigate = useNavigate()

  const clickHandler = async formData => {
    toggle()
    const { email, password } = formData
    const res = await userStore.signIn({ email, password })
    if (res.success) {
      // 提示登录成功，存储登录状态信息，展示登录后的页面
      toast({
        title: `登录成功`,
        status: 'success',
        isClosable: true,
        position: 'top'
      })
      navigate('/')
    } else {
      // 页面登录错误提示
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
        type='sign_in'
        clickHandler={clickHandler}
      />
    </>
  )
}

export default SignIn
