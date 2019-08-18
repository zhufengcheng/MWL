<template>
    <div class="vuexDome">
        <Tabs value="name1">
            <TabPane label="vuex复杂" name="name1">
                <vuexDomeStore></vuexDomeStore>
            </TabPane>
            <TabPane label="vuex精简" name="name2">
                <vuexStreamline></vuexStreamline>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
    import vuexDomeStore from './components/vuexDomeStore'
    import vuexStreamline from './components/vuexStreamline'

    export default {
        name: 'vuexDome',
        components: {
            vuexDomeStore,
            vuexStreamline
        },
        data() {
            return {}
        },
        created() {

        },
        methods: {}
    }
</script>
