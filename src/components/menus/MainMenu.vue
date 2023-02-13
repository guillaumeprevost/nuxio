<template>
  <div>
    <div class="hidden sm:flex items-center gap-4 sm:gap-6">
      <div v-for="(item, itemKey) in menuItems" :key="`mainmenu-item-${itemKey}`"
        class="text-white hover:text-coral">
        <MenusItemContent :item="item"></MenusItemContent>
      </div>
    </div>
    <div class="block sm:hidden text-black">
      <Popover v-slot="{ open }" class="relative">
        <PopoverButton
          :class="open ? 'bg-white' : ''"
          class="group inline-flex items-center rounded-md p-3 py-2 text-base 
          font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 
          focus-visible:ring-white focus-visible:ring-opacity-75">
          <MenuIcon :class="open ? 'text-white' : ''"
            class="h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80"
            aria-hidden="true"
          />
        </PopoverButton>

        <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0">
          <PopoverPanel class="absolute left-1/2 z-10 mt-3 w-80 min-w-min max-w-screen-sm 
            -translate-x-3/4 transform px-4 sm:px-0 lg:max-w-3xl" v-slot="{ close }">
              <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div class="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                  <NuxtLink v-for="item in menuItems" :key="`menuitem-${item.link}`"
                    :to="item.link" @click="close"
                    class="h-10 -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out 
                    hover:bg-blue-light focus:outline-none focus-visible:ring focus-visible:ring-turquoise 
                    focus-visible:ring-opacity-50">
                    <div v-if="item.icon" class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                      <component :is="item.icon" class="text-blue h-6 w-6" aria-hidden="true" />
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-black">
                        {{ item.name }}
                      </p>
                      <p v-if="item.description" class="text-sm text-gray-dark">
                        {{ item.description }}
                      </p>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </PopoverPanel>
          </Transition>
      </Popover>
    </div>
  </div>
</template>

<script setup>
import { MenuIcon, PuzzleIcon, HomeIcon, KeyIcon } from '@heroicons/vue/solid'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { useFormatInitials } from '~~/src/composables/format/useFormatUser'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const menuItems = {
  // dashboard: { 
  //   name: t('menu.dashboard'),
  //   icon: HomeIcon,
  //   link: '/dashboard'
  // },
  connectors: { 
    name: t('connectors.title', 2),
    icon: PuzzleIcon,
    link: '/connectors'
  },
  apiAccounts: { 
    name: t('apiAccounts.title', 2),
    icon: KeyIcon,
    link: '/api-accounts'
  },
}
</script>

<style lang="sass">
</style>

