<template>
  <footer class="bg-slate-50">
    <Container>
      <div class="py-16">
        <Logo class="mx-auto h-10 w-auto" alt="Logo Agence Nuxio" />
        <nav class="mt-10 text-sm" aria-label="quick links">
          <div class="-my-1 flex justify-center gap-x-6">
            <MenusNavLink :href="'/#services'">Services</MenusNavLink>
            <!-- <MenusNavLink :href="'/#realisation'">Réalisations</MenusNavLink> -->
            <MenusNavLink :href="'/#temoignages'">Témoignages</MenusNavLink>
            <MenusNavLink :href="'/contact'">Contact</MenusNavLink>
            <MenusNavLink :href="'/legal'">Mentions légales</MenusNavLink>
            <MenusNavLink :href="'/legal/conditions'">CGU</MenusNavLink>
          </div>
        </nav>
      </div>
      <div class="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
        <Contacts></Contacts>
        <p class="mt-6 text-sm text-slate-500 sm:mt-0">
          Copyright &copy; {{ new Date().getFullYear() }} Nuxio. Tous droits réservés.
        </p>
      </div>
    </Container>
  </footer>
</template>

<script setup>
</script>

<style lang="sass">
</style>
