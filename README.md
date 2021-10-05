# element-plus-demo
This instruction is written in Chinese, so please use the [translation tool](https://www.deepl.com) if you are not a native Chinese speaker, thank you.

## 问题描述
于 2021-10-06，参照[官方文档](https://element-plus.org/en-US/guide/quickstart.html#on-demand-import)中自动导入的说明配置后，v-loading 指令无法正常使用。

### 背景环境
* 硬件：Macbook Pro 13(M1 款)
* OS: MacOS 12.0 Beta(21A5534d)
* NodeJS: 16.10.0
* npm: 7.24.0
* pnpm: 6.16.1
* Vue: 请查看 [package.json](package.json)
* Element-Plus: 请查看 [package.json](package.json)
* Vite: 请查看 [package.json](package.json)

## 测试步骤
### 环境准备
运行以下命令安装依赖(若尚未安装 pnpm，请先安装)：

```sh
pnpm i
```

### 进行测试
运行以下命令，在 serve 模式下即可复现问题(页面白屏，控制台报错，去掉 [demo.vue](src/views/demo.vue) 中的 `v-loading` 指令后可正常使用)

```sh
pnpm run serve
```
