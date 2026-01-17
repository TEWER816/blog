# devAether 个人博客

基于Hugo的静态博客，专注于Python开发和TTS技术。

## 本地运行

1. 安装Hugo
   ```bash
   winget install --id Hugo.Hugo.Extended -e
   ```

2. 运行本地服务器
   ```bash
   hugo server -D
   ```

3. 访问 http://localhost:1313

## 写文章

在 `content/posts/` 目录下创建Markdown文件：

```bash
hugo new posts/文章名.md
```

或者手动创建文件，格式如下：

```markdown
---
title: "文章标题"
date: 2026-01-17
tags: ["标签1", "标签2"]
summary: "文章摘要"
---

# 文章内容

这里是文章正文...
```

## 部署到Netlify

1. 将代码推送到GitHub仓库
2. 在Netlify中导入GitHub仓库
3. Netlify会自动检测Hugo并构建部署
4. 每次push代码，Netlify自动更新

## 目录结构

```
index/
├── content/          # 文章内容
│   └── posts/       # 博客文章
├── themes/           # Hugo主题
│   └── default/      # 默认主题
├── img/             # 图片资源
├── config.toml       # Hugo配置
├── netlify.toml      # Netlify配置
└── README.md         # 说明文档
```

## 技术栈

- Hugo - 静态网站生成器
- Netlify - 网站托管
- Markdown - 文章格式
- CSS3 - 样式
- JavaScript - 交互
