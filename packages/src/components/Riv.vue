<template>
  <div ref="external" class="external">
    <div class="horizontal-scroll-wrapper">
      <div
        v-for="{ alt, link, img, imgTransform } in imgs"
        :key="img"
        class="img-wrapper"
        :style="{
          transform: `rotate(${imgTransform?.imgRotate})
        scale(${imgTransform?.imgScale})
        translate3d(${imgTransform?.imgTranslateX},
                    ${imgTransform?.imgTranslateY},
                    ${imgTransform?.imgTranslateZ})`,
        }"
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
const imgWidth = ref('')
const imgHover = ref('')
watch(external, () => {
  const resize = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      transformY.value = `${entry.contentRect.height / 1.6}px`
      if (entry.contentRect.height < 700) {
        transformY.value = `${entry.contentRect.height}px`
        if (entry.contentRect.height < 440) {
          transformY.value = `${entry.contentRect.height * 1.5}px`
        }
      }
      transformX.value = `-${entry.contentRect.width}px`
      imgWidth.value = `${entry.contentRect.height / 2.4}px`
      imgHover.value = `${entry.contentRect.height / 1.2}px`
    })
  })
  resize.observe(external.value!)
})
</script>

<style scoped>
@import '../styles/riv.css';
.external {
  max-height: 100%;
}
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
img {
  max-width: v-bind(imgWidth);
}

.img-wrapper {
  min-height: v-bind(imgWidth);
}

.img-wrapper:hover {
  min-height: v-bind(imgHover);
}
</style>
