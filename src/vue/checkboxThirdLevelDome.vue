<template>
    <div class="checkboxThirdLevelDome">
        <Form :label-width="120" label-position="right">
            <Row>
                <Col span="24">
                    <FormItem label="二级ID" :label-width="100">
                        {{ProductLineID}}
                    </FormItem>
                </Col>
                <Col span="24">
                    <FormItem label="二级Name" :label-width="100">
                        {{ProductLineName}}
                    </FormItem>
                </Col>
                <Col span="24">
                    <FormItem label="三级ID" :label-width="100">
                        {{ProductID}}
                    </FormItem>
                </Col>
                <Col span="24">
                    <FormItem label="三级Name" :label-width="100">
                        {{ProductReferred}}
                    </FormItem>
                </Col>

                <Col span="24">
                    <FormItem label="二级ID + 三级ID" :label-width="100">
                        {{ProductInGroup}}
                    </FormItem>
                </Col>
            </Row>
        </Form>
        <checkboxThirdLevelDomeComponents v-model="detailForm.MaterialGroupIDs" ref="buTypingModal"
                                          :productLineList="productLineList"
                                          @productGroup="onProductGroup"></checkboxThirdLevelDomeComponents>
    </div>
</template>
<script>
    import checkboxThirdLevelDomeComponents from './components/checkboxThirdLevelDomeComponents'
    import axios from 'axios'

    export default {
        name: 'checkboxThirdLevelDome',
        components: {
            checkboxThirdLevelDomeComponents
        },
        async created() {
            const ret = await axios.get('/Product/QueryProductLineAndProduct');
            let dataAll = ret.data.list;
            dataAll.forEach(item => {
                item.selectedAll = false;
                item.indeterminate = false;
                item.selectedChildren = [];
            });
            this.productLineList = JSON.parse(JSON.stringify(dataAll));
        },
        data() {
            return {
                detailForm: {},
                productLineList: [],
                ProductID:[],
                ProductInGroup:[],
                ProductLineID:[],
                ProductReferred:[],
                ProductLineName:[]
            }
        },
        methods: {
            onProductGroup(data) {
                console.log(data,'data')
                this.ProductID = data.ProductID
                this.ProductInGroup = data.ProductInGroup
                this.ProductLineID = data.ProductLineID
                this.ProductReferred = data.ProductReferred
                this.ProductLineName = data.ProductLineName
            }
        }
    }
</script>
<style scoped>
    .checkboxThirdLevelDome .ivu-form-item{
        margin-bottom: 0!important;
    }
    .checkboxThirdLevelDome .ivu-col-span-6,
    .checkboxThirdLevelDome .ivu-col-span-24{
        text-align: left!important;
    }
</style>
