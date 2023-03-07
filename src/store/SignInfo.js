import { action, makeObservable, observable } from 'mobx'
export default class SignInfo {
  constructor (user) {
    this.email = user.email
    this.username = user.username
    this.bio = user.bio
    this.image = user.image
    this.token = user.token

    makeObservable(this, {
      email: observable,
      username: observable,
      bio: observable,
      image: observable,
      token: observable,
      updateInfo: action.bound
    })
  }

  updateInfo (data) {
    this.email = data.email
    this.username = data.username
    this.bio = data.bio
    this.image = data.image
    this.token = data.token
  }
}
