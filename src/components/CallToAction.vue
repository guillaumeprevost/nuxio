<template>
  <section id="get-started-today" class="relative overflow-hidden bg-blue-600 py-32">
    
    <img :src="backgroundImage" alt="" width="2347" height="1244" unoptimized 
      class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" />
    
    <Container class="relative">
      <div class="mx-auto max-w-lg text-center">
        <h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl">
          Vous avez un projet de création de site web ?
        </h2>
        <p class="mt-4 text-lg tracking-tight text-white">
          Contactez-nous gratuitement pour faire le point sur votre projet avec un expert.
        </p>
        <ButtonsSimple href="mailto:agencenuxio@gmail.com" color="white" class="mt-10">
          Discutons de votre projet
        </ButtonsSimple>
      </div>
    </Container>
  </section>
</template>

<script setup>
import backgroundImage from '@/assets/images/background-call-to-action.jpg'
</script>

<style lang="sass">
</style>
