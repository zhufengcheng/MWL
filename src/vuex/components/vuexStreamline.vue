<template>
    <div class="vuexStreamline">
        <Row>
            <Col span="24">
                <p>{{$store.state.vuexStreamline.count}}</p>
                <p>{{$store.getters.money}}</p>
                <Button @click="inc" type="primary" long>同步inc</Button>
            </Col>
            <Col span="24">
                <p>{{count}}</p>
                <p>{{money}}</p>
                <Button @click="incAsync" type="primary" long>异步incAsync</Button>
            </Col>
        </Row>
    </div>
</template>

<script>
    // 映射状态对的 mapState时一个函数，最终会返回一个对象
    import {mapState, mapGetters,mapActions,mapMutations} from 'vuex'
    export default {
        name: 'vuexStreamline',
        data() {
            return {

            }
        },
        created() {

        },
        methods: {
            ...mapMutations(['increase']),
            ...mapActions(['increaseAsync']),
            inc() {
                // this.$store.commit('increase')
                this.increase()
            },
            incAsync() {
                // this.$store.dispatch('increaseAsync')
                this.increaseAsync()
            }
        },
        computed: {
            // 解构 {count:this.$store.state.count}
            // ...mapState(['count']),
            ...mapState({
                count: state => state.vuexStreamline.count
            }),
            ...mapGetters(['money'])
        }
    }
</script>
