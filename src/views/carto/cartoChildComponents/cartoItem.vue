<template>
    <div class="CartoItem">
        <div class="checkButton">
        <CheckButton :isSelect="CartoItemInfo.isCheck"  @click.native="BtnSelect"/>
        </div>
        <div class="img">
        <img :src="CartoItemInfo.topImages" alt=""/>
        </div>
        <div class="info">
            
            <div class="title">{{CartoItemInfo.title}}</div>
            <div class="desc">{{CartoItemInfo.des}}</div>
            <div class="bugInfo">
                <div class="price">{{CartoItemInfo.price}}</div>
                <div class="count">{{CartoItemInfo.count}}</div>
            </div>
        </div>
        <div class="line"></div>
    </div>
</template>
<script>
import CheckButton from './checkButton'
export default {
    name:'CartoItem',
    components:{
        CheckButton
    },
    props:{
        CartoItemInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        BtnSelect(){
            console.log(this.CartoItemInfo)
            this.CartoItemInfo.isCheck=!this.CartoItemInfo.isCheck
        }
    }
}
</script>
<style scoped>
.title,.desc{
    padding:5px 5px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.CartoItem{
    display: flex;
    border-bottom:1px gray solid;
    margin-top:8px;
}
.img{
    width:30%;
    
}
.img img{
    width:150px;
    height:130px;   
}
.info{
    width:70%;
}
.tick{
    border-radius: 50px;
    background-color:red;
    margin-top: 50px
}
.bugInfo{
    display: flex;
    justify-content: space-between;
}
.line{
    width:2px;
  
}
.checkButton{
    margin:20px 10px 0px 0px;

}
</style>