<template>
  <svg aria-hidden="true" class="h-3.5 w-3.5 overflow-visible stroke-slate-700" 
    fill="none" strokeWidth="2" strokeLinecap="round">
    <path d="M0 1H14M0 7H14M0 13H14" class="origin-center transition" :class="open ? 'scale-90 opacity-0' : ''" />
    <path d="M2 2L12 12M12 2L2 12" class="origin-center transition" :class="!open ? 'scale-90 opacity-0' : ''" />
  </svg>
</template>

<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>