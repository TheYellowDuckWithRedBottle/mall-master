<template>
    <div class="home">
        <NavBar class="home-navbar">
            <div slot="center">购物街</div>
        </NavBar>
        <tabControl class="tabControl1" :tabItem="['潮流','流行','精选']" v-show="isShow" ref="tabControl1" @tabItem="tabItem"/>
        <scroll 
        ref="scroll"
         class="content"
         @ScrollX="scrollX"
         >
        <homeSwiper :banners="banners"></homeSwiper>
        <recommendView :recommends="recommends"></recommendView>
        <featureView></featureView>
        <tabControl :tabItem="['潮流','流行','精选']" ref="tabControl2" @tabItem="tabItem"/>
        <goods :goodList="showGoods"></goods>
        </scroll>
         <backButton  @click.native="backTopClick"/>
    </div>
</template>
<script>
import NavBar from 'components/common/navBar/NavBar'
import HomeSwiper from 'views/home/childComponents/HomeSwiper'
import RecommendView from 'views/home/childComponents/RecommendView'
import FeatureView from 'views/home/childComponents/FeatureView'
import TabControl from 'components/content/tabControl/tabControl'
import Goods from 'components/content/Goods/goods'
import Scroll from 'components/common/scroll/Scroll'
import {getHomeMutidata,getData} from 'network/home'
import BackButton from 'components/common/BackUp/BackUpButton'
export default {
    name:'Home',
    components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        Goods,
        Scroll,
        BackButton
    },
    data(){
        return {
            banners:[],
            recommends:[],
            goods:{
                'pop':{page:0,list:[]},
                'sell':{page:0,list:[]},
                'new':{page:0,list:[]}
            },
            currentType:'pop',
            isShow:false
        }

    },
    computed:{
        showGoods(){
            return this.goods[this.currentType].list
        },    
    },
    mounted(){
        this.getHomeMutiData()
        this.getData1('pop'),
        this.getData1('new'),
        this.getData1('sell')
    },
    methods:{
       
        getHomeMutiData(){
            getHomeMutidata().then(res=>{   
            this.banners=res.data.data.banner.list
           this.recommends=res.data.data.recommend.list
        })
        },
        getData1(type){
            const page=this.goods[type].page+1
            getData(type,page).then(res=>{
            this.goods[type].list=res.data.data.list
            
        })
        },
        tabItem(data){
            switch(data){
                case 0:
                    this.currentType='pop'
                    break;
                case 1:
                    this.currentType='new'
                    break;
                case 2:
                    this.currentType='sell'
                    break;
                default:
                    break;
            }
            
        },
         backTopClick(){
        //this.$refs.scroll.scrollTo(0, 0)
            console.log(this.$refs.scroll.scroll);
            this.$refs.scroll.scroll.scrollTo(0, 0,300)
        },
        scrollX(pos){
            let posTop=this.$refs.tabControl2.$el.offsetTop
            if(-pos.y>posTop)
            {
                this.isShow=true
            }
          
        }
    }
    
}
</script>
<style scoped>
.home-navbar{
background-color: pink;
left:0;
right:0;
}
.home{
    height: 100vh;
}
.content{
   overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 10px;
    right: 10px;
}
.tabControl1{
    position:relative;
    z-index: 1;
}
</style>