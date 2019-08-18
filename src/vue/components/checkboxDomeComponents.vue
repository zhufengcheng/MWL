<template>
    <div class="checkboxDomeComponents">
        <Poptip placement="bottom-start" @on-popper-hide="onPopperHide" trigger="hover">
            <Input v-model="addressIndex"  readonly @on-focus="onInputFocus" />
            <div slot="content"  class="CheckboxGroupTemplate">
                <div class="CheckboxGroupHide" style="white-space: pre-wrap;">
                    <ul v-for="(todo,index) in buTypingAttr" :key="index">
                        <li>
                            <div class="left">
                                <Checkbox :indeterminate="todo.indeterminate" :value="todo.selectedAll" @click.prevent.native="handleCheckAll(index,buTypingAttr)"><b>{{todo.label}}</b></Checkbox>
                            </div>
                            <div  class="right">
                                <CheckboxGroup v-model="todo.selectedChildren" @on-change="checkAllGroupChange(index,todo.selectedChildren,buTypingAttr)">
                                    <Checkbox v-for="itemTwo in todo.children" :key="itemTwo.label" :label="itemTwo.label">{{itemTwo.label}}</Checkbox>
                                </CheckboxGroup>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Poptip>
    </div>
</template>
<script>
    export default {
        name: 'checkboxDomeComponents',
        props:['buTypingAttr'],
        data(){
            return{
                addressAttr:[],
                provinceIndex:[],
                buTypingVal:[]
            }
        },
        computed:{
            addressIndex: function() {
                return this.addressAttr.join(",");
            }
        },
        methods:{
            onPopperHide(){
                let buTypingVal=""; // 盒
                // 集合去重
                let typing =Array.from(new Set(this.buTypingVal))
                if(typing.length===1){
                    buTypingVal=this.buTypingVal[0];
                }
                this.$emit("buTypingVal", buTypingVal);  // 返回去重后得单位
                this.$emit("input", this.provinceIndex); // 返回所有选中id
            },
            onInputFocus(){
                this.addressAttr=[];
                this.buTypingAttr.forEach(element=>{
                    element.selectedAll=false;
                    element.indeterminate=false;
                    element.selectedChildren=[];
                })
            },
            //区域--全选
            handleCheckAll(index, dataAll) {
                // 拿到当前集合所有label
                let childrenAll = [];
                dataAll[index].children.forEach(item=>{
                    childrenAll.push(item.label);
                });
                // 如果indeterminate===false  设置 indeterminate 状态，只负责样式控制
                if (dataAll[index].indeterminate) {
                    dataAll[index].selectedAll = false;
                } else {
                    dataAll[index].selectedAll = !dataAll[index].selectedAll;
                    console.log(dataAll[index].selectedAll)
                }
                dataAll[index].indeterminate = false;
                if (dataAll[index].selectedAll) {
                    dataAll[index].selectedChildren = childrenAll;
                } else {
                    dataAll[index].selectedChildren = [];
                }
            },
            //区域--change
            checkAllGroupChange(index, data, dataAll) {
                let childrenAll = [];
                dataAll[index].children.forEach(item=>{
                    childrenAll.push(item.label);
                });
                if (data.length === childrenAll.length) {
                    dataAll[index].indeterminate = false;
                    dataAll[index].selectedAll = true;
                } else if (data.length > 0) {
                    dataAll[index].indeterminate = true;
                    dataAll[index].selectedAll = false;
                } else {
                    dataAll[index].indeterminate = false;
                    dataAll[index].selectedAll = false;
                }
            },
        },
        watch: {
            // 监听数组变化，取值
            'buTypingAttr': {
                handler: function (newValue) {
                    this.addressAttr = [];
                    this.provinceIndex = [];
                    this.buTypingVal = [];
                    newValue.forEach(item => {
                        if (item.selectedChildren.length > 0) {
                            item.selectedChildren.forEach(itemOne => {
                                let obj = item.children.filter(o => o.label === itemOne)
                                if(obj.length>0) {
                                    this.provinceIndex.push(obj[0].value)
                                    this.buTypingVal.push(obj[0].packing)
                                }
                                this.addressAttr.push(itemOne)
                            })
                        }
                    })
                },
                deep: true
            }
        }
    }
</script>
<style>
    .ivu-poptip-rel{
        width: 100%!important;
    }
</style>

<style scoped>
    .CheckboxGroupTemplate {
        max-height: 250px;
        overflow: auto;
    }
    .CheckboxGroupTemplate::-webkit-scrollbar { width: 0 !important }

    .CheckboxGroupHide {
        width: 400px;
        background: #fff;
    }
    .CheckboxGroupHide ul{
        margin-top: 5px;
        margin-bottom: 5px;
        clear: both;
    }
    .CheckboxGroupHide ul li{
        clear: both;
        list-style-type: none;
        border-bottom: 1px solid #dddee1;
        padding-bottom: 5px;
    }
    .CheckboxGroupHide ul li .left{
        width: 80px;
        display: inline-block;
        vertical-align:top;
    }
    .CheckboxGroupHide ul li .right{
        display: inline-block;
        width: 315px;
        word-wrap:break-word;
    }
    .CheckboxGroupHide ul:last-child li{
        border-bottom:none;
    }
    .addressStyle {
        float: right;
        margin-top: 5px;
        position: absolute;
        right: 20px;
        top: 3px;
        color: #666;
        cursor: pointer;
    }
    .leftAndRightOne{
        border-bottom: 1px solid #dddee1;
    }
    .leftAndRightOne:last-child{
        border-bottom: none;
    }
    .leftOne{
        display: inline-block;
        width: 55px;
        word-wrap:break-word;
        vertical-align:top;
    }
    .rightOne{
        display: inline-block;
        width: 255px;
        word-wrap:break-word;
    }
    .ivu-poptip-body {
        padding-right: 0!important;
    }
    div.ivu-poptip{
        width: 100%!important;
    }
</style>
