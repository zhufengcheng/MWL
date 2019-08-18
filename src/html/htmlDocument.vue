<template>
    <div class="htmlDocument">
        <documentTemplate :dataTable="dataTableList"></documentTemplate>
    </div>
</template>
<script>
    import documentTemplate from '../components/documentTemplate'
    export default {
        name: 'htmlDocument',
        components: {
            documentTemplate
        },
        data(){
            return{
                dataTableList:[
                    {
                        source: '菜鸟教程',
                        address: 'https://www.runoob.com/html/html-tutorial.html',
                        appliance:'PC,移动',
                        name: 'html文档'
                    },
                    {
                        source: 'w3school',
                        address: 'http://www.w3school.com.cn/html/index.asp',
                        appliance:'PC,移动',
                        name: 'html文档'
                    },
                    {
                        source: '中文网',
                        address: 'https://www.html.cn/doc/html/',
                        appliance:'PC,移动',
                        name: 'html文档'
                    }
                ]
            }
        }
    }
</script>
