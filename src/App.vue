<template>
  <transition name="router-app" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
export default {};
</script>

<style>
@import '~vue-awesome-notifications/dist/styles/style.css';

.router-app-enter-active, .router-app-leave-active {
  transition: opacity 0.2s ease;
}
.router-app-enter, .router-app-leave-to  {
  opacity: 0;
}
</style>
