<template>
    <div 
        class="homeitems" 
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        infinite-scroll-immediate-check="true"
    >
        <div class="text-center" v-if="arr1.length === 0">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-for="item in arr1" v-else>
            <div class="img">
                <img v-lazy="getImages(item.images.small)" alt="">
            </div>
            <div class="info">
                <div class="info-left">
                    <div class="title">{{ item.title }}</div>
                    <div class="count">浏览次数：{{ item.collect_count | fcount }}</div>
                </div>
                <div class="info-right">
                    <div class="dirertor">导演：{{ item.directors[0].name }}</div>
                    <div class="rating">评分：{{ item.rating.average }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
    filters: {
        fcount(val) {
            if (val > 10000) {
                val = val / 10000;
                val = val.toFixed(1)
                val += "万"
            }
            return val;
        }
    },
    components: {
    
    },
    data() {
        return {
            // arr:[
            //     {"id":1,"title":"中国机长","count":121,"dir":"里斯","rat":1.2,"src":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1912%2F11%2Fc6%2F183847783_1576050362283_mthumb.jpg&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659595302&t=06165da7f6aa827ff5ae9b661ec03347"},
            //     {"id":2,"title":"狙击英雄","count":1132,"dir":"黄渤","rat":3.5,"src":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2022%252F0701%252Fb99184b8j00rechn5001hc000ht00a0m.jpg%26thumbnail%3D660x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659595540&t=ac063db077207ce85f882d6679f164a2"},
            //     {"id":3,"title":"我不是药神","count":4341,"dir":"海拉","rat":12,"src":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmaterials.cdn.bcebos.com%2Fimages%2F35783667%2Fa7428019e3707cbe8f22e2e652f5f49b.jpeg&refer=http%3A%2F%2Fmaterials.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659595601&t=7ab3d7838bdd558ca5918b1e67cf41ef"},
            //     {"id":4,"title":"西红柿首富","count":54541,"dir":"大海","rat":1.2,"src":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp6.itc.cn%2Fimages01%2F20210420%2Fdd1dfa79f774451a9f0ace7f58550052.jpeg&refer=http%3A%2F%2Fp6.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659595622&t=5a33a9ec50be6f2b00ae440d3c41efa9"},
            //     {"id":5,"title":"银河护卫队","count":65656,"dir":"后代","rat":2.6,"src":"https://img0.baidu.com/it/u=4032388875,1563814625&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=480"},
            //     {"id":6,"title":"复仇者联盟","count":545451,"dir":"发送","rat":7.7,"src":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F8442639893%2F1000&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659595856&t=901d93e8ca2c0cca319a764b36d9eaca"},
            //     {"id":7,"title":"侏罗纪世界","count":3123123,"dir":"废话胡","rat":8.9,"src":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile.moyublog.com%2Fd%2Ffile%2F2020-11-21%2F6d7cc6ff7a5bd7c4fc2cd55aaaeec1c9.jpg&refer=http%3A%2F%2Ffile.moyublog.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659595701&t=35a1ea60ee9e27d1801cbee191875abf"},
            //     {"id":8,"title":"2012","count":312331,"dir":"皮特里个","rat":6.7,"src":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F65%2Fb0%2F7f%2F65b07f18f6b9cc316d3cc73e8de0e407.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659595714&t=4a85b11d1a8d768950762d327ea9f0a3"},
            //     {"id":9,"title":"速度与激情","count":3434,"dir":"罗伯特","rat":7.8,"src":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.4kting.com%2Fwp-content%2Fuploads%2F2020%2F03%2FFast_Furious_6_2013_cover.jpg&refer=http%3A%2F%2Fwww.4kting.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659595729&t=08fc0ba2b03c2f60d52e7eeb0a640e9c"},
            //     {"id":10,"title":"流浪地球","count":23434,"dir":"唐尼","rat":9.7,"src":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.goldposter.com%2F2018%2F12%2Fthe-wandering-earth_poster_goldposter_com_10.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cm_fill%2Ch_3000%2Cw_2143%2Fquality%2Cq_80&refer=http%3A%2F%2Fimg.goldposter.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659595743&t=670735dcb5b7af4c5d1cc195daa27dfb"},
            //     {"id":11,"title":"飞驰人生","count":7834578,"dir":"孙懿宗","rat":5.7,"src":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp2.itc.cn%2Fq_70%2Fimages03%2F20210103%2Fea53cae354ae4037b343ba9b32d3a58e.jpeg&refer=http%3A%2F%2Fp2.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659595764&t=38855c52735103eb027c709cd3d65532"},
            //     {"id":12,"title":"肖申克的救赎","count":5453411,"dir":"大","rat":8.7,"src":"https://pic.rmb.bdstatic.com/1438659e15b2552c4c3f1e18cc1da594.jpeg"},
            //     {"id":13,"title":"绿皮书","count":54646141,"dir":"打印度","rat":8.5,"src":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnewsimg.dangbei.net%2Fueditor%2Fphp%2Fupload%2Fimage%2F20190228%2F1551340685164536.png%210&refer=http%3A%2F%2Fnewsimg.dangbei.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659595804&t=45a03b7a6c0a39109fcaeb356ef4711e"}
            // ],
            arr1: [],
            loading: false,//无限滚动
            page: 1,
            limit: 6,
            hasMore: true//是否还有数据
        }
    },
    methods: {
        getImages(_url) {
            if (_url !== undefined) {
                let _u = _url.substring(7);
                return "https://images.weserv.nl/?url=" + _u
            }
        },
        
        loadMore(){
            console.log(12)
            if (!this.hasMore) {
                // Toast({
                //     message:"我是有底线的",
                //     duration:1000,
                //     position:"bottom"
                // }) 
                this.loading = true;
                return false
            }
            this.getMovies()
        },
        getMovies() {
            let { page, limit } = this;
            this.loading = true;//等于true滚动不会触发事件
            // let instance = Toast({
            //     message:'正在加载。。。',
            //     iconClass:"fa fa-spinner",
            //     duration:-1
            // })
            this.$http.get("/api/db/in_theaters", {
                params: {page,limit}
            }).then(res => {
                // instance.close();
                this.arr1 = this.arr1.concat(res.data.object_list)
                this.loading = false;
                if(this.page*this.limit >= res.data.total){
                    this.hasMore = false;
                    return false
                }
                this.page++
            })
        }
    },
    created(){
        // this.$http.get("/api/db/in_theaters",{
        //     params:{
        //         limit:6
        //     }
        // }).then(res=>{
        //     this.arr1 = res.data.object_list
        // })
    }
}
</script>

<style lang="scss">
.homeitems {
    .text-center {
        margin-top: 100px;
        .spinner-border{
            height: 100px;
            width: 100px;
            font-size: 30px;
        }  
    }

    padding: 10px;

    .img {
        margin-top: 10px;

        img {
            width: 100%;
            height: 150px;
        }
    }

    .info {
        .info-left {
            display: flex;
            justify-content: space-between;

            .title {
                color: blue;
                font-size: 20px;
                font-weight: 900;
            }
        }

        .info-right {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid black;
            padding-bottom: 10px;

            .rating {
                color: red;
            }
        }
    }
}
</style>
