<template>
    <div class="mainTabBar">
        <tabbar>
            <tabbarItem path="/home" activeColor="blue">
                <img slot="icon_active" src="~/assets/img/tabbar/home_active.svg"/>
                <img slot="icon" src="~/assets/img/tabbar/home.svg"/>
                <span slot="itemText">首页</span>
            </tabbarItem>

            <tabbarItem path="/carto" activeColor="blue">
                <img slot="icon_active" src="~/assets/img/tabbar/shopcart_active.svg"/>
                <img slot="icon" src="~/assets/img/tabbar/shopcart.svg"/>
                <span slot="itemText">购物车</span>
            </tabbarItem>

            <tabbarItem path="/category" activeColor="blue">
                <img slot="icon_active" src="~/assets/img/tabbar/category_active.svg"/>
                <img slot="icon" src="~/assets/img/tabbar/category.svg"/>
                <span slot="itemText">种类</span>
            </tabbarItem>

            <tabbarItem path="/profile" activeColor="blue">
                   <img slot="icon_active" src="~/assets/img/tabbar/profile_active.svg"/>
                <img slot="icon" src="~/assets/img/tabbar/profile.svg"/>
                <span slot="itemText">我的</span>
            </tabbarItem>

        </tabbar>
    </div>
</template>
<script>
import tabbar from 'components/common/tabBar/tabbar'
import tabbarItem from 'components/common/tabBar/tabbarItem'
export default {
    name:"MainTabBar",
    components:{
        tabbar,
        tabbarItem
    }
}
</script>
<style scoped>
.mainTabBar{
    position: relative;
    top: 500px;
    background-color: #fff;
   
}
.active{
    color:pink;
}
img{
    height: 49px;
    width:49px;
}
</style>