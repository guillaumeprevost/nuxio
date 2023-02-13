<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed inset-0 z-30 overflow-y-auto"
      @close="handleClose">
      <div class="min-h-screen flex items-end justify-center 
        text-center sm:block  px-4 pt-4 pb-20 sm:p-0">
      
        <TransitionChild as="template"
          enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
          leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </TransitionChild>

        <TransitionChild as="template"
          enter="ease-out duration-300" 
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <slot />
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {  Dialog, DialogOverlay, DialogPanel, DialogTitle, 
  DialogDescription, TransitionChild, TransitionRoot } from "@headlessui/vue";

const props = defineProps({
  // modelValue: {
  //   type: Boolean
  // },
  open: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close']);
const handleClose = () => {
  emit('close');
}
</script>

<style lang="sass">
</style>
