<template>
    <div>
        <detailNavBar class="navbar" @backClick="backClick" @IndexClick="indexClick"/>
        <scroll ref="scroll" class="centent">
        <detailSwiper :banners="topImages"/>
        <detailItemInfo :ItemInfo="ItemInfo" :color="discountBgColor"/>
        <detailShopInfo ref="shop" :ShopInfo="ShopInfo"/>
        <detailDebate/>
        <detailImage ref="img" :detailImage="DetailImages"/>
        <detailParams ref="params" :params="DetailParams" />
        </scroll>
        <bottomBar @goCarto="goCarto"/>
        <!-- <toast :message="message" :show="show"/> -->
    </div>

</template>
<script>
import DetailImage from './DetailChildComponents/DetailImage'
import DetailItemInfo from './DetailChildComponents/DetailItemInfo'
import DetailNavBar from './DetailChildComponents/DetailNavBar'
import DetailParams from './DetailChildComponents/DetailParams'
import DetailShopInfo from './DetailChildComponents/DetailShopInfo'
import DetailSwiper from './DetailChildComponents/DetailSwiper'
import DetailDebate from './DetailChildComponents/DetailDebate'
import BottomBar from './DetailChildComponents/BottomBar'
import Scroll from 'components/common/scroll/Scroll'
import {getDetails,ItemInfo,ShopInfo} from 'network/details'
// import Toast from 'components/common/Toast/Toast'
export default {
    name:'Details',
    components:{
        DetailImage,
        DetailItemInfo,
        DetailNavBar,
        DetailParams,
        DetailShopInfo,
        DetailSwiper,
        DetailDebate,
        Scroll,
        BottomBar,
        // Toast
    },
    data(){
        return {
        shopId:"",
        topImages:[],
        ItemInfo:{},
        discountBgColor:"",
        ShopInfo:{},
        DetailImages:[],
        DetailParams,
        // message:'',
        // show:false
        }
    },
    mounted(){
         this.shopId=this.$route.params.iid
        this.getDetailsData(this.shopId);
    },
  methods:{
      getDetailsData(iid){
          getDetails(iid).then(res=>{
            const result=res.data.result
            console.log(result)
            this.topImages=result.itemInfo.topImages
            this.ItemInfo=new ItemInfo(
                result.itemInfo.title,
                result.itemInfo.desc,
                result.itemInfo.highNowPrice,
                result.itemInfo.highPrice,
                result.itemInfo.discountDesc,
                result.columns,
                result.shopInfo.services
            )
            this.discountBgColor=result.itemInfo.discountBgColor,
            this.ShopInfo=new ShopInfo(
                result.shopInfo.shopLogo,
                result.shopInfo.name,
                result.shopInfo.cFans,
                result.shopInfo.cSells,
                result.shopInfo.cGoods,
                result.shopInfo.score,
                result.shopInfo.allGoodsUrl
            )
            this.DetailImages=result.detailInfo.detailImage[0].list
            this.DetailParams=result.itemParams
            console.log(this.DetailParams)
            this.show=true,
            this.message="加入购物车"
            setTimeout(()=>{
                this.show=false;
            },1500)
          })
      },
      backClick(){
          this.$router.go(-1)
      },
      indexClick(index){ 
          const Scroll=this.$refs.scroll.scroll;
           let offsetTop
          switch(index){
                case 0:
                    Scroll.scrollTo(0,0,300)
                    break;
                case 1:
                    offsetTop=this.$refs.shop.$el.offsetTop
                    Scroll.scrollTo(0,-offsetTop,300)
                    break;
                case 2:
                    offsetTop=this.$refs.img.$el.offsetTop
                    Scroll.scrollTo(0,-offsetTop,300)
                    break;
                case 3:
                    offsetTop=this.$refs.params.$el.offsetTop
                    Scroll.scrollTo(0,-offsetTop,300)
                    break;
                default:
                    break;
            }
      },
      goCarto(){
          let obj={}
          obj.shopId=this.shopId
          obj.title=this.ItemInfo.title
          obj.des=this.ItemInfo.desc
          obj.topImages=this.topImages[0]
          obj.price=this.ItemInfo.nowPrice
          obj.isCheck=true
          this.$store.commit("addItem",obj)
          this.$toast.show("当前商品数量加一",1500)
      }
  
  }
}
</script>
<style scoped>
.centent{
    height: 500px;
    margin-top:45px;
}
.navbar{
    position: fixed;
    z-index: 3;
}
</style>