<template>
    <div>
        <div>{{desc}}</div>
       <div v-for="(item,index) in detailImage" :key="index">
           <img :src="item" alt=""/>
       </div>
    </div>
</template>
<script>
export default {
    name:'DetailImage',
    props:{
        detailImage:{
            type:Array,
            default(){
                return []
            }
        },
        desc:{
            type:String,
            default(){
                return ""
            }
        }
    },
    
}
</script>
<style scoped>
img{
    width:100%;
    height: auto;
}
</style>