<template>
  <Popover v-slot="{ open }">
    <PopoverButton
      class="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)] :focus:outline-none"
      aria-label="Toggle Navigation">
      <IconsMobileNav :open="open" aria-hidden="true"></IconsMobileNav>
    </PopoverButton>

    <div>
      <transition 
        enter-active-class="transition duration-150 ease-out" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100" leave-to-class="opacity-0">
        <PopoverOverlay as="div" class="fixed inset-0 bg-slate-300/50" />
      </transition>

      <transition 
        enter-active-class="transition duration-150 ease-out" enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100" leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <PopoverPanel as="div"
          class="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 
          text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5">
          
          <PopoverButton as="a" href="#services" class="block w-full p-2">
            Services
          </PopoverButton>

          <PopoverButton as="a" href="#temoignages" class="block w-full p-2">
            Témoignages
          </PopoverButton>

          <!-- <PopoverButton as="a" href="#realisations" class="block w-full p-2"> 
            Réalisations           
          </PopoverButton> -->

          <hr class="m-2 border-slate-300/40" />

          <!-- <PopoverButton as="a" href="/login" class="block w-full p-2">
            Signin
          </PopoverButton> -->
        </PopoverPanel>
      </transition>
    </div>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel, PopoverOverlay } from '@headlessui/vue'

</script>
