<!-- user -->
<template>
<div class='cart'>
    <!-- NavBar -->
    <van-nav-bar 
    title="标题" 
    left-text="返回" 
    left-arrow 
    fixed
    @click-left="back"
    >
        <template #right>
            <van-icon name="more-o" size="18" />
        </template>
    </van-nav-bar>


    <!-- 商品 -->
    <div class="cartlist" v-for="item in cartlists" :key="item.id">
        <van-row type="flex" justify="center" align="center">
            <van-col span="4">
                <van-checkbox v-model="checked"></van-checkbox>
            </van-col>
            <van-col span="20">
                <van-swipe-cell>
                    <van-card
                        :num=item.num
                        :price=item.price
                        desc="描述信息"
                        title="item.title"
                        class="goods-card"
                        thumb="https://img.yzcdn.cn/vant/cat.jpeg"
                    >
                        <template #tags>
                                <van-tag plain type="danger" v-text="item.serve"></van-tag>
                                <van-tag plain type="danger" v-text="item.serve2"></van-tag>
                        </template>
                        <template #footer>
                                <van-button size="mini">+</van-button>
                                <input type="text" class="cart-num" v-model="item.num">
                                <van-button size="mini">-</van-button>
                        </template>
                    </van-card>
                    <template #right>
                        <van-button square text="删除" type="danger" class="delete-button" />
                    </template>
                </van-swipe-cell>
            </van-col>
        </van-row>
    </div>
        

    <!-- 提交 -->
    <van-submit-bar :price="157900" button-text="去结算" @submit="onSubmit" label='总计'>
        
        <van-checkbox v-model="checked">全选</van-checkbox>

        <template #tip>
            你的收货地址不支持同城送, <span @click="skipAddr">修改地址</span>
        </template>
    </van-submit-bar>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Vue from 'vue';
import { Card,NavBar,Icon,SubmitBar,Checkbox,Button,Tag,SwipeCell,Col,Row } from 'vant';
import { Toast } from 'vant';
Vue.use(Card);
export default {
//import引入的组件需要注入到对象中才能使用
name:'Cart',
components: {
    [Card.name]:Card,
    [NavBar.name]:NavBar,
    [Icon.name]:Icon,
    [SubmitBar.name]:SubmitBar,
    [Checkbox.name]:Checkbox,
    [Button.name]:Button,
    [Tag.name]:Tag,
    [SwipeCell.name]:SwipeCell,
    [Col.name]:Col,
    [Row.name]:Row
},
data() {
//这里存放数据
return {
    checked:false,
    cartlists:[
        {id:1,title:'商品名商品名商品名商品名商品名商品名',price:2020,serve:'服务1',serve2:'服务2',num:1},
        {id:2,title:'商品名商品名商品名商品名商品名商品名',price:2020,serve:'服务1',serve2:'服务2',num:5},
        {id:3,title:'商品名商品名商品名商品名商品名商品名',price:2020,serve:'服务1',serve2:'服务2',num:3},
        {id:4,title:'商品名商品名商品名商品名商品名商品名',price:2020,serve:'服务1',serve2:'服务2',num:4},
        {id:5,title:'商品名商品名商品名商品名商品名商品名',price:2020,serve:'服务1',serve2:'服务2',num:5},
        {id:6,title:'商品名商品名商品名商品名商品名商品名',price:2020,serve:'服务1',serve2:'服务2',num:2},
        {id:7,title:'商品名商品名商品名商品名商品名商品名',price:2020,serve:'服务1',serve2:'服务2',num:2},
        {id:8,title:'商品名商品名商品名商品名商品名商品名',price:2020,serve:'服务1',serve2:'服务2',num:1},
        {id:9,title:'商品名商品名商品名商品名商品名商品名',price:2020,serve:'服务1',serve2:'服务2',num:3},
        {id:10,title:'商品名商品名商品名商品名商品名商品名',price:2020,serve:'服务1',serve2:'服务2',num:1}
        
    ]
};
},
//监听属性 类似于data概念
computed: {
    
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
    // 返回上一页
    back(){
        this.$router.back()
    },
    // 提交购物车
    onSubmit(){
        console.log('提交购物车')
    },
    // 跳转至地址修改页面
    skipAddr(){
        this.$router.push('/addr')
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
.cart{
    position: relative;
    margin: 2rem 0 2rem 0;
}
    .van-submit-bar__text{
        height: 0.4rem;
        line-height: 0.4rem;
        .van-submit-bar__price{
            color: #000;
            font-weight:700;
            font-size: 0.4rem;
        }
    }
    .goods-card {
        margin: 0;
        background-color: white;
    }

    .delete-button {
        height: 100%;
    }
    .cart-num{
        outline:none;/*清除INPUT  聚焦时的 蓝色边框*/
        border: none;
        padding: 0;
        margin-left:5px ;
        background-color: #f2f2f2;
        text-align: center;
        width: 36px;
        height: 15px;
    }
</style>