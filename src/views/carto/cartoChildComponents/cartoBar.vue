<template>
    <div class="cartoBar">
        <div class="Check">
            <div class="button"><CheckButton class="selectAll" :isSelect="isSelectAll" @click.native="CheckSelect"/></div>
            <div>全选</div>
            <div class="total">合计{{calPrice}}</div>
            </div>
 
        <div class="cal" @click="cal">
            去计算({{checkLength}})
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import CheckButton from './checkButton'
export default {
    name:"cartoBar",
    components:{
        CheckButton
    },
    computed:{
        ...mapGetters(['cartCount']),
        calPrice(){
            let price= this.$store.state.CartoList.filter(item=>{
              return  item.isCheck
            }).reduce((pre,item)=>{
                return pre+item.price*item.count
            },0)
            return price
        },
        checkLength(){
            let length=this.$store.state.CartoList.filter(item=>{
                return item.isCheck
            }).length
            return length
        },
        isSelectAll(){
            let isSelect=this.$store.state.CartoList.find(item=>
                !item.isCheck
            )

            if(isSelect==undefined)
            {
                return true
            }
            return false;
        }
    },
    methods:{
        CheckSelect(){
            if(this.isSelectAll)
            {
                
                this.$store.state.CartoList.forEach(item=>{
                    item.isCheck=false
                })
            }else{
                this.$store.state.CartoList.forEach(item=>{
                    item.isCheck=true
                })
            }
        
        },
        cal(){
            if(this.checkLength==0)
            {
                this.$toast.show("当前数量为空",1500)
            }
            
        }
    }
}
</script>
<style scoped>
.cartoBar{
   position: fixed;
   bottom:60px;
   width:95%;
    padding:5px;
    background-color: rgb(234,233,235);
    display: flex;
    justify-content: space-between;
}
.Check{
    display:flex
}
.total{
    /* float: right; */
    padding-left:20px;
}
.cal{
    background-color:rgb(255,82,0);
    right: 10px;
}
.selectAll{
    width:16px;
}
.button{
    height: 30px;
    margin-right: 10px;
}
</style>