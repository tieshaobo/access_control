<template>
    <v-content>
        <div class="list">
            <ul class="list_item">
                <li>
                    <span>门票类型:</span>
                    <el-select v-model="value" clearable placeholder="请选择" size="small">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <li>
                    <span>进门时间:</span>
                    <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </li>
                <li>
                    <span>活动名称:</span>
                    <el-input v-model="employName" placeholder="请输入内容" size="small"></el-input>
                </li>
            </ul>
            <ul class="list_item">
                <li>
                    <span>刷卡状态:</span>
                    <el-select v-model="value" clearable placeholder="请选择" size="small">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <li>
                    <span>出门时间:</span>
                    <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </li>
                <li>
                    <span>卡号查询:</span>
                    <el-input v-model="employName" placeholder="请输入内容" size="small"></el-input>
                </li>
            </ul>
            <ul class="list_item">
                <li>
                    <span>进门 / 出门:</span>
                    <el-select v-model="value" clearable placeholder="请选择" size="small">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <li>
                    <span>用户名查询:</span>
                    <el-input v-model="employName" placeholder="请输入内容" size="small"></el-input>
                </li>
                <li>
                    <span>控制器查询:</span>
                    <el-input v-model="employName" placeholder="请输入内容" size="small"></el-input>
                </li>
            </ul>
            <ul class="list_item">
                <li>
                    <el-button type="primary">查询</el-button>
                    <el-button type="primary">报表下载</el-button>
                </li>
            </ul>
        </div>
        <div class="table">
            <el-table
                size="mini"
                :data="tableData"
                style="width: 100%">
                <el-table-column
                align="center"
                header-align="center"
                prop="date"
                label="活动名称">
                </el-table-column>
                <el-table-column
                align="center"
                header-align="center"
                prop="name"
                label="刷卡时间">
                </el-table-column>
                <el-table-column
                align="center"
                header-align="center"
                prop="address"
                label="卡号">
                </el-table-column>
                <el-table-column
                align="center"
                header-align="center"
                prop="name"
                label="用户姓名">
                </el-table-column>
                <el-table-column
                align="center"
                header-align="center"
                prop="name"
                label="刷卡状态">
                </el-table-column>
                <el-table-column
                align="center"
                header-align="center"
                prop="name"
                label="进出标记">
                </el-table-column>
                <el-table-column
                align="center"
                header-align="center"
                prop="name"
                label="控制器编号">
                </el-table-column>
                <el-table-column
                align="center"
                header-align="center"
                prop="name"
                label="闸机说明">
                </el-table-column>
                <el-table-column
                align="center"
                header-align="center"
                prop="name"
                label="刷卡消息">
                </el-table-column>
                <el-table-column
                align="center"
                header-align="center"
                prop="name"
                label="门票类型">
                </el-table-column>
                <el-table-column
                align="center"
                header-align="center"
                prop="name"
                label="管理员编号">
                </el-table-column>
                <el-table-column
                align="center"
                header-align="center"
                prop="name"
                label="管理员姓名">
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
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
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
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
}
</script>
<style lang="scss" scoped>
.list {
    display:flex;
    justify-content: space-between;
    .list_item {
        width:25%;
        height:130px;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .el-input {
        width:200px;
    }
    .el-select {
        width:200px;
    }
}
.table {
    padding:20px 0 0 0;
    .page {
        float:right;
        margin:10px 20px 0 0;
        &:after{
             clear: both;
            content: "";
            display: block;
            width: 0;
            height: 0;
        }
    }
}
</style>