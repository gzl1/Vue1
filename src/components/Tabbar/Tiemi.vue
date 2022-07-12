<template>
    <div class="Tiemi" @click="change()">
       <span v-if="!flag">
           <slot name="normalImg"></slot>
       </span>
       <span v-else>
            <slot name="activeImg"></slot>
       </span>
       <span :class="{active:flag}">{{txt}}</span>
    </div>
</template>

<script>

export default {
    props:["txt","mark","sel","changeSelected"],
    methods:{
        change(){
            this.changeSelected(this.mark)
            this.$router.push("/"+this.mark)
        }
    },
    computed:{
        flag(){
            if(this.mark === this.sel){
                return true
            }
            return false
        }
    }
}
</script>

<style lang="scss">
.Tiemi{
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 40px;
        height: 40px;
    }
    .active{
        color: yellowgreen;
    }
}
</style>
