<script setup>
import Button from './BaseButton.vue'
import {reactive} from "vue";

let hero = reactive({
  data: {
    subTitle: 'modern web architecture',
    title: '@scale',
    attend: 'Tuesday september 21, 2021 | 9AM PDT',
    content: 'Join CEO Matt Biilmann, VP of Developer Experience Jason Lengstorf, and other industry leaders to learn how Netlify helps modern enterprises move faster and deliver better experiences for customers and developers alike.'
  }
})
</script>
<template>
  <div class="relative bg-hero-pattern lg:bg-contain bg-no-repeat" style="height: 32rem;">
    <div class="flex flex-col justify-start text-white">
      <p class="uppercase text-2xl order-1">
        {{ hero.data.subTitle }}
      </p>
      <h1 class="uppercase font-black text-8xl order-2">
        {{ hero.data.title }}
      </h1>
      <time class="uppercase text-2xl font-bold pt-14 md:pb-0 pb-4 order-3">
        {{ hero.data.attend }}
      </time>
      <article class="text-md tracking-tight font-medium py-4 xl:w-2/3 md:order-4 order-5 w-full">
        {{ hero.data.content }}
      </article>
      <Button bg-color="bg-green-200" color="text-black" order="md:order-5 order-4" text="Register to attend"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero.vue"
}
</script>

<style scoped>

</style>