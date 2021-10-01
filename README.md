<br />

<p align="center">
  <a href="https://mao.codeword.info" target="blank">
    <img src="contents-hope/.vuepress/public/logo_round.png" alt="Logo" width="156" height="156">
  </a>
  <h2 align="center" style="font-weight: 600">毛泽东诗词库</h2>
  <p align="center">
    Collection of Mao's Poetry
    <br />
    <a href="https://mao.codeword.info" target="blank"><strong>🌎 点击访问</strong></a>&nbsp;&nbsp;
    <br />
    <br />
      <!--本文件之前的代码来源于YesPlayMusic的README-->
  </p>


## 📜 使用许可

本项目仅供个人学习研究使用，禁止用于商业及非法用途。

若您要使用本项目的全部或部分内容来完成与“毛泽东思想与中国特色社会主义理论体系概论”的课程作业、任务、社会实践等计入课程成绩的工作，您需要：

- 通过项目日志页提供的联系方式或GitHub Issue向项目所有者发起申请并取得许可（您的用户名和项目名出现在本节末尾方代表您取得了使用许可）。
- 在申请中说明使用方式、使用范围及开源您项目中使用/引用本项目内容的所有文件。
- 在作业提交、展示汇报、总结答辩、开源发布、上线部署等环节注明采用了本项目，并给出本项目地址。

## ☑️ 项目进度 & TODO

查看项目进度和TODO，请访问[项目进度](./contents-hope/progress.md)

## ✍ 完善内容

- 访问[项目进度](https://mao.codeword.info/progress/)查看待完善内容。
- 我们使用Markdown编写内容，基于VuePress和VuePress-Theme-Hope构建网页。
- 若对格式有疑问，请参考[Markdown 介绍](https://vuepress-theme-hope.github.io/zh/basic/markdown/)和上述两个项目的项目文档（[VuePress](https://v1.vuepress.vuejs.org/zh/guide/) | [vuepress-theme-hope](https://vuepress-theme-hope.github.io/zh/guide/)）。
- 文档前面的fontmatter不涉及文库正文内容，编辑时不建议更改。

### 方式一

在您要编辑的页面底部点击“编辑此页”后按照指引编辑。需要fork本项目，做出修改并提交pull request。

### 方式二

1. fork本项目，随后clone您的fork。
2. 进入项目文件夹，在`contents-hope`文件夹编辑相关文件。

```
$work_directory/contents-hope
│  about.md			#项目介绍
│  blog.md			#项目日志页
│  log.md			#开发日志
│  progress.md		#项目进度
│  README.md		#主页
│  reference.md		#参考资料
├─.vuepress
│  │  config.js		#配置
│  ├─public 		#网页素材目录
│  └─styles			#外观配置
└─contents			#内容
    │  README.md	#总目录
    ├─A				#古体诗词
    ├─B				#无据诗词、联句、残句
    ├─C				#韵语
    ├─D				#改诗
    └─E				#楹联
```

### 方式三

在要完善页面的评论区或[Discussions](https://github.com/CDN18/poetic-mao/discussions)提交您完善的内容。

## ⚙️功能开发

本项目基于[VuePress](https://v1.vuepress.vuejs.org/zh/guide/)和[vuepress-theme-hope](https://vuepress-theme-hope.github.io/zh/guide/)构建。

### 目录结构

内容目录结构见[完善内容-方式二](#方式二)，其余目录说明见相应目录的README。

### 我们希望为此项目增加如下内容

- Hitokoto API：随机显示某句毛泽东诗词
- 随机访问：随机跳转到其中一页
- 自定义主题，使之契合文库主题

### 在本地启动开发环境

1. 确保`Node.js`和`yarn v1.x `可用
2. `git clone https://github.com/CDN18/poetic-mao.git `
3. 进入`poetic-mao`目录
4. `yarn upgrade`
5. ` yarn run docs:dev`
6. 若要弹出主题：`yarn docs:eject-theme`

## 📚[参考内容](./contents-hope/reference.md)

## © 版权

如果您是文库内容的版权方，希望下架指定内容，请[邮件联系](mailto:cardinal@codeword.info)项目所有者。

