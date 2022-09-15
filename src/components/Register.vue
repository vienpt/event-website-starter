<script setup>
import FormRegister from "./FormRegister.vue";
import {reactive} from "vue";

const form = reactive({
  items: [
    {
      label: 'Full Name',
      id: 'name',
      name: 'name',
      type: 'text',
      value: '',
      errors: [
        {
          required: true,
          message: 'please input full name',
        },
        {
          maxLength: 50,
          message: 'Your name is too long. Please input again.'
        }
      ]
    },
    {
      label: 'Phone',
      id: 'phone',
      name: 'phone',
      type: 'number',
      required: true,
      value: '',
      errors: [
        {
          required: true,
          message: 'please input phone number',
        },
        {
          maxLength: 11,
          message: 'Your phone number is too long. Please input again.'
        }
      ]
    },
    {
      label: 'Address',
      id: 'address',
      name: 'phone',
      type: 'text',
      required: true,
      value: '',
      errors: [
        {
          required: true,
          message: 'please input address',
        },
        {
          maxLength: 100,
          message: 'Your address is too long. Please input again.'
        }
      ]
    },
    {
      label: 'Email',
      id: 'email',
      name: 'email',
      type: 'email',
      required: true,
      value: '',
      errors: [
        {
          required: true,
          message: 'please input email address',
        },
        {
          formatMessage: 'please input correct email address format. Using `@`'
        },
        {
          maxLength: 20,
          message: 'Your email is too long. Please input again.'
        }
      ]
    }
  ],
})

function register() {
  console.log('register')
}
</script>

<template>
  <section class="md:pt-40 text-white">
    <div class="grid md:grid-cols-2 gap-10 place-items-start">
      <div>
        <h2 class="text-3xl font-bold">Register</h2>
        <p class="md:text-lg font-light italic">Welcom to Nextflix confedences</p>
      </div>
      <div class="w-full">
        <FormRegister :data="form.items" @submitForm="register" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Register"
}
</script>

<style scoped>

</style>