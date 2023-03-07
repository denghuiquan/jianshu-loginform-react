import { action, flow, observable, makeObservable } from 'mobx'
import axios from 'axios'
import SignInfo from './SignInfo'

export default class SignInfoStore {
  constructor () {
    this.user = new SignInfo({})
    this.redirectUrl = ''
    const userInfoItem = localStorage.getItem('userInfo')
    // 处理空字符串解析失败的情况
    const userInfo = userInfoItem !== '' ? JSON.parse(userInfoItem) : null
    if (userInfo) {
      this.user = new SignInfo(userInfo)
    }

    makeObservable(this, {
      user: observable,
      redirectUrl: observable,
      setSignInfo: action.bound,
      removeSignInfo: action.bound,
      signUp: flow.bound,
      signIn: flow.bound,
      logout: flow.bound
    })
  }

  /**
   * 登录
   * @param {*} user
   * {"user":{
   * "email": "jake@jake.jake2",
   * "password": "jakejake"
   *   }
   * }
   */
  * signIn (user) {
    try {
      let response = yield axios.post(
        `https://conduit.productionready.io/api/users/login`,
        { user }
      )

      if (response.data.user) {
        this.setSignInfo(response.data.user)
        return { success: true }
      }
    } catch (error) {
      // 错误处理
      if (error.response.data.errors) {
        return { errors: error.response.data.errors }
      }
    }
  }

  /**
   * 注册
   * @param {*} user
   * {"user":{
   * "username": "Jacob2",
   * "email": "jake@jake.jake2",
   * "password": "jakejake"
   *  }
   * }
   */
  * signUp (user) {
    try {
      let response = yield axios.post(
        `https://conduit.productionready.io/api/users`,
        { user }
      )

      if (response.data.user) {
        this.setSignInfo(response.data.user)
        return { success: true }
      }
    } catch (error) {
      // 错误处理
      if (error.response.data.errors) {
        return { errors: error.response.data.errors }
      }
    }
  }
  setSignInfo (data) {
    this.user.updateInfo(data)
    localStorage.setItem('userInfo', JSON.stringify(this.user))
  }

  * logout () {
    //  这里需要请求远端服务器
    yield this.removeSignInfo()
    return { success: true }
  }

  removeSignInfo () {
    this.user.updateInfo({})
    localStorage.removeItem('userInfo')
  }
}
