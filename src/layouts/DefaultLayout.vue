<template>
  <main class="content">
    <nav-bar />
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
</script>

<style>
.content {
  display: flex;
  width: 100vw;
  height: 100vh;
}
</style>