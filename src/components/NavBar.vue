<template>
  <nav class="menu">
    <ul class="menu__list">
      <div class="menu__list__pages">
        <li v-for=" ({ active, icon, path, title }, index) in  navigationMenu " :key="index" class="menu__list__item"
          :class="active ? 'active' : ''">
          <router-link :to="path" class="menu__list__item__icon">
            <svg-icon type="mdi" :path="icon" />
            {{ title }}
          </router-link>
        </li>
      </div>
      <div>
        <li v-for=" ({ active, icon, path, title }, index) in  userNavMenu " :key="index" class="menu__list__item"
          :class="active ? 'active' : ''">
          <router-link :to="path" class="menu__list__item__icon">
            <svg-icon type="mdi" :path="icon" />
            {{ title }}
          </router-link>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { MenuItem } from '@/utils/interfaces';
import { menu, userMenu } from '@/utils/menu';
import SvgIcon from '@jamescoyle/vue-icon';

const route = useRoute();

const navigationMenu = ref<MenuItem[]>(menu);
const userNavMenu = ref<MenuItem[]>(userMenu);

watch(() => route.name, (val) => {
  navigationMenu.value.forEach(m => {
    m.active = val == m.name;
  });

  userNavMenu.value.forEach(m => {
    m.active = val == m.name;
  });
});
</script>

<style>
.menu {
  background-color: var(--primary);
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  max-height: 100svh;
}

.menu__list {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-x: hidden;
  padding: 1rem;
  width: 4rem;
}

.menu__list:hover {
  max-width: max-content;
  transition: all 200ms linear;
  width: 20vw;
}

.menu__list__pages {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
}

.menu__list__item {
  border-radius: 0.2rem;
}

.menu__list__item:hover:not(.active) {
  background-color: var(--bg-primary);
}

.menu__list__item__icon {
  align-items: center;
  display: flex;
  height: 2rem;
  justify-content: flex-start;
  padding-right: 1rem;
  overflow-x: hidden;
}

.menu__list__item__icon svg {
  display: inline-block;
  min-width: 2rem;
}

.active {
  background-color: var(--green);
}
</style>