# 安装

安装 [node](https://nodejs.org/zh-cn/download/)

安装 [淘宝镜像](https://npm.taobao.org/)

```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

安装 [weex-toolkit](http://weex.apache.org/cn/guide/set-up-env.html)

```shell
cnpm install -g weex-toolkit

weex -v
v1.3.11
- weexpack : v1.2.7
- weex-builder : v0.4.0
- weex-previewer : v1.5.1

START WEEX VUE RENDER: 1.0.33, Build 2018-10-10 18:12.
[Vue Render] install Vue 2.5.17.
```

克隆或下载本项目

运行

```shell
cnpm install
npm run dev
npm run serve/start
```

# 源码目录

├── src // 源码
│ ├── assets // 公共目录
│ │ ├── images // 静态图片目录
│ │ ├── styles // 公共样式目录
│ │ ├── js // 公用 js 目录
│ │ │ ├── utils.js // 通用工具方法
│ │ │ ├── api.js // api 目录
│ │ │ ├── stream.js // 封装请求
│ │ │ └── getBaseURL.js // 页面跳转拼接路径(非路由模式)
│ ├── components // 组件目录
│ │ │ └── common // 公共组件
│ ├── store // 状态管理
│ ├── views // 页面目录
│ ├── router.js // 路由表
│ ├── entry.js // 主入口 js
│ ├── index.vue // 入口页面

# 路由模式

## 不建议使用路由模式

使用路由模式最终只会生成一个 index.js 文件，如果项目复杂，该文件可能很大
跳转没有动画，试了 transition 没成功

## 路由相关坑

1、初始化项目的文件内容别乱删改

```js
/* weex initialized here, please do not move this line */
```

entry.js 中有这么一行注释，别动它！我曾经把这行注释删掉了，结果项目都无法运行
因为/configs/webpack.common.conf.js 中有这么一行

```js
entryContents = entryContents.replace(
  /\/\* weex initialized/,
  match => `weex.init(Vue)\n${match}`
);
```

另外如果需要注册组件或模块最好按本项目 router 分支下 entry.js 中顺序，否则会出现意想不到的问题（尝试过把注册模块放到刚提到的那行注释之前会出现问题）

# 备注

1、2017 年 10 月和 2018 年 10 月 weex 项目升级前后

升级前 weex 版本

```shell
weex-toolkit	v1.3.4
START WEEX VUE RENDER: 0.12.21, Build 2017-10-12 15:49.
[Vue Render] install Vue 2.4.3.
```

页面路径：

h5: http://172.25.127.66:8080/web/index.html?page=/dist/views/home.js
app: http://172.25.127.66:8080/dist/views/home.js

升级后 weex 版本

```shell
weex-toolkit	v1.3.11
START WEEX VUE RENDER: 1.0.33, Build 2018-10-10 18:12.
[Vue Render] install Vue 2.5.17.
```

新版本页面路径：

h5: http://172.25.127.66:8080/views/home.html
http://172.25.127.66:8080/#/home (router)

app: http://172.25.127.66:8080/dist/views/home.js
http://172.25.127.66:8080/dist/index.js (router)

可见升级后 app 页面路径没变，h5 从原来的切换 js 变成了跳转不同 html,当然这应该都可以通过改变 webpack 配置实现

2、如果新建的项目不用 vue-router，以下一定要选 NO，否则会影响生成的 webpack 配置文件（webpack 分支有对比）
<img src="http://hangzhoutv.oss-cn-hangzhou.aliyuncs.com/h5/weex-create.png" width=500/>
