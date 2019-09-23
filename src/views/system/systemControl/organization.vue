<template>
    <v-content>
        <div class="header">
            <el-button type="primary" size="small" @click="dialogFormVisible=!dialogFormVisible">新增组织</el-button>
        </div>
        <div class="table">
            <el-table
                :data="tableData"
                style="width: 100%;margin-bottom: 20px;"
                row-key="id"
                default-expand-all
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
                <el-table-column
                prop="date"
                label="组织名称"
                width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="地址"
                width="180">
                </el-table-column>
                <el-table-column
                prop="address"
                label="联系人">
                </el-table-column>
                <el-table-column
                prop="address"
                label="联系方式">
                </el-table-column>
                 <el-table-column
                prop="address"
                label="负责人">
                </el-table-column>
                 <el-table-column
                prop="address"
                label="状态">
                </el-table-column>
                 <el-table-column
                prop="address"
                label="操作">
                   <template slot-scope="scope">
                        <el-dropdown trigger="click">
                            <span class="el-dropdown-link">
                                <i class="el-icon-s-tools"></i><i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                                <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                                <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                                <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog title="新增组织" :visible.sync="dialogFormVisible" width="900px">
            <el-form :model="form" size="mini" label-width="120px" label-position="right">
                <div class="left">   
                    <el-row>
                        <el-col :span="24">
                            <el-form-item label="上级组织">
                                <el-select v-model="form.region" placeholder="请选择活动区域" style="width:100%;">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>                       
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="名 称">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="负责人">
                                <el-select v-model="form.region" placeholder="请选择活动区域"  style="width:100%;">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <el-form-item label="地 址">
                                <el-input v-model="form.name" placeholder="组织所在地址"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="联系人">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="联系方式">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="电子邮件">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="网站地址">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4">
                            <el-form-item label="是否启用">
                                <el-switch v-model="form.switch"></el-switch>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible = false">提 交</el-button>
                <el-button @click="dialogFormVisible = false">取 消</el-button>    
            </div>
        </el-dialog>
    </v-content>
</template>
<script>
export default {
    data() {
        return {
            dialogFormVisible:false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
                switch:false
            },
            tableData: [{
                    id: 2,
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    id: 3,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    children: [{
                        id: 31,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        id: 32,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }]
                }, {
                    id: 4,
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
            }],
        }
    }
}
</script>
<style lang="scss" scoped>
.header {
    text-align: left;
    padding-left:20px;
}
.table {
    padding:10px;
}
</style>