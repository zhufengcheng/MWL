<template>
    <div class="es6Document">
        <documentTemplate :dataTable="dataTableList"></documentTemplate>
    </div>
</template>
<script>
    import documentTemplate from '../components/documentTemplate'
    export default {
        name: 'cssDocument',
        components: {
            documentTemplate
        },
        data(){
            return{
                dataTableList:[
                    {
                        source: 'vue',
                        address: 'https://cn.vuejs.org/',
                        appliance:'PC',
                        name: 'vue官网'
                    },
                    {
                        source: 'iview',
                        address: 'http://v3.iviewui.com/',
                        appliance:'PC',
                        name: 'iview官网'
                    },
                    {
                        source: 'Element',
                        address: 'https://element.eleme.cn/#/zh-CN/component/installation',
                        appliance:'PC',
                        name: 'Element官网'
                    },
                    {
                        source: 'Mint UI',
                        address: 'http://mint-ui.github.io/#!/zh-cn',
                        appliance:'移动',
                        name: 'Mint UI官网'
                    },
                    {
                        source: 'VUX',
                        address: 'https://doc.vux.li/zh-CN/install/biolerplate.html',
                        appliance:'移动',
                        name: 'VUX官网'
                    }

                ]
            }
        }
    }
</script>
