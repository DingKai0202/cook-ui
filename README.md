# cook-ui 一个Vue UI组件

[![Build Status](https://www.travis-ci.org/DingKai0202/cook-ui.svg?branch=master)](https://www.travis-ci.org/DingKai0202/cook-ui)

## 介绍
作者:丁凯

## 开始使用

1. 安装

使用本框架前，请在css中开启border-box

```
*,*::befor,*::after{box-sizing: border-box;}
```
你还需要设置默认颜色等变量(后续会改为 scss 变量)

IE 8及以上浏览器都支持此样式。
```
html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}

```
IE 15以上浏览器都支持此样式。

2. 安装 cook-ui
```
npm i --save cook-ui
```
3. 引入 cook-ui
```
import { Button } from 'cook-ui'
import 'cook-ui/dist/index.css'

export default {
  name: 'App',
  components: {
    'c-button': Button
  }
}
</script>
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码




