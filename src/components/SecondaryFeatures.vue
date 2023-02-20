<template>

  <section id="secondary-features" aria-label="Features for simplifying everyday business tasks"
  class="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32">
    <Container>
      <div class="mx-auto max-w-2xl md:text-center">
        <h2 class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
          Votre expertise tech sur toute la ligne 
        </h2>
        <p class="mt-4 text-lg tracking-tight text-slate-700">
          Audit, conception et programmation, mise en place et maintenance, refontes et migrations. 
          Nuxio vous aide sur l'ensemble du cycle de vie de vos applications.
        </p>
      </div>

      <div class="lg:hidden flex flex-col gap-y-10 overflow-hidden -mx-4 mt-20 sm:-mx-6 px-4 sm:px-6">
        <div v-for="feature, featureIndex in features" :key=feature.name>
          <Feature :feature="feature" class="mx-auto max-w-2xl" :isActive="featureIndex === selectedIndex" />
          <div class="relative mt-10 pb-10">
            <div class="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"></div>
            <div class="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <nuxt-img format="webp" quality="80" :src="feature.image"
                :alt="`Prestations agence Nuxio ${feature.name}`" 
                sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw" class="w-full" />
            </div>
          </div>
        </div>
      </div>
      
      <TabGroup as="div" :selectedIndex="selectedIndex" @change="changeTab"
        class="hidden lg:block lg:mt-20">
        <TabList class="grid grid-cols-3 gap-x-8">
          <Tab as="template" v-slot="{ selected }"
            v-for="feature in features" :key="feature.name">
            <Feature :feature="feature" :isActive="selected">
            </Feature>
          </Tab>
        </TabList>
        <TabPanels class="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
          <div class="-mx-5 flex">
            <TabPanel v-for="feature, featureIndex in features" :key="feature.name" static
              class="px-5 transition duration-500 ease-in-out focus:outline-none"
              :class="featureIndex !== selectedIndex ? 'opacity-60' : ''"
              :style="`transform: translateX(-${selectedIndex * 100}%)`"
              :aria-hidden="featureIndex !== selectedIndex">
              <div class="w-[52.75rem] overflow-hidden rounded-xl bg-white 
                shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10 ">
                <nuxt-img :src="feature.image" format="webp" quality="80" 
                  :alt="`Prestations agence Nuxio ${feature.name}`" 
                  sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw" class="w-full" />
              </div>
            </TabPanel>
          </div>
        </TabPanels>
      </TabGroup>
    </Container>
  </section>

</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const selectedIndex = ref(0);
function changeTab(index) {
  selectedIndex.value = index;
}

const features = [
  {
    name: 'Création',
    summary: 'Lancez rapidement des produits digitaux ambitieux et de qualité',
    description: 'Nous concevons avec vous des applications de qualité, performantes, évolutives et sur-mesure. Nous faisons les choix techniques les mieux adaptés à vos enjeux et en s\'adaptant à votre organisation.',
    image: '/screenshots/mockup-friendtheory.png',
    icon: resolveComponent('IconsContact'),
  },
  {
    name: 'Evolutions',
    summary: 'Restez toujours à la pointe en modernisant votre application',
    description: 'En plus de la maintenance évolutive et corrective, nous effectuons des migrations de site, modernisation et refontes d\'applications (refactoring).',
    image: '/screenshots/mockup-storybee-saas-dataroom.png',
    icon: resolveComponent('IconsInventory')
  },
  {
    name: 'Accompagnement & conseil',
    summary: 'Assurez le succès de votre projet après son lancement',
    description: 'Nous vous accompagnons dans la mise en place d\'une stratégie gagnante : analyse des données, des performances, du référencement, une veille de sécurité, leviers de croissance.',
    image: '/screenshots/mockup-locationvelos.png',
    icon: resolveComponent('IconsReporting'),
  },
]
</script>

<style lang="sass">
</style>
