# 🚀 Vercel 部署指南

## ⚠️ 重要：确保这些文件在 GitHub 仓库根目录

### 必须文件清单：
- ✅ `index.html` - 在**根目录**
- ✅ `main.tsx` - 在**根目录**
- ✅ `App.tsx` - 在**根目录**
- ✅ `package.json` - 在**根目录**
- ✅ `vite.config.ts` - 在**根目录**
- ✅ `vercel.json` - 在**根目录**（已更新）
- ✅ `tsconfig.json` - 在**根目录**
- ✅ `.gitignore` - 在**根目录**

### 文件夹结构：
```
根目录/
├── index.html          ← 必须在根目录
├── main.tsx            ← 必须在根目录
├── App.tsx             ← 必须在根目录
├── package.json        ← 必须在根目录
├── vite.config.ts      ← 必须在根目录
├── vercel.json         ← 必须在根目录（已更新）
├── tsconfig.json
├── .gitignore
├── components/
│   ├── hero.tsx
│   ├── navigation.tsx
│   ├── portfolio.tsx
│   ├── about.tsx
│   ├── skills.tsx
│   ├── contact.tsx
│   └── ui/
├── contexts/
│   └── LanguageContext.tsx
└── styles/
    └── globals.css
```

## 📤 上传到 GitHub 步骤：

### 1️⃣ 确认文件位置
- 所有文件必须在**仓库根目录**
- **不要**把文件放在子文件夹里

### 2️⃣ 上传必须更新的文件
请替换/上传这些文件到 GitHub：
1. **vercel.json** - 已简化配置
2. **.gitignore** - 新建
3. **App.tsx** - 已添加 LanguageProvider
4. **main.tsx** - 已简化

### 3️⃣ Vercel 部署设置

在 Vercel 项目设置中：

**Framework Preset:** Vite
**Build Command:** `npm run build`
**Output Directory:** `dist`
**Install Command:** `npm install`
**Node Version:** 18.x

## 🔧 如果还是 404，请检查：

### 检查 1：GitHub 仓库结构
- 进入 GitHub 仓库
- 确认 `index.html` 在根目录（不是在子文件夹）
- 确认 `package.json` 在根目录

### 检查 2：Vercel 构建日志
1. 进入 Vercel 项目
2. 点击最新的部署
3. 查看 "Build Logs"
4. 复制任何错误信息

### 检查 3：Vercel 项目设置
1. 进入 Vercel 项目
2. 点击 "Settings"
3. 点击 "General"
4. 确认 "Root Directory" 是 `./`（或留空）
5. **不要**设置子目录

### 检查 4：重新导入项目（如果以上都不行）
1. 在 Vercel 删除当前项目
2. 重新 "Import Project"
3. 选择 GitHub 仓库
4. Framework 选择 "Vite"
5. 不要修改任何默认设置
6. 点击 Deploy

## 🐛 常见错误原因：

❌ **错误 1：文件在子文件夹**
- 症状：404 错误
- 解决：把所有文件移到根目录

❌ **错误 2：Root Directory 设置错误**
- 症状：找不到 package.json
- 解决：在 Vercel Settings → General → Root Directory 设为 `./` 或留空

❌ **错误 3：vercel.json 配置复杂**
- 症状：路由不工作
- 解决：使用简化的 vercel.json（已提供）

❌ **错误 4：构建命令错误**
- 症状：构建失败
- 解决：Build Command 设为 `npm run build`

## 📞 需要帮助时请提供：

1. **Vercel 构建日志**的完整内容
2. **GitHub 仓库的文件结构截图**
3. **Vercel 项目设置**的截图（Settings → General）
4. **部署的错误页面**截图

---

## ✅ 下一步：

1. 上传更新的文件到 GitHub
2. 等待 Vercel 自动重新部署（或手动触发）
3. 如果还是 404，请提供上述信息
