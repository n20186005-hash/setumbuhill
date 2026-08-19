# Punthuk Setumbu Field Guide

这是一个可本地保存的 React + Vite + TypeScript 静态网站源码包。它保留了印尼语与英语切换、FAQ、JSON-LD、Cookie 同意设置、独立法律页面、Google 地图嵌入及所有站点图片资源。

## 本地运行

在项目根目录执行：

```bash
corepack pnpm install --frozen-lockfile
pnpm check
pnpm dev
```

若需要生产构建，请执行 `pnpm build`。站点图片全部位于 `client/public/images/`，页面代码已改为使用本地 `/images/...` 地址，不依赖原网站的图片存储地址。

## 说明

Google 地图 iframe 与 Google Fonts 仍是浏览器端第三方服务；它们不属于可复制的图片文件。真实景点摄影的权利归摄影师或权利人所有，使用前请遵循原始来源的许可和署名要求。图片的来源说明见 [ASSET_MANIFEST.md](./ASSET_MANIFEST.md)。
