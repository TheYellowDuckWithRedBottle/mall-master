<template>
    <div class="RecommendView">
        <div v-for="(item,index) in recommends" :key="index">
            <img :src="item.image"/>
            <span>{{item.title}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'RecommendView',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
.RecommendView{
    display: flex;
}
.RecommendView img{
    width:100%;
    height: auto;
}
</style>