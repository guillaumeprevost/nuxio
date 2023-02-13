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

      <!-- <div class="lg:hidden flex flex-col gap-y-10 overflow-hidden -mx-4 mt-20 sm:-mx-6 px-4 sm:px-6">
        <div v-for="feature, featureIndex in features" :key=feature.name>
          <Feature :feature="feature" class="mx-auto max-w-2xl" :isActive="featureIndex === selectedIndex" />
          <div class="relative mt-10 pb-10">
            <div class="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"></div>
            <div class="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <img :src="feature.image" alt="" sizes="52.75rem" class="w-full" />
            </div>
          </div>
        </div>
      </div>
      
      <TabGroup as="div" :selectedIndex="selectedIndex" @change="changeTab"
        class="hidden lg:block lg:mt-20">
        <TabList class="grid grid-cols-3 gap-x-8">         
          <Feature v-for="feature, featureIndex in features" :key="feature.name"
            :feature="feature" :isActive="featureIndex === selectedIndex" class="relative">
            <Tab class="[&:not(:focus-visible)]:focus:outline-none">
              <span class="absolute inset-0"></span>
              {{ feature.name }}
            </Tab>
          </Feature>
        </TabList>
        <TabPanels class="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
          <div class="-mx-5 flex">
            <TabPanel v-for="feature, featureIndex in features" :key="feature.name" static
              class="px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none"
              :class="featureIndex !== selectedIndex ? 'opacity-60' : ''"
              :style="`transform: translateX(-${selectedIndex * 100}%)`"
              :aria-hidden="featureIndex !== selectedIndex">
              <div class="w-[52.75rem] overflow-hidden rounded-xl bg-white 
                shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                <img :src="feature.image" alt="" sizes="52.75rem" class="w-full" />
              </div>
            </TabPanel>
          </div>
        </TabPanels>
      </TabGroup> -->
    </Container>
  </section>

</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import screenshotContacts from '@/assets/images/screenshots/contacts.png'
import screenshotInventory from '@/assets/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/assets/images/screenshots/profit-loss.png'

const selectedIndex = ref(0);
function changeTab(index) {
  selectedIndex.value = index;
}

const features = [
  {
    name: 'Reporting',
    summary: 'Stay on top of things with always up-to-date reporting features.',
    description: 'We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.',
    image: screenshotProfitLoss,
    icon: resolveComponent('IconsReporting'),
  },
  {
    name: 'Inventory',
    summary: 'Never lose track of what’s in stock with accurate inventory tracking.',
    description: 'We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.',
    image: screenshotInventory,
    icon: resolveComponent('IconsInventory')
  },
  {
    name: 'Contacts',
    summary: 'Organize all of your contacts, service providers, and invoices in one place.',
    description: 'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
    image: screenshotContacts,
    icon: resolveComponent('IconsContact')
  },
]
</script>

<style lang="sass">
</style>
