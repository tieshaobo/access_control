<template>
    <v-content>
        <div class="p15">
            <div class="pb15">
                <div class="error-number">404</div>
                <p>对不起，您访问的页面不存在！</p>
            </div>
            <div class="pb15">
                <a href="/index" class="btn">返回首页</a>
            </div>
            <p class="text-center">
                Copyright © <span id="year" class="mr5"></span> <span>NethSoft Co.,Ltd. All rights reserved 保留所有权利</span>
            </p>
        </div>
    </v-content>
</template>
<script>
export default {
    name:'404'
}
</script>
<style lang="scss" scoped>
.p15{
    color: #59595a;
    width:50%;
    height:322px;
    margin-left:25%;
    position: absolute;
    top:50%;
    margin:-161px 0 0 25%;
    .pb15 {
        margin-bottom:20px;
        .error-number {
            font-size: 150px;
            line-height: 1;
            font-weight: 800;
        }
        p{
            margin: 0 0 10px;
        }
        .btn{
            padding:10px;
        }
    }
    

}
</style>