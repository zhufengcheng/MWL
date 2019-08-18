<template>
    <div class="elementMuster">
        <Tabs :animated="false" v-model="activeName">
            <TabPane label="Tree" name="tree">
                <tree></tree>
            </TabPane>
            <TabPane label="Tree模板" name="treeCom">
                <treeCom></treeCom>
            </TabPane>
            <TabPane label="自定义Select 选择器" name="customizeSelect">
                <customizeSelect></customizeSelect>
            </TabPane>

            
        </Tabs>
    </div>
</template>
<script>
    import  tree from './tree'
    import treeCom from  './treeCom'
    import customizeSelect from  './customizeSelect'
    export default {
        name: 'elementMuster',
        components: {
            tree,
            treeCom,
            customizeSelect
        },
        methods: {

        },

        data() {
            return {
                activeName:'customizeSelect'
            };
        }
    };
</script>
