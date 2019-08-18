<template>
    <div class="vueShoppingCartComponents">
        <Table border :columns="columns" :data="cart" v-if="cart.length>0" @on-selection-change="cartChange"></Table>
        <Row type="flex" justify="end" :gutter="10">
            <Col span="8">
                选中数量：{{activeCount}}
            </Col>
            <Col span="8">
                总条数：{{count}}
            </Col>
            <Col span="8">
                ￥{{total}}
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        name: 'vueShoppingCartComponents',
        components: {

        },
        computed:{
            // 过滤出选中项数量
            // activeCount () {
            //     return this.cart.filter(v=>v._checked).length
            // },
            count () {
                return this.cart.length
            },
            total () {
                let num = 0
                this.activeCountAttr.forEach(item=>{
                    if(item._checked){
                        num += item.count * item.price
                    }
                })
                return num
            }
        },
        props: ["cart","name"],
        data(){
            return{
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
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
                        title: '数量',
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
                                }, '加'),
                                h(
                                    "span",params.row.count
                                ),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginLeft: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.minus(params.index)
                                        }
                                    }
                                }, '减')
                            ]);
                        }
                    },
                    {
                        title: '总价格',
                        key: 'totalPrice',
                        render: function(h, params) {
                            return h(
                                "div", '￥'+params.row.count * params.row.price
                            );
                        }
                    }
                ],
                activeCountAttr:[],
                activeCount: ''
            }
        },
        methods:{
            add (i) {
                this.cart[i].count += 1;
                this.activeCountAttr=this.cart
            },
            minus (i) {
                const count = this.cart[i].count
                if(count > 1){
                    this.cart[i].count -= 1;
                    this.activeCountAttr=this.cart
                }else {
                    this.remove(i)
                }
            },
            remove (i) {
               if(window.confirm("确定删除 ？")){
                   this.cart.splice(i,1)
                   this.activeCountAttr=this.cart
               }
            },
            cartChange (val) {
                this.activeCount = val.length
                this.activeCountAttr = val
            }
        },
        watch:{
            cart () {
                this.activeCount = this.cart.length
                this.activeCountAttr = this.cart
            }
        }
    }
</script>
