<template>
    <v-content>
        <div class="header-btn">
            <el-button type="primary" size="small">新增用户</el-button>
            <el-button type="primary" size="small">批量审核通过</el-button>
            <el-button type="primary" size="small">批量审核不通过</el-button>
            <el-button type="primary" size="small">批量启用</el-button>
            <el-button type="primary" size="small">批量禁用</el-button>
            <el-button type="primary" size="small">批量授予门禁权限</el-button>
            <el-button type="primary" size="small">批量删除</el-button>        
        </div>
        <div class="header">
            <div class="time">
                <span>起止时间:</span>
                <el-date-picker
                v-model="time"
                size="small"
                type="datetimerange"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
                </el-date-picker>
            </div>
            <div class="time">
                <span>部门:</span>
                <el-select v-model="value" clearable placeholder="请选择" size="small">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="time">
                <span>用户类别:</span>
                <el-select v-model="value" clearable placeholder="请选择" size="small">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="time">
                <span>员工姓名:</span>
                <el-input v-model="employName" placeholder="请输入内容" size="small"></el-input>
            </div>
            <div class="time">
                <el-button type="primary" size="small">查找</el-button>
            </div>
        </div>
    </v-content>
</template>
<script>
export default {
    data() {
        return {
            time:'',
            options: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
                }],
            value: '',
            employName:'',
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
                }, {
                    date: '2016-05-08',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '41038019901121551X',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ],
            multipleSelection: [],
            currentPage:3
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
.header-btn {
    text-align: left;
    padding:0 0 20px 20px;
}
.header{
    display:flex;
    justify-content: flex-start;    
    .time {
        margin-left:10px;
    }
    .el-input {
        width:150px;
    }
    .el-select {
        width:150px;
    }
    .el-range-editor.el-input__inner {
        width:360px;
    }
}
</style>