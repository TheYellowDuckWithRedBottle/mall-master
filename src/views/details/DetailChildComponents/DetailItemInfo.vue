<template>
    <div class="itemInfo">
        <div class="desc">{{ItemInfo.title}}</div>
        <div class="price">
            <span class="newPrice">￥{{ItemInfo.nowPrice}}</span>
            <span class="oldPrice">{{ItemInfo.oldPrice}}</span>
            <span class="discount">{{ItemInfo.discount}}</span>
        </div>
        <div class="column">
            <div v-for="(item,index) in ItemInfo.columns" :key="index">{{item}}</div>
        </div>
        <div class="services">
            <div  v-for="(item,index) in ItemInfo.services" :key="index"><img :src="item.icon"/>{{item.name}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'DetailItemInfo',
    props:{
        ItemInfo:{
            type:Object,
            default(){
                return {}
            }
        },
        color:{
            type:String,
            default(){}
        }
    },
    mounted(){
        console.log(this.color)
    }
}
</script>
<style vars="{color}" scoped>
.itemInfo{
    padding-bottom: 20px;
    border-bottom: rgb(242, 245, 248) 5px solid;
}
.desc{
    font-size: 16px;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.column,.services{
    display: flex;
    justify-content: space-around;
}
.column{
    padding-top:10px;
    padding-bottom:5px;
    border-bottom: 0.01px rgb(242, 245, 248) solid;
}
.price,span{
    padding-left: 8px;
    padding-top:10px;
}
.services img{
    width:15px;
}
.services{
    padding-top:5px
}
.newPrice{
    font-size:20px;
    color:pink;
}
.oldPrice{
    font-size: 10px;
    text-decoration: line-through;
}
.discount{
    background-color:var(--color);
    
    border-radius: 10px;
}
</style>