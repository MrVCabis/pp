# EmailJS 配置指南

本网站使用 **EmailJS** 服务来处理联系表单，将访客消息直接发送到您的163邮箱：`18261170803@163.com`

## 📧 配置步骤

### 1. 注册 EmailJS 账号
访问 [https://www.emailjs.com/](https://www.emailjs.com/) 并注册一个免费账号

### 2. 添加邮件服务
1. 登录后，进入 **Email Services** 页面
2. 点击 **Add New Service**
3. 选择您的邮件服务商（建议选择 **Generic SMTP** 或 **Gmail**）
4. 如果使用163邮箱，选择 **Generic SMTP** 并填写：
   - **SMTP Server**: `smtp.163.com`
   - **Port**: `465` (SSL) 或 `25`
   - **Username**: `18261170803@163.com`
   - **Password**: 您的163邮箱密码（或授权码）
5. 测试连接成功后保存，记下 **Service ID**（类似 `service_abc123`）

### 3. 创建邮件模板
1. 进入 **Email Templates** 页面
2. 点击 **Create New Template**
3. 使用以下模板内容：

```
主题：网站新消息 - {{from_name}}

发件人姓名: {{from_name}}
发件人邮箱: {{from_email}}

消息内容:
{{message}}

---
此消息来自您的个人网站联系表单
```

4. 保存模板，记下 **Template ID**（类似 `template_xyz456`）

### 4. 获取公钥（Public Key）
1. 进入 **Account** → **General** 页面
2. 找到 **Public Key**（类似 `user_DEF789GHI`）
3. 复制此公钥

### 5. 更新网站代码
打开文件 `/components/contact.tsx`，找到第19-21行：

```typescript
const SERVICE_ID = 'YOUR_SERVICE_ID'; // 替换为您的 Service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // 替换为您的 Template ID
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // 替换为您的 Public Key
```

将这三个值替换为您从EmailJS获取的真实值。

## ✅ 完成！

配置完成后，访客通过网站表单发送的消息将自动发送到您的163邮箱 `18261170803@163.com`

## 💡 注意事项

- **免费账号限制**：EmailJS免费账号每月可发送200封邮件，对个人网站来说已经足够
- **163邮箱授权码**：如果使用163邮箱SMTP，可能需要在163邮箱设置中开启"SMTP服务"并生成授权码
- **邮件可能进入垃圾箱**：首次收到邮件时，请检查垃圾邮件文件夹并标记为"非垃圾邮件"

## 🔗 相关链接

- EmailJS 官网：https://www.emailjs.com/
- EmailJS 文档：https://www.emailjs.com/docs/
- 163邮箱帮助：https://help.163.com/

## 🧪 测试

配置完成后，访问网站的联系表单，填写测试信息并提交，您应该会在几秒钟内收到邮件！
