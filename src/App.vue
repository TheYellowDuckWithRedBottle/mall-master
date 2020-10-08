<template>
  <div id="app">
    
    <router-view/>
  <MaintabBar>
   
  </MaintabBar>
   
  </div>
</template>

<script>
import MaintabBar from 'components/content/MainTabBar'
export default {
  name: 'App',
  components: {
  MaintabBar
  }
}
</script>

<style>
#app{
  margin:3px;
}
</style>
