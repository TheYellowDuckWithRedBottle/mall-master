<template>
    <div class="goods">
        <div class="goodItem" v-for="(item,index) in goodList" :key="index">

        <goodsItem :goodItem="item"/>
        </div>
    </div>
</template>
<script>
import GoodsItem from './GoogsItem'
export default {
    name:'Goods',
    components:{
        GoodsItem
    },
    props:{
        goodList:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
.goods{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    left: 0;
    right: 0;
}
.goodItem{
    flex:1;
    width:40%;
    min-width: 50%;
    max-width: 50%;;
}
</style>