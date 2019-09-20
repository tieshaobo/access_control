<template>
    <v-content>
        <ul class="header">
            <el-button type="primary" size="small" @click="dialogFormVisible1=true;"><i class="el-icon-plus"></i>使用身份证添加(二维码)</el-button>
            <el-button type="primary" size="small" @click="dialogFormVisible2=true;"><i class="el-icon-plus"></i>手动添加(二维码)</el-button>
        </ul>
        <ul class="query">
            <li class="item">
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
            </li>
            <li class="item">
                <span>部门:</span>
                <el-select v-model="department" clearable placeholder="请选择" size="small">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </li>
            <li class="item">
                <span>用户名:</span>
                <el-input v-model="userName" placeholder="请输入内容" size="small"></el-input>
            </li>
            <li class="item">
                <span>访客类型:</span>
                <el-select v-model="visitorType" clearable placeholder="请选择" size="small">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </li>
            <li class="item">
                <span>访客身份证:</span>
                <el-input v-model="userName" placeholder="请输入内容" size="small"></el-input>
            </li>
            <li class="item">
                <el-button type="primary" size="small">查询</el-button>
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
                    label="身份证号"
                    align="center"
                    header-align="center"
                    width="100">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="用户姓名"
                    align="center"
                    header-align="center"
                    width="100">
                    
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="卡号"
                    align="center"
                    header-align="center"
                    width="100"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="门禁卡状态"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="门禁启用"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="有效起始时间"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="有效终止时间"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="带领人编号"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="管理员姓名"
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
        <!-- 第一个弹框 -->
        <el-dialog title="使用身份证添加访客信息(门禁卡)" :visible.sync="dialogFormVisible1" width="1130px" class="dialog1"> 
            <el-form :model="form" size="mini">
                <div class="left">
                    <div class="left_1">
                        <div class="left_1_1">
                            <el-form-item label="卡号" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="身份证号" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="用户姓名" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="性别" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="民族" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="出生日期" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="手机号" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="访客单位" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="进出次数" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="有效起始" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                        </div>
                        <div class="left_1_2">
                            <el-image
                                style="width: 90px; height: 120px; margin-bottom:86px;"
                                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                                fit="fill">
                            </el-image>
                            <el-form-item label="是否启用" :label-width="formLabelWidth" style="text-align:left;">
                                <el-switch
                                    v-model="switchValue1"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949">
                                </el-switch>
                            </el-form-item>
                            <el-form-item label="人员类型" :label-width="formLabelWidth">
                                <el-select v-model="peopleType" placeholder="请选择活动区域">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="携带东西" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="有效终止" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="left_2">
                        <el-form-item label="进出事由" :label-width="formLabelWidth">
                            <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                        </el-form-item>
                        <el-form-item label="进出区域" :label-width="formLabelWidth">
                            <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                        </el-form-item>
                    </div>    
                </div>
                <div class="right">
                    <div class="right_1">
                        <div class="right_1_1">
                            <el-form-item label="带领编号" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="代领人卡号" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="代领人姓名" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="代领人部门" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="用工形式" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                        </div>
                        <div class="right_1_2">
                             <el-image
                                style="width: 90px; height: 120px; margin-bottom:86px;"
                                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                                fit="fill">
                            </el-image>
                        </div>
                    </div>
                    <div class="right_2">
                        <div>访客来访记录</div>
                        <el-table
                            size="mini"
                            height="200"
                            :data="tableData"
                            style="width: 90%;margin:0 5%;font-size:12px;">
                            <el-table-column
                                prop="date"
                                width="70"
                                label="来访时间"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="访客电话"
                                width="70"
                            >
                            </el-table-column>
                            <el-table-column
                                width="70"
                                prop="address"
                                label="来访事由">
                            </el-table-column>
                             <el-table-column
                                prop="address"
                                width="70"
                                label="访客单位">
                            </el-table-column>
                             <el-table-column
                                prop="address"
                                width="80"
                                label="带领人编号">
                            </el-table-column>
                             <el-table-column
                                prop="address"
                                width="80"
                                label="带领人姓名">
                            </el-table-column>
                             <el-table-column
                                prop="address"
                                width="50"
                                label="操作">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <div class="foot_btn">
                    <span>是否重复</span><el-switch v-model="switchValue2" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
                </div>
                <el-button type="primary" size="mini" @click="dialogFormVisible = false">提交</el-button>    
                <el-button size="mini" @click="dialogFormVisible = false">关闭</el-button>    
            </div>
        </el-dialog>
        <!-- 第二个弹框 -->
        <el-dialog title="手动添加访客信息(门禁卡)" :visible.sync="dialogFormVisible2" width="1130px" class="dialog1"> 
            <el-form :model="form" size="mini">
                <div class="left">
                    <div class="left_1">
                        <div class="left_1_1">
                            <el-form-item label="卡号" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="身份证号" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="用户姓名" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="性别" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="民族" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="出生日期" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="手机号" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="访客单位" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="进出次数" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="有效起始" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                        </div>
                        <div class="left_1_2">
                            <div class="photo">
                                <div>
                                    <el-image
                                        style="width: 90px; height: 120px; "
                                        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                                        fit="fill">
                                    </el-image>
                                    <span>(证件照片)</span>
                                    <el-button type="primary" size="mini">拍证件</el-button>
                                </div>
                                <div>
                                    <el-image
                                        style="width: 90px; height: 120px; "
                                        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                                        fit="fill">
                                    </el-image>
                                    <span>(头像照片)</span>
                                    <el-button type="primary" size="mini">拍头像</el-button>
                                </div>
                                
                            </div>                           
                            <el-form-item label="是否启用" :label-width="formLabelWidth" style="text-align:left;">
                                <el-switch
                                    v-model="switchValue1"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949">
                                </el-switch>
                            </el-form-item>
                            <el-form-item label="人员类型" :label-width="formLabelWidth">
                                <el-select v-model="peopleType" placeholder="请选择活动区域">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="携带东西" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="有效终止" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="left_2">
                        <el-form-item label="进出事由" :label-width="formLabelWidth">
                            <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                        </el-form-item>
                        <el-form-item label="进出区域" :label-width="formLabelWidth">
                            <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                        </el-form-item>
                    </div>    
                </div>
                <div class="right">
                    <div class="right_1">
                        <div class="right_1_1">
                            <el-form-item label="带领编号" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="代领人卡号" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="代领人姓名" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="代领人部门" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="用工形式" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                        </div>
                        <div class="right_1_2">
                             <el-image
                                style="width: 90px; height: 120px; margin-bottom:86px;"
                                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                                fit="fill">
                            </el-image>
                        </div>
                    </div>
                    <div class="right_2">
                        <div>访客来访记录</div>
                        <el-table
                            size="mini"
                            height="200"
                            :data="tableData"
                            style="width: 90%;margin:0 5%;font-size:12px;">
                            <el-table-column
                                prop="date"
                                width="70"
                                label="来访时间"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="访客电话"
                                width="70"
                            >
                            </el-table-column>
                            <el-table-column
                                width="70"
                                prop="address"
                                label="来访事由">
                            </el-table-column>
                             <el-table-column
                                prop="address"
                                width="70"
                                label="访客单位">
                            </el-table-column>
                             <el-table-column
                                prop="address"
                                width="80"
                                label="带领人编号">
                            </el-table-column>
                             <el-table-column
                                prop="address"
                                width="80"
                                label="带领人姓名">
                            </el-table-column>
                             <el-table-column
                                prop="address"
                                width="50"
                                label="操作">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <div class="foot_btn">
                    <span>是否重复</span><el-switch v-model="switchValue2" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
                </div>
                <el-button type="primary" size="mini" @click="dialogFormVisible = false">提交</el-button>    
                <el-button size="mini" @click="dialogFormVisible = false">关闭</el-button>    
            </div>
        </el-dialog>
    </v-content>
</template>
<script>
export default {
    data() {
        return {
            switchValue1:false,
            switchValue2:false,
            time:'',
            department:'',
            userName:'',
            visitorType:'',
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
            dialogFormVisible1:false,
            dialogFormVisible2:false,
            dialogFormVisible3:false,
            dialogFormVisible4:false,
            dialogFormVisible5:true,
            currentPage:2,
            tableData: [
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }
            ],
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '90px'
        }
    },
    methods:{
        handleSelectionChange() {},
        handleSizeChange() {},
        handleCurrentChange() {}
    }
}
</script>
<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: flex-start;
    padding:10px;
}
.query {
    width:100%;
    display:flex;
    justify-content: space-around;
    padding:0 0 10px 0;
    .item{
        text-align: left;
    }
    .el-input {
        width:160px;
    }
    .el-select {
        width:160px;
    }
    .el-range-editor.el-input__inner {
        width:360px;
    }    
}
.table{
    margin-top:10px;
    .page {
        text-align: right;
        margin-top:10px;
    }
}
.dialog1{
    display:flex;
    justify-content: space-around;
    /deep/.el-dialog{
        height:600px;
    }
    .el-form{
        display:flex;
        justify-content: space-around;
        .left{
            width:50%;
            display:flex;
            flex-direction: column;
            justify-content: flex-start;
            .left_1 {
                display:flex;
                width:50%;
                justify-content: flex-start;
                .el-input {
                    width:182px;
                }
                .photo {
                    display:flex;
                    justify-content: space-around;
                    &>div{
                        display:flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        margin-bottom:50px;
                    }
                } 
            }
        }
        .right{
            width:50%;
            display:flex;
            flex-direction: column;
            justify-content: flex-start;
            .right_1 {
                display:flex;
                justify-content: space-around;
                .el-input {
                    width:182px;
                } 
            }
        }
        .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{
            margin-bottom:6px;
        }
    }
    .foot_btn{
        position:absolute;
        left:40px;
        line-height:20px;
        span {
            margin-right:16px;
        }
    }   
}
.dialog3{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    .left{
        .left_1{
            display:flex;
            justify-content: space-around;
            .el-input {
                width:190px;
            }
            .el-select {
                width:190px;
            }
        }     
    }   
    .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{
        margin-bottom:6px;
    }
    .foot_btn{
        position:absolute;
        left:40px;
        line-height:20px;
        span {
            margin-right:16px;
        }
    }   
}
</style>