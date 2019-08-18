<template>
    <div class="iviewMuster">
        <Tabs :animated="false">
            <TabPane label="Upload 上传">
                <upload></upload>
            </TabPane>
            <TabPane label="Table 动态列">
                <tableDynamicColumn></tableDynamicColumn>
            </TabPane>
        </Tabs>
    </div>
</template>
<script>
    import upload from './components/upload'
    import tableDynamicColumn from './components/tableDynamicColumn'
    export default {
        name: 'iviewMuster',
        components: {
            upload,
            tableDynamicColumn
        },
        data(){
            return{

            }
        }
    }
</script>
