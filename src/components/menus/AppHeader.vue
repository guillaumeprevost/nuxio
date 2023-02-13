<template>
  <div class="w-full h-20 bg-blue text-white fixed z-30">
    <nav class="flex flex-wrap justify-between items-center w-full h-20">
      <div class="flex items-center shrink-0 text-white ml-2">
        <nuxt-link to="/"
          class="w-auto max-w-xs text-white no-underline hover:text-white hover:no-underline">
          <Logo />
        </nuxt-link>
      </div>

      <div class="flex items-center content-center justify-end gap-2 sm:gap-4 mr-3">
        <MenusMainMenu></MenusMainMenu>
        <MenusUserMenu :isLeft="true"></MenusUserMenu>
      </div>
    </nav>
  </div>
</template>

<script setup>
</script>

<style lang="sass">
</style>
