// key
const TOKEN_KEY = 'itcast_geek_pc'
// 获取key
const getToken = () => localStorage.getItem(TOKEN_KEY)
// 设置key
const setToken = (token: string) => localStorage.setItem(TOKEN_KEY, token)
// 清除key
const clearToken = () => localStorage.removeItem(TOKEN_KEY)
// 是否登录
const isAuth = () => !!getToken()

export { isAuth, getToken, setToken, clearToken }
