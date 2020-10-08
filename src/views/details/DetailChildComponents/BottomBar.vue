<template>
    <div class="bottomBar">
        <div class="pic">
            <div>
            <div class="cliServe"></div>
             <div>客服</div>
            </div>
       
       <div>
            <div class="store"></div>
            <div>店铺</div>
       </div>
       <div>
            <div class="coll"></div>
            <div>收藏</div>
       </div>
    </div>
        <div class="text">
            <div class="intoCarto"><span @click="goCarto">加入购物车</span></div>
            <div class="shop"><span>购买</span></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'BottomBar',
    methods:{
        goCarto(){
            this.$emit("goCarto")
        }
    }
}
</script>
<style scoped>
.bottomBar{
    display: flex;
    bottom:0px;
    position: fixed;
    z-index: 3;
    height: 74px;
    background-color: white;
    left:0px;
    right:0px;
}
    .cliServe{
        width:45px;
        height: 50px;
        background-image: url("~assets/img/detail/detail_bottom.png");
        background-position: 0px 200px;
    }
    .store{
         width:45px;
        height: 50px;
        background-image: url("~assets/img/detail/detail_bottom.png");
        background-position: 0px 110px;
    }
    .coll{   
        width:45px;
        height: 50px;
        background-image: url("~assets/img/detail/detail_bottom.png");
        background-position: 0px 250px;
    }
    .intoCarto{
        width:60%;
        background-color:rgb(255,232,23);
       text-align: center;
       padding-top: 20px;
    }  
    .shop{
        width:40%;
        text-align: center;
        background-color:rgb(255,102,153);
         padding-top: 20px;
    }
    .text,.pic{
     width: 60%;
    justify-content: space-around;
    display:flex
    }
  
</style>