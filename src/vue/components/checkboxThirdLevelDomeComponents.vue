<template>
    <div class="checkboxThirdLevelDomeComponents">
        <Row>
            <Col span="24">
                <!-- 产品线、产品组 -->
                <div class="divider">
                    <Checkbox :indeterminate="indeterminate" :value="checkAll"
                              @click.prevent.native="firstLevel(productLineList)">全选
                    </Checkbox>
                </div>
                <!--checkBox-->
                <div v-for="(item,index) in productLineList" class="divider" :key="index">
                    <CheckboxGroup v-model="selectedProductLine" @on-change="secondary(index,productLineList)">
                        <Checkbox :indeterminate="item.indeterminate" :value="item.selectedAll" :key="item.label"
                                  :label="item.label">{{item.label}}
                        </Checkbox>
                    </CheckboxGroup>
                    <CheckboxGroup class="checkboxGroupLeft" v-model="item.selectedChildren"
                                   @on-change="thirdLevel(index,item.selectedChildren,productLineList)">
                        <Checkbox v-for="itemOne in item.children" :key="itemOne.label" :label="itemOne.label"
                        >{{itemOne.label}}
                        </Checkbox>
                    </CheckboxGroup>
                </div>
                <!--checkbox-->
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        props: ['productLineList'],
        name: 'checkboxThirdLevelDomeComponents',
        created() {

        },
        data() {
            return {
                indeterminate: false,
                checkAll: false,
                selectedProductLine: [],
                productGroup:{}
            }
        },
        methods: {
            // 一级全选
            firstLevel(dataAll) {
                console.log(dataAll, '一级全选')
                if (this.indeterminate) {
                    this.checkAll = false
                } else {
                    this.checkAll = !this.checkAll
                }
                this.indeterminate = false
                // 所有产品线 集合
                let productLineAll = []
                dataAll.forEach(parent => {
                    productLineAll.push(parent.label)
                    // 所有产品 集合
                    let childrenAll = []
                    parent.children.forEach(function (item) {
                        childrenAll.push(item.label)
                    })
                    if (this.checkAll) {
                        parent.indeterminate = false
                        parent.selectedAll = !parent.selectedAll
                    } else {
                        parent.indeterminate = true
                        parent.selectedAll = false
                    }
                    parent.indeterminate = false
                    if (this.checkAll) {
                        parent.selectedAll = true
                        parent.selectedChildren = childrenAll
                    } else {
                        parent.selectedAll = false
                        parent.selectedChildren = []
                    }
                })
                this.selectedProductLine = productLineAll
                if (this.checkAll) {
                    this.selectedProductLine = productLineAll
                } else {
                    this.selectedProductLine = []
                }
            },
            // 二级全选
            secondary(index, dataAll) {
                console.log(dataAll, index, '二级全选')
                let childrenAll = []
                dataAll[index].children.forEach(function (item) {
                    childrenAll.push(item.label)
                })
                if (dataAll[index].indeterminate) {
                    dataAll[index].selectedAll = false
                } else {
                    dataAll[index].selectedAll = !dataAll[index].selectedAll
                }
                dataAll[index].indeterminate = false

                if (dataAll[index].selectedAll) {
                    dataAll[index].selectedChildren = childrenAll
                    if (!this.selectedProductLine.includes(dataAll[index].label)) {
                        this.selectedProductLine.push(dataAll[index].label)
                    }
                } else {
                    dataAll[index].selectedChildren = []
                    if (this.selectedProductLine.includes(dataAll[index].label)) {
                        this.selectedProductLine.splice(this.selectedProductLine.findIndex(item => item === dataAll[index].label), 1)
                    }
                }
                this.setAllProductLineCheckStatus(dataAll,index)
            },
            thirdLevel(index, data, dataAll) {
                console.log(dataAll, index, '三级选')
                if (data.length === dataAll[index].children.length) {
                    dataAll[index].indeterminate = false
                    dataAll[index].selectedAll = true
                    if (!this.selectedProductLine.includes(dataAll[index].label)) {
                        this.selectedProductLine.push(dataAll[index].label)
                    }
                } else if (data.length > 0) {
                    dataAll[index].indeterminate = true
                    dataAll[index].selectedAll = false
                    if (this.selectedProductLine.includes(dataAll[index].label)) {
                        this.selectedProductLine.splice(this.selectedProductLine.findIndex(item => item === dataAll[index].label), 1)
                    }
                } else {
                    dataAll[index].indeterminate = false
                    dataAll[index].selectedAll = false
                    if (this.selectedProductLine.includes(dataAll[index].label)) {
                        this.selectedProductLine.splice(this.selectedProductLine.findIndex(item => item === dataAll[index].label), 1)
                    }
                }
                this.setAllProductLineCheckStatus(dataAll,index)
            },
            setAllProductLineCheckStatus (dataAll) {
                let selectedChildren = []
                dataAll.forEach(parent => {
                    if (parent.selectedAll) {
                        selectedChildren.push(parent.label)
                    }
                })
                if (dataAll.length === this.selectedProductLine.length) {
                    this.indeterminate = false
                    this.checkAll = true
                } else if (this.selectedProductLine.length > 0) {
                    this.indeterminate = true
                    this.checkAll = false
                } else {
                    this.indeterminate = false
                    this.checkAll = false
                }
            },
        },
        watch: {
            // 监听数组变化，取值
            'productLineList': {
                handler: function (newValue) {
                    this.productGroup.ProductID = []
                    this.productGroup.ProductInGroup = []
                    this.productGroup.ProductLineID = []
                    this.productGroup.ProductReferred = []
                    this.productGroup.ProductLineName=[]
                    newValue.forEach(productLine => {
                        this.selectedProductLine.forEach(item=>{
                            console.log(productLine.label)
                            if(productLine.label ===item){
                                this.productGroup.ProductLineID.push(productLine.value)
                                this.productGroup.ProductLineName.push(productLine.label)
                            }
                        })
                        if (productLine.selectedChildren.length > 0) {
                            productLine.selectedChildren.forEach(item => {
                                let obj = productLine.children.filter(o => o.label === item)
                                if (obj.length > 0) {
                                    this.productGroup.ProductInGroup.push({
                                        ProductLineID: productLine.value,
                                        ProductID: obj[0].value
                                    })
                                    this.productGroup.ProductReferred.push(obj[0].label)
                                    this.productGroup.ProductID.push(obj[0].value)
                                }
                            })
                        }
                    })
                    this.$emit('productGroup',this.productGroup)
                },
                deep: true
            }
        }
    }
</script>
<style lang="less" scoped>
    .divider {
        border-bottom: 1px solid #e9e9e9;
        padding-bottom: 6px;
        margin-bottom: 6px;
    }

    .customexportUl {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 100%;
    }

    .divider {
        border-bottom: 1px solid #e9e9e9;
        padding-bottom: 6px;
        margin-bottom: 6px;
    }

    .customexportUl li {
        list-style: none;
        width: 25%;
        float: left;
    }

    .checkboxGroupLeft {
        margin-left: 26px;
    }

    .RedPosition_Ch {
        display: inline-block;
        margin-right: 4px;
        line-height: 1;
        font-family: SimSun;
        font-size: 12px;
        color: #ed3f14;
        position: absolute;
        z-index: 999;
        left: 40px;
        top: 9px;
    }

    .checkboxThirdLevelDomeComponents .ivu-col-span-24 {
        text-align: left !important;
    }
</style>
