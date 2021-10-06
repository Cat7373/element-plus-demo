# element-plus-demo
This instruction is written in Chinese, so please use the [translation tool](https://www.deepl.com) if you are not a native Chinese speaker, thank you.

## 问题描述
于 2021-10-06，参照[官方文档](https://element-plus.org/en-US/guide/quickstart.html#on-demand-import)中自动导入的说明配置后，v-loading 指令无法正常使用。

请尽量于[原 Issue](https://github.com/element-plus/element-plus/issues/3776) 回复，谢谢

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
运行以下命令，在 serve 模式下即可复现问题

```sh
pnpm run serve
```

问题表现为：页面白屏，控制台报错，去掉 [demo.vue](src/views/demo.vue) 中的 `v-loading` 指令后可正常使用

控制台截图：

<img src="https://user-images.githubusercontent.com/9296576/136084776-dd136b01-1043-4b3c-8503-3ae4ee8662f9.png">

### 总结
总结一下，现在[官方文档](https://element-plus.org/en-US/guide/quickstart.html#on-demand-import)提供了几种使用`Element-Plus`的方案，测试如下：

#### 完整导入
打包结果较大

#### 自动导入
插件类(ElLoading、ElMessage 等)不能用，需手动用`app.use(ElLoading)`的形式注册，且需要手动引入样式或使用手动导入插件来引入，但文档未说明此情况

#### 手动导入
需要手动一个个组件 import，比较麻烦，且未提供完整的组件列表

插件类(ElLoading、ElMessage 等)不能用，需手动用`app.use(ElLoading)`的形式注册，但文档未说明此情况
