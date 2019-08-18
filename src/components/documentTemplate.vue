<template>
    <div>
        <Table stripe :columns="columns" :data="dataTable" class="marginTop"></Table>
    </div>
</template>
<script>
    export default {
        props: ['dataTable'],
        data() {
            return {
                columns: [
                    {
                        title: '序号',
                        width: 60,
                        align: 'center',
                        type: 'index',
                    },
                    {
                        title: '资料网站来源',
                        key: 'source',
                        align: 'center',
                        width: 150,
                        className: 'demo-table-info-column',
                        render: (h, params) => {
                            return h('div', [
                                h(
                                    'p',
                                    {
                                        style: {
                                            fontSize: '15px',
                                            fontWeight:'700'
                                        }
                                    },
                                    params.row.source
                                )
                            ])
                        }
                    },
                    {
                        title: '适用客服端',
                        key: 'appliance',
                        align: 'center',
                        width: 120
                    },
                    {
                        title: '名称',
                        key: 'name',
                        width: 200
                    },
                    {
                        title: '资料网站地址',
                        key: 'address',
                        render: (h, params) => {
                            return h('div', [
                                h(
                                    'a',
                                    {
                                        style: {},
                                        //就是这里加的属性
                                        domProps: {
                                            title: '点击查看文档',
                                            href: params.row.address,
                                            target: '_blank'
                                        }
                                    },
                                    params.row.address
                                )
                            ])
                        }
                    }
                ]
            }
        }
    }
</script>
<style>
    .ivu-table td.demo-table-info-column {
        background-color: #85EFBC !important;
        color: #fff;
    }
</style>
