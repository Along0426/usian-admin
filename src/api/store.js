const Token = 'token'

const Userinfo = 'userinfo'

const SetToken = (token) => {
  localStorage.setItem(Token, token)
}

const SetUserinfo = (userinfo) => {
  localStorage.setItem(Userinfo, userinfo)
}

const GetToken = () => {
  localStorage.getItem(Token)
}

const GetUserinfo = () => {
  localStorage.getItem(Userinfo)
}

const RemTokenuserinfo = () => {
  localStorage.removeItem(Token)
  localStorage.removeItem(Userinfo)
}

export default {
  SetToken, SetUserinfo, GetToken, GetUserinfo, RemTokenuserinfo
}
