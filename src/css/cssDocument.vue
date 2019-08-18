<template>
    <div class="cssDocument">
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
                        source: '菜鸟教程',
                        address: 'https://www.runoob.com/css/css-tutorial.html',
                        appliance:'PC,移动',
                        name: 'css文档'
                    },
                    {
                        source: 'w3school',
                        address: '',
                        appliance:'PC,移动',
                        name: 'css文档'
                    },
                    {
                        source: '中文网',
                        address: '',
                        appliance:'PC,移动',
                        name: 'css文档'
                    }
                ]
            }
        }
    }
</script>
