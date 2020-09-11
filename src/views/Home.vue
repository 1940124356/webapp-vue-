<!--  -->
<template>
<div class='home'>
  <!-- 通知栏 -->
  <van-notice-bar
  left-icon="volume-o"
  mode="closeable"
  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
/>

<!-- 搜索框 -->
<van-sticky>
  <van-search
    show-action
    placeholder="请输入搜索关键词"
    background='red'
  >
    <template #left>
      <van-icon name="arrow-left" size="20"/>
    </template>
    <template #action>
      <div class="search-login" @click="onLogin">登录</div>
    </template>
  </van-search>
</van-sticky>


  <!-- 轮播图 -->
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" />
    </van-swipe-item>
  </van-swipe>


  <!-- 商品列表 -->
  <div class="goodlist-top">为你推荐</div>
  

  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
    <div 
        v-for="i in length"
        :key="i"
        class="row"
    >
      <KBGoodItem :good="goods[2*i-2]"></KBGoodItem>
      <KBGoodItem :good="goods[2*i-1]"></KBGoodItem>
    </div>
    </van-list>
  </van-pull-refresh>

  <!-- 底部导航 -->
  <KBTabbar></KBTabbar>
  
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import { KBTabbar,KBGoodItem } from '@/components/'
import { NoticeBar,Search,Icon,Swipe,SwipeItem,Lazyload,PullRefresh,List,Sticky } from 'vant';
import Vue from 'vue';

Vue.use(Lazyload);
Vue.use(List);
Vue.use(Sticky);

export default {
//import引入的组件需要注入到对象中才能使用
name:'Home',
components: {
  KBTabbar,
  KBGoodItem,
  [NoticeBar.name]:NoticeBar,
  [Search.name]:Search,
  [Icon.name]:Icon,
  [Swipe.name]:Swipe,
  [SwipeItem.name]:SwipeItem,
  [PullRefresh.name]:PullRefresh,
  [List.name]:List,
  [Sticky.name]:Sticky,
},
data() {
//这里存放数据
return {
  images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
      goods:[],  
      loading:false,
      finished:false,
      refreshing:false
};
},
//监听属性 类似于data概念
computed: {
  length:function(){
    return Math.floor(this.goods.length/2)
  }
},
//监控data中的数据变化
watch: {},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  this.$http.fetchGoodList({}).then(res=>{
    console.log(res)
    this.goods=res
    // console.log('goods',this.goods.length)
  })
},
//方法集合
methods: {
  onLogin(){
    // 跳转到登录页面
    this.$router.push('/login')
  },
  onLoad(){  
    console.log('到底了')
    
  },
  // 下拉刷新
  onRefresh(){
    console.log('正在刷新')
    
  }
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
  .fire{
    width: 20px;
    height: 20px;
  }
  .van-search__content{
    border-radius: 0.533333rem;
  }
  .search-login{
    color: #fff;
  }
  .van-swipe-item{
    img{
      display: block;
      width: 10rem;
      height: 3.733333rem;
    }
  }
  .van-list{
    margin-top: 0.266667rem;
    padding: 0 0.266667rem;
  }
  .goodlist-top{width: 100%;height: 0.933333rem;text-align: center;line-height: 0.933333rem;font-size: 0.373333rem; box-sizing: border-box;background: rgb(255,252,245);color:rgb(150,219,243);}
  .row{
    display: flex;
  }
</style>
