# emojionearea-vue

基于[emojioneArea-open](https://github.com/woyehaizaixiang/emojionearea-open)开发的vue表情输入框插件，api请参考[https://github.com/woyehaizaixiang/emojionearea-open#readme](https://github.com/woyehaizaixiang/emojionearea-open#readme)

## 预览
![](https://github.com/woyehaizaixiang/emojionearea-vue/blob/master/example/demo.png)

## 使用方法

#### [npm](https://www.npmjs.com/)安装

```bash
npm install emojionearea-vue
```

#### 使用

```js
<template>
  <Emojionearea
    v-model="text"
    :search="false"
  ></Emojionearea>
</template>
import Emojionearea from "emojionearea-vue";
import "emojionearea-vue/lib/index.css";
export default {
  components: {
    Emojionearea,
  },
  data(){
    return{
      text: "",
    }
  },
}
```

支持更多的属性请参考[https://github.com/woyehaizaixiang/emojionearea-open#readme](https://github.com/woyehaizaixiang/emojionearea-open#readme)