<template>
  <nuxt-link :to="href"
    class="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">
    <slot />
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
    required: false,
    default: ''
  },
});
</script>