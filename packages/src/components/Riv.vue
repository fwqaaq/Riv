<template>
  <div ref="external" class="external">
    <div class="horizontal-scroll-wrapper">
      <div
        v-for="{ alt, link, img, animateHover } in imgs"
        :key="img"
        class="img-wrapper"
        :class="animateHover"
      >
        <a :href="link" target="_blank" rel="noopener"
          ><img :src="img" :alt="alt" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, toRefs } from 'vue'
import type { imgLink, imgTransform } from '../types'

// eslint-disable-next-line prettier/prettier
const props = withDefaults(
  defineProps<{
    imgs: imgLink[]
    imgTransform?: imgTransform
  }>(),
  {
    imgTransform: () => ({
      imgRotate: '90deg',
      imgTranslateX: '1px',
      imgTranslateY: '0',
      imgTranslateZ: '0',
      imgScale: 1.2,
    }),
  },
)

const { imgRotate, imgTranslateX, imgTranslateY, imgTranslateZ, imgScale } =
  toRefs(props.imgTransform)

const external = ref<HTMLDivElement>()
const transformX = ref('')
const transformY = ref('')
watch(external, () => {
  const resize = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      transformY.value = '480px'
      if (entry.contentRect.height < 400) {
        transformY.value = `${entry.contentRect.height * 1.6}px`
      }
      transformX.value = `-${entry.contentRect.width}px`
    })
  })
  resize.observe(external.value!)
})
</script>

<style scoped>
@import '../styles/riv.css';
.horizontal-scroll-wrapper {
  transform: rotate(-90deg)
    translate3d(v-bind(transformY), v-bind(transformX), 0);
}

.img-wrapper {
  transform: rotate(v-bind(imgRotate)) scale(v-bind(imgScale))
    translate3d(
      v-bind(imgTranslateX),
      v-bind(imgTranslateY),
      v-bind(imgTranslateZ)
    );
}
.slower {
  transform: rotate(90deg) translateZ(-0.2px) scale(1.1) translateX(0%)
    translateY(-10vh);
}

.slower1 {
  transform: rotate(90deg) translateZ(-0.25px) scale(1.05) translateX(0%)
    translateY(8vh);
}

.slower2 {
  transform: rotate(90deg) translateZ(-0.3px) scale(1.3) translateX(0%)
    translateY(2vh);
}

.slower-down {
  transform: rotate(90deg) translateZ(-0.2px) scale(1.1) translateX(0%)
    translateY(16vh);
}

.faster {
  transform: rotate(90deg) translateZ(0.15px) scale(0.8) translateX(0%)
    translateY(14vh);
}

.faster1 {
  transform: rotate(90deg) translateZ(0.05px) scale(0.8) translateX(0%)
    translateY(10vh);
}

.fastest {
  transform: rotate(90deg) translateZ(0.22px) scale(0.7) translateX(-10vh)
    translateY(-15vh);
}

.vertical {
  transform: rotate(90deg) translateZ(-0.15px) scale(1.15) translateX(0%)
    translateY(0%);
}

.last {
  transform: rotate(90deg) translateZ(-0.2px) scale(1.1) translateX(25vh)
    translateY(-8vh);
}
</style>
