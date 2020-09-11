
//vue.config.js每次修改都要重启项目

module.exports={
    devServer:{
      //对本地服务器进行配置
      port:'8080',
      //代理配置
      proxy: {
          '/app': {
            target: 'http://rap2.taobao.org:38080',  //接口所在服务器
            ws: true,
            changeOrigin: true
          },
      }
    },
    // publicPath:''
}