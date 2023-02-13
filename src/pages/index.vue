
<template>
  <div class="flex h-full flex-col">

    <Header></Header>
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <!-- <Pricing /> -->
        <Faqs />
      </main>
      <Footer></Footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

definePageMeta({
  layout: "fullscreen",
});

// Mounted event
onMounted(() => {
})
</script>
