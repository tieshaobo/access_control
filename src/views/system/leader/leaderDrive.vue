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

                </div>
                <div class="chart">

                </div>
                <div class="chart">

                </div>
                <div class="chart">

                </div>
                <div class="chart">

                </div>
                <div class="chart">

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
            ]
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
                justify-content: space-around;
                .chart{
                    width:48%;
                    height:390px;
                    margin:10px 0;
                    background:#eee;
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