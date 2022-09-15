<script setup>
const brandName = 'netlify'
</script>

<template>
  <section class="flex justify-start items-center">
    <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-200">
      {{ brandName }}
    </h1>
  </section>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>