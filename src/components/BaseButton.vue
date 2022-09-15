<script setup>
const props = defineProps({
  text: String,
  color: String,
  bgColor: String,
  order: String,
  submit: String
})

const emits = defineEmits(['handleClick'])
function btnClick() {
  emits('handleClick')
}

</script>

<template>
  <div :class="[props.order, 'text-left']">
    <button
        :class="[props.color, props.bgColor, 'text-xl font-bold px-8 py-3 rounded-lg']"
        :type="props.submit"
        @click="btnClick"
    >
      {{ props.text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseButton"
}
</script>

<style scoped>

</style>