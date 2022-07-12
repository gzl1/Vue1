<template>
  <div id="app">
    <Header></Header>
    <keep-alive include="home">
        <router-view></router-view>
    </keep-alive>
  </div>
 
</template>

<script>
import Header from "./components/Header/index"

export default {
   components:{Header}
}
</script>

<style lang="scss">

</style>
