<template>
    <div class="checkboxDome">
        {{detailForm.MaterialGroupIDs}}
        <checkboxDomeComponents v-model="detailForm.MaterialGroupIDs" ref="buTypingModal" :buTypingAttr="buTypingAttr" @buTypingVal="buTypingVal"></checkboxDomeComponents>
        <h1>{{packing}}</h1>
    </div>
</template>
<script>
    import checkboxDomeComponents from './components/checkboxDomeComponents'
    import axios from 'axios'
    export default {
        name: 'checkboxDome',
        components: {
            checkboxDomeComponents
        },
        async created(){
            const ret = await axios.get('/Product/QueryProductPackingMaterialGroupWithDataAuthority');
            let dataAll = ret.data.list;
            dataAll.forEach(item => {
                item.selectedAll = false;
                item.indeterminate = false;
                item.selectedChildren = [];
            });
            this.buTypingAttr = JSON.parse(JSON.stringify(dataAll));
        },
        data() {
            return {
                detailForm: {},
                buTypingAttr: [],
                packing:''
            }
        },
        methods:{
            buTypingVal(buTypingVal){
                this.packing = buTypingVal;
            }
        }
    }
</script>
<style scoped>
    .checkboxDome{
        height: 400px;
        width: 100%;
        border: 1px saddlebrown solid;
    }
</style>
