<template>
    <div class="vuexDomeStore">
        <Row>
            <Col span="24">
                <Button type="success" @click="simulation">模拟 vuex</Button>
                <Button type="success" @click="say">加</Button>
                <Badge :count="$store.state.vuexDomeStore.count"></Badge>
                <Button type="success" @click="Less">减</Button>
            </Col>
        </Row>
        <Row style="margin-top:15px">
            <Col span="24">
                <Table stripe :columns="columns" :data="$store.state.vuexDomeStore.list"></Table>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: 'vuexDomeStore',
        data() {
            return {
                testNum: '我是模拟 vuex，从vuexDome.vue 点击（模拟 vuex）按钮传递过来得参数',
                columns: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ]
            }
        },
        created() {
            // 初始化
            if (this.$store.state.vuexDomeStore.list.length <= 0) {
                this.$store.dispatch('initList')
            }
        },
        methods: {
            // 加
            say() {
                this.$store.commit('increment')
            },
            // 减
            Less() {
                if (this.$store.state.vuexDomeStore.count <= 1) {
                    this.$Message.warning('已经减到最小值 1');
                } else {
                    this.$store.commit('incrementLess')
                }
            },
            // 模拟 vuex
            simulation() {
                this.$bus.$emit('curTestNum', this.testNum)
            }
        }
    }
</script>
