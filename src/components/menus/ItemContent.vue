
<template>
  <button v-if="item.action" @click="emit('click', item)"
    class="group flex gap-2 w-full items-center"
    :class="[ active ? 'bg-blue-light' : '']">
    <component :is="item.icon" class="w-5 h-5 text-lg" />
    {{ item.name }}
  </button>
  <NuxtLink v-else-if="item.link" :to="item.link"
    class="group flex gap-2 w-full items-center"
    :class="[ active ? 'bg-blue-light' : '']">
    <component :is="item.icon" class="w-5 h-5 text-lg" />
    {{ item.name }}
  </NuxtLink>
  <button v-else class="group flex gap-2 w-full items-center">
    <component :is="item.icon" class="w-5 h-5 text-lg" />
    {{ item.name }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    required: false,
    default: null
  },
  active: {
    type: Boolean,
    required: false,
    default: false
  },
});

const emit = defineEmits(['click']);
</script>

<style lang="sass">
</style>
