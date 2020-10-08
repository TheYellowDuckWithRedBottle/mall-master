<template>
    <div>
        <div >
        <cartoItem v-for="(item,index) in CartList" :key="index" :CartoItemInfo="item"/>
        </div>
    </div>
</template>
<script>
import CartoItem from './cartoItem'
export default {
    name:'CartoList',
    props:{
        CartList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        CartoItem
    }
}
</script>
<style scoped>

</style>