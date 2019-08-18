<template>
    <div class="vueMuster">
        <Tabs :animated="false" value="name4">
            <TabPane label="vue加入购物车" name="name1">
                <vueShoppingCart></vueShoppingCart>
            </TabPane>

            <TabPane label="插槽slot" name="name2">
                <slotDome>
                    <template slot="head">
                        <h2>带名字插槽</h2>
                    </template>
                    content...默认插槽
                    <template slot="foot">
                        <button>按钮</button>
                    </template>
                </slotDome>
            </TabPane>
            <TabPane label="两级 复选框" name="name3">
                <checkboxDome></checkboxDome>
            </TabPane>
            <TabPane label="三级 复选框" name="name4">
                <checkboxThirdLevelDome></checkboxThirdLevelDome>
            </TabPane>
        </Tabs>
    </div>
</template>
<script>
    import vueShoppingCart from './vueShoppingCart.vue'
    import checkboxDome from './checkboxDome.vue'
    import slotDome from './slotDome'
    import checkboxThirdLevelDome from './checkboxThirdLevelDome'
    export default {
        name: 'vueMuster',
        components: {
            vueShoppingCart,
            slotDome,
            checkboxDome,
            checkboxThirdLevelDome
        },
        data(){
            return{

            }
        }
    }
</script>
