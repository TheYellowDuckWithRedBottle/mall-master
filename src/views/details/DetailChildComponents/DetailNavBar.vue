<template>
    <div class="DetailNavBar">
        <navBar>
            <div slot="left" ><img src="~/assets/img/common/back.svg" @click="backClick"/></div>
            <div slot="center" class="center">
                <div 
                @click="itemClick(index)"
                v-for="(item,index) in title" :key="index">
                <span  :class="{'isClick':currentIndex==index}">{{item}}</span>
                </div>
            </div>
        </navBar>
    </div>
</template>
<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
    name:'DetailNavBar',
    components:{
        NavBar
    },
    methods:{
        itemClick(index){
            this.currentIndex=index  
            this.$emit("IndexClick",index)   
        },
        backClick(){
           this.$emit("backClick")
        }
    },
    data(){
        return {
            title:["商品","店铺","评价","参数"],
            currentIndex:{
                type:Number,
                default(){
                    return 0
                }
            }
        }
    }
}
</script>
<style scoped>
.DetailNavBar{
    background-color:pink;
    left:0px;
    right:0px;
    top:0px;
}
.center{
    display:flex;
    justify-content: space-around;
}
.isClick{
    border-bottom:red solid 0.5px
}
</style>