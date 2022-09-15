<script setup>
import {onMounted, reactive} from "vue";

const speakers = reactive({
  title: 'Speaker',
  data: [
    {
      name: 'Matt biilman',
      avatar: '',
      level: 'Co-founder & CEO - Netlify'
    },
    {
      name: 'Jason lengstorf',
      avatar: '',
      level: 'VP of Developer Experience - Netlify'
    },
    {
      name: 'Akram Hassan',
      avatar: '',
      level: 'VP of Product - Netlify'
    },
    {
      name: 'Tara simons',
      avatar: '',
      level: 'Product Manager - Netlify'
    },
    {
      name: 'Nael Khan',
      avatar: '',
      level: 'Engineer Manager, Frontend - Gemini'
    },
    {
      name: 'Nelson Diallo',
      avatar: '',
      level: 'Account Manager Team Lead - Netlify'
    }
  ],
  posts: []
})

async function getPosts() {
  const res = await fetch('https://api.nuxtjs.dev/posts')
  if (!res.ok) throw new Error()
  const result = await res.json()
  speakers.posts = result
  console.log(speakers.posts)
}

onMounted(() => getPosts())

</script>
<template>
  <section class="md:pt-40 pt-32 text-white">
    <h2 class="font-bold md:text-4xl text-3xl capitalize">{{ speakers.title }}</h2>
    <div class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 place-content-start pt-8">
      <div v-for="(speaker, index) in speakers.posts" :key="index">
        <figure class="h-3/4">
          <img :src="speaker.image" alt="avatar" loading="lazy" width="500" height="500" class="h-48 object-cover">
          <p class="text-green-400 py-1 md:text-lg">{{ speaker.title }}</p>
        </figure>
        <div>
          <p class="px-2 z-10 bg-gray-900 opacity-70 absolute">{{ speaker.continent }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Speaker"
}
</script>

<style scoped>

</style>