<template>
  <header class="py-10">
    <Container>
      <nav class="relative z-50 flex justify-between">
        <div class="flex items-center md:gap-x-12">
          <nuxt-link :to="'#'" aria-label="Home">
            <Logo />
          </nuxt-link>
          <div class="hidden md:flex md:gap-x-6">
            <MenusNavLink :href="'#services'">Services</MenusNavLink>
            <!-- <MenusNavLink :href="'#realisation'">Réalisations</MenusNavLink> -->
            <MenusNavLink :href="'#temoignages'">Témoignages</MenusNavLink>
          </div>
        </div>
        <div class="flex items-center gap-x-5 md:gap-x-8">
          <!-- <div class="hidden md:block">
            <MenusNavLink :href="'/login'">Sign in</MenusNavLink>
          </div>
          <ButtonsSimple :href="'/register'" color="blue">
            <span>
              Get started <span class="hidden lg:inline">today</span>
            </span>
          </ButtonsSimple> -->
          <div class="-mr-1 md:hidden">
            <MenusMobileNavigation></MenusMobileNavigation>
          </div>
        </div>
      </nav>
    </Container>
  </header>
</template>

<script setup>
</script>

<style lang="sass">
</style>
