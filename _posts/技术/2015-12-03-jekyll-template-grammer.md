---
layout: post
title: Jekyll模板语法教程
description: Jekyll模板语法教程
category: Jekyll
tags: [Jekyll]
date: 2015-12-03
---

Jekyll会遍历你的站点，来寻找需要处理的文件。  
任何具有 YAML 前置数据的文件都将会被处理，每一个这样的文件，Jekyll都会通过Liquid模板系统使用许多可用的页面变量。  
下面是一个可用变量的列表。

###Jekyll 目录及一些说明

Jekyll 标准目录树

     _config.yml   Jekyll的配置文件
     _includes     include 文件所在的文件夹
     _layouts      模版文件夹
     _posts        自己要发布的内容
     _sites        预览时产生的文件都放在该文件夹中

*  _includes文件夹中所放的文件是最终要放到模版中的一些代码片段。
* _layouts中放的一些模版，模版是用包含page或post内容的。Jekyll的模版使用HTML语法来写，并包含YAML Front Matter。所有的模版都可用Liquid来与网站进行交互。所的的模版都可以使用全局变量site和page，site变量包含该网站所有可以接触得到的内容和元数据(meta-data)，page变量包含的是当前渲染的page或post的所有可以接触得到的数据。
* _post文件夹中放的是自己要发布的post文章。post文件的命名规则为YEAR-MONTH-DATE-title.MARKUP，使用rake post会自动将post文件命名合适。而对于page，所有放在根目录下或不以下划线开头的文件夹中有格式的文件都会被Jekyll处理成page。这里说的有格式是指文件含有YAML Front Matter。所有的post和page都要用markdown或者texile或者HTML语法来写，并可以包含Liquid模版的语法。还要有 YAML Front Matter (Jekyll只处理具有YAML Front Matter的文件)。YAML Front Matter必须放在文件的开头，一对---之间，用户可在这一对---间设置预先定义的变量或用户自己的数据。
<!-- more -->