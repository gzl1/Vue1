<template>
    <div class="homeitem">
        <div class="he" :class="isT?'po':''">
            <span class="hel"></span>
            <div>
                <span 
                    v-for="item in arr" 
                    class="her" 
                    :class="[item.cl == isf ? 'he' : '']"
                    @click="cla(item.url)"
                >{{ item.title }}</span>
            </div>
        </div>
        <!-- 下拉加载 -->
        <Homeitems></Homeitems>
        <!-- 滚动加载 -->
        <!-- <Homeitemb></Homeitemb> -->
    </div>
</template>

<script>
import Homeitems from "@/views/Home/homeitems"
import Homeitemb from "@/views/Home/homeitemb"
export default {
    components: { Homeitems, Homeitemb },
    data() {
        return {
            arr: [
                { id: 1, title: "正在热映", cl: true ,url:"db/in_theaters"},
                { id: 2, title: "即将上映", cl: false ,url:"db/coming_soon"}
            ],
            isf: true,
            isT: false,
        }
    },
    created(){
        window.addEventListener("scroll",()=>{
            let st = document.documentElement.scrollTop || document.body.scrollTop
            if(st >= 200){
                this.isT = true 
            }else{
                this.isT = false
            }
        })
    },
    methods: {
        // db/coming_soon
        cla(a) {
            this.isf = !this.isf
            this.$children[0].url = a
        },
    }
}
</script>

<style lang="scss">
.homeitem {
    .he {
        background-color: antiquewhite;
        display: flex;
        align-items: center;
        padding: 5px 0;
        &.po{
            position: fixed;
            top:50px;
            width:100%;
            z-index: 1000;
        }
        .hel {
            width: 20px;
            height: 40px;
            background-color: orange;
        }

        div {
            margin-left: 50px;
            display: flex;

            .her {
                width: 100px;
                height: 40px;
                background-color: white;
                border-radius: 15px;
                text-align: center;
                line-height: 40px;
                margin-left: 20px;
                font-size: 20px;
            }

            .he {
                width: 100px;
                height: 40px;
                background-color: rgb(87, 59, 64);
                color: red;
                padding-left: 10px;
            }
        }
    }
}
</style>
