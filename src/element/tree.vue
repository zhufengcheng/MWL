<template>
    <div class="tree">
        <Row>
        <Col span="8">
            <!--自行投标-->
            <elTree2  class="filter-tree"
                      :props="selfBiddingDefaultProps"
                      ref="selfBiddingTree"
                      :data="selfBiddingData"
                      node-key="id"
                      default-expand-all
                      :expand-on-click-node="false"
                      :render-content="selfBiddingRenderContent"
                      :show-checkbox="true"
                      highlight-current
                      id="selfBiddingBlockTree">
            </elTree2>
        </Col>
        <Col span="8">
            <!--委托投标-->
            <elTree2  class="filter-tree"
                      :props="entrustedBiddingDefaultProps"
                      ref="entrustedBiddingTree"
                      :data="entrustedBiddingData"
                      node-key="id"
                      default-expand-all
                      :expand-on-click-node="false"
                      :render-content="entrustedBiddingRenderContent"
                      :show-checkbox="true"
                      highlight-current
                      id="entrustedBiddingBlockTree">
            </elTree2>
        </Col>
        <Col span="8">
            <!--产品变更价格附件-->
            <elTree2  class="filter-tree"
                      :props="productDefaultProps"
                      ref="productTree"
                      :data="productData"
                      node-key="id"
                      default-expand-all
                      :expand-on-click-node="false"
                      :render-content="productRenderContent"
                      :show-checkbox="true"
                      highlight-current
                      id="eproductBlockTree">
            </elTree2>
        </Col>
    </Row>
    </div>
</template>
<script>
    import  elTree2 from './tree/src/tree'
    export default {
        name: 'tree',
        components: {
            elTree2
        },
        methods: {
            // 自行投标
            selfBiddingRenderContent(h, { node, data, store }) {
                console.log(node,'node')
                console.log(data,'data')
                return (
                    <span class={"custom-tree-node spanStyle"+node.level}>
                    <span v-show={node.level===1}>
                    <span class="labelStyle">{node.label}</span>
                    <el-button size="mini"  on-click={ () => this.getselfBiddingCheckedKeys() } class="floatRight marginTop4">自行投标选中文件下载</el-button>
                    </span>
                    <span v-show={node.level===2}>
                    <span class="labelStyle labelStyleMar" style={node.childNodes.length === 0?'color:red!important;':''}>{node.label}</span>
                    <span class="labelStyle" style={node.childNodes.length === 0?'color:red!important;':''}>{node.childNodes.length}个附件</span>
                <el-button size="mini"  on-click={ () => this.selfBiddingUpload(data) } class="floatRight marginTop4">文件上传</el-button>
                    </span>
                    <span v-show={node.level===3}>

                    <span class="labelStyle labelStyle3">{node.label}</span>
                    <Icon type="ios-trash-outline" class="floatRight fontSize20" on-click={ () => this.selfBiddingRemove(data) }></Icon>
                </span>
                </span>);
            },
            // 自行投标 ---下载
            getselfBiddingCheckedKeys() {
                let setAll=[];
                if(this.$refs.selfBiddingTree.getCheckedNodes().length > 0) {
                    this.$refs.selfBiddingTree.getCheckedNodes().forEach(item=>{
                        if(item.level === 2){
                            if(this.$refs.selfBiddingTree.getCheckedKeys().includes(item.id)){
                                setAll.push(item.id)
                            }
                        }
                    })
                }
                console.log(setAll,'自行投标 ---下载')
            },
            // 自行投标 ---上传
            selfBiddingUpload (data) {
                console.log(data, '自行投标 ---上传')
            },
            // 自行投标 ---删除
            selfBiddingRemove (data) {
                console.log(data, '自行投标 ---删除')
            },

            // 委托投标
            entrustedBiddingRenderContent(h, { node, data, store }) {
                return (
                    <span class={"custom-tree-node spanStyle"+node.level}>
                    <span v-show={node.level===1}>
                    <span class="labelStyle">{node.label}</span>
                    <el-button size="mini"  on-click={ () => this.getEntrustedBiddingCheckedKeys(data) } class="floatRight marginTop4">委托投标选中文件下载</el-button>
                    </span>
                    <span v-show={node.level===2}>
                    <span class="labelStyle labelStyleMar" style={node.childNodes.length === 0?'color:red!important;':''}>{node.label}</span>
                    <span class="labelStyle" style={node.childNodes.length === 0?'color:red!important;':''}>{node.childNodes.length}个附件</span>
                <el-button size="mini"  on-click={ () => this.entrustedBiddingUpload(data) } class="floatRight marginTop4">文件上传</el-button>
                    </span>
                    <span v-show={node.level===3}>

                    <span class="labelStyle labelStyle3">{node.label}</span>
                    <Icon type="ios-trash-outline" class="floatRight fontSize20"  on-click={ () => this.entrustedBiddingRemove(data) }></Icon>
                </span>
                </span>);
            },
            // 委托投标 ---下载
            getEntrustedBiddingCheckedKeys() {
                let setAll=[];
                if(this.$refs.entrustedBiddingTree.getCheckedNodes().length > 0) {
                    this.$refs.entrustedBiddingTree.getCheckedNodes().forEach(item=>{
                        if(item.level === 2){
                            if(this.$refs.entrustedBiddingTree.getCheckedKeys().includes(item.id)){
                                setAll.push(item.id)
                            }
                        }
                    })
                }
                console.log(setAll,'委托投标 ---下载')
            },
            // 委托投标 ---上传
            entrustedBiddingUpload (data) {
                console.log(data, '委托投标 ---上传')
            },
            // 委托投标 ---删除
            entrustedBiddingRemove (data) {
                console.log(data, '委托投标 ---删除')
            },

            // 产品变更价格附件
            productRenderContent(h, { node, data, store }) {
                return (
                    <span class={"custom-tree-node spanStyle"+node.level}>
                    <span v-show={node.level===1}>
                    <span class="labelStyle">{node.label}</span>
                    <el-button size="mini"  on-click={ () => this.getProductCheckedKeys(data) } class="floatRight marginTop4">产品变更价格选中文件下载</el-button>
                    </span>
                    <span v-show={node.level===2}>
                    <span class="labelStyle labelStyleMar" style={node.childNodes.length === 0?'color:red!important;':''}>{node.label}</span>
                    <span class="labelStyle" style={node.childNodes.length === 0?'color:red!important;':''}>{node.childNodes.length}个附件</span>
                </span>
                <span v-show={node.level===3}>

                    <span class="labelStyle labelStyle3">{node.label}</span>
                    <Icon type="ios-trash-outline" class="floatRight fontSize20" on-click={ () => this.productRemove(data) }></Icon>
                </span>
                </span>);
            },
            // 产品变更价格附件 ---下载
            getProductCheckedKeys() {
                let setAll=[];
                if(this.$refs.productTree.getCheckedNodes().length > 0) {
                    this.$refs.productTree.getCheckedNodes().forEach(item=>{
                        if(item.level === 2){
                            if(this.$refs.productTree.getCheckedKeys().includes(item.id)){
                                setAll.push(item.id)
                            }
                        }
                    })
                }
                console.log(setAll,'产品变更价格附件 ---下载')
            },
            // 产品变更价格附件 ---删除
            productRemove (data) {
                console.log(data, '产品变更价格附件 ---删除')
            }
        },

        data() {
            return {
                // 自行投标
                selfBiddingData: [{
                    id: 1,
                    label: '自行投标',
                    level:1,
                    showCheckbox:true,
                    children: [{
                        id: 10,
                        label: '获取投标信息',
                        level:2,
                        showCheckbox:true,
                        children: [{
                            id: 100,
                            label: '获取投标信息附件1',
                            level:3,
                            showCheckbox:false
                        }, {
                            id: 101,
                            label: '获取投标附件2',
                            level:3,
                            showCheckbox:false
                        }, {
                            id: 102,
                            label: '投标附件3',
                            level:3,
                            showCheckbox:false
                        }],
                        disabled: false
                    },{
                        id: 20,
                        label: '提交投标方案',
                        level:2,
                        showCheckbox:true,
                        children: [{
                            id: 200,
                            label: '附件1',
                            level:3,
                            showCheckbox:false
                        }, {
                            id: 201,
                            label: '附件2',
                            level:3,
                            showCheckbox:false
                        }],
                        disabled: false
                    },{
                        id: 30,
                        label: '批准投标方案',
                        level:2,
                        showCheckbox:true,
                        children: [],
                        disabled: true
                    },{
                        id: 40,
                        label: '确认投标方案 ',
                        level:2,
                        showCheckbox:true,
                        children: [],
                        disabled: true
                    },{
                        id: 50,
                        label: '投标申报',
                        level:2,
                        showCheckbox:true,
                        children: [{
                            id: 500,
                            label: '投标申报附件1',
                            level:3,
                            showCheckbox:false
                        }, {
                            id: 501,
                            label: '投标申报附件2',
                            level:3,
                            showCheckbox:false
                        }],
                        disabled: false
                    },{
                        id: 60,
                        label: '跟踪审核进展及结果',
                        showCheckbox:true,
                        level:2,
                        children: [],
                        disabled: true
                    }]
                }],
                // 自行投标
                selfBiddingDefaultProps: {
                    children: 'children',
                    showCheckbox: 'showCheckbox',
                    label: 'label',
                    level:'level',
                    disabled:'disabled'
                },
                // 委托投标
                entrustedBiddingData: [{
                    id: 1,
                    label: '委托投标',
                    level:1,
                    showCheckbox:true,
                    children: [{
                        id: 10,
                        label: '获取投标信息',
                        level:2,
                        showCheckbox:true,
                        children: [{
                            id: 100,
                            label: '获取投标信息附件1',
                            level:3,
                            showCheckbox:false
                        }, {
                            id: 101,
                            label: '获取投标附件2',
                            level:3,
                            showCheckbox:false
                        }, {
                            id: 102,
                            label: '投标附件3',
                            level:3,
                            showCheckbox:false
                        },{
                            id: 103,
                            label: '获取投标信息附件1',
                            level:3,
                            showCheckbox:false
                        }, {
                            id: 104,
                            label: '获取投标附件2',
                            level:3,
                            showCheckbox:false
                        }, {
                            id: 105,
                            label: '投标附件3',
                            level:3,
                            showCheckbox:false
                        }],
                        disabled: false
                    },{
                        id: 20,
                        label: '提交投标方案',
                        level:2,
                        showCheckbox:true,
                        children: [{
                            id: 200,
                            label: '附件1',
                            level:3,
                            showCheckbox:false
                        }, {
                            id: 201,
                            label: '附件2',
                            level:3,
                            showCheckbox:false
                        }],
                        disabled: false
                    },{
                        id: 30,
                        label: '批准投标方案',
                        showCheckbox:true,
                        level:2,
                        children: [],
                        disabled: true
                    },{
                        id: 40,
                        label: '确认投标方案 ',
                        level:2,
                        showCheckbox:true,
                        children: [],
                        disabled: true
                    },{
                        id: 50,
                        label: '投标申报',
                        level:2,
                        showCheckbox:true,
                        children: [],
                        disabled: true
                    },{
                        id: 60,
                        label: '跟踪审核进展及结果',
                        level:2,
                        showCheckbox:true,
                        children: [],
                        disabled: true
                    }]
                }],
                // 委托投标
                entrustedBiddingDefaultProps: {
                    children: 'children',
                    showCheckbox: 'showCheckbox',
                    label: 'label',
                    level:'level',
                    disabled:'disabled'
                },
                // 产品变更价格附件
                productData: [{
                    id: 1,
                    label: '产品变更价格附件',
                    level:1,
                    showCheckbox:true,
                    children: [{
                        id: 10,
                        label: 'E50_分包',
                        level:2,
                        showCheckbox:true,
                        children: [{
                            id: 100,
                            label: 'E50_分包附件1',
                            level:3,
                            showCheckbox:false
                        }],
                        disabled: false
                    },{
                        id: 20,
                        label: 'E50_进口',
                        level:2,
                        showCheckbox:true,
                        children: [{
                            id: 200,
                            label: 'E50_进口附件1',
                            level:3,
                            showCheckbox:false
                        }, {
                            id: 201,
                            label: 'E50_进口附件2',
                            level:3,
                            showCheckbox:false
                        }],
                        disabled: false
                    },{
                        id: 30,
                        label: 'T10_进口',
                        level:2,
                        showCheckbox:true,
                        children: [],
                        disabled: true
                    },{
                        id: 40,
                        label: 'Invokana 100_进口',
                        level:2,
                        showCheckbox:true,
                        children: [],
                        disabled: true
                    },{
                        id: 50,
                        label: 'Erbitux5_进口',
                        level:2,
                        showCheckbox:true,
                        children: [],
                        disabled: true
                    }]
                }],
                // 产品变更价格附件
                productDefaultProps: {
                    children: 'children',
                    showCheckbox: 'showCheckbox',
                    label: 'label',
                    level:'level',
                    disabled:'disabled'
                }
            };
        }
    };
</script>
<style>
    .spanStyle1,.spanStyle2,.spanStyle3{
        width: 100%;
        height: 30px;
        line-height: 30px;
        display: inline-block;
    }
    .labelStyle{
        float: left;
    }
    .labelStyle3{
        margin-left: 5px;
    }
    .labelStyleMar{
        margin-right: 5px;
    }
    .floatRight{
        float: right;
        padding: 4px 6px;
    }
    .marginTop4{
        margin-top: 4px;
    }
    .fontSize20{
        font-size: 20px;
    }
</style>
