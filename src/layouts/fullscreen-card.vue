<template>
  <div class="min-h-screen bg-blue-light py-6 flex flex-col justify-center sm:py-12">
    <div class="relative p-3 sm:max-w-xl sm:mx-auto">
      <nuxt-link to="/">
        <Logo :dark="true" class="w-full pb-6" />
      </nuxt-link>

      <div class="relative p-5 bg-white shadow-lg rounded-2xl">
        <div class="max-w-md mx-auto">
          <slot />
        </div>
      </div>
      
    </div>
  </div>
</template>

<!-- <script>
import Logo from '@/components/menus/Logo'

export default {
  components: {
    Logo,
  },
}
</script> -->
