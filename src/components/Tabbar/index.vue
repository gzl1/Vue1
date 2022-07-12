<template>
    <div class="tabber">
        <Tiemi txt="首页" mark="home" :sel="selected" :change-selected="changeSelected">
            <img slot="normalImg" src="../../assets/ic_tab_home_normal.png"/>
            <img slot="activeImg" src="../../assets/ic_tab_home_active.png"/>
        </Tiemi>
        <Tiemi txt="书影音" mark="audio" :sel="selected" :change-selected="changeSelected">
            <img slot="normalImg" src="../../assets/ic_tab_audio_normal.png"/>
            <img slot="activeImg" src="../../assets/ic_tab_audio_active.png"/>
        </Tiemi>
        <Tiemi txt="广播" mark="broadcast" :sel="selected" :change-selected="changeSelected">
            <img slot="normalImg" src="../../assets/ic_tab_broadcast_normal.png"/>
            <img slot="activeImg" src="../../assets/ic_tab_broadcast_active.png"/>
        </Tiemi>
        <Tiemi txt="分组" mark="group" :sel="selected" :change-selected="changeSelected">
            <img slot="normalImg" src="../../assets/ic_tab_group_normal.png"/>
            <img slot="activeImg" src="../../assets/ic_tab_group_active.png"/>
        </Tiemi>
        <Tiemi txt="我的" mark="mine" :sel="selected" :change-selected="changeSelected">
            <img slot="normalImg" src="../../assets/ic_tab_mine_normal.png"/>
            <img slot="activeImg" src="../../assets/ic_tab_mine_active.png"/>
        </Tiemi>
    </div>
</template>

<script>
import Tiemi from './Tiemi.vue';
export default {
    data(){
        return{
            selected:this.$route.name
        }
    },
    methods:{
        changeSelected(sel){
            this.selected = sel;
        }
    },
    components: { Tiemi }
}
</script>

<style lang="scss">
.tabber{
    position: fixed;
    left: 0;
    bottom: 0;
    height: 60px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content:space-between;
    width: 100%;
}
</style>
