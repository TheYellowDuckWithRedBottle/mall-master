<template>
    <div class="nav-bar">
    <div class="leftSlot"> <slot name="left"></slot></div>
    <div class="centerSlot"> <slot name="center"></slot></div>
    <div class="rightSlot"> <slot name="right"></slot></div>
    </div>
</template>
<script>
export default {
    name:"NavBar"
}
</script>
<style scoped>
.nav-bar{
display: flex;
line-height: 44px;
text-align: center;
box-shadow: o 1px 1px rgba(100, 100, 100, 1);
}
.leftSlot{
width:60px;

}
.centerSlot{
flex:1;
}
.rightSlot{
width:60px;

}
</style>