<template>
  <div>
    <button :type="type" 
      class="flex justify-center items-center gap-2 w-full max-w-max h-10 
      text-sm rounded-full overflow-hidden ease-linear transition-all duration-150 px-3"
      :class="disabled === true
        ? 'text-white bg-gray-light'
        : 'text-white bg-coral border-2 border-solid border-coral hover:bg-white hover:text-coral active:bg-white active:text-coral'"
      @click="showConfirmDeleteModal">

      <div class="block flex items-center gap-2 text-sm shadow-border bg-transparent 
        text-sm py-1 font-sans tracking-normal font-semibold focus:outline-none">
        <slot>
          <TrashIcon class="w-5 h-5"></TrashIcon>
          {{ $t('common.ctas.delete') }}
        </slot>
      </div>
    </button>

    <!-- Confirm delete Modal -->
    <Modal :open="isModalOpen" @close="closeModal">
      <div class="relative inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left 
        align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
        
        <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
          <button type="button" class="rounded-md bg-white text-gray 
            hover:text-black focus:outline-none" @click="closeModal">
            <span class="sr-only">{{ $t('common.ctas.close') }}</span>
            <XIcon class="w-6 h-6"></XIcon>
          </button>
        </div>

        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center 
            justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <ExclamationIcon class="text-coral w-8 h-8"></ExclamationIcon>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg font-medium leading-6" id="modal-title">
              {{ entityName ? $t(`${entityName}.ctas.delete`) : $t('common.ctas.delete') }} ?
            </h3>
            <div class="mt-2">
              <p class="text-sm">
                {{ entityName ? $t(`${entityName}.confirm.delete`) : $t('common.confirm.delete') }}
              </p>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <button type="button" class="inline-flex w-full justify-center rounded-full
          border border-transparent bg-coral px-4 py-2 text-base font-medium text-white 
          shadow-sm hover:bg-coral focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
          @click="confirmDeletion">
            {{ entityName ? $t(`${entityName}.ctas.delete`) : $t('common.ctas.delete') }}
          </button>
          <button type="button" class="mt-3 inline-flex w-full justify-center rounded-full 
            px-4 py-2 font-medium hover:text-black focus:outline-none 
            sm:mt-0 sm:w-auto sm:text-sm" @click="closeModal">
            {{ $t('common.ctas.cancel') }}
          </button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { TrashIcon, ExclamationIcon, XIcon } from '@heroicons/vue/solid'

// Modal state
const isModalOpen = ref(false);

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
  },
  entityName: {
    type: String,
    required: false,
    default: null
  },
});
const emit = defineEmits(['click'])

function showConfirmDeleteModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}

function confirmDeletion() {
  if (!props.disabled)
    emit('click');
}

</script>
