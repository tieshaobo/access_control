<template>
    <el-container>
        <el-header>
            <v-header></v-header>
        </el-header>
        <router-view />
    </el-container>
</template>
<script>
import vHeader from '@/views/layout/header'
export default {
    name:"system",
    components:{
        vHeader
    }
}
</script>
<style lang="scss" scoped>
    
</style>