<template>
  <button :type="type" 
    class="flex justify-center items-center gap-2 w-full max-w-max h-10 
    text-sm 
    rounded-full overflow-hidden ease-linear transition-all duration-150 px-3"
    :class="disabled === true
      ? 'text-white bg-gray-light'
      : 'text-white bg-blue border-2 border-solid border-blue hover:bg-white hover:text-blue active:bg-white active:text-blue'"
    @click="handleClick">

    <div class="block flex items-center gap-1 text-sm shadow-border bg-transparent 
      text-sm py-1 font-sans tracking-normal font-semibold">
      <PlusSmIcon class="w-6 h-6"></PlusSmIcon>
      <slot>{{ $t('common.ctas.add') }}</slot>
    </div>
  </button>
</template>

<script setup>
import { PlusSmIcon } from '@heroicons/vue/solid'

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
