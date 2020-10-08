<template>
    <div class="detailParams">
        <div class="key">{{params.info.key}}</div>
        <div class="table" v-for="(item,index) in params.rule.tables" :key="index">
            <table>
                <tr v-for="(item1,index1) in item" :key="index1">
                    <td v-for="(item2,index2) in item1" :key="index2">{{item2}}</td></tr>
            </table>
        </div>
        <div class="itemSet">
            <div  class="itemSet" v-for="(item3,index3) in params.info.set" :key="index3">
                <span>{{item3.key}}</span><span class="setvalue">{{item3.value}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'DetailParams',
    props:{
        params:{
            type:Object
           
        }  
    },
    data(){
        return {
            paramsInfo:{
            type:Object,
            default(){
                return {}
            }
        },
        paramstable:{
            type:Object,
            default(){
                return {}
            }
        }
        }
    },
    mounted(){
        // this.paramsInfo=this.params.info
        // console.log(this.params)
        // this.paramstable=this.params.table
    }
}
</script>
<style scoped>
.itemSet,table{
    border-bottom:3px solid rgb(239,239,239);
    padding:5px 0;
    
}
.setvalue{
    padding-left: 60px;
    color:hotpink;
}
td{
    color:rgb(137,137,137);
    padding:5px 10px;
}
</style>