<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const defaultLayout = 'default';

const router = useRouter();

const layout = computed(() => `${router.currentRoute.value.meta.layout || defaultLayout}-layout`);
</script>