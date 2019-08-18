import axios from 'axios'
// import router from '../router/router'
// import vueCookies from 'vue-cookies'
// import { AlertModule } from "vux";
// import Vue from 'vue'
// let baseUrl = '';
// if (process.env.NODE_ENV == 'development') {
//     baseUrl = 'http://192.168.1.130:9303';

// } else if (process.env.NODE_ENV == 'production') {
//     baseUrl = 'http://lpfi-test.merckgroup.com/api';
//     //baseUrl = 'http://bj1.shinsoft.net:58811/api';
// }

 // axios.defaults.baseURL = baseUrl;
// axios 配置  timeout单位为毫秒
// axios.defaults.timeout = 1000 * 60 * 30
//
// axios.defaults.headers = {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*'
// }

// http request 拦截器
// var num = 0
// axios.interceptors.request.use(
//     config => {
//         num++
//         Vue.$vux.loading.show({
//             text: "数据正在处理中 请稍后..."
//         });
//             var isKey = vueCookies.isKey("MerckWeChatAuthorization")
//         if (isKey && vueCookies.get('MerckWeChatAuthorization').Token != null && vueCookies.get('MerckWeChatAuthorization').Token != undefined) {
//             config.headers.Authorization = 'MerckWeChatAuthentication ' + vueCookies.get('MerckWeChatAuthorization').Token
//         }
//         config.data = JSON.stringify(config.data)
//         return config
//     },
//     err => {
//         return Promise.reject(err)
//     }
// )
// http response 拦截器

// axios.interceptors.response.use(
//     response => {
//         num--
//         if (num <= 0) {
//             Vue.$vux.loading.hide();
//         }
//
//         if (response.status === 204) {
//             return response
//         } else {
//             return response
//         }
//     },
//     error => {
//
//         let titleErr = '错误'
//         let contentErr = '出现故障，请联系管理员'
//         var responseError = JSON.parse( error.response.data)
//
//         let messageErr = responseError.ExceptionMessage ==="" || responseError.ExceptionMessage ===undefined?responseError.Message:responseError.ExceptionMessage
//
//         num--
//         if (num <= 0) {
//             Vue.$vux.loading.hide();
//         }
//         if (error.response) {
//             switch (error.response.status) {
//                 case 500:
//                     if (error.response.data) {
//                         AlertModule.show({
//                             title: titleErr,
//                             content: messageErr,
//                         });
//                     } else {
//                         AlertModule.show({
//                             title: titleErr,
//                             content: "当前操作引发未知错误，请联系管理员"
//                         });
//                     }
//                     break
//                 case 400:
//                     if (error.response.data) {
//                         AlertModule.show({
//                             title: titleErr + 400,
//                             content: messageErr,
//                         });
//
//                     } else {
//                         AlertModule.show({
//                             title: titleErr + 400,
//                             content: "当前操作引发未知错误，请联系管理员"
//                         });
//                     }
//                     break
//                 case 401:
//                     // if (error.response.data) {
//                     //     AlertModule.show({
//                     //         title: titleErr,
//                     //         content: messageErr
//                     //     });
//                     // } else {
//                     //     AlertModule.show({
//                     //         title: titleErr,
//                     //         content: contentErr
//                     //     });
//                     // }
//                     router.push({ path: '/accessDenied' })
//                     break
//                 case 404:
//                     AlertModule.show({
//                         title: titleErr + 404,
//                         content: "找不到访问的资源"
//                     });
//                     break
//                 default:
//                     AlertModule.show({
//                         title: titleErr + error.response.status,
//                         content: contentErr
//                     });
//                     break
//             }
//         } else {
//             console.log(error.response,'bbb');
//              AlertModule.show({
//                  title: titleErr +error.response.status,
//                  content: contentErr
//              });
//         }
//         return Promise.reject(error)
//     }
// )
export default axios
