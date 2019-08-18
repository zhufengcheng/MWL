const vuexDomeStore = {
    state: {
        count: 4,
        list:[]
    },
    mutations: {
        increment (state) {
            state.count++
            state.list.push({
                name:'程瑞杰'+state.count,
                age: 30,
                address: '北京昌平',
                date: '2016-10-04'
            })
        },
        incrementLess (state) {
            state.count--
            console.log(state.list.length)
            state.list.shift(state.list.length);
        },
        initList (state,data) {
            state.list = data
        }
    },
    actions: {
        initList (context) {
            let dataCon = [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ]
            context.commit('initList',dataCon)
        }
    }
}
export default vuexDomeStore
