<!--
 * @Descripttion: 
 * @version: 
 * @Author: yunx
 * @Date: 2021-11-19 19:29:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-24 19:19:14
-->

# pm2命令

[pm2命令](https://juejin.cn/post/6889300755539312653#heading-6)

## 监控除了  node_modules 目录以外文件

```shell
pm2 start server.js --watch --ignore-watch="node_modules"
pm2 start server.js --env test
pm2 start server.js --watch
```

## 配置文件

[配置文件](https://www.cnblogs.com/huiguo/p/12694542.html)
