<template>
  <div>{{ a }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ a: string }>()
const a = ref(3)
</script>

<style scoped></style>
