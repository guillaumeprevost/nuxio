<template>
  <section id="services" aria-label="Features for running your books"
    class="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32">
    
    <nuxt-img format="webp" quality="80" src="/backgrounds/background-features.jpg"
      width="4490" height="3272" alt="" role="presentation"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
      class="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]" />

    <Container class="relative">
      <div class="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
        <h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
          Des solutions techniques pour votre réussite
        </h2>
        <p class="mt-6 text-lg tracking-tight text-blue-100">
          Nous analysons votre besoin pour proposer la meilleure solution technique pour votre situation.<br />
          Faites-vous accompagner par une agence experte en développement informatique.
        </p>
      </div>
      <TabGroup as="div" :selectedIndex="selectedIndex" :vertical="tabOrientation === 'vertical'"
        @change="changeTab"
        class="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0">
        <div class="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
          <TabList class="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">

            <Tab v-for="feature, featureIndex in features" :key="feature.title"
              class="group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6"
              :class="selectedIndex === featureIndex 
                ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                : 'hover:bg-white/10 lg:hover:bg-white/5'">
                <div>
                  <h3 class="font-display text-lg [&:not(:focus-visible)]:focus:outline-0"
                    :class="selectedIndex === featureIndex
                      ? 'text-blue-600 lg:text-white'
                      : 'text-blue-100 hover:text-white lg:text-white'">
                    <span class="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                    {{ feature.title }}
                  </h3>
                </div>
                <p class="mt-2 hidden text-sm lg:block"
                  :class="selectedIndex === featureIndex ? 'text-white' : 'text-blue-100 group-hover:text-white'">
                  {{ feature.description }}
                </p>
              </Tab>            
          </TabList>
        </div>
        <TabPanels class="lg:col-span-7">
          <TabPanel v-for="feature in features" :key="feature.title">
            <div class="relative sm:px-6 lg:hidden">
              <div class="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
              <p class="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                {{ feature.description }}
              </p>
            </div>
            <div class="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
              <nuxt-img format="webp" quality="80" 
                :src="feature.image" :alt="feature.title"
                sizes="xs:640px md:1280px"
                class="w-full" />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Container>
  </section>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const tabOrientation = 'vertical';
const selectedIndex = ref(0);
function changeTab(index) {
  selectedIndex.value = index;
}

const features = [
  {
    title: 'E-commerce',
    description:
      "Développement de sites e-commerce performants, optimisés et sécurisés. Nous vous aidons à mettre en place un stratégie digitale gagnante .",
    image: '/screenshots/mockup-locationvelos.png',
  },
  {
    title: 'SaaS',
    description: "Développement de SaaS et logiciels sur-mesure : faite coder le logiciel pour résoudre vos problèmes ou automatiser les solutions",
    image: '/screenshots/mockup-storybee-saas-dataroom.png',
  },
  {
    title: 'Applications mobiles',
    description: "Développement d'application mobiles de la plus simple à la plus complexe",
    image: '/screenshots/mockup-friendtheory.png',
  },
  {
    title: 'Solutions techniques',
    description: 'Développement de solutions full-stack : nous concevons votre solutions dans son ensemble, conception, modèle de données, APIs, intégrations, etc.',
    image: '/screenshots/mockup-storybee-saas-msg.png',
  },
]

</script>

<style lang="sass">
</style>
