<template>
    <div class="DetailShopInfo">
        <div class="title">
            <div><img :src="ShopInfo.img" alt=""/></div>
            <div><span class="name">{{ShopInfo.name}}</span></div>
        </div>
        <div class="content">
            <div class="goods">
                <div class="good">
                    <div>{{ShopInfo.fans}}</div>
                    <span>粉丝数</span>
                </div>
                <div class="good">
                    <div class="itemCount">{{ShopInfo.goods}}</div>
                    <span>全部宝贝</span>
                </div>
                <div class="good">
                    <div>{{sellCount}}</div>
                    <span>销量</span>
                </div>
            </div>
            <div class="debate" >
                <table>
                    <tr v-for="(item,index) in ShopInfo.debate" :key="index">
                        <td>{{item.name}}</td>
                        <td class="noBetter" :class="{'isBetter':item.isBetter}">{{item.score}}</td>
                        <td class="noBetter" :class="{'isBetter':item.isBetter}">{{item.isBetter==true?"高":"低"}}</td>
                    </tr>
                </table>
            </div> 
        </div>
        <div class="button"><span>进店逛逛</span></div>
    </div>
</template>
<script>
export default {
    name:'DetailShopInfo',
    props:{
        ShopInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed:{
        sellCount(){
            let sellCount=this.ShopInfo.sellCount
            if(sellCount>10000)
            {
                return (sellCount/10000).toFixed(2)+"万"
            }
            else return sellCount;
        }
    }
}
</script>
<style scoped>
.DetailShopInfo{
    padding-top:10px;
    border-bottom: rgb(242, 245, 248) 5px solid;
}
.title{
     display: flex;
}
.content{
    display: flex;
    justify-content: space-evenly;
}
.goods{
    padding-top:10px;
    display: flex;
    justify-content: space-around;
}
.good{
    padding-left: 10px;
}
.title img{
    width:50px;
    height: auto;
    vertical-align: middle;
}
.debate{
    padding-left:40px;
    border-left:solid grey 1px;
}
.name{
    vertical-align: middle;
}
.itemCount{
    text-align: center;
}
.noBetter{
    color:green
}
.isBetter{
    color:red
}
.button{
    margin-top:20px;
   text-align: center;
   margin-bottom: 20px;
}
.button span{
    padding:2px 20px;
      background-color: rgb(26, 131, 236);
      border-radius: 5px;
    
}
</style>