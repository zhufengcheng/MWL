<template>
    <div class="treeComponent">
        <elTree2  class="filter-tree"
                  :props="defaultProps"
                  ref="tree"
                  :data="dataList"
                  node-key="id"
                  default-expand-all
                  :expand-on-click-node="false"
                  :render-content="renderContent"
                  :show-checkbox="isDownload"
                  highlight-current
                  id="blockTree">
        </elTree2>
    </div>
</template>
<script>
    import  elTree2 from '../tree/src/tree'
    export default {
        name: 'tree',
        // dataList树data  defaultProps定义节点数据 isUpload 是否显示上传 isDownload 是否显示下载 butName 按钮名字
        props: ["dataList","defaultProps","isUpload","isDownload","butName",'isRemove'],
        components: {
            elTree2
        },
        methods: {
            // 自行投标
            renderContent(h, { node, data, store }) {
                // let butNameO = this.butName
                return (
                    <span class={"custom-tree-node spanStyle"+node.level}>
                    <span v-show={node.level===1}>
                    <span class="labelStyle">{node.label}</span>
                    <el-button size="mini"  on-click={ () => this.getselfKeys() } class="floatRight marginTop4"  v-show={this.isDownload}>{this.butName}</el-button>
                    </span>
                    <span v-show={node.level===2}>
                    <span class="labelStyle labelStyleMar" style={node.childNodes.length === 0?'color:red!important;':''}>{node.label}</span>
                    <span class="labelStyle" style={node.childNodes.length === 0?'color:red!important;':''}>{node.childNodes.length}个附件</span>
                <el-button size="mini"  on-click={ () => this.upload(data) } class="floatRight marginTop4" v-show={this.isUpload}>文件上传</el-button>
                    </span>
                    <span v-show={node.level===3}>

                    <span class="labelStyle labelStyle3">{node.label}</span>
                    <Icon type="ios-trash-outline" class="floatRight fontSize20" on-click={ () => this.remove(data) } v-show={this.isRemove}></Icon>
                </span>
                </span>);
            },
            // 下载
            getselfKeys() {
                let setAll=[];
                if(this.$refs.tree.getCheckedNodes().length > 0) {
                    this.$refs.tree.getCheckedNodes().forEach(item=>{
                        if(item.level === 2){
                            if(this.$refs.tree.getCheckedKeys().includes(item.id)){
                                setAll.push(item.id)
                            }
                        }
                    })
                }
                console.log(setAll,'下载')
            },
            // 自行投标 ---上传
            upload (data) {
                console.log(data, '上传')
            },
            // 自行投标 ---删除
            remove (data) {
                console.log(data, '删除')
            }
        },
        data() {
            return {

            };
        },
        watch: {
            dataList (newVal) {
                console.log(newVal,'22222222222222222')
            }
        }
    };
</script>
<style>
    #blockTree .spanStyle1,.spanStyle2,.spanStyle3{
        width: 100%!important;
        height: 30px;
        line-height: 30px;
        display: inline-block;
    }
    #blockTree .labelStyle{
        float: left;
    }
    #blockTree .labelStyle3{
        margin-left: 5px;
    }
    #blockTree .labelStyleMar{
        margin-right: 5px;
    }
    #blockTree .floatRight{
        float: right;
        padding: 4px 6px;
    }
    #blockTree .marginTop4{
        margin-top: 4px;
    }
    #blockTree .fontSize20{
        font-size: 20px;
    }
</style>
