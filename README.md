# Rivk

This is a vue component.

## How to use

```shell
npm install rivk
```

> You need to use it in the Vue.

```js
# main.js or main.ts
import { createApp } from 'vue'
import Riv from 'rivk'
import App from './App.vue'
createApp(App).use(Riv).mount('#app')
```

> You have to pass a `imgs` to config it. And imgs is a array object. You can follow below it

```vue
<Riv :imgs="test"></Riv>
```

Its structure is like this

```js
const test = [
  {
    img: 'http://audio.fwqaq.us/banner/America1.jpg', // link
    link: 'https://www.google.com', // you want to jump adress
    alt: 'Paris Cafe Terrace', 
    imgTransform: {
      imgRotate: '90deg', // The angle at which the image is rotated
      imgScale: 0.9, // scale size
      imgTranslateX: '0%',  // x direction of movement
      imgTranslateY: '0%', // y direction of movement
      imgTranslateZ: '-0.2px', // z direction of movement
    },
  }
  // ...
]
```
