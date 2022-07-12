<template>
    <div class="group">
        <!-- <Header></Header> -->
        <div class="jumbotron">
            <h1>豆瓣分组!</h1>
                <p>...</p>
            <p>
                <a class="btn btn-primary btn-lg" href="#" role="button">详情</a>
            </p>
        </div>
        <!--  -->
        <div class="container">
            <div class="row">
                <div class="col-xs-4 col-lg-6">
                    <div class="thumbnail">
                    <img src="" alt="">
                    <div class="caption">
                        <h3>Th</h3>
                        <p>...</p>
                        <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                    </div>
                    </div>
                </div>
                <div class="col-xs-4 col-lg-6">
                    <div class="thumbnail">
                    <img src="" alt="">
                    <div class="caption">
                        <h3>Th</h3>
                        <p>...</p>
                        <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                    </div>
                    </div>
                </div>
                <div class="col-xs-4 col-lg-6">
                    <div class="thumbnail">
                    <img src="" alt="">
                    <div class="caption">
                        <h3>Th</h3>
                        <p>...</p>
                        <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                    </div>
                    </div>
                </div>
                <div class="col-xs-4 col-lg-6">
                    <div class="thumbnail">
                    <img src="" alt="">
                    <div class="caption">
                        <h3>Th</h3>
                        <p>...</p>
                        <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>    
        <!--  -->
       
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Header from "../../components/Header/index"
import Tabbar from "../../components/Tabbar/index"
export default {
    components:{Tabbar,Header}
}
</script>

<style lang="scss">
.group{
    padding-top:50px;
    padding-bottom: 60px;
    .jumbotron{
        margin: 10px;
    }
    .container{
       .row{
           margin-left: -15px;
       margin-right: -15px;
       }
    }
}
</style>
