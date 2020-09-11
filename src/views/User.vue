<!-- user -->
<template>
<div class='user'>
    <!-- NavBar -->
    <van-nav-bar 
    title="标题" 
    left-text="返回" 
    left-arrow
    fixed
    @click-left="back"
    >
        <template #right>
            <van-icon name="search" size="18" />
        </template>
    </van-nav-bar>
    
    <!-- 顶部 -->
    <div class="tou">
        <van-row>
            <van-col span="6" type="flex" justify="center">
                <van-image
                round
                width="1.3rem"
                height="1.3rem"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </van-col>
            <van-col span="18">
                <div class="my_header_name">KBMoster</div>
                <div class="hor-tips">
                    <span class="notice">京享值10369</span>
                    <span class="notice">小白信用值67.2</span>
                </div>
            </van-col>
            <div class="xlist_group">
                <div class="assets_item">
                    <div class="assets_item_val">4</div>
                    <span class="assets_item_key">商品收藏</span>
                </div>
                <div class="assets_item">
                    <div class="assets_item_val">4</div>
                    <span class="assets_item_key">店铺收藏</span>
                </div>
                <div class="assets_item">
                    <div class="assets_item_val">12</div>
                    <span class="assets_item_key">我的足迹</span>
                </div>
            </div>
        </van-row>
        
    </div>
    
    <!-- 订单 -->
    <van-grid :dot=true >
        <van-grid-item icon="credit-pay" badge="1" text="待付款" />
        <van-grid-item icon="idcard" badge="2" text="待收货" />
        <van-grid-item icon="after-sale" badge="1" text="退换/售后" />
        <van-grid-item icon="records" badge="1" text="全部订单" />
    </van-grid>

    <!-- 单元格 -->
    <van-cell-group title="地址">
        <van-cell value="收货地址管理" is-link>
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
                <span class="custom-title">管理我的地址</span>
            </template>
        </van-cell>
    </van-cell-group>

    <van-cell-group title="安全">
        <van-cell value="密码实名认证等管理" is-link>
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
                <span class="custom-title">账户与安全</span>
            </template>
        </van-cell>
        <van-cell value="未设置" is-link>
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
                <span class="custom-title">京东支付密码</span>
            </template>
        </van-cell>
    </van-cell-group>

    <van-cell-group title="服务">
        <van-cell value="联系客服" is-link>
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
                <span class="custom-title">即时解答问题</span>
            </template>
        </van-cell>
        <van-cell value="切换站点" is-link>
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
                <span class="custom-title"></span>
            </template>
        </van-cell>
    </van-cell-group>
    
    
    <KBTabbar></KBTabbar>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { KBTabbar } from '@/components/'
import { Col,Row,Image,NavBar,Icon,Grid,GridItem,Cell,CellGroup } from 'vant';
export default {
//import引入的组件需要注入到对象中才能使用
name:'User',
components: {
    KBTabbar,
    [Col.name]:Col,
    [Row.name]:Row,
    [Image.name]:Image,
    [NavBar.name]:NavBar,
    [Icon.name]:Icon,
    [Grid.name]:Grid,
    [GridItem.name]:GridItem,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup
},
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
    // 返回上一页
    back(){
        this.$router.back()
    },
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
    .user{
        position: relative;
        width: 100%;
        height: 100%;
        .tou {
            margin-top: 1.226667rem;
            .van-row {
                height: 5.066667rem;
                padding-top: 0.4rem;
                background-image: linear-gradient(to bottom, #f6261c, #f9372a, #fb4537, #fd5143, #ff5c4f);
                .van-col {
                    height: 40%;
                    .my_header_name{
                        font-size: 0.48rem;
                        color: #fff;
                    }
                    .hor-tips{
                        height: 0.426667rem;
                        margin-top: 0.266667rem;
                        font-size: 0.266667rem;
                        color: #fff;
                        &>span{
                            background: rgb(207,33,25);
                            display: inline-block;
                            height: 0.426667rem;
                            padding: 0 0.133333rem;
                            border-radius: 0.266667rem;
                            margin-right: 0.266667rem;
                        }
                    }
                }
            }
            .xlist_group{
                padding: 0 0.373333rem 0 0.373333rem;
                display: flex;
                justify-content: space-evenly;
                .assets_item{
                    width: 3.066667rem;
                    .assets_item_val{
                        width: 100%;
                        height: 0.426667rem;
                        line-height: 0.426667rem;
                        font-size: 0.426667rem;
                        color: #fff;
                        font-weight: bolder;
                        text-align: center;
                    }
                    .assets_item_key{
                        display: block;
                        width: 100%;
                        height: 0.88rem;
                        text-align: center;
                        line-height: 0.88rem;
                        font-size: 0.32rem;
                        font-weight: bolder;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>