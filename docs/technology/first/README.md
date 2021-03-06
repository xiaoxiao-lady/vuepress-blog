---
title: Markdown
date: 2020-05-27 10:21
sidebar: auto
# //这个是vuePress里面通过markdown生成自动的插件，别的写博客软件里面也有对应的插件
sidebarDepth: 4
# 侧边生成的导航栏的最大级数
---

# 标题

# 一级标题

## 二级标题->#的个数就是对应的标题书

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

## 段落

Markdown 段落没有特殊的格式，直接编写文字就好，段落的换行的两种方式

换行是是使用两个以上的空格+回车

换行也可以在段落后面用一个空行重新开始段落

## 字体

_斜体_

**粗体**

**_粗斜体_**

## 分割线

---

## 删除线

~~49.9 元~~

## 下划线

<u>带下划线文本</u>

## 无须列表

- 第一项(+、—、\*都可以)
- 第二项
- 第三项

## 有序列表

1. 第一项
2. 第二项
3. 第三项

## 区块

### 区块标记

> 在段落开头使用 > 符号 ，然后后面紧跟一个空格符号：

### 区块可以嵌套

> 最外层
>
> > 第一层嵌套
> >
> > > 第二层嵌套

### 区块中使用列表

> 1.  区块中第一项
> 2.  区块中第二项
> 3.  区块中第三项

### 列表中使用区块

如果要在列表项目内放进区块，那么就需要在 > 前添加四个空格的缩进

- 第一项

  > 如果要在列表项目内放进区块，那么就需要在 > 前添加四个空格的缩进

- 第二项
  > 如果要在列表项目内放进区块，那么就需要在 > 前添加四个空格的缩进

## 代码段

- 高亮

  `小白`师长

- 代码区块

```
{
  text: "首页",
  link: "/",
  icon: "reco-home",
  },
  {
  text: "笔记",
  icon: "reco-message",
  link: "/docs/technology/",
  // items: [
  // {
  // link: "/docs/technology/",
  // },
  // ],
  },
```

##链接

[菜鸟教程](https://www.runoob.com)

<https://www.runoob.com>

## 图片

<img src="http://static.runoob.com/images/runoob-logo.png" width="50%">

![logo](http://static.runoob.com/images/runoob-logo.png "logo图片")

## 表格

Markdown 制作表格使用 | 来分隔不同的单元格，使用 - 来分隔表头和其他行。

我们可以设置表格的对齐方式：

1. -: 设置内容和标题栏居右对齐。
2. :- 设置内容和标题栏居左对齐。
3. :- 设置内容和标题栏居中对齐。

   | 标题 |
   | 左对齐 | 居中对齐 | 右对齐 |
   | :----- | :------: | -----: |
   | 单元格 | 单元格 | 单元格 |
   | 单元格 | 单元格 | 单元格 |
   | 单元格 | 单元格 | 单元格 |
