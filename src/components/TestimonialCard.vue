<template>
  <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
    <IconsQuote class="absolute top-6 left-6 fill-slate-100" />
    <blockquote class="relative">
      <p class="text-lg tracking-tight text-slate-900" v-html="testimonial.content">
      </p>
    </blockquote>
    <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
      <div>
        <div class="font-display text-base text-slate-900">
          {{ testimonial.author.name }}
        </div>
        <div class="mt-1 text-sm text-slate-500">
          {{ testimonial.author.role }}
        </div>
      </div>
      <div class="overflow-hidden rounded-full bg-slate-50">
        <a :href="testimonial.author.link" target="_blank">
          <nuxt-img format="webp" quality="80" 
            :src="testimonial.author.image" :alt="`Client Nuxio ${testimonial.author.name}`"
            sizes="xs:112px sm:112px md:112px lg:112px xl:112px"
            class="h-14 w-14 object-cover" />
        </a>
      </div>
    </figcaption>
  </figure>  
</template>

<script setup>
</script>

<style lang="sass">
</style>