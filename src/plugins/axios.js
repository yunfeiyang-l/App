import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8' //不要改 
// 创建axios实例

const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 20000 // 20S 
})
// request拦截器
service.interceptors.request.use(
  config => {

    // let token = window.localStorage.getItem('token')
    // token = token ? '' + token : ''
    // let dc = config.url.substring(0, 11)
    // if (config.url == '/Appeal/login' || config.url == '/Appeal/register' || dc == '/captchaSMS') {

    // } else {
    //   config.headers = {
    //     Authorization: "Bearer " + token
    //   }
    // }

    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }


)

// 响应拦截器
service.interceptors.response.use(res => {

    // const code = res.data.code
    // if (res.data.token) {
    //   window.localStorage.setItem("token", res.data.token);
    //   store.dispatch("user/U_ACTIONS_USERDATA");

    // }



    // if (code == 401) {

    //   let token = window.localStorage.getItem('token')
    //   if (token) {
    //     window.localStorage.removeItem('token')
    //     window.localStorage.removeItem('user')
    //   }
    //   Dialog.confirm({
    //     message: '您还未登录，请登录',
    //     beforeClose: ((action, done) => {
    //       // console.log(action)
    //       if (action === 'confirm') {
    //         location.pathname = '/Login'
    //         setTimeout(done, 10);
    //       } else {
    //         // vm.$router.back('/home')
    //         done();
    //       }
    //     })
    //   });

    // } else if (code != 200) {

    //   let msg = `${res.data.msg}`;
    //   Toast.fail({
    //     message: msg,
    //   });
    //   return Promise.reject('error')
    // } else {
    //  return res.data
    // }
    return res
  },
  error => {
    console.log('err' + error)

    return Promise.reject(error)
  }
)

window.axios = service
export default service