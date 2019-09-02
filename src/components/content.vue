<template>
    <div class="wrap">    
        <slot></slot>
    </div>
</template>
<script>
// @ is an alias to /src
// import leftNav from "@/components/leftNav.vue";

export default {
    name: "vContent",
    components: {
        // leftNav
    }
};
</script>

<style lang="scss" scoped>
.wrap {
    width:100%;
    min-height:100%;
    margin:20px 0;
}
</style>
