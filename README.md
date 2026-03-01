# Node CSV App

一个用于将联系人信息写入 CSV 文件的 Node.js 命令行应用程序。

## 功能

- 通过命令行交互式输入联系人信息（姓名、电话、邮箱）
- 将联系人数据保存到 CSV 文件
- 支持连续添加多个联系人
- 包含基础版和进阶版两个实现

## 安装

```bash
npm install
```

## 使用方法

### 基础版 (index.js)

使用 Node.js 内置的 `readline` 模块实现：

```bash
node index.js
```

### 进阶版 (index.advance.js)

使用 `prompt` 和 `csv-writer` 库实现，支持邮箱格式验证和时间戳记录：

```bash
node index.advance.js
```

## 文件说明

| 文件 | 说明 |
|------|------|
| `index.js` | 基础版本，使用原生 readline 模块 |
| `index.advance.js` | 进阶版本，使用 prompt 库和 csv-writer 库 |
| `contact.csv` | 存储联系人数据的 CSV 文件 |
| `package.json` | 项目配置和依赖信息 |

## 依赖

- [csv-writer](https://www.npmjs.com/package/csv-writer) - CSV 文件写入库
- [prompt](https://www.npmjs.com/package/prompt) - 命令行交互式提示库

## CSV 格式

生成的 CSV 文件包含以下字段：

- **Name** - 联系人姓名
- **Number** - 联系电话
- **Email** - 电子邮箱（进阶版会验证格式）
- **Timestamp** - 记录时间（仅进阶版）

## 示例

```
$ node index.advance.js
prompt: Enter name:  Mike
prompt: Enter number:  13800138000
prompt: Enter email:  mike@example.com
Mike Saved
prompt: Do you want to continue? (y/n): n
```

## 许可证

ISC
