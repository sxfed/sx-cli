## 随行付前端脚手架

#### 基本环境
[git](https://git-scm.com/downloads) 版本管理工具

[yarn](https://yarnpkg.com/zh-Hans/docs/install)包管理工具

[node](http://nodejs.cn/download/)Node环境


MacOs

终端下安装 [Howbrew](https://brew.sh/)
```
安装 OSX 包管理工具Howbrew
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
使用howbrew 安装 git,nodejs,yarn
$ brew install git
$ brew install nodejs
$ brew install yarn
```

安装完基本环境我们就可以使用随行付脚手架了（简称 sx-cli）

第一步
使用npm命令安装脚手架包
```
 $ npm install -g generator-sx-cli
```
[yeoman](http://yeoman.io/)是一个帮助开发者快速构建新项目的脚手架开发工具集


第二步

* Mac 用户

```
source ~/.bashrc
```
运行上方命令在当前终端中定义命令别名，为了方便用户快速使用我们的工具，定义了如下命令:


```
项目初始化命令

$ sxinit          //在这个过程中，引导用户选择模版，命名项目，快速生成项目

项目运行命令

$ sxstart     //进入构建的项目根目录下运行，出现 -bash: sxinit: command not found，请在当前终端运行$ source ~/.bashrc
```
* windowx／linux用户
```
$ yo sx-cli        //引导用户选择模版，命名项目，快速生成项目
$ yarn run dev     //进入构建的项目根目录下运行

```

##### 这是一个需要不断完善的脚手架，欢迎大家推送PR优化这个脚手架，这个工具宗旨是为大家提供随行付大前端团队在不同前端场景下积累的项目资源，打开开源之门，与大家更多沟通，更多共享，谢谢支持

