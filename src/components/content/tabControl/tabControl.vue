<template>
    <div class="tabControl">
    <div  v-for="(item,index) in tabItem" :key="index">
        <div @click="itemClick(index)" :class="{'Active':currentIndex==index}">
            <span>{{item}}</span>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'TabControl',
    props:{
        tabItem:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(data){
            this.currentIndex=data;
            this.$emit("tabItem",data)
        }
    }

}
</script>
<style scoped>
.tabControl{
    display: flex;
    justify-content: space-around;
    background-color: #fff;
}
.Active{
    border-bottom: pink 3px solid;
    
}
</style>