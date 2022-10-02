<template>
  <div class="range">
    <Riv :imgs="test"></Riv>
  </div>
</template>

<script setup lang="ts">
const imgRotate = '90deg'
const imgTranslateX = '0%'
const test = [
  {
    img: 'http://audio.fwqaq.us/banner/America1.jpg',
    link: 'https://www.google.com',
    alt: 'Paris Cafe Terrace',
    imgTransform: {
      imgRotate,
      imgScale: 0.9,
      imgTranslateX,
      imgTranslateY: '0%',
      imgTranslateZ: '-0.2px',
    },
  },
  {
    img: 'http://audio.fwqaq.us/banner/America2.jpg',
    link: 'https://www.google.com',
    alt: 'Paris Cafe Terrace',
    imgTransform: {
      imgRotate: '180deg',
      imgScale: 1.1,
      imgTranslateX: '20vh',
      imgTranslateY: '5vh',
      imgTranslateZ: '-0.3px',
    },
  },
  {
    img: 'http://audio.fwqaq.us/banner/America3.jpg',
    link: 'https://www.google.com',
    alt: 'Paris Cafe Terrace',
    imgTransform: {
      imgRotate,
      imgScale: 1.2,
      imgTranslateX,
      imgTranslateY: '5vh',
      imgTranslateZ: '-0.3px',
    },
  },
  {
    img: 'http://audio.fwqaq.us/banner/America4.jpg',
    link: 'https://www.google.com',
    alt: 'Paris Cafe Terrace',
    imgTransform: {
      imgRotate,
      imgScale: 1.1,
      imgTranslateX,
      imgTranslateY: '0',
      imgTranslateZ: '-0.4px',
    },
  },
  {
    img: 'http://audio.fwqaq.us/banner/America5.jpg',
    link: 'https://www.google.com',
    alt: 'Paris Cafe Terrace',
    imgTransform: {
      imgRotate,
      imgScale: 0.8,
      imgTranslateX,
      imgTranslateY: '10rem',
      imgTranslateZ: '0.15px',
    },
  },
  {
    img: 'http://audio.fwqaq.us/banner/America6.jpg',
    link: 'https://www.google.com',
    alt: 'Paris Cafe Terrace',
    imgTransform: {
      imgRotate,
      imgScale: 0.66,
      imgTranslateX,
      imgTranslateY: '0',
      imgTranslateZ: '0.15px',
    },
  },
  {
    img: 'http://audio.fwqaq.us/banner/America7.jpg',
    link: 'https://www.google.com',
    alt: 'Paris Cafe Terrace',
    imgTransform: {
      imgRotate,
      imgScale: 0.8,
      imgTranslateX: '10vh',
      imgTranslateY: '13vh',
      imgTranslateZ: '0.05px',
    },
  },
  {
    img: 'http://audio.fwqaq.us/banner/America8.jpg',
    link: 'https://www.google.com',
    alt: 'Paris Cafe Terrace',
  },
  {
    img: 'http://audio.fwqaq.us/banner/America9.jpg',
    link: 'https://www.google.com',
    alt: 'Paris Cafe Terrace',
    imgTransform: {
      imgRotate,
      imgScale: 1.05,
      imgTranslateX: '10vh',
      imgTranslateY: '10vh',
      imgTranslateZ: '-0.2px',
    },
  },
  {
    img: 'http://audio.fwqaq.us/banner/America10.jpg',
    link: 'https://www.google.com',
    alt: 'Paris Cafe Terrace',
    imgTransform: {
      imgRotate,
      imgScale: 0.9,
      imgTranslateX,
      imgTranslateY: '-8vh',
      imgTranslateZ: '-0.15px',
    },
  },
  {
    img: 'http://audio.fwqaq.us/banner/America11.jpg',
    link: 'https://www.google.com',
    alt: 'Paris Cafe Terrace',
    imgTransform: {
      imgRotate,
      imgScale: 0.8,
      imgTranslateX,
      imgTranslateY: '8vh',
      imgTranslateZ: '-0.2px',
    },
  },
]
</script>

<style>
* {
  padding: 0%;
  margin: 0%;
}
html,
body,
#app {
  height: 100vh;
}
.range {
  height: 100vh;
}
</style>
