<template>
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
           <header>
               <p class="header">今日实时统计</p>
               <ul class="header_list">
                   <li class="header_item">
                        <div class="icon first"></div>
                        <div class="info">
                            <div class="info_tit">已刷卡人数（人）</div>
                            <div class="info_num">123456</div>
                            <div class="info_compare">
                                <span class="info_icon"><i class="el-icon-top"></i></span>
                                <span class="info_compare_pre">10%</span>
                                <span class="info_compare_text">同比昨日</span>
                            </div>
                        </div>
                   </li>
                   <li class="header_item">
                        <div class="icon second"></div>
                        <div class="info">
                            <div class="info_tit">已刷卡人数（人）</div>
                            <div class="info_num">123456</div>
                            <div class="info_compare">
                                <span class="info_icon"><i class="el-icon-bottom"></i></span>
                                <span class="info_compare_pre">10%</span>
                                <span class="info_compare_text">同比昨日</span>
                            </div>
                        </div>
                   </li>
                   <li class="header_item">
                        <div class="icon third"></div>
                        <div class="info">
                            <div class="info_tit">已刷卡人数（人）</div>
                            <div class="info_num">123456</div>
                            <div class="info_compare">
                                <span class="info_icon"><i class="el-icon-bottom"></i></span>
                                <span class="info_compare_pre">10%</span>
                                <span class="info_compare_text">同比昨日</span>
                            </div>
                        </div>
                   </li>
                   <li class="header_item">
                        <div class="icon fourth"></div>
                        <div class="info">
                            <div class="info_tit">已刷卡人数（人）</div>
                            <div class="info_num">123456</div>
                            <div class="info_compare">
                                <span class="info_icon"><i class="el-icon-bottom"></i></span>
                                <span class="info_compare_pre">10%</span>
                                <span class="info_compare_text">同比昨日</span>
                            </div>
                        </div>
                   </li>
               </ul>
           </header>
           <div class="chart">
               <div class="pie">
                   <div class="chartIn">
                       <!-- <ve-pie :data="chartData" :settings="chartSettings"></ve-pie> -->
                   </div>
                   <div class="chartOut">
                       <!-- <ve-pie :data="chartData" :settings="chartSettings"></ve-pie> -->
                   </div>
               </div>
               <div class="zhu">
                   <div class="card_num"></div>
                   <div class="in_num"></div>
                   <div class="out_num"></div>
               </div>
           </div>
       </div>
    </v-content>
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
            data: JSON.parse(JSON.stringify(data))
        }
    },
    methods:{
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
.container{
    height:100%;
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
        header {
            width:100%;
            .header {
                height:20px;
                text-align: left;
                margin:0 15px 0 0;
                line-height:20px;
                border-bottom:1px solid #ccc;
            }
            .header_list {
                height:100px;
                display:flex;
                justify-content: space-around;
                .header_item{
                    display:flex;
                    justify-content: space-around;
                     align-items: center;
                    .icon {
                        background:red;
                        width:56px;
                        height:56px;
                        border-radius:50%;
                    }
                    .info {
                        display:flex;
                        flex-flow:column;
                        padding:10px;
                        box-sizing: border-box;
                        -ms-flex-flow: column;
                        justify-content: space-around;
                        .info_tit {
                            height:20px;
                            line-height:20px;
                            font-family: 'PingFang HK Regular', 'PingFang HK';
                            font-weight: 400;
                            font-style: normal;
                            font-size: 12px;
                            color: #989898;
                        }
                        .info_num {
                            height:40px;
                            font-family: 'Helvetica Neue Regular', 'Helvetica Neue';
                            font-weight: 500;
                            font-style: normal;
                            font-size: 28px;
                            line-height:40px;
                            color: #666666; 
                        }
                        .info_compare {
                            display:flex;
                            justify-content: space-between;
                            align-items: center;
                            .info_compare_pre {
                                font-size: 12px;
                                color: #FE5500;
                            }
                        }
                        
                    }
                }
            }
        }
        .chart {
            margin-top:10px;
            width:100%;
            .pie {
                display:flex;
                justify-content: space-between;
                height:200px;               
                &>div {
                    width:49%;
                    border:1px solid rgba(235, 235, 235, 1);
                    border-radius: 5px;
                }
            }
            .zhu {
                display:flex;
                justify-content: flex-start;
                flex-flow: column;
                &>div {
                    height:150px;
                    margin-top:20px;
                    border:1px solid rgba(235, 235, 235, 1);
                }
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
</style>