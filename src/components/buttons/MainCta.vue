<template>
  <button :type="type" class="flex justify-center items-center gap-2 w-full h-10 font-semibold
    rounded-full overflow-hidden ease-linear transition-all duration-150 max-w-max px-4"
    :class="disabled === true
      ? 'text-white bg-gray-light'
      : 'text-white bg-blue border-2 border-solid border-blue hover:bg-white hover:text-blue active:bg-white active:text-blue'"
    @click="handleClick">

    <div class="block flex text-sm shadow-border bg-transparent 
      text-sm py-1 font-sans tracking-normal font-bold">
      <slot>Main CTA</slot>
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  type: {
    type: String,
    required: false,
    default: 'button'
  }
});
const emit = defineEmits(['click'])

function handleClick() {
  if (!props.disabled)
    emit('click');
}
</script>
