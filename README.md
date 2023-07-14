 <p align="center">
    <a href="https://vuejs.org" target="_blank">
        <img width="300" src="http://img-basket.laokuanggong.cn/Better/quick-pack.png" alt="rollup">
    </a>
</p>

<h1 align="center">
  Quick-pack
</h1>


<p align="center">
  <img src="https://img.shields.io/badge/Typescript-^5.1.3-blue" />
  <img src="https://img.shields.io/badge/rollup-^3.25.1-red" />
</p>

---
简介
---

Quick-pack是一款基于[rollup](https://github.com/rollup/rollup)搭建的npm发包框架
- 简洁：无需复杂的配置直接使用。
- 自动化：自动代码压缩，打包文件清除等功能。
- 支持多端打包：node端、web端、node + Web端都支持打包。
- 简单易学：新手也能发包
- 无负担、轻量化 ：使用原生npm指令即可发包

---
说明
---
项目为纯js、ts项目，请不要封装jsx || tsx文件的项目。

---
useAge
---
## 下载
- 1.请直接拉去代码到本地。
- 2.进入到项目文件夹中，运行
```bash
yarn  或者 npm install
```
## 封装
`index.ts`为入口文件，只需要在入口文件中导出你封装好的函数即可。如下，我封装了一个文件下载的函数，只需要
![image](https://github.com/Bet-ter/Better-npm-package/assets/132528863/324e5b93-ae5a-4e12-a7e5-8137f9965b21)
```ts
// index.ts
export { download } from './download'
```
## 发包前准备

### 包名
你需要給你的工具包起一个名字，起好名字后，请前往package.json文件中，修改name属性，这个name属性就是你这个包的包名。
![image](https://github.com/Bet-ter/Better-npm-package/assets/132528863/88426fb4-f9d8-4509-befb-6d6bd7af83c4)

### 查看包名是否被占用
```
// name  : 你的包名
npm info name

// 例如
npm info Quick-pack
```
如果返回归来的信息是404，则说明这个包名没有被占用。

## 发包
发包前请先注册npm账号，如果有就不需要注册
```
npm publish 
```
