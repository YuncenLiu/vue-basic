### node 启动方式

新项目时候执行一次即可
```shell
npm install express
```

后续项目启动
```shell
npm i
```

#### 启动某一个后端服务

1. node 直接运行
```shell
node src/xxx.js

# 例如运行 src 目录下 studnet.js

node src/student.js
```


2. npm 运行

查看 package.json 文件，根据配置自定义启动

```shell
npm run studentsNode
```

3. 控制台会打印如下内容

```
/usr/local/bin/npm run treeGraphNode

> student@1.0.0 treeGraphNode
> node src/treeGraph.js

Server is running on port 5003 and url is http://localhost:5003/node
Server is running on port 5003 and url is http://localhost:5003/link
```

访问地址即可 [http://localhost:5003/node](http://localhost:5003/node)

