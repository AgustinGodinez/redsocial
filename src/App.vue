<template>
  <NavComp></NavComp>
  <router-view v-slot="{Component}">
    <transition name="fadeUp" mode="out-in">
      <component :is="Component" :key="$route.path">

      </component>
    </transition>
  </router-view>
  <FootNav></FootNav>
</template>

<script setup>
import NavComp from '@/components/NavComp.vue'
import FootNav from './components/FootNav.vue';

</script>

<style>
#app {
  --bg-color: #5044C9;
  color: #2c3e50;
}
.fadeUp-enter-active,
.fadeUp-leave-active{
  transition: opacity 0.25s, transform 0.25s;
}
.fadeUp-enter,
.fadeUp-leave-to{
  opacity: 0;
  transform: translate(30%);
}

</style>
