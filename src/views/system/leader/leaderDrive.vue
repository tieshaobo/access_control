<template>
    <div class="leader">
        <div class="time">
            <span>报告周期：</span>
            <el-date-picker
            v-model="time"
            type="daterange"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
            </el-date-picker>
        </div>
        <div class="content">
            <div class="jiance">
                <ul class="list">
                    <li class="list_item">
                        <div class="pan">
                            <el-progress type="dashboard" :percentage="percentage" :color="colors" :width="120"></el-progress>
                        </div>
                        <div class="num">1号监测位</div>
                    </li>
                    <li class="list_item">
                        <div class="pan">
                            <el-progress type="dashboard" :percentage="percentage" :color="colors" :width="120"></el-progress>
                        </div>
                        <div class="num">1号监测位</div>
                    </li>
                    <li class="list_item">
                        <div class="pan">
                            <el-progress type="dashboard" :percentage="percentage" :color="colors" :width="120"></el-progress>
                        </div>
                        <div class="num">1号监测位</div>
                    </li>
                    <li class="list_item">
                        <div class="pan">
                            <el-progress type="dashboard" :percentage="percentage" :color="colors" :width="120"></el-progress>
                        </div>
                        <div class="num">1号监测位</div>
                    </li>
                    <li class="list_item">
                        <div class="pan">
                            <el-progress type="dashboard" :percentage="percentage" :color="colors" :width="120"></el-progress>
                        </div>
                        <div class="num">1号监测位</div>
                    </li>
                    
                </ul>
                <div class="shili">
                    <div class="vline">
                        <div class="v1">
                            <p>100健康</p>
                        </div>
                        <div class="v2">
                            <p>80亚健康</p>
                        </div>
                        <div class="v3">
                            <p>60不健康</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chart_warp">
                <div class="chart">
                    <ve-histogram :series="chart1.series" :grid="chart1.grid" :title="chart1.title" :legend="[]" :xAxis="chart1.xAxis" :yAxis="chart1.yAxis"></ve-histogram>
                </div>
                <div class="chart">
                    <ve-histogram :series="chart2.series" :grid="chart2.grid" :title="chart2.title" :legend="[]" :xAxis="chart2.xAxis" :yAxis="chart2.yAxis"></ve-histogram>
                </div>
                <div class="chart">
                    <ve-line :series="chart3.series" :grid="chart3.grid" :title="chart3.title" :legend="[]" :xAxis="chart3.xAxis" :yAxis="chart3.yAxis"></ve-line>
                </div>
                <div class="chart">
                    <ve-histogram :series="chart4.series" :grid="chart4.grid" :title="chart4.title" :legend="chart4.legend" :xAxis="chart4.xAxis" :yAxis="chart4.yAxis"></ve-histogram>
                </div>
                <div class="chart">
                    <ve-histogram :series="chart5.series" :grid="chart5.grid" :title="chart5.title" :legend="chart5.legend" :xAxis="chart5.xAxis" :yAxis="chart5.yAxis"></ve-histogram>
                </div>
                <div class="chart">
                    <ve-line :series="chart6.series" :grid="chart6.grid" :title="chart6.title" :legend="chart6.legend" :xAxis="chart6.xAxis" :yAxis="chart6.yAxis"></ve-line>
                </div>
            </div>
            <div class="hoteare">
                <div class="hot_title">
                    <div class="left_line"></div>
                    <div class="hot_text">异常警报热力图</div>
                    <div class="right_line"></div>
                </div>
                <div class="hot_area"></div>
            </div>
        </div>
    </div> 
</template>
<script>
export default {
    data(){
        return {
            time:'',
            percentage: 75,
            colors: [
                {color: '#F20000', percentage: 20},
                {color: '#F20000', percentage: 40},
                {color: '#F20000', percentage: 60},
                {color: '#FFEA00', percentage: 80},
                {color: '#04C100', percentage: 100}
            ],
            chartColors:['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
            chart1:{
                title:{
                    text:"绩效指数",
                    top: '5%',
                    left: 'center',
                    textStyle:{
                        color:'#fff',
                        fontSize:'24',
                        fontFamily:'Microsoft YaHei',
                        fontWeight:'400',
                        lineHeight:23,
                    }
                },
                grid:{
                    bottom:30,
                    top:80,
                    shadowOffsetX:20,
                    shadowColor:"#6D96FF"
                },
                xAxis:{
                    type:'category',
                    show:true,
                    position:'bottom',
                    nameTextStyle:{
                        color:"#CDD6E5",
                        fontSize:16,
                        fontFamily:'Microsoft YaHei',    
                    },
                    axisLine :{
                        show:true,
                        lineStyle:{
                            color:'#2E466D'
                        }
                    },
                    axisLabel:{
                        show:true,
                        color:"#CDD6E5",
                        fontSize:16,
                        fontFamily:'Microsoft YaHei',
                        fontWeight:400
                    },
                    data:[1,2,3,4,5,6],
                },
                yAxis: {
                    type: 'value',
                    name:'指数',
                    nameTextStyle:{
                        color:'#CDD6E5',
                        fontSize:12,
                        fontWeight:400,
                    },
                    axisLine:{
                        show:true,
                        lineStyle:{
                            color:'#2E466D'
                        }
                    },
                    axisLabel:{
                        show:true,
                        color:"#CDD6E5",
                        fontSize:16,
                        fontFamily:'Microsoft YaHei',
                        fontWeight:400
                    },
                    splitLine:{
                        lineStyle:{
                            color:'#2E466D'
                        }
                    }
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110],
                    type: 'bar',
                    itemStyle:{
                        color:"#6D96FF",
                        width:30
                    },
                    barWidth:30
                }]
            },
            chart2:{
                title:{
                    text:"出勤指数",
                    top: '5%',
                    left: 'center',
                    textStyle:{
                        color:'#fff',
                        fontSize:'24',
                        fontFamily:'Microsoft YaHei',
                        fontWeight:'400',
                        lineHeight:23,
                    }
                },
                grid:{
                    bottom:30,
                    top:80,
                    shadowOffsetX:20,
                    shadowColor:"#6D96FF"
                },
                xAxis:{
                    type:'category',
                    show:true,
                    position:'bottom',
                    nameTextStyle:{
                        color:"#CDD6E5",
                        fontSize:16,
                        fontFamily:'Microsoft YaHei',    
                    },
                    axisLine :{
                        show:true,
                        lineStyle:{
                            color:'#2E466D'
                        }
                    },
                    axisLabel:{
                        show:true,
                        color:"#CDD6E5",
                        fontSize:16,
                        fontFamily:'Microsoft YaHei',
                        fontWeight:400
                    },
                    data:[1,2,3,4,5,6],
                },
                yAxis: {
                    type: 'value',
                    name:'msv/小时',
                    nameTextStyle:{
                        color:'#CDD6E5',
                        fontSize:12,
                        fontWeight:400,
                    },
                    axisLine:{
                        show:true,
                        lineStyle:{
                            color:'#2E466D'
                        }
                    },
                    axisLabel:{
                        show:true,
                        color:"#CDD6E5",
                        fontSize:16,
                        fontFamily:'Microsoft YaHei',
                        fontWeight:400
                    },
                    splitLine:{
                        lineStyle:{
                            color:'#2E466D'
                        }
                    }
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110],
                    type: 'bar',
                    itemStyle:{
                        color:"#61C3EC",
                    },
                    barWidth:30
                }]
            },
            chart3:{
                title:{
                    text:"实时耗能",
                    top: '5%',
                    left: 'center',
                    textStyle:{
                        color:'#fff',
                        fontSize:'24',
                        fontFamily:'Microsoft YaHei',
                        fontWeight:'400',
                        lineHeight:23,
                    }
                },
                grid:{
                    bottom:30,
                    top:80,
                    shadowOffsetX:20,
                    shadowColor:"#6D96FF"
                },
                xAxis:{
                    type:'category',
                    show:true,
                    position:'bottom',
                    nameTextStyle:{
                        color:"#CDD6E5",
                        fontSize:16,
                        fontFamily:'Microsoft YaHei',
                        align:'center',    
                    },
                    axisLine :{
                        show:true,
                        lineStyle:{
                            color:'#2E466D'
                        }
                    },
                    axisLabel:{
                        show:true,
                        color:"#CDD6E5",
                        fontSize:16,
                        fontFamily:'Microsoft YaHei',
                        fontWeight:400
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:'#2E466D'
                        }
                    },
                    data:[1,2,3,4,5,6],
                },
                yAxis: {
                    type: 'value',
                    name:'msv/小时',
                    nameTextStyle:{
                        color:'#CDD6E5',
                        fontSize:12,
                        fontWeight:400,
                    },
                    axisLine:{
                        show:true,
                        lineStyle:{
                            color:'#2E466D'
                        }
                    },
                    axisLabel:{
                        show:true,
                        color:"#CDD6E5",
                        fontSize:16,
                        fontFamily:'Microsoft YaHei',
                        fontWeight:400
                    },
                    splitLine:{
                        lineStyle:{
                            color:'#2E466D'
                        }
                    }
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110],
                    type: 'line',
                    itemStyle:{
                        color:"#108EE9",
                    },
                    lineStyle:{
                        color:"#108EE9",
                    }
                }]
            },
            chart4:{
                title:{
                    text:"员工出勤时长统计",
                    top: '5%',
                    left: 'center',
                    textStyle:{
                        color:'#fff',
                        fontSize:'24',
                        fontFamily:'Microsoft YaHei',
                        fontWeight:'400',
                        lineHeight:23,
                    }
                },
                legend:{
                    top:"12%",
                    right:"2%",
                    itemWidth:8,
                    itemHeight:8,
                    height:"13px",
                    textStyle:{
                        color:"#CDD6E5",
                        fontSize:12,
                        fontFamily:'Microsoft YaHei',
                        fontWeight:'400',
                        lineHeight:16
                    },
                    data:[{
                        name:"张三",
                        icon:"rect"
                    },{
                        name:"李四",
                        icon:"rect"
                    },{
                        name:"王五",
                        icon:"rect"
                    }],

                },
                grid:{
                    bottom:30,
                    top:80,
                    shadowOffsetX:20,
                    shadowColor:"#6D96FF"
                },
                xAxis:{
                    type:'category',
                    show:true,
                    position:'bottom',
                    nameTextStyle:{
                        color:"#CDD6E5",
                        fontSize:16,
                        fontFamily:'Microsoft YaHei',    
                    },
                    axisLine :{
                        show:true,
                        lineStyle:{
                            color:'#2E466D'
                        }
                    },
                    axisLabel:{
                        show:true,
                        color:"#CDD6E5",
                        fontSize:16,
                        fontFamily:'Microsoft YaHei',
                        fontWeight:400
                    },
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                },
                yAxis: {
                    type: 'value',
                    name:'小时',
                    nameTextStyle:{
                        color:'#CDD6E5',
                        fontSize:12,
                        fontWeight:400,
                    },
                    axisLine:{
                        show:true,
                        lineStyle:{
                            color:'#2E466D'
                        }
                    },
                    axisLabel:{
                        show:true,
                        color:"#CDD6E5",
                        fontSize:16,
                        fontFamily:'Microsoft YaHei',
                        fontWeight:400
                    },
                    splitLine:{
                        lineStyle:{
                            color:'#2E466D'
                        }
                    }
                },
                series: [{
                        name:"张三",
                        data:[100,200,300,400],
                        type: 'bar',
                        itemStyle:{
                            color:"#856DFF",
                            barWidth:30
                        }
                    },{
                        name:"李四",
                        data:[100,200,300,400],
                        type: 'bar',
                        itemStyle:{
                            color:"#61C3EC",
                            barWidth:30
                        }
                    },{
                        name:"王五",
                        data:[100,200,300,400],
                         type: 'bar',
                        itemStyle:{
                            color:"#108EE9",
                            barWidth:30
                        }
                    }]
            },
            chart5:{
                title:{
                    text:"库房台账",
                    top: '5%',
                    left: 'center',
                    textStyle:{
                        color:'#fff',
                        fontSize:'24',
                        fontFamily:'Microsoft YaHei',
                        fontWeight:'400',
                        lineHeight:23,
                    }
                },
                legend:{
                    top:"12%",
                    right:"2%",
                    itemWidth:8,
                    itemHeight:8,
                    height:"13px",
                    textStyle:{
                        color:"#CDD6E5",
                        fontSize:12,
                        fontFamily:'Microsoft YaHei',
                        fontWeight:'400',
                        lineHeight:16
                    },
                    data:[{
                        name:"张三",
                        icon:"rect"
                    },{
                        name:"李四",
                        icon:"rect"
                    },{
                        name:"王五",
                        icon:"rect"
                    }],

                },
                grid:{
                    bottom:30,
                    top:80,
                    shadowOffsetX:20,
                    shadowColor:"#6D96FF"
                },
                xAxis:{
                    type:'category',
                    show:true,
                    position:'bottom',
                    nameTextStyle:{
                        color:"#CDD6E5",
                        fontSize:16,
                        fontFamily:'Microsoft YaHei',    
                    },
                    axisLine :{
                        show:true,
                        lineStyle:{
                            color:'#2E466D'
                        }
                    },
                    axisLabel:{
                        show:true,
                        color:"#CDD6E5",
                        fontSize:16,
                        fontFamily:'Microsoft YaHei',
                        fontWeight:400
                    },
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                },
                yAxis: {
                    type: 'value',
                    name:'',
                    nameTextStyle:{
                        color:'#CDD6E5',
                        fontSize:12,
                        fontWeight:400,
                    },
                    axisLine:{
                        show:true,
                        lineStyle:{
                            color:'#2E466D'
                        }
                    },
                    axisLabel:{
                        show:true,
                        color:"#CDD6E5",
                        fontSize:16,
                        fontFamily:'Microsoft YaHei',
                        fontWeight:400
                    },
                    splitLine:{
                        lineStyle:{
                            color:'#2E466D'
                        }
                    }
                },
                series: [{
                        name:"张三",
                        data:[100,200,300,400],
                        type: 'bar',
                        itemStyle:{
                            color:"#856DFF",
                            barWidth:30
                        }
                    },{
                        name:"李四",
                        data:[100,200,300,400],
                        type: 'bar',
                        itemStyle:{
                            color:"#61C3EC",
                            barWidth:30
                        }
                    },{
                        name:"王五",
                        data:[100,200,300,400],
                         type: 'bar',
                        itemStyle:{
                            color:"#108EE9",
                            barWidth:30
                        }
                    }]
            },
            chart6:{
                title:{
                    text:"各闸机出入统计",
                    top: '5%',
                    left: 'center',
                    textStyle:{
                        color:'#fff',
                        fontSize:'24',
                        fontFamily:'Microsoft YaHei',
                        fontWeight:'400',
                        lineHeight:23,
                    }
                },
                legend:{
                    top:"12%",
                    right:"2%",
                    itemWidth:8,
                    itemHeight:8,
                    height:"13px",
                    textStyle:{
                        color:"#CDD6E5",
                        fontSize:12,
                        fontFamily:'Microsoft YaHei',
                        fontWeight:'400',
                        lineHeight:16
                    },
                    data:[{
                        name:"张三",
                        icon:"rect"
                    },{
                        name:"李四",
                        icon:"rect"
                    },{
                        name:"王五",
                        icon:"rect"
                    }],

                },
                grid:{
                    left:20,
                    bottom:30,
                    top:80,
                    shadowOffsetX:20,
                    shadowColor:"#6D96FF"
                },
                xAxis:{
                    type:'category',
                    show:true,
                    position:'bottom',
                    nameTextStyle:{
                        color:"#CDD6E5",
                        fontSize:16,
                        fontFamily:'Microsoft YaHei',
                        align:'center',    
                    },
                    axisLine :{
                        show:true,
                        lineStyle:{
                            color:'#2E466D'
                        }
                    },
                    axisLabel:{
                        show:true,
                        color:"#CDD6E5",
                        fontSize:16,
                        fontFamily:'Microsoft YaHei',
                        fontWeight:400
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:'#2E466D'
                        }
                    },
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                },
                yAxis: {
                    type: 'value',
                    name:'',
                    nameTextStyle:{
                        color:'#CDD6E5',
                        fontSize:12,
                        fontWeight:400,
                    },
                    axisLine:{
                        show:true,
                        lineStyle:{
                            color:'#2E466D'
                        }
                    },
                    axisLabel:{
                        show:true,
                        color:"#CDD6E5",
                        fontSize:16,
                        fontFamily:'Microsoft YaHei',
                        fontWeight:400
                    },
                    splitLine:{
                        lineStyle:{
                            color:'#2E466D'
                        }
                    }
                },
                series: [{
                        name:"张三",
                        data:[100,200,300,400],
                        type: 'line',
                        itemStyle:{
                            color:"#856DFF",
                        }
                    },{
                        name:"李四",
                        data:[600,200,300,400],
                        type: 'line',
                        itemStyle:{
                            color:"#61C3EC",
                        }
                    },{
                        name:"王五",
                        data:[100,300,600,400],
                         type: 'line',
                        itemStyle:{
                            color:"#108EE9",
                        }
                    }]
            },
        }
    }
}
</script>
<style lang="scss" scoped>
    /deep/.el-main{
        padding:0;
        height:calc(100vh - 80px);
    }
    .leader{
        width:100%;
        background:#fff;
        .time {
            span{
                font-size:14px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(16,142,233,1);
            }
            height:60px;
            padding:0 160px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .el-range-editor.el-input__inner {
                border:1px solid rgba(16,142,233,1);
                /deep/.el-icon-date {
                    color:rgba(16,142,233,1);    
                }
                /deep/.el-range-separator {
                    color:rgba(16,142,233,1);    
                }
                /deep/.el-range-input {
                    font-size:14px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(16,142,233,1);
                }   
            }
        }
        .content {
            background:rgba(10,13,56,1);
            padding:0 160px;
            .jiance {
                padding-top:30px;
                display:flex;
                justify-content:flex-start;
                .list{
                    height:100%;
                    flex:1;
                    display:flex;
                    justify-content: flex-start;
                    .list_item{
                        margin: 0 10px;
                        width:120px;
                        height:140px;
                        .pan{
                            width:100%;
                            height:103px;
                        }
                        .num{
                            padding-top:10px;
                            font-size:16px;
                            font-family:Microsoft YaHei;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                        }
                    }
                }
                .shili{
                    width:130px;
                    height:140px;
                    position:relative;
                    .vline{
                        position: absolute;
                        left:20px;
                        top:10%;
                        height:80%;
                        width:8px;
                        div{
                            position: relative;
                        }
                        .v1{
                            height:20%;
                            background:#04C100;
                        }
                        .v2{
                            height:20%;
                            background:#FFEA00;
                        }
                        .v3{
                            height:60%;
                            background:#F20000;
                        }
                        P{
                            text-align:left;
                            width:60px;
                            font-size:12px;
                            font-family:Microsoft YaHei;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            position: absolute;
                            left:15px;
                            top:50%;
                            margin-top:-6px;
                        }
                    }
                }
            }
            .chart_warp {
                padding-top:30px;
                display:flex;
                flex-wrap:wrap;
                justify-content: space-between;
                .chart{
                    width:49%;
                    height:390px;
                    margin:10px 0;
                    // background:#eee;
                    background:url('../../../assets/img/border.png') center no-repeat;
                    background-size: 100% 100%;
                }
            }
            .hoteare {                
                padding-top:30px;
                .hot_title{
                    width:100%; 
                    height:25px;                  
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    .left_line{
                        width:100px;
                        height:6px;
                        background:url('../../../assets/img/left.png') center center no-repeat;
                        background-size:contain;
                    }
                    .hot_text{
                        width:181px;
                        height:25px;
                        padding:0 20px;
                        font-size:24px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                    }
                    .right_line{
                        width:100px;
                        height:6px;
                        background:url('../../../assets/img/right.png') center center no-repeat;
                        background-size:contain;
                    }
                }
                .hot_area{
                    width:100%;
                    height:500px;
                    margin:40px auto 30px auto;
                    background:#fff;
                }
            }
        }
    }
</style>