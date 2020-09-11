<!-- KBGoodItem -->
<template>
<div class='kb-good-item'>
    <img :src=good.img alt="" @touchstart="skipToDetail">
    <div class="good-title" v-text="good.name"></div>
    <div class="good-price">
        <span  v-text="good.price"></span>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
props:{
    good:{type:Object,require:true}
},
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    skipToDetail(){
        this.$router.push('/detail/'+this.good._id)
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="scss" scoped>
    $color:#f23030;
    
    .kb-good-item{
        box-sizing: border-box;
        width: 4.6rem;
        height: 7.12rem;
        margin: 0 0 4px 3px;
        background: rgb(255,252,245);
        // float: left;
        // flex: 1;
        &>img{
            display: block;
            width: 4.6rem;
        }
        .good-title{
            font-size: 0.346667rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-break: break-all;
            color: #232326;
            margin-top: 0.133333rem;
            line-height: 0.426667rem;
            margin-bottom: 0.08rem;
            padding: 0 0.106667rem;
        }
        .good-price{
            color: $color;
            font-weight: bolder;
            height: 26px;
            font-size: 13px;
        }
    }
</style>