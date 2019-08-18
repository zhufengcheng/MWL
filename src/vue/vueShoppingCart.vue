<template>
    <div class="vueShoppingCart">
        <Row>
            <Col span="8">
                <Table border :columns="columns" :data="goods"></Table>
            </Col>
            <Col span="16">
                <vueShoppingCartComponents :cart="cart" :name="name"></vueShoppingCartComponents>
            </Col>
        </Row>

        <Row class="marginTop15">
            <Col span="8">
                <Table border :columns="columnsOne" :data="goodsOne"></Table>
            </Col>
            <Col span="16">
                <vueShoppingCartOneComponents :name="name"></vueShoppingCartOneComponents>
            </Col>
        </Row>
    </div>
</template>
<script>
    import vueShoppingCartComponents from './components/vueShoppingCartComponents.vue';
    import vueShoppingCartOneComponents from './components/vueShoppingCartOneComponents.vue';
    import axios from 'axios'
    export default {
        name: 'vueShoppingCart',
        components: {
            vueShoppingCartComponents,
            vueShoppingCartOneComponents
        },
       async created(){
            const ret = await axios.get('/api/goods');
            this.goods = ret.data.list
            console.log(ret,'111111111111')
        },
        data(){
            return{
                name:'加入购物车',
                goods:[
                    {
                        id:1,
                        text:'html',
                        price:1000
                    },
                    {
                        id:2,
                        text:'css',
                        price:2000
                    }
                ],
                columns: [
                    {
                        title: '课程名称',
                        key: 'text'
                    },
                    {
                        title: '单价',
                        key: 'price',
                        render: function(h, params) {
                            return h(
                                "div", '￥'+params.row.price
                            );
                        }
                    },
                    {
                        title: '操作',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.add(params.index)
                                        }
                                    }
                                }, '加入购物车')
                            ]);
                        }
                    }
                ],
                goodsOne:[
                    {
                        id:1,
                        text:'es6',
                        price:30
                    },
                    {
                        id:2,
                        text:'vue',
                        price:50
                    }
                ],
                columnsOne: [
                    {
                        title: '课程名称',
                        key: 'text'
                    },
                    {
                        title: '单价',
                        key: 'price',
                        render: function(h, params) {
                            return h(
                                "div", '￥'+params.row.price
                            );
                        }
                    },
                    {
                        title: '操作',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.addOne(params.index)
                                        }
                                    }
                                }, '加入购物车')
                            ]);
                        }
                    }
                ],
                cart:[]
            }
        },
        methods:{
            add (i) {
                const good = this.goods[i];
                const ret = this.cart.find(v=>v.id === good.id);
                if (ret) {
                    ret.count += 1;
                }else {
                    this.cart.push({
                        ...good,
                        count:1,
                        _checked:true
                    })
                }
            },
            addOne (i) {
                const goodsOne = this.goodsOne[i];
                this.$CRJ.$emit('addCart', goodsOne);
                this.$root.$emit('addCart', goodsOne)
            }
        }
    }
</script>
<style scoped>
    .marginTop15{
        margin-top: 15px;
    }
</style>
