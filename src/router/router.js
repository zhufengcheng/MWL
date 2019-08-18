import Vue from 'vue'
import Router from 'vue-router'
import Main from '../main.vue'
import store from "../store"
// 插件挂载
Vue.use(Router)
// 方法参数接受的是路由  route
function func(route) {
    return {
        id: route.params.id,
        msg: route.params.msg,
        foo: route.query.foo
    }
}
// 用解构
function funcc({params, query}) {
    return {
        id: params.id,
        msg: params.msg,
        foo: query.foo
    }
}
// 路由器router和路由route
const router = new Router({
    //  mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login' //重定向
        },
        // 登陆
        {
            path: '/login',
            name: 'login',
            meta: {
                title: '登陆'
            },
            component: () => import('../login.vue')
        },
        {
            path: '/main',
            name: 'main',
            meta: {
                title: '主页'
            },
            component: Main,
            children: [
                // 首页
                {
                    path: '/home',
                    name: 'home',
                    meta: {
                        title: '首页'
                    },
                    component: () => import('../home/home.vue')
                },
                // vux
                {
                    path: '/vuxMuster',
                    name: 'vuxMuster',
                    meta: {
                        title: 'VUX'
                    },
                    component: () => import('../vux/vuxMuster')
                },
                // pdf
                {
                    path: '/pdf',
                    name: 'pdf',
                    meta: {
                        title: 'pdf'
                    },
                    component: () => import('../pdf/pdfDome.vue')
                },
                // {
                //     path: 'main',
                //     title: '主页',
                //     name: 'main',
                //     meta: {
                //         requireAuth: true
                //     },
                //     icon: 'compose',
                //     component: () => import('../main.vue')
                // },
                // vuex
                {
                    path: '/vuexDome',
                    name: 'vuexDome',
                    meta: {
                        title: 'vuex实例'
                    },
                    component: () => import('../vuex/vuexDome.vue')
                },
                // vuex
                {
                    path: '/htmlDocument',
                    name: 'htmlDocument',
                    meta: {
                        title: 'html文档'
                    },
                    component: () => import('../html/htmlDocument.vue')
                },
                {
                    path: '/cssDocument',
                    name: 'cssDocument',
                    meta: {
                        title: 'css文档'
                    },
                    component: () => import('../css/cssDocument.vue')
                },

                {
                    path: '/es6Document',
                    name: 'es6Document',
                    meta: {
                        title: 'es6文档'
                    },
                    component: () => import('../es6/es6Document.vue')
                },

                {
                    path: '/vueDocument',
                    name: 'vueDocument',
                    meta: {
                        title: 'es6文档'
                    },
                    component: () => import('../vue/vueDocument.vue')
                },
                // css 实例集合
                {
                    path: '/cssMuster',
                    name: 'cssMuster',
                    meta: {
                        title: 'css实例'
                    },
                    component: () => import('../css/cssMuster.vue')
                },
                // vue 实例集合
                {
                    path: '/vueMuster',
                    name: 'vueMuster',
                    meta: {
                        title: 'vue实例'
                    },
                    component: () => import('../vue/vueMuster.vue')
                },
                // es6实例集合
                {
                    path: '/es6Muster',
                    name: 'es6Muster',
                    meta: {
                        title: 'es6实例'
                    },
                    component: () => import('../es6/es6Muster.vue')
                },
                // html 实例集合
                {
                    path: '/htmlMuster',
                    name: 'htmlMuster',
                    meta: {
                        title: 'html实例'
                    },
                    component: () => import('../html/htmlMuster.vue')
                },
                // element 实例集合
                {
                    path: '/elementMuster',
                    name: 'elementMuster',
                    meta: {
                        title: 'element实例'
                    },
                    component: () => import('../element/elementMuster.vue')
                },
                // iview 实例集合
                {
                    path: '/iviewMuster',
                    name: 'iviewMuster',
                    meta: {
                        title: 'iview实例'
                    },
                    component: () => import('../iview/iviewMuster.vue')
                },
                // 日期格式化
                {
                    path: '/momentMuster',
                    name: 'momentMuster',
                    meta: {
                        title: '日期格式化'
                    },
                    component: () => import('../moment/momentMuster.vue')
                },
                // 拖拽
                {
                    path: '/draggable',
                    name: 'draggable',
                    meta: {
                        title: '拖拽'
                    },
                    component: () => import('../draggable/draggable.vue')
                },
                
                // 路由，传参
                {
                    path: '/routerDome',
                    name: 'routerDome',
                    meta: {
                        title: '路由，传参实例'
                    },
                    component: () => import('../vue/router/routerDome.vue'),
                    children: [
                        {
                            path: 'static',
                            name: 'static',
                            component: () => import('../vue/router/routerA.vue'),
                            props: {crj: 'c-r-j'} // 给组件传静态值
                        },
                        {
                            path: 'routerC/:crj',
                            name: 'routerC',
                            component: () => import('../vue/router/routerC.vue'),
                            props: true
                        },
                        {
                            path: 'routerA',
                            name: 'routerA',
                            component: () => import('../vue/router/routerA.vue')
                        },
                        {
                            path: 'routerB/:id/:msg',
                            name: 'routerB',
                            // route level code-splitting
                            // this generates a separate chunk (about.[hash].js) for this route
                            // which is lazy-loaded when the route is visited.
                            component: () => import(/* webpackChunkName: "about" */ '@/vue/router/routerB.vue'),
                            props: func  // 通过函数
                        }
                    ]
                }
            ]
        }
    ]
})
router.beforeEach((to, from, next) => {
    // if (to.path !== '/login') {
    //     console.log(store.state.vuexStreamline.isLogin,'11111111')
    //     if(store.state.vuexStreamline.isLogin){
    //         next()
    //     }else{
    //         next('/login?redirect='+to.path)
    //     }
    // } else {
    //     next()
    // }
    next()
})
export default router
