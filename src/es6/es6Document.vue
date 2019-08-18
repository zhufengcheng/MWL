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
                        source: '阮一峰',
                        address: 'http://es6.ruanyifeng.com/ 或http://javascript.ruanyifeng.com/',
                        appliance:'PC,移动',
                        name: 'es6教程'
                    },
                    {
                        source: '菜鸟教程',
                        address: 'https://www.runoob.com/w3cnote/es6-tutorial.html',
                        appliance:'PC,移动',
                        name: 'es6文档'
                    },

                ]
            }
        }
    }
</script>
