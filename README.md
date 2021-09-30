# element-plus-demo
This instruction is written in Chinese, so please use the [translation tool](https://www.deepl.com) if you are not a native Chinese speaker, thank you.

## 问题描述
于 2021-09-29，参照[官方文档](https://element-plus.gitee.io/zh-CN/guide/quickstart.html#on-demand-import)中自动导入的说明，无法完成预期的自动导入(除了 [vite.config.js](vite.config.js) 中的配置外，无需在代码中以任何方式引入 Element-Plus 及其样式，即可正常使用其组件，并在打包时自动按需裁减)，只有手动导入方式生效。

### 背景环境
* 硬件：Macbook Pro 13(M1 款)
* OS: MacOS 12.0 Beta(21A5522h)
* NodeJS: 16.9.1
* npm: 7.21.1
* pnpm: 6.15.1
* Vue: 请查看 [package.json](package.json)
* Element-Plus: 请查看 [package.json](package.json)
* Vite: 请查看 [package.json](package.json)

## 测试步骤
### 环境准备
运行以下命令安装依赖(若尚未安装 pnpm，请先安装)：

```sh
pnpm i
```

### 修改点介绍
共有两个文件需要在测试过程中进行修改，分别为 [vite.config.js](vite.config.js) 和 [src/main.js](src/main.js)，需要进行的修改为注释代码或解除注释，代码已通过编号进行标记，例如：

```js
// (1)
import { ElButton } from 'element-plus'
```

共有 8 个修改点，每个实验均会说明，每组修改点均会说明应该启用哪些注释，对于未说明的修改点，应该将其注释掉。

进行完相应修改后，应运行`pnpm run serve`和`pnpm run build`查看效果，对于 build 命令的结果，需运行`pnpm run preview`后访问查看，且可访问 /report.html 路径来查询打包结果的构成、大小。

### 按文档说明的自动导入
启用的修改点：6、8

| 命令 | 测试结果 | report.html 大小 |
| ---- | -------- | ---------------- |
| serve | 正常显示 | / |
| build + preview | 按钮无样式 | 337.88KB |

### 完整导入 + 按文档说明的自动导入
启用的修改点：2、4、6、8

| 命令 | 测试结果 | report.html 大小 |
| ---- | -------- | ---------------- |
| serve | 正常显示 | / |
| build + preview | 正常显示，但打包体积较大，有大量未使用的组件，明显没有按需裁减 | 1.99MB |

### 手动导入
启用的修改点：1、3、5、7

| 命令 | 测试结果 | report.html 大小 |
| ---- | -------- | ---------------- |
| serve | 正常显示 | / |
| build + preview | 正常显示 | 337.83KB |

### 按[回复#2](https://github.com/element-plus/element-plus/issues/3737#issuecomment-930170603)说明只启用 unplugin-element-plus
启用的修改点：5、7

| 命令 | 测试结果 | report.html 大小 |
| ---- | -------- | ---------------- |
| serve | 控制台提示`Failed to resolve component: el-button` | / |
| build + preview | 控制台提示`Failed to resolve component: el-button` | 312.44KB |

## 测试结论
1. 自动导入正确导入了组件，但未自动导入样式，导致无法正常使用
2. 手动导入可以正常导入组件和样式，在 build 后正常工作，但需集中导入所有需要用到的组件，实际开发中，尤其是多人开发环境下，较难进行维护，且完整的组件列表官方文档未做说明

## 望得到的解答
我对自动导入的预期是否正确，若不正确，希望指出错在何处及完善官方文档

若自动导入的目标只是自动导入组件，而不导入和裁剪样式，那可能意义不大，因为开发者仍需完整导入所有样式(打包体积大)或维护一个使用的组件列表(似乎维护 import 的组件并通过插件自动导入样式，和维护 import 的样式并自动导入组件，实际成本差异不大)

希望得到解答，解答尽量回到[原 Issue](https://github.com/element-plus/element-plus/issues/3737)回复，谢谢
