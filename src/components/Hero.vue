<template>
  <Container class="pt-20 pb-16 text-center lg:pt-32">
    <h1 class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
      Lancez
      <span class="relative whitespace-nowrap text-blue-600">
        <Doodle></Doodle>
        <span class="relative">votre projet</span>
      </span>
      web, ecommerce, SaaS ou app
    </h1>
    <p class="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
      Nuxio est là pour vous y aider. Agence de développement informatique 100% française, une expertise sur laquelle vous pouvez compter.
    </p>
    <div class="mt-10 flex justify-center gap-x-6">
      <ButtonsSimple :href="'/register'">Nous contacter</ButtonsSimple>
      <!-- <ButtonsSimple :href="'https://www.youtube.com/watch?v=dQw4w9WgXcQ'" variant="outline">
        <svg aria-hidden="true" class="h-3 w-3 flex-none fill-blue-600 group-active:fill-current">
          <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
        </svg>
        <span class="ml-3">Watch video</span>
      </ButtonsSimple> -->
    </div>
    <div class="mt-36 lg:mt-44">
      <p class="font-display text-base font-medium text-slate-900">
        Ils nous ont fait confiance
      </p>
      <ul role="list" class="mt-8 flex items-center justify-center gap-x-8 
        sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
          <li v-for="(group, groupIndex) in clients" :key="groupIndex">
            <ul role="list" class="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
              <li v-for="(company) in group" :key="company.name" class="flex">
                <img :src=company.logo :alt="company.name" width="147" height="48" loading="lazy" />
              </li>
            </ul>
          </li>
      </ul>
    </div>
  </Container>
</template>

<script setup>
import logoBeMyApp from '@/assets/images/clients/bemyapp.webp'
import logoFriendTheory from '@/assets/images/clients/friendtheory.webp'
import logoFairily from '@/assets/images/clients/fairily.webp'
import logoEpitech from '@/assets/images/clients/epitech.webp'
import logoStorybee from '@/assets/images/clients/storybee.webp'
import logoLidem from '@/assets/images/clients/lidem.webp'
import logoNido from '@/assets/images/clients/nido.webp'

const clients = [
  [
    { name: 'BeMyApp', logo: logoBeMyApp },
    { name: 'Friend Theory', logo: logoFriendTheory },
    { name: 'Fairily', logo: logoFairily },
  ],
  [
    { name: 'Epitech', logo: logoEpitech },
    { name: 'Storybee', logo: logoStorybee },
    { name: 'L\'idem', logo: logoLidem },
    { name: 'Nido', logo: logoNido },
  ],
];
</script>

<style lang="sass">
</style>
