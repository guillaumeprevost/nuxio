<template>
  <nav class="max-w-max cursor-pointer">
    <div class="flex gap-2">
      <div @click="navigateBack">
        <ArrowLeftIcon class="w-6 h-6 cursor-pointer zoom"></ArrowLeftIcon>
      </div>
      <div class="font-semibold" @click="navigateBack">
        <slot></slot>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ArrowLeftIcon } from '@heroicons/vue/solid'

const router = useRouter();

const props = defineProps({
  path: {
    type: String,
    required: false,
    default: null,
  },
});

function navigateBack() {
  if (props.path != null)
    router.push({ 'path': props.path });
  else
    router.back();
}
</script>
