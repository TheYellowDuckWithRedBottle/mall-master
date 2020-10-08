<template>
    <div class="goodsItem">
        <img v-lazy="goodItem.show.img" @click="imgClick"/>
        <div class="title">{{goodItem.title}}</div>
    <div class="itemInfo">
        <div>
            <span class="price">￥{{goodItem.price}}</span>
        </div>
        <div class="collect">
            <img src="~/assets/img/common/collect.svg"/>
            <span>{{goodItem.cfav}}</span>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'GoodItem',
    props:{
        goodItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imgClick(){
            this.$emit("imgClicked")
            this.$router.push({
                path:'/details/'+this.goodItem.iid,
                query:{}
            })
        }
    }
}
</script>
<style scoped>
.title{
    overflow: hidden;
    text-overflow: ellipsis;
    
    white-space: nowrap;
    width:300px;
}
.goodsItem{
    width:100%;
}
.goodsItem img{
    border-radius: 10px;
}
.itemInfo{
    display: flex;
    padding:0 40px 0 40px
}
.price{
    color:pink;
    padding-right:50px
}
.collect img{
    padding-top:4px;
    width:18px;
    height: auto;
}
</style>