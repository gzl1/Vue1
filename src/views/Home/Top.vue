<template>
    <div class="top" :class="isTop ? 'to' : ''">
        <div class="topa" @click="goTop">
            <i class="fa fa-arrow-up"></i>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isTop: false
        }
    },
    created() {
        window.addEventListener("scroll", () => {
            let top = document.documentElement.scrollTop || document.body.scrollTop
            if (top >= 400) {
                this.isTop = true
            } else {
                this.isTop = false
            }
        })
    },
    methods:{
        goTop(){
            window.scrollTo(0,0)
        }
    }
}

</script>

<style lang="scss">
.top {
    z-index: 1000;
    background-color: rgb(83, 82, 82);
    opacity: .5;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    text-align: center;
    line-height: 40px;

    &.to {
        position: fixed;
        bottom: 70px;
        right: 20px;
    }

    .topa {
        font-size: 30px;
        color: aquamarine;
    }
}
</style>
