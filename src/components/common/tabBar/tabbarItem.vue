<template>
    <div id="tabbarItem" @click="itemClick">
       <div v-if="isActive"> <slot name="icon_active"></slot></div>
       <div v-else> <slot name="icon"></slot></div>
       <div :class="activeStyle"> <slot name="itemText"></slot></div>
    </div>
</template>
<script>
export default {
    name:'TabBarItem',
    props:{
       path:String,
       activeColor:{
           default:String,
           color:'pink'
       }
   },
   computed:{
       isActive(){
           return this.$route.path.indexOf(this.path)!==-1
       },
       activeStyle(){
           return this.isActive?{color:this.activeColor}:{}
       }

   },
   methods:{
       itemClick(){
          this.$router.replace(this.path)
       }
   }
    
}
</script>
<style scoped>
.isActive{
    color:pink;
}
</style>