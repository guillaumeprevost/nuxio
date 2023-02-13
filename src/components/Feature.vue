<template>
  <div :class="!isActive ? 'opacity-75 hover:opacity-100' : ''">
    <div class="w-9 rounded-lg" :class="isActive ? 'bg-blue-600' : 'bg-slate-500'">
      <component :is="feature.icon"></component>
    </div>
    <h3 class="mt-6 text-sm font-medium" :class="isActive ? 'text-blue-600' : 'text-slate-600'">
      <slot />
    </h3>
    <p class="mt-2 font-display text-xl text-slate-900">
      {{ feature.summary }}
    </p>
    <p class="mt-4 text-sm text-slate-600">{{ feature.description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  feature: {
    type: Object,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: false,
    default: false
  },
});
</script>

<style lang="sass">
</style>
