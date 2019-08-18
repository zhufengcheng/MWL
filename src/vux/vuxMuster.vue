<template>
    <div class="cssDocument">
        <Tabs :animated="false">
            <TabPane label="VUX-Scroller">
                <scroller></scroller>
            </TabPane>
        </Tabs>
    </div>
</template>
<script>
    import scroller from './components/scroller'
    export default {
        name: 'cssDocument',
        components: {
            scroller
        },
        data(){
            return{

            }
        }
    }
</script>
