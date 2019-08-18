<template>
    <div class="cssDocument">
        <Tabs :animated="false">
            <TabPane label="伪类切换背景">
                <cssExample></cssExample>
            </TabPane>
        </Tabs>
    </div>
</template>
<script>
    import cssExample from './components/cssExample'
    export default {
        name: 'cssDocument',
        components: {
            cssExample
        },
        data(){
            return{

            }
        }
    }
</script>
