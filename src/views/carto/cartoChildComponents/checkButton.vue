<template>
    <div class="checkButton" :class="{'noSelect':isSelect}">
        <div ><img  src="~/assets/img/cart/tick.svg" /></div>
    </div>
</template>
<script>
export default {
    name:'CheckButton',
    props:{
        isSelect:{
            type:Boolean,
            default(){
                return false
            }
        }
    }
}
</script>
<style scoped>
.checkButton{
  border-radius: 50%;
    background-color:black;
    /* background-image: url("~assets/img/cart/tick.svg"); */
    /* margin-top: 50px;
    margin-bottom:70px; */
}
.noSelect{
     border-radius: 50%;
    background-color:red;
    height: 20px;
    /* margin-top: 50px;
    margin-bottom:70px; */
}
</style>