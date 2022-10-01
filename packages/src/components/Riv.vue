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
import { ref, watch } from 'vue'
import { RivProps } from '../types'
const props = defineProps(RivProps)
const imgs = ref(props.imgs)

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
      console.log(entry, transformX.value, transformY.value)
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
</style>
