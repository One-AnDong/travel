# 前言


这是个小demo，一共有三个页面，基本覆盖了vue的基础知识，使用vue自带的脚手架工具vue-cli来构建项目结构，项目中使用了vuex来管理公共数据，使用vue-router实现路由功能，布局上使用rem加百分比的方式实现移动端适配。


采用border.css解决高倍屏1px问题引入fastclick解决移动端点击300ms延迟等，从项目架构的搭建再到界面布局和组件的拆分和组件之间的互相通信，最后完成联调、真机测试、打包上线等步骤。


下文会详细总结整个开发过程，写这个的目的主要是对自己学习的一个总结和分享，可能知识点会偏基础入门，我会尽量写的比较有营养，希望我的分享对你有所帮助。



## 技术栈
> vue + vuex + vue-router + webpack + ES6 + axios + stylus + flex

## 项目运行

```
git clone git@github.com:One-AnDong/travel.git
cd travel
npm install 或 yarn(推荐)
npm run dev
```

# 效果演示
![travel](http://pic.mysir.me/travel.gif)


[查看demo请戳这里](https://one-andong.github.io/travel-build/#/)（请用chrome手机模式预览）

### 移动端扫描下方二维码

<img src="http://pic.mysir.me/1547283804.png" width="250" height="250"/>

# 目标功能

- [x] 选择城市 -- 完成
- [x] 搜索地址 -- 完成
- [x] 城市列表拖动 -- 完成

# 开发总结
## 项目结构搭建
使用vue-cli初始化一个webpack文件夹标准的vue项目，安装脚手架所需要的依赖

```
vue init webpack travel  //初始化一个vue项目
cd travel //进入项目文件夹
yarn start //安装项目所需要的依赖
yarn run dev //运行package.json中的脚本dev指令
```

### 引入vuex
首先我们在项目目录下安装好vuex，我们在开发和生产环境都是需要vuex的，所以我们是要做一个--save的安装，具体可以查看package.json,denpendencies对象放的是项目运行所需要的依赖，不管是生产还是开发，devDependencies对象中的是开发环境所需要的依赖，例如我们webpack打包需要的各类loader。

```
yarn add vuex //yarn 默认是--save安装    
```

在src目录下新建一个文件夹，一般取名为store(仓库的意思)，在该目录下新建一个名为index的js文件，在index.js里我们需要引入vue和vuex，同时使用vuex新建一个实例并开放出来，最后我们把index.js注册到vue的实例属性中，在我们项目中我们需要方便的在各个组件中都能调用我们的vuex，这时候我们不必一个一个引入，只需要在main.js中注册，这样各个组件就能够调用了，具体代码如下。

src/store/index.js

```javascript
import Vue from 'vue' //引入vue
import Vuex from 'vuex' //引入vuex
Vue.use(vuex) //让vue使用vuex，vue中使用插件都是以这种方式引入

const state = {}
const actions = {}
const mutations = {}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
```
src/main.js

```javascript
import Vue from 'vue'
import App from './App'
import store from './store'

new Vue({
  el: '#app',
  store, //注册为vue的实例，这个子组件中直接调用this.$store来使用
  components: {
    App
  },
  template: '<App/>'
})
```
关于vuex的基本用法，我们用vuex文档中的一张图来理解
<img src="https://vuex.vuejs.org/vuex.png">
state是保存我们的数据的地方，显示state数据我们直接通过在组件调用就能显示，那么我们怎么来改变state里的值呢？这时候我们就需要有mutations，通过mutations来改变state里的值。

我们在mutations定义不同的函数来改变不同的值，组件可以通过调用vuex里的commit方法来调用mutations从而改变state，有一种情况是如果我们需要改变大量的sate，我们可能要调用很多次mutations，这会阻塞线程，这时候我们需要有异步操作，vuex用actions来解决这个问题，让组件通过dispatch方法调用actions，actions调用mutations，mutations改变state，组件随之重新渲染更新数据。
### 引入stylus

### 引入awesome iconfont
## 首页
# 目录结构
```
.
├── build
├── config
├── src
│   ├── App.vue
│   ├── assets
│   │   └── styles
│   │       ├── border.css
│   │       ├── mixins.styl
│   │       ├── reset.css
│   │       └── variables.styl
│   ├── common
│   │   ├── fade
│   │   │   └── FadeAnimation.vue
│   │   └── gallery
│   │       └── Gallery.vue
│   ├── main.js
│   ├── pages
│   │   ├── citiy
│   │   │   ├── Citiy.vue
│   │   │   └── components
│   │   │       ├── Alphabet.vue
│   │   │       ├── Header.vue
│   │   │       ├── List.vue
│   │   │       └── Search.vue
│   │   ├── detail
│   │   │   ├── Detail.vue
│   │   │   └── components
│   │   │       ├── Banner.vue
│   │   │       ├── Header.vue
│   │   │       └── List.vue
│   │   └── home
│   │       ├── Home.vue
│   │       └── components
│   │           ├── Carrousel.vue
│   │           ├── Header.vue
│   │           ├── Icons.vue
│   │           ├── Recommend.vue
│   │           └── Weekend.vue
│   ├── router
│   │   └── index.js
│   └── store
│       └── index.js
├── static
│   └── mock
│       ├── citiy.json
│       ├── detail.json
│       └── index.json
├── index.html
├── package.json
├── yarn-error.log
└── yarn.lock
```

