<template>
    <div>
        <div class="backUp" v-show="isShow">
            <img src="~/assets/img/common/top.png" />
        </div>
    </div>
</template>
<script>
export default {
    name:'BackupButton',
    props:{
        isShow:{
            type:Boolean,
            default(){
                return true
            }
        }
    },
    methods:{
       
    }
}
</script>
<style scoped>
.backUp img{
    width:40px;
    border-radius: 20px;
    position: fixed;
    right:50px;
    bottom:80px;
}
</style>