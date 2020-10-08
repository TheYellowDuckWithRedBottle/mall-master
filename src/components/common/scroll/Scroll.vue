<template>
    <div class="wrapper" ref="wrapper">
        <div>
            <slot></slot>
            </div>
        
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name:'Scroll',
    data(){
        return {
            scroll:Object,
            probeType:{
                type:Number,
                default:3
            },
            click:true,
            pullUpLoad:true
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
            click:this.click,
            pullUpLoad:this.pullUpLoad
        })
        this.scroll.on("scroll",(pos)=>{
            this.$emit("ScrollX",pos)
        })
    }
}
</script>