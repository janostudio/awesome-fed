# ![](http://gtms04.alicdn.com/tps/i4/TB1HI36LVXXXXcgXVXXd3TPHFXX-60-40.png) 淘宝前端技术图谱

https://cdn.rawgit.com/taobaofed/awesome-fed/master/index.html

## 基础知识体系

### JavaScript语言
* 基本逻辑
	* if
	* for/while,break
* 函数
	* 闭包
	* 作用域
		* function
		* catch
		* with
		* eval
		* 查找和申明
	* this(call/apply)
* 对象
	* 原型
	* new的过程
* 内置对象
	* Array
	* Function
* ES6

### CSS
* 排版
	* position
	* display
		* inline/block
		* inline-block
		* flex
	* float,clear
	* 盒模型
		* padding,margin,border,width/height
		* box-sizing
	* 行
		* line-height
		* vertical-align
	* 文本
		* whitespace
		* wordbreak
* 绘制
	* background
	* color
	* transform
* 动画
	* transition
	* keyframes,animation

### Web API
* DOM API
	* insertBefore
	* appendChild
	* childNodes/parentNode
	* document.createElement/document.createTextNode
	* 事件
		* 冒泡和捕获
		* addEventListener/removeEventListener
		* document.createEvent/dispatchEvent
* CSSOM
	* window.getComputedStyle
	* getBoundingClientRect
	* getClientRects
* canvas

### HTML
* viewport meta
* 语义
	* ol/ul
	* dl,dt,dd
	* strong/b
	* strong/em
* form
	* select
	* input
		* number
		* date

### HTTP
* 状态码
	* 404
	* 302
	* 304
	* 5??
* 头
	* allow-cross-domain
	* e-tag,expires,cache
	* content-security-policy
* 方法
	* post
	* get
	* delete/put
	* head

### 安全
* CSRF/XSS
* CSP
* Same-origin policy
* ADsafe/Caja/Sandbox

### 编程能力
* 算法
	* 排序
	* 搜索算法
	* 动态规则
* 数据结构
	* 二叉树
		* AVL树
		* 红黑树
	* 二叉堆

## 工程体系
### 版本管理
* [Git 基础](http://git-scm.com/book/en/v2)
* [常用 Git 命令](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html)
* [如何写好 Commit](http://chris.beams.io/posts/git-commit/)
* [Git Hooks](http://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)

### 规范
* [JavaScript 开发风格指南](https://github.com/rwaldron/idiomatic.js)
* [CSS 开发风格指南](http://cssguidelin.es/)
* [如何编写易于测试的 JavaScript 代码](http://alistapart.com/article/writing-testable-javascript)

### 检测
* [ESLint](https://www.npmjs.com/package/eslint)
* [CSSLint](https://www.npmjs.com/package/csslint)
* [Istanbul](https://www.npmjs.com/package/istanbul)

### 编译
* [Babel](http://babeljs.io/)
* [Less](http://lesscss.org/)
* [Sass](http://sass-lang.com/)

## Node体系

### 基础

* 语言增强
	* Helper: underscore, lodash
	* 异步: async, bluebird, q

* 运行时
	* [Node.js](https://nodejs.org/en/)
	* [nsolid: Node.js企业级解决方案](https://nodesource.com/products/nsolid)
	* [Alinode: 阿里云出品的 Node.js 应用服务解决方案](http://alinode.aliyun.com/)

* JS 引擎

	* [V8: Google的 JavaScript 引擎](https://developers.google.com/v8/)
	* [Chakra: 微软的 JavaScript 引擎](https://github.com/Microsoft/ChakraCore)

### 应用开发

* Web 框架
	* [Express](http://expressjs.com/)
	* [Koa](http://koajs.com/)
	* [hapi](http://hapijs.com/)
	* [Sails.js](http://sailsjs.org/)
	* [Meteor](https://www.meteor.com/)
	* ![](http://gtms04.alicdn.com/tps/i4/TB1Xgk7LVXXXXb7XVXXgjyUFVXX-30-17.png)Midway: FED出品的基于 Node.js 的前后端分离解决方案

* Remoting 框架
	* [dnode](https://github.com/substack/dnode)
	* [loopback](http://strongloop.com/mobile-application-development/loopback/)
	* [zerorpc](https://github.com/0rpc/zerorpc-node)
	* ![](http://gtms04.alicdn.com/tps/i4/TB1Xgk7LVXXXXb7XVXXgjyUFVXX-30-17.png)Rackport: FED出品的API平台方案

* 插件
	* Security
	* HTTP 请求解析
	* 路由
	* 参数校验
	* 限流
	* 静态资源
	* SPDY/HTTP2
	* API
	* 缓存
	* 认证
	* ![](http://gtms04.alicdn.com/tps/i4/TB1Xgk7LVXXXXb7XVXXgjyUFVXX-30-17.png)Midway-plugin-xxx: Midway系列插件
	* Koa-xxx: Koa系列插件

* client/driver
	* MySQL: 关系型数据库管理系统
	* MongoDB: 面向文档的数据库
	* HBase: 分布式、面向列的开源数据库
	* Redis: 内存数据结构存储系统
	* MemCache: 分布式的高速缓存系统
	* GraphQL: Facebook 开源的查询语言

### 工具

* 持久化 & ORM
	* [Sequelizejs: 基于promise的ORM](http://docs.sequelizejs.com/en/latest/)
	* [Bookshelf.js](http://bookshelfjs.org/)
	* [Knex.js](http://knexjs.org/)
	* ![](http://gtms04.alicdn.com/tps/i4/TB1Xgk7LVXXXXb7XVXXgjyUFVXX-30-17.png)fastrecord FED出品的NodeJS数据持久化的终极解决方案

* Desktop App
	* [Electron](http://electron.atom.io/)
	* [NW.js](http://nwjs.io/)

* 调试
	* [debug: 轻量的node.js调试工具](https://github.com/visionmedia/debug)
	* [Node Inspector: 可视化的node.js调试工具](https://github.com/node-inspector/node-inspector)
	* IDE 内置 debugging

* 质量
	* 代码检查: eslint
	* 单元测试：mocha, ava
	* 断言库：assert, should, chai
	* 覆盖率：istanbul
	* mock: sinon, rewire, mm, midway-mm(Taobao)
	* ![](http://gtms04.alicdn.com/tps/i4/TB1Xgk7LVXXXXb7XVXXgjyUFVXX-30-17.png)安全扫描：midway-toolkit(Taobao)

* 进程管理
	* master/agent, ipc
	* nodejs-appctl(Taobao)
	* pm2

### 平台&服务

* 包管理
	* npm
* Provisioning & IAAS
	* docker/lxc
	* Midway Sandbox

* 监控
	* 主机监控
	* 网络监控
	* 数据库监控
	* 业务监控
	* 虚拟机/运行时
	* 日志分析
	* 分布式调用跟踪

* 运营管理
	* 报警
	* 流量控制
	* 弹性伸缩
	* 多机房容灾
	* 自动备份
	* 安全防卫

* 治理
	* 依赖分析
	* 策略管理，预案平台
	* SLA
	* 容量规划(压测) PAP/Amazon

## React体系
### React
* [设计思想](https://facebook.github.io/react/docs/thinking-in-react.html)
* [JSX 语法](https://facebook.github.io/react/docs/jsx-in-depth.html)
* [组件开发规范](https://facebook.github.io/react/docs/reusable-components.html)
* [组件生命周期](https://facebook.github.io/react/docs/component-specs.html)
* [虚拟 Dom 及 Diff 算法](http://blog.vjeux.com/2013/javascript/react-performance.html)
* [组件](https://js.coach/)

### React Native
* [通信机制](http://tadeuzagallo.com/blog/react-native-bridge/)
* [性能](https://facebook.github.io/react-native/docs/performance.html)
* [React Web](https://github.com/taobaofed/react-web)
* [Instruments](https://developer.apple.com/library/watchos/documentation/DeveloperTools/Conceptual/InstrumentsUserGuide/index.html)
* [CodePush](http://microsoft.github.io/code-push/)

### React模式
* [Flux](http://facebook.github.io/flux/docs/overview.html#content)
* [Redux](http://redux.js.org/docs/introduction/Motivation.html)