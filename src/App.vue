<template>

  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  
}
</script>

<style lang="scss">
    body,html{
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;
    }
  
  #app{
    width: 100%;
    height: 100%;
    background: rgb(240,239,235);
  }
  .van-checkbox{
    .van-checkbox__icon{
      margin: 0 auto;
    }
  }
  
</style>
