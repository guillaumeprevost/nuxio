
<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="inline-flex w-full justify-center rounded-md 
        px-4 py-2 text-sm font-medium 
        hover:bg-opacity-80
        focus:outline-none focus-visible:ring-2 
        focus-visible:ring-white focus-visible:ring-opacity-75"
        :class="menuButtonClasses">
        {{ title }}
        <component :is="icon" class="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        <slot />
      </MenuButton>
    </div>

    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0">
      <MenuItems class="absolute mt-2 w-56 divide-y 
        divide-gray-light rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 
        focus:outline-none" :class="[
          isLeft ? 'right-0' : 'left-0',
          isAbove ? 'bottom-10 pt-1' : '',
        ]">
        <div class="px-1 py-1">
          <MenuItem v-for="(item, itemKey) in items" v-slot="{ active }" :key="`menu-item-${itemKey}`"
            :class="menuItemsClasses">
            <MenusItemContent :item="item" :active="active"></MenusItemContent>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  },
  icon: {
    type: Object,
    required: false,
    default: null
  },
  isLeft: {
    type: Boolean,
    required: false,
    default: false
  },
  isAbove: {
    type: Boolean,
    required: false,
    default: false
  },
  items: {
    type: Object,
    required: false,
    default: null
  },
  menuButtonClasses: {
    type: String,
    required: false,
    default: ''
  },
  menuItemsClasses: {
    type: String,
    required: false,
    default: ''
  },
});

const emit = defineEmits(['click']);
</script>

<style lang="sass">
</style>
