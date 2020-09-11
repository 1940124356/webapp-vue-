<!-- user -->
<template>
<div class='kb-find'>
    <!-- 搜索框 -->
    <van-sticky>
        <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        >
        <template #left>
            <van-icon name="arrow-left" size="20"/>
        </template>
        <template #action>
            <div @click="onSearch">搜索</div>
        </template>
        </van-search>
    </van-sticky>
    
    <!-- 品类列表 -->
    <div class="kb-find-left">
        <ul>
            <li 
            v-for="item in cates"
            :key="item.id"
            v-text="item.cate"
            @touchstart="touch(item)"
            :class="{on:curIdx==item.id}"
            ></li>
        </ul>
    </div>

    <!-- 商品品类 -->
    <div class="kb-find-right">
        <van-grid :column-num="3">
            <van-grid-item v-for="value in 60" :key="value">
                <van-image width="70px" height="70px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                <p>商品名称</p>
            </van-grid-item>
        </van-grid>
    </div>
    <KBTabbar></KBTabbar>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { KBTabbar } from '@/components/'
import { Search,Sticky,Icon,Grid,GridItem,Image } from 'vant';
import Vue from 'vue';
Vue.use(Search);
Vue.use(Sticky);
export default {
//import引入的组件需要注入到对象中才能使用
name:'Find',
components: {
    KBTabbar,
    [Search.name]:Search,
    [Icon.name]:Icon,
    [Sticky.name]:Sticky,
    [Grid.name]:Grid,
    [GridItem.name]:GridItem,
    [Image.name]:Image
},
data() {
//这里存放数据
return {
    value:'',
    curIdx:1,
    cates:[
        {id:1,cate:'手机数码'},
        {id:2,cate:'手机数码'},
        {id:3,cate:'手机数码'},
        {id:4,cate:'手机数码'},
        {id:5,cate:'手机数码'},
        {id:6,cate:'手机数码'},
        {id:7,cate:'手机数码'},
        {id:8,cate:'手机数码'},
        {id:9,cate:'手机数码'},
        {id:10,cate:'手机数码'},
        {id:11,cate:'手机数码'},
        {id:12,cate:'手机数码'},
        {id:13,cate:'手机数码'},
        {id:14,cate:'手机数码'},
        {id:15,cate:'手机数码'},
        {id:16,cate:'手机数码'},
        {id:17,cate:'手机数码'},
        {id:18,cate:'手机数码'},

    ]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    onSearch(){
        console.log('搜索')
    },
    touch(item){
        console.log('按钮')
        this.curIdx=item.id
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
    .kb-find{
        position: relative;
        width: 100%;
        height: 100%;
        .kb-find-left{
            position: absolute;
            left: 0;
            top: 1.44rem;
            width: 2.293333rem;
            background:rgb(248,244,238);
            overflow: hidden;
            height: 15.173333rem;
            overflow: auto;
            &>ul>li{
                text-align: center;
                height: 1.226667rem;
                line-height: 1.226667rem;
                color: #333;
                font-size: 0.373333rem;
            }
            &>ul>li.on{
                background: rgb(255,251,245);
                color: rgb(236,89,87);
            }
        }
        .kb-find-right{
            position: absolute;
            right: 0;
            top: 1.44rem;
            background: #f8f8f8;
            overflow: hidden;
            height: 15.173333rem;
            width: 7.706667rem;
            overflow: auto;
            .van-grid{
                margin-top: 0.266667rem;
                padding:0.266667rem;
                .van-grid-item{
                    width: 2.213333rem;
                    p{
                        width: 2.213333rem;
                        font-size: 0.32rem;
                        height: 0.933333rem;
                        color: #333;
                        margin-top: 0.053333rem;
                        margin-bottom: 0;
                        text-align: center;
                    }
                }
            }
            
        }
    }
</style>