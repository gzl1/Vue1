<template>
    <div class="home">
        <Banner></Banner>
        <Homeitem></Homeitem>
        <Tabbar></Tabbar>
        <Top></Top>
    </div>
</template>

<script>
import Homeitem from "@/views/Home/homeitem"
import Tabbar from "@/components/Tabbar/index.vue"
import Banner from "@/components/Banner/index.vue"
import Top from "@/views/Home/Top.vue"
export default {
    name:"home",
    components: { Tabbar, Homeitem, Banner, Top },
    activated(){
        window.scrollTo(0,this.homeT)
    },
    deactivated(){
        
    },
    beforeRouteLeave(to,from,next){
        this.homeT = document.body.scrollTop || document.documentElement.scrollTop;
        next()
    }
}
</script>

<style lang="scss">
.home{
    padding-top: 50px;
    padding-bottom: 60px;
}
</style>
