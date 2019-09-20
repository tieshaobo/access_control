<template>
    <div class="wrap">    
        <slot></slot>
    </div>
</template>
<script>
// @ is an alias to /src
// import leftNav from "@/components/leftNav.vue";

export default {
    name: "vContent"
};
</script>

<style lang="scss" scoped>
.wrap {
    width:100%;
    min-height:100%;
    box-sizing: border-box;
    padding:10px 0;
    background:#fff;
    &:after{
            clear: both;
            content: "";
            display: block;
            width: 0;
            height: 0;
        }
}
</style>
