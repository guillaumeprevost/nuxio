<template>
  <div>
    <label v-if="label" :for="id" class="mb-3 block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <input :id="id" :type="type" 
    class="block w-full appearance-none rounded-md 
    border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 
    focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 
    sm:text-sm" />
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
    default: null,
  },
  type: {
    type: String,
    required: false,
    default: 'text'
  },
});
</script>