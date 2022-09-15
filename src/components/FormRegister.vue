<script setup>
import Button from './BaseButton.vue'

const props = defineProps({
  data: Array
})

const emits = defineEmits(['submitForm'])
const handleSubmitForm = () => {
  emits('submitForm')
}

</script>
<template>
  <form class="flex flex-col space-y-6" @submit.prevent="handleSubmitForm">
    <div v-for="item in props.data" :key="item.id">
      <label :for="item.id" class="md:text-lg">{{ item.label }}</label>
      <input
          :id="item.id"
          :name="item.name"
          :type="item.type"
          v-model="item.value"
          class="text-black rounded w-full p-2 h-12 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
      />
      <div v-for="(err, index) in item.errors" :key="index">
        <span class="text-red-400">{{ err.message }}</span>
      </div>
    </div>
    <Button
        bg-color="bg-green-200"
        color="text-black"
        text="Register to attend"
        type="submit"
        class="pt-10"
    />
  </form>
</template>

<script>
export default {
  name: "FormRegister"
}
</script>
