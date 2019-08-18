<template>
    <div>
        <Checkbox-group v-model="tableColumnsChecked" @on-change="changeTableColumns">
            <Checkbox label="show">Show</Checkbox>
            <Checkbox label="weak">Weak</Checkbox>
        </Checkbox-group>
        <Table :data="tableData2" :columns="tableColumns2" border></Table>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                tableData2: [],
                tableColumns2: [],
                tableColumnsChecked: ['show', 'weak']
            }
        },
        methods: {
            mockTableData2 () {
                let data = [];
                function getNum() {
                    return Math.floor(Math.random () * 10000 + 1);
                }
                for (let i = 0; i < 10; i++) {
                    data.push({
                        show: getNum(),
                        weak: getNum()
                    })
                }
                console.log(data,'dataList')
                return data;
            },
            getTable2Columns () {
                const table2ColumnList = {

                name:{
                    title: '序号',
                    width: 70,
                    align: "center",
                    fixed: "left",
                    type: 'index',
                },
                    show: {
                        title: 'Show',
                        key: 'show',
                        width: 150,
                        sortable: true
                    },
                    weak: {
                        title: 'Weak',
                        key: 'weak',
                        width: 150,
                        sortable: true
                    }
                };

                let data = [table2ColumnList.name];
                console.log(data,'泪飙')

                this.tableColumnsChecked.forEach(col => data.push(table2ColumnList[col]));
                return data;
            },
            changeTableColumns () {
                this.tableColumns2 = this.getTable2Columns();
                this.tableData2 = this.mockTableData2()
            }
        },
        mounted () {
            this.changeTableColumns();
        }
    }
</script>
