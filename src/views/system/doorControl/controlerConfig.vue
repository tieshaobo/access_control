<template>
    <v-content>
        <ul class="list">
            <li class="item">
                <el-button type="primary" size="small">新增控制器</el-button>
            </li>
            <li class="item">
                <el-button type="primary" size="small">批量新增控制器</el-button>
            </li>
            <li class="item">
                <el-button type="primary" size="small">批量删除控制器</el-button>
            </li>
            <li class="item">
                <el-button type="primary" size="small">批量移动控制器</el-button>
            </li>        
        </ul>
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
                    label="编号"
                    align="center"
                    header-align="center"
                    width="100">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="SN"
                    align="center"
                    header-align="center"
                    width="100">    
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="门名称"
                    align="center"
                    header-align="center"
                    width="100"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="说明"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="IP"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="端口"
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
                    label="在线状态"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="云控制"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="其他控制"
                    align="center"
                    header-align="center"
                    width="100"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="关门延时"
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
            currentPage:2
        }
    }
}
</script>
<style lang="scss" scoped>
.list {
    width:50%;
    display:flex;
    justify-content: space-around;

}
.table {
    padding:20px 0 0 0;
    .page {
        float:right;
        margin:10px 20px 0 0;
    }
}    
</style>