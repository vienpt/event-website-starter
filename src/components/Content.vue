<script setup>

import {reactive} from "vue";

let content = reactive({
  data: [
    {
      title: 'Are you looking to',
      texts: [
        'Migrate a business website or service to Jamstack architecture?',
        'Increase development throughput of your frontend teams?',
        'Reduce the complexity required to scale your business apps?'
      ]
    },
    {
      title: 'Come learn about',
      texts: [
        'Best practices for overcoming the challenges of developing business apps at scale',
        'New Netlify product announcements for enterprise users with large development teams',
        'More exciting announcements about the growing Netlify ecosystem!'
      ]
    }
  ]
})

</script>

<template>
  <section class="lg:pt-52 py-20">
    <div class="grid lg:grid-cols-2 md:gap-10 gap-6 place-items-start place-content-center text-white">
      <div
          v-for="(content, index) in content.data"
          :key="index"
          class="flex flex-col justify-start items-start"
      >
        <h2 class="font-bold lg:text-4xl text-3xl">
          {{ content.title }}
        </h2>
        <ul class="py-4">
          <div class="border-t-2 py-4"></div>
          <li
              v-for="text in content.texts"
              :key="text"
              class="tracking-tight list-disc ml-4 pb-4"
          >
            {{ text }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Content"
}
</script>

<style scoped>

</style>