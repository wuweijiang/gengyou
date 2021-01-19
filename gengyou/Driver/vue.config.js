module.exports = {
	// 配置路径别名
	configureWebpack: {
		devServer: {
			port : 8080,
			// 调试时允许内网穿透，让外网的人访问到本地调试的H5页面
			disableHostCheck: true,
			"proxy" : {
				  "/api" : {
					  "target" : "https://qhjx.cn.utools.club", //目标接口域名
					   "changeOrigin" : true,  //是否跨域
					   "secure" : true ,// 设置支持https协议的代理,
					   "pathRewrite" : {
						   "^/api" : "/api"
					   }
				 }
			}
		}
	},
	//productionSourceMap: false,
}
