<template>
  <div>
    <div v-if="active && fullscreen" 
      class="w-screen h-screen fixed block top-0 left-0 bg-white opacity-75 z-40">
      <span class="top-1/2 my-0 mx-auto block relative w-0 h-0 z-30" style="top: 50%;">
        <svg class="animate-spin text-coral" 
          :class="`h-${size} w-${size}`" fill="none" viewBox="0 0 24 24">
          <circle class="text-gray opacity-25" cx="12" cy="12" r="10" stroke="currentColor" :stroke-width="size / 3"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </span>
    </div>
    <svg v-else-if="active" class="animate-spin text-coral" 
      :class="`h-${size} w-${size}`" fill="none" viewBox="0 0 24 24">
      <circle class="text-gray opacity-25" cx="12" cy="12" r="10" stroke="currentColor" :stroke-width="size / 3"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    required: false,
    default: true,
  },
  size: {
    type: Number,
    required: false,
    default: 12
  },
  fullscreen: {
    type: Boolean,
    required: false,
    default: false, 
  }
});
</script>

<style lang="sass" scoped>
</style>
