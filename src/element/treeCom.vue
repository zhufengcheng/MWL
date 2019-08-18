<template>
    <div class="treeCom">
        <Row>
            <Col span="8">
                <!--自行投标 isUpload 是否显示上传 idDownload 是否显示下载 butName 按钮名字-->
               <treeComponent :dataList="selfBiddingData" :defaultProps="selfBiddingDefaultProps" :isUpload="true" :isDownload="false" :butName="selfBiddingButName" :isRemove = "true"></treeComponent>
            </Col>
            <Col span="8">
                <!--委托投标-->
                <treeComponent :dataList="entrustedBiddingData" :defaultProps="entrustedBiddingDefaultProps" :isUpload="true" :isDownload="true" :butName="entrustedBiddingButName" :isRemove = "false"></treeComponent>
            </Col>
            <Col span="8">
                <!--产品变更价格附件-->
                <treeComponent :dataList="productData" :defaultProps="productDefaultProps" :isUpload="false" :isDownload="false" :butName="productButName" :isRemove = "false"></treeComponent>
            </Col>
        </Row>
    </div>
</template>
<script>
    import  treeComponent from './components/treeComponent'
    export default {
        name: 'treeCom',
        components: {
            treeComponent
        },
        data() {
            return {
                selfBiddingButName:'自行投标选中文件下载',
                entrustedBiddingButName:'委托投标选中文件下载',
                productButName:'产品变更价格选中文件下载',
                // 自行投标
                selfBiddingData: [{
                    id: 1,
                    label: '自行投标',
                    level:1,
                    showCheckbox:true,
                    disabled: false,
                    children: [{
                        id: 10,
                        label: '获取投标信息',
                        level:2,
                        showCheckbox:true,
                        children: [{
                            id: 100,
                            label: '获取投标信息附件1',
                            level:3,
                            disabled: false,
                            showCheckbox:false
                        }, {
                            id: 101,
                            label: '获取投标附件2',
                            level:3,
                            disabled: false,
                            showCheckbox:false
                        }, {
                            id: 102,
                            label: '投标附件3',
                            level:3,
                            disabled: false,
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
                            disabled: false,
                            showCheckbox:false
                        }, {
                            id: 201,
                            label: '附件2',
                            level:3,
                            disabled: false,
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
                            disabled: false,
                            showCheckbox:false
                        }, {
                            id: 501,
                            label: '投标申报附件2',
                            level:3,
                            disabled: false,
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
        },
        methods: {

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
