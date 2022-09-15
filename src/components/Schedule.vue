<script setup>

import {reactive} from "vue";

const schedule = reactive({
  data: {
    title: 'schedule',
    attend: 'Tuesday September 21, 2021',
    schedules: [
      {
        sub: 'Intro',
        content: 'Join the Netlify team for a special event about enabling enterprise web applications at scale.',
        time: '9:00AM — 9:05AM'
      },
      {
        sub: 'Fireside chat',
        content: 'Success factors for building enterprise-scale Jamstack projects with CEO Mathias Biilmann.',
        time: '9:05AM — 9:25AM'
      },
      {
        sub: `What's new in Netlify Enterprise`,
        content: 'Find out about new product updates making it easier for large organizations to manage teams and collaborate together on Netlify.',
        time: '9:25AM — 9:35AM'
      },
      {
        sub: 'Operating Jamstack apps at business scale',
        content: 'Learn how Netlify empowers Gemini to securely scale their crypto platform and handle billions of monthly web requests.',
        time: '9:35AM — 9:50AM'
      },
      {
        sub: 'Discussion Lounge',
        content: 'Hang out with the Netlify team answering questions about the latest product announcements.',
        time: '9:50AM — 10:00AM'
      }
    ]
  }
})

</script>

<template>
  <section class="text-white">
    <h2 class="font-bold md:text-4xl text-3xl capitalize">{{ schedule.data.title }}</h2>
    <time class="font-medium text-2xl">{{ schedule.data.attend }}</time>
    <ul class="grid md:grid-cols-2 gap-10 place-content-center place-items-start pt-8">
      <li
          v-for="(schedule, index) in schedule.data.schedules"
          :key="index"
          class="flex flex-col justify-start items-start"
      >
        <div>
          <h3 class="font-medium md:text-3xl text-2xl text-green-300">{{ schedule.sub }}</h3>
          <time class="md:text-2xl text-xl font-bold">
            {{ schedule.time }}
          </time>
          <p class="pt-2">{{ schedule.content }}</p>
          <div class="md:border-b-0 border-b-2 py-4"></div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Schedule"
}
</script>

<style scoped>

</style>