<template>
    <v-content>
        <div class="header">
            <el-button type="primary" size="small">新增节目票务</el-button>
        </div>
        <div class="table">
            <el-table
                size="mini"
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                    type="selection"
                    width="55">
                </el-table-column>
                <el-table-column
                    label="节目名称"
                    align="center"
                    header-align="center"
                    width="100">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="普通票务"
                    align="center"
                    header-align="center"
                    width="100">
                    
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="工作票数"
                    align="center"
                    header-align="center"
                    width="100"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="节目开始时间"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="节目结束时间"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="门票开始时间"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="门票结束时间"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="是否开启"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="备注"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="操作"
                    width="130"
                    align="center"
                    header-align="center">
                    <template slot-scope="scope">
                        <el-button type="text">查看</el-button>
                        <el-button type="text">修改</el-button>
                        <el-button type="text">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="page">
                 <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 50, 100]"
                    :page-size="100"
                    layout=" prev, pager, next, total, sizes,jumper"
                    :total="400">
                </el-pagination>
            </div>
        </div>
    </v-content>
</template>
<script>
export default {
    data() {
        return {
            tableData: [{
                    date: '2190003265270',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2190003265270',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2190003265270',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2190003265270',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ],
        }
    },
    methods:{
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
}
</script>
<style lang="scss" scoped>
.header {
    text-align: left;
    padding:0 20px;
}
.table {
    padding:20px 0 0 0;
    .page {
        float:right;
        margin:10px 20px 0 0;
    }
}  
</style>