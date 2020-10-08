<template>
    <div class="carto">
        <NavBar class="navBar">
            <div slot="center">购物车{{this.$store.state.CartoList.length}}</div>
        </NavBar>
        <Scroll class="scroll">
            <CartoList :CartList="goodsList"/>
        </Scroll>
        <CartoBar class="CartoBar"/>
    </div>
</template>
<script>
import Scroll from 'components/common/scroll/Scroll'
import CartoList from './cartoChildComponents/cartoList'
import NavBar from 'components/common/navBar/NavBar'
import CartoBar from './cartoChildComponents/cartoBar'
import {mapGetters} from 'vuex'
export default {
    name:'Carto',
    components:{
        CartoList,
        NavBar,
        Scroll,
        CartoBar
    },
    computed:{
        ...mapGetters(['cartList','cartCount']),
        goodsList(){
            console.log(this.$store.state.CartoList)
        
            return this.$store.state.CartoList
        }
    }
   
}
</script>
<style scoped>
.carto{
    height: 100vh;
}
.navBar{
    background-color: pink;
}
.scroll{
    height:500px ;
}
/* .CartoBar{
    position:relative;
    bottom:44px;
} */
</style>