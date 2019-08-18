const vuexStreamline = {
    state: {
        count: 100,
        isLogin: false // 登录状态
    },
    mutations: { //修改数据
        increase(state) {
            state.count += 1;
        },
        Login(state) {
            state.isLogin = true
        },
        logout(state) {
            state.isLogin = false
        }
    },
    // 计算属性,对state中的数据进行加工处理
    getters: {
        money: state => {
            return state.count + '元'
        }

    },
    actions: {//异步操作时使用
        // increaseAsync(store){
        //
        // },
        // 下面为解构写法 payload为传参
        increaseAsync({state, commit}, payload) {
            setTimeout(() => {
                commit('increase')
            }, 1000)
        },
        submitLogin({commit}, payload) {
            return new Promise(resolve => {
                setTimeout(() => {
                    commit('Login')
                    resolve(true)
                }, 2000)
            })
        }
    }
}
export default vuexStreamline
