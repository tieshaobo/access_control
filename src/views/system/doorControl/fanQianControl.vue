<template>
<div class="outside">
    <ul class="top">
        <li class="top_item">
            <el-button type="primary" size="small" @click="dialogControl">新增选中机构反潜回控制器</el-button>
        </li>
        <li class="top_item">
            <el-button type="primary" size="small">批量删除选中反潜回控制器</el-button>
        </li>
    </ul>
    <v-content class="container">
        <aside class="left">
           <el-tree
                :data="data"
                node-key="id"
                default-expand-all
                :expand-on-click-node="false">
                <span class="custom-tree-node" slot-scope="{ node, data }">
                    <span>{{ node.label }}</span>
                    <div class="btn_group">
                        <div><i class="el-icon-edit"></i></div>
                        <div><i class="el-icon-remove-outline" @click="() => remove(node, data)"></i></div>
                        <div><i class="el-icon-circle-plus-outline" @click="() => append(data)"></i></div>
                    </div>
                </span>
            </el-tree>
       </aside>
       <div class="right">
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
                    label="是否开启反潜回"
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
                    label="操作"
                    width="130"
                    align="center"
                    header-align="center">
                    <template slot-scope="scope">
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
       <el-dialog title="新增" :visible.sync="dialogTableVisible" width="1000px">
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
                    label="控制器编号"
                    align="center"
                    header-align="center"
                    width="100">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="控制器SN"
                    align="center"
                    header-align="center"
                    width="100">    
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="是否开启"
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
                    label="门名字"
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
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" size="small" @click="outerVisible = false">提交</el-button>
                <el-button type="primary" size="small" @click="innerVisible = true">取消</el-button>
            </div>
        </el-dialog>
    </v-content>
</div>
</template>
<script>
export default {
    name:"outInStatistics",
    data(){
        const data = [{
            id: 1,
            label: '一级 1',
            children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
                id: 9,
                label: '三级 1-1-1'
            }, {
                id: 10,
                label: '三级 1-1-2'
            }]
            }]
        }, {
            id: 2,
            label: '一级 2',
            children: [{
            id: 5,
            label: '二级 2-1'
            }, {
            id: 6,
            label: '二级 2-2'
            }]
        }, {
            id: 3,
            label: '一级 3',
            children: [{
            id: 7,
            label: '二级 3-1'
            }, {
            id: 8,
            label: '二级 3-2'
            }]
        }];
        return {
            data: JSON.parse(JSON.stringify(data)),
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
            gridData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }],
            currentPage:2,
            dialogTableVisible:true,
        }
    },
    methods:{
        dialogControl() {
            this.dialogTableVisible = !this.dialogTableVisible
        },
        append(data) {
            debugger
            const newChild = { id: id++, label: 'testtest', children: [] };
            if (!data.children) {
            this.$set(data, 'children', []);
            }
            data.children.push(newChild);
        },
        remove(node, data) {
            debugger
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
        },
    }
}
</script>
<style lang="scss" scoped>
.outside{
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    .top {
        display:flex;
        justify-content: flex-start;
        padding:10px 0 10px 300px;
        background: #fff;
        .top_item {
            margin:0 10px;
        }
    }
    .container{
        height:$content-height2;
        display:flex;
        justify-content: space-between;
        .left {
            width:300px;
            border-right:1px solid #ccc;
            .btn_group{
                width:50px;
                display:flex;
                justify-content: space-around;
                font-size:16px;
            }
        }
        .right {
            height:100%;
            margin:0 0 0 10px;
            padding-right:10px;
            overflow:auto;
            flex-grow: 1;
            .page {
                float:right;
                margin:10px 20px 0 0;
            }
        }
    }
}
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
    .el-tree-node__content {
        height:30px;
        font-size: 30px;
    }
}
/deep/.el-dialog__header {
    text-align: left;
}
/deep/.el-dialog__body{
    .page{
        text-align: right;
        padding:10px 0;
    }
}
</style>