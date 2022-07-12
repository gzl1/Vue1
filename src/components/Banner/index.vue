<template>
    <div class="homeb swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"
                v-for="item in arr"
                :key="item.id"
            >
                <img :src="item.src" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
    </div>
</template>
<script>
import Swiper from 'swiper';
export default {
    data(){
        return {
            arr:[
                {id:1,src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242306111155-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659505366&t=60bd81692ab93d8531d2cf72f39bd149"},
                {id:2,src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0G020114924%2F200G0114924-15-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659505366&t=60d4f9a2884a6f00390d7f496f5aefae"},
                {id:3,src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0G020114924%2F200G0114924-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659505366&t=3bd99a480d4ac1cb9c27aea0caefd623"},
                {id:4,src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F210924233115O14-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659505366&t=1224535b9946350a1ebffabb30d54370"},
            ]
        }
    },
    created(){
        
    },
    methods:{
        
    },
    mounted() {
        var Sw = new Swiper(".homeb", {
            loop: true,
            autoplay:true,
            pagination: {
                el: '.swiper-pagination',
            },
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
        })
    }
}
</script>
<style lang="scss">
.homeb {
    width: 100%;
    height: 200px;
    background-color: yellow;

    img {
        width: 100%;
        height: 200px;
    }
}
</style>