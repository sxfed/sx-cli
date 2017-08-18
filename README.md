## 随行付前端

#### 后台管理项目脚手架
sx-ui 管理系统模板，UI基于antd，完整的登录、退出登录、菜单等结构

`现在开始创建项目`
```
第一步

安装脚手架 npm install -g generator-sx-cli

第二步

运行命令生成项目
yo sx-cli

第三步
选择模版
填写项目名称
填写作者姓名

第四步
进入项目 安装依赖
cd XXXXXX & yarn 

第五步

启动项目 yarn run dev


```

#### sx-ui

## Prepare
前端开发前期准备工作

### 需要安装的软件
环境安装 [nodejs](http://nodejs.cn/),[yarn](https://yarnpkg.com/zh-Hans/)


### 安装依赖

``` bash

$ yarn
````
### 运行服务

```
$ yarn run dev
```

### 打包生产环境文件

```
$ yarn run build
```

# clear cache 如果发现源码与webpack编译文件明显不一致，有可能是缓存脏数据

```
$ yarn run clear-dev-cache
```

