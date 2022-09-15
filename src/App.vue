<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Content from './components/Content.vue'
import Schedule from './components/Schedule.vue'
import Speaker from './components/Speaker.vue'
import Register from './components/Register.vue'
// import HelloWorld from '../README.md'
import MDExample from './components/MDExample.vue'
</script>

<template>
  <div id="main" class="mx-auto container">
    <div class="xl:mx-60 md:mx-20 mx-4">
      <Header class="py-20" />
      <Hero />
      <Content />
      <MDExample class="py-20" />
      <Schedule />
      <Speaker />
      <Register class="py-20" />
    </div>
  </div>
</template>

<style>
body {
  background-color: #151a1e;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
