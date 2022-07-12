<template>
    <div class="header" v-if="isShow">
        <div class="left">
            <i :class="['fa', 'fa-' + icon]"></i>
            <input type="text" :placeholder='title' class="city">
            
        </div>
        <div class="right">
            <i class="fa fa-black-tie"></i>
            <span>城市</span>
        </div>
    </div>
</template>

<script>
import router from "@/router/index.js"
export default {
    data() {
        return {
            title: "豆瓣首页",
            icon: "github-alt",
            isShow:true
        }
    },
    methods:{
        
    },
    created() {
        router.beforeEach((to, from, next) => {
            switch (to.name) {
                case "home":
                    this.title = "豆瓣首页"
                    this.icon = "github-alt"
                    this.isShow = true
                    break;
                case "audio":
                    this.title = "豆瓣书影音"
                    this.icon = "audio-description"
                    this.isShow = true
                    break;
                case "broadcast":
                    this.title = "豆瓣广播"
                    this.icon = "video-camera"
                    this.isShow = true
                    break;
                case "group":
                    this.title = "豆瓣分组"
                    this.icon = "group"
                    this.isShow = true
                    break;
                case "mine":
                    this.title = "我的豆瓣"
                    this.icon = "user"
                    this.isShow = true
                    break;
                default:
                    this.isShow = false
                    break;
            }
            next()
        })
    }
}
</script>

<style lang="scss">
.header {
    width: 100%;
    display: flex;
    height: 50px;
    padding: 10px;
    background-color: white;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0;
    top:0;
    z-index: 100;
    .left {
        display: flex;

        .fa {
            font-size: 30px
        }

        input {
            width: 230px;
            margin-left: 10px
        }
    }

    .right {
        display: flex;

        .fa {
            font-size: 30px;
            line-height: 50px;
        }

        span {
            line-height: 50px;
        }
    }
}
</style>
