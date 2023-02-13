<template>
  <div class="flex flex-col rounded-3xl px-6 sm:px-8" 
    :class="plan.isFeatured ? 'order-first bg-blue-600 py-8 lg:order-none' : 'lg:py-8'">
    <h3 class="mt-5 font-display text-lg text-white">
      {{ plan.name }}
    </h3>
    <p class="mt-2 text-base"
      :class="plan.isFeatured ? 'text-white' : 'text-slate-400'">
      {{ plan.description }}
    </p>
    <p class="order-first font-display text-5xl font-light tracking-tight text-white">
      {{ plan.price }}
    </p>
    <ul role="list" class="order-last mt-10 flex flex-col gap-y-3 text-sm "
      :class="plan.isFeatured ? 'text-white' : 'text-slate-200'">
      <li v-for="feature, featureIndex in plan.features" :key="`plan${plan.name}Feature${featureIndex}`" class="flex">
        <IconsCheck :class="plan.isFeatured ? 'text-white' : 'text-slate-400'" />
        <span class="ml-4">{{ feature }}</span>
      </li>
    </ul>
    <ButtonsSimple :href="plan.href" :variant="plan.isFeatured ? 'solid' : 'outline'" 
      color="white" class="mt-8" :aria-label="`Get started with the ${plan.name} plan for ${plan.price}`">
      Get started
    </ButtonsSimple>
  </div>
</template>

<script setup lang="ts">
defineProps({
  plan: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="sass">
</style>
