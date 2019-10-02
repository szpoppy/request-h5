<p align="center">
   <a href="https://www.npmjs.com/package/request-h5">
   		<img src="https://img.shields.io/npm/v/request-h5.svg?style=flat" alt="npm">
   </a>
   <a href="https://www.npmjs.com/package/request-h5">
   		<img src="https://img.shields.io/npm/dm/request-h5.svg?style=flat" alt="npm">
   </a>
</p>

# request-h5

> 一套常用的 Ajax 解决方案

## 特点

-   事件驱动
-   接口请求分组支持
-   对不同分组单独设置拦截器
-   支持 promise
-   支持全局变量设置
-   支持短路径
-   服务器事件自动获取

## 安装

> npm install request-h5 -- save

## 使用

> import request from "request-h5"

## 事件说明

| 事件名称 | 说明      | 参数  |
| -------- | --------- | ----- |
| timeout  | 请求超时  | req   |
| callback | 请求完成  | res   |
| abort    | 请求中止  | req   |
| verify   | 验证数据  | res   |
| send     | 请求发送  | req   |
| progress | 上传进度  | event |
| open     | send 之前 | req   |

## 添加一个分组

> let ajaxOne = new ajax.Group()

## 添加事件

> 事件作用在一个分组上或者作用在单个请求上

```javascript
// 这个事件作用在分组上
ajaxOne.on("open", req => {
    // 这个事件可以看做一个请求拦截器
});

ajaxOne.on("identity-err", () => {
    // 身份异常事件
});

ajaxOne
    .get("url", res => {
        // 这里的回调相当于ajaxOne.on("callback", res => {})

        // 这里可以触发自定义的事件
        res.root.emit("identity-err");
    })
    .on("open", req => {
        // 这个事件仅作用与当前请求，并且上面那个拦截器先触发
    });
```

## promise 支持

```javascript
// 此时全局拦截器仍然有效
ajaxOne
    .fetch({
        url
    })
    .then(res => {
        // 当res.err 为 null
    })
    .catch(res => {
        // 当res.err 为 非null
    });
```

## 全局参数设置

```javascript
ajax.Group.setConf({
    // 默认使用 fetch请求
    useFetch: true,
    // 返回资源类型为 json
    resType: "json",
    // jsonp的key为 callback
    jsonpKey: "callback"
});
```

## 短路径设置

```javascript
ajaxOne.setConf({
    paths: {
        // 设置短路径
        webapi: "/data/api/"
    }
});

// 使用短路径
// webapi: 被替换为　/data/api/
ajaxOne.get("webapi:getuser.html", res => {}, { token: "----" });
```

## 服务器事件自动获取

```javascript
// 这里返回服务器事件
ajaxOne.getDate();
ajaxOne.get(
    "webapi:getuser.html",
    res => {
        // 这里返回服务器事件
        res.getDate();
    },
    { token: "----" }
);
```

## options 支持参数说明

| 名称     | 说明                                          | 默认值      |
| -------- | --------------------------------------------- | ----------- |
| baseURL  | 基础 url 路径                                 | 空字符串    |
| paths    | 短路径(替换 url 中的短路径)                   | 空对象      |
| useFetch | 是否使用 fetch,如果浏览器不支持，则降级为 xhr | true        |
| url      | 请求 url，支持短路径                          | 空字符串    |
| method   | 请求方法                                      | GET         |
| dataType | 请求数据格式                                  | querystring |
| resType  | 返回数据格式                                  | json        |
| param    | 请求参数                                      | null        |
| header   | 请求头设置                                    | null        |
| jsonpKey | jsonp 请求是需要的 key                        | callback    |
| cache           | get 请求是否有缓存                    | true                         |
| withCredentials | 跨域带上 cookie                       | false                        |

## 事件参数 req 说明

| 名称            | 说明                                  | 默认值                       |
| --------------- | ------------------------------------- | ---------------------------- |
| outFlag         | ajax 已经中止，内部使用               | false                        |
| method          | 请求方法                              | GET                          |
| url             | 请求 url                              | 空字符串                     |
| cache           | get 请求是否有缓存                    | true                         |
| resType         | 请求类型                              | 空字符串，默认为 querystring |
| isFormData      | 是否为 FormData 数据，针对非 GET 请求 | 按照 param 类型数据自动判定  |
| param           | 请求参数                              | 空对象                       |
| header          | 请求头                                | 空对象                       |
| baseURL         | 基础 url 路径                         | 空字符串                     |
| isCross         | 是否跨域                              | 按照 url 路径自动判断        |
| xhr             | xhr 请求的对象                        |                              |
| isXDR           | IE8，跨域是使用的对象                 | 表示 xhr 就是 xdr            |
| withCredentials | 跨域带上 cookie                       | false                        |

##　事件参数 res 说明

> 待续...