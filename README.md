# 前言


这是个小demo，一共有三个页面，基本覆盖了vue的基础知识，使用vue自带的脚手架工具vue-cli来构建项目结构，项目中使用了vuex来管理公共数据，使用vue-router实现路由功能，布局上使用rem加百分比的方式实现移动端适配。


采用border.css解决高倍屏1px问题引入fastclick解决移动端点击300ms延迟等，从项目架构的搭建再到界面布局和组件的拆分和组件之间的互相通信，最后完成联调、真机测试、打包上线等步骤。


下文会详细总结整个开发过程，写这个的目的主要是对自己学习的一个总结和分享，希望我的分享对你有所帮助。



## 技术栈
vue + vuex + vue-router + webpack + ES6 + axios + stylus + flex

## 项目运行

```
git clone git@github.com:One-AnDong/travel.git

cd travel
npm install 或 yarn(推荐)

npm run dev

```

# 效果演示

[查看demo请戳这里](https://one-andong.github.io/travel-build/#/)（请用chrome手机模式预览）

### 移动端扫描下方二维码

<img src="https://github.com/One-AnDong/travel/blob/master/src/assets/img/1547283804.png" width="250" height="250"/>

# 总结


