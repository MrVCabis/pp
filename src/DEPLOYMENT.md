# 部署指南 | Deployment Guide

## 📦 项目结构

```
/
├── index.html          # 入口 HTML
├── main.tsx            # React 入口
├── App.tsx             # 主应用组件
├── package.json        # 依赖配置
├── vite.config.ts      # Vite 配置
├── vercel.json         # Vercel 配置
├── components/         # React 组件
├── contexts/           # React Context
└── styles/             # 样式文件
```

## 🚀 部署到 Vercel

### 方法1：通过 GitHub（推荐）

1. **上传所有文件到 GitHub 仓库**
2. **在 Vercel 导入项目**
3. **Vercel 会自动识别配置**
4. **点击 Deploy**

### 方法2：通过 Vercel CLI

```bash
npm install -g vercel
cd /path/to/project
vercel
```

## ⚙️ 构建配置

- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 🔧 环境要求

- Node.js 18+
- npm 9+

## ✅ 部署检查清单

- [ ] 所有文件已上传到 GitHub
- [ ] package.json 存在
- [ ] index.html 在根目录
- [ ] main.tsx 在根目录
- [ ] Vercel 配置正确
- [ ] 构建成功
- [ ] 网站可访问

## 🐛 常见问题

### 404 错误
- 检查 index.html 是否在根目录
- 检查 vercel.json 配置
- 重新部署项目

### 构建失败
- 检查所有依赖是否正确
- 查看 Vercel 构建日志
- 确认 Node.js 版本

## 📞 需要帮助？

如果遇到问题，请检查 Vercel 的部署日志。
