<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'TabBar'
}
</script>
<style scoped>
.tabbar{
    display:flex;
    justify-content:space-around;
    position:fixed;
    bottom:0px;
    left:0;
    right:0;
    background-color: #fff;

}
</style>