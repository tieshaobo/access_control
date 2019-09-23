<template>
    <v-content>
        <div class="header-btn">
            <el-button type="primary" size="small" @click="addUser=!addUser">新增用户</el-button>
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
        <div class="table_btn">
            <el-button type="primary" size="small">导出用户头像数据</el-button>
            <el-button type="primary" size="small">导出用户数据</el-button>
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
                    label="员工编号"
                    align="center"
                    header-align="center"
                    width="100">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="员工卡号"
                    align="center"
                    header-align="center"
                    width="100">    
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="部门"
                    align="center"
                    header-align="center"
                    width="120"
                    show-overflow-tooltip>
                    <template slot-scope="scope">
                        <el-select v-model="value" placeholder="请选择" size="mini">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="用户类别"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="员工姓名"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="员工性别"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="身份证号"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="手机号码"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="用工形式"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="是否允许登录"
                    align="center"
                    header-align="center"
                    width="100"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="审核状态"
                    align="center"
                    header-align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="审核人姓名"
                    width="130"
                    align="center"
                    header-align="center">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="操作"
                    width="220"
                    align="center"
                    header-align="center">
                    <template slot-scope="scope">
                        <el-button type="text" @click="lookUser=true">查看</el-button>
                        <el-button type="text" @click="changeUser=true">修改</el-button>
                        <el-button type="text">删除</el-button>
                        <el-button type="text">加入黑名单</el-button>
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
        <el-dialog title="新增用户" :visible.sync="addUser" width="900px" top="60px">
            <el-form :model="form" size="mini" label-width="120px" label-position="right">
                <div class="top">
                    <div class="left">
                        <el-form-item label="用户头像">
                            <el-upload
                                action="#"
                                list-type="picture-card"
                                :auto-upload="false">
                                <i slot="default" class="el-icon-plus"></i>
                                <div slot="file" slot-scope="{file}">
                                    <img
                                        class="el-upload-list__item-thumbnail"
                                        :src="file.url" alt=""
                                    >
                                    <span class="el-upload-list__item-actions">
                                        <span
                                        class="el-upload-list__item-preview"
                                        @click="handlePictureCardPreview(file)"
                                        >
                                        <i class="el-icon-zoom-in"></i>
                                        </span>
                                        <span
                                        v-if="!disabled"
                                        class="el-upload-list__item-delete"
                                        @click="handleDownload(file)"
                                        >
                                        <i class="el-icon-download"></i>
                                        </span>
                                        <span
                                        v-if="!disabled"
                                        class="el-upload-list__item-delete"
                                        @click="handleRemove(file)"
                                        >
                                        <i class="el-icon-delete"></i>
                                        </span>
                                    </span>
                                </div>
                            </el-upload>
                            <!-- <el-dialog :visible.sync="dialogVisible">
                                <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog> -->
                            <div style="margin:10px 0;">
                                <el-button type="primary" size="small">上传</el-button>
                                <el-button type="primary" size="small">预览</el-button>
                            </div>
                        </el-form-item>
                        <el-form-item label="用户类别">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="身份证号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="政治面貌">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="籍 贯">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="家庭地址">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="办公电话">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="邮 箱">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="工作内容">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="参加工作时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
                        </el-form-item>
                    </div>
                    <div class="right">
                        <el-form-item label="角色权限">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="员工编号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="员工卡号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="所属单位">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="部 门">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="职 务">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="姓 名">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="性 别">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="民 族">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="出生日期">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="学 历">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号码">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="用工形式">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="工作周期">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="入职时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
                        </el-form-item>
                    </div>
                </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addUser = false">取 消</el-button>
                <el-button type="primary" @click="addUser = false">提 交</el-button>
            </div>
        </el-dialog>
        <el-dialog title="查看用户" :visible.sync="lookUser" width="900px" top="60px">
            <el-form :model="form" size="mini" label-width="130px" label-position="right" :disabled="true">
                <div class="title">用户信息</div>
                <div class="top">
                    <div class="left">
                        <el-form-item label="用户头像">
                            <el-upload
                                action="#"
                                list-type="picture-card"
                                :auto-upload="false">
                                <i slot="default" class="el-icon-plus"></i>
                                <div slot="file" slot-scope="{file}">
                                    <img
                                        class="el-upload-list__item-thumbnail"
                                        :src="file.url" alt=""
                                    >
                                    <span class="el-upload-list__item-actions">
                                        <span
                                        class="el-upload-list__item-preview"
                                        @click="handlePictureCardPreview(file)"
                                        >
                                        <i class="el-icon-zoom-in"></i>
                                        </span>
                                        <span
                                        v-if="!disabled"
                                        class="el-upload-list__item-delete"
                                        @click="handleDownload(file)"
                                        >
                                        <i class="el-icon-download"></i>
                                        </span>
                                        <span
                                        v-if="!disabled"
                                        class="el-upload-list__item-delete"
                                        @click="handleRemove(file)"
                                        >
                                        <i class="el-icon-delete"></i>
                                        </span>
                                    </span>
                                </div>
                            </el-upload>
                            <!-- <el-dialog :visible.sync="dialogVisible">
                                <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog> -->
                            <div style="margin:10px 0;">
                                <el-button type="primary" size="small">上传</el-button>
                                <el-button type="primary" size="small">预览</el-button>
                            </div>
                        </el-form-item>
                        <el-form-item label="用户类别">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="身份证号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="政治面貌">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="籍 贯">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="家庭地址">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="办公电话">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="邮 箱">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="工作内容">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="参加工作时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
                        </el-form-item>
                    </div>
                    <div class="right">
                        <el-form-item label="角色权限">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="员工编号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="员工卡号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="所属单位">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="部 门">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="职 务">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="姓 名">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="性 别">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="民 族">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="出生日期">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="学 历">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号码">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="用工形式">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="工作周期">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="入职时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
                        </el-form-item>
                    </div>
                </div>
                <div class="title">用户门禁信息</div>
                <div class="center">
                    <div class="left">
                        <el-form-item label="门禁权限起始时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="门禁权限结束时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
                        </el-form-item>
                    </div>
                    <div class="right">
                        <el-form-item label="是否启用门禁">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="启用" value="shanghai"></el-option>
                                <el-option label="禁用" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="是否启用考勤">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="启用" value="shanghai"></el-option>
                                <el-option label="禁用" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="进门密码">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </div>
                </div>
                <div class="title">用户车牌信息</div>
                <div class="bottom">
                    <div class="left">
                        <el-form-item label="车牌号码">
                             <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </div>
                    <div class="right">
                        <el-form-item label="是否启用">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="启用" value="shanghai"></el-option>
                                <el-option label="禁用" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="lookUser = false">取 消</el-button>
                <el-button type="primary" @click="lookUser = false">关 闭</el-button>
            </div>
        </el-dialog>
        <el-dialog title="修改用户" :visible.sync="changeUser" width="900px" top="60px">
            <el-form :model="form" size="mini" label-width="130px" label-position="right">
                <div class="title">用户信息</div>
                <div class="top">
                    <div class="left">
                        <el-form-item label="用户头像">
                            <el-upload
                                action="#"
                                list-type="picture-card"
                                :auto-upload="false">
                                <i slot="default" class="el-icon-plus"></i>
                                <div slot="file" slot-scope="{file}">
                                    <img
                                        class="el-upload-list__item-thumbnail"
                                        :src="file.url" alt=""
                                    >
                                    <span class="el-upload-list__item-actions">
                                        <span
                                        class="el-upload-list__item-preview"
                                        @click="handlePictureCardPreview(file)"
                                        >
                                        <i class="el-icon-zoom-in"></i>
                                        </span>
                                        <span
                                        v-if="!disabled"
                                        class="el-upload-list__item-delete"
                                        @click="handleDownload(file)"
                                        >
                                        <i class="el-icon-download"></i>
                                        </span>
                                        <span
                                        v-if="!disabled"
                                        class="el-upload-list__item-delete"
                                        @click="handleRemove(file)"
                                        >
                                        <i class="el-icon-delete"></i>
                                        </span>
                                    </span>
                                </div>
                            </el-upload>
                            <!-- <el-dialog :visible.sync="dialogVisible">
                                <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog> -->
                            <div style="margin:10px 0;">
                                <el-button type="primary" size="small">上传</el-button>
                                <el-button type="primary" size="small">预览</el-button>
                            </div>
                        </el-form-item>
                        <el-form-item label="用户类别">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="身份证号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="政治面貌">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="籍 贯">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="家庭地址">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="办公电话">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="邮 箱">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="工作内容">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="参加工作时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
                        </el-form-item>
                    </div>
                    <div class="right">
                        <el-form-item label="角色权限">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="员工编号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="员工卡号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="所属单位">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="部 门">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="职 务">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="姓 名">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="性 别">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="民 族">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="出生日期">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="学 历">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号码">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="用工形式">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="工作周期">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="入职时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
                        </el-form-item>
                    </div>
                </div>
                <div class="title">用户门禁信息</div>
                <div class="center">
                    <div class="left">
                        <el-form-item label="门禁权限起始时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="门禁权限结束时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
                        </el-form-item>
                    </div>
                    <div class="right">
                        <el-form-item label="是否启用门禁">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="启用" value="shanghai"></el-option>
                                <el-option label="禁用" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="是否启用考勤">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="启用" value="shanghai"></el-option>
                                <el-option label="禁用" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="进门密码">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </div>
                </div>
                <div class="title">用户车牌信息</div>
                <div class="bottom">
                    <div class="left">
                        <el-form-item label="车牌号码">
                             <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </div>
                    <div class="right">
                        <el-form-item label="是否启用">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="启用" value="shanghai"></el-option>
                                <el-option label="禁用" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="changeUser = false">取 消</el-button>
                <el-button type="primary" @click="changeUser = false">保 存</el-button>
            </div>
        </el-dialog>
    </v-content>
</template>
<script>
import {userPageList} from '@/api/user'
export default {
    data() {
        return {
            time:'',
            options: [{
                value: '选项1',
                label: '都市频道1'
                }, {
                value: '选项2',
                label: '都市频道2'
                }, {
                value: '选项3',
                label: '都市频道3'
                }, {
                value: '选项4',
                label: '都市频道4'
                }, {
                value: '选项5',
                label: '都市频道5'
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
                }
            ],
            addUser: false,
            lookUser:false,
            changeUser:false,
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
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,
            formLabelWidth: '130px',
            multipleSelection: [],
            currentPage:3
        }
    },
    methods:{
        getPageList() {
            let data = {
                'auth':'', 
                'userType':'',
                'departCode':'',
                'name':'',
                'empNo':'',
                'cardNo':''
            }
            userPageList(data).then((res)=>{

            })
        },
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
        },
        handleRemove(file) {
            console.log(file);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleDownload(file) {
            console.log(file);
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
.table_btn{
    text-align:left;
    padding:10px 0 10px 10px;
}
.table {
    padding:10px 0 0 0;
    .page {
        float:right;
        margin:10px 20px 0 0;
    }
} 
/deep/.el-dialog__wrapper {
    .el-dialog__header {
        text-align: left;
        padding: 10px 20px 10px;
    }
    .el-dialog__body {
        padding:0 20px;
    }
    .el-dialog__footer {
        padding: 10px 20px 10px;
    }
    .el-form {
        display:flex;
        justify-content: flex-end;
        flex-direction: column;
        .title {
            padding:5px;
            text-align: left;
            border-bottom:1px solid #ccc;
            margin-bottom:5px;
        }
        .top,.center,.bottom{
            display:flex;
            justify-content: space-around;
        }
        .left,.right {
            width:50%;
        }
        .el-form-item {
            margin-bottom:2px;
        }
        .el-input {
            width:300px;
        }
        .el-upload {
            height:130px;
            width: 130px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .el-form-item__content {
            text-align:left;
        }
    }
}
</style>