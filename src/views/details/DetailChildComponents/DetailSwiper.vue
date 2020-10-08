<template>
    <div>
       <swiper>
            <swiperItem v-for="(item,index) in banners" :key="index">
                <img :src="item"/>
            </swiperItem>
        </swiper>
    </div>
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
    name:'DetailSwiper',
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
img{
    width: 100%;
    height: 200px;
}
</style>