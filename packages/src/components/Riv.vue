<template>
  <div class="external">
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
import { ref } from 'vue'
import { RivProps } from '../types'
const props = defineProps(RivProps)
const imgs = ref(props.imgs)
</script>

<style scoped>
@import '../styles/riv.css';
</style>
