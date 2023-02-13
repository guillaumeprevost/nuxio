<template>
  <section id="realisations" aria-label="Pricing" class="bg-slate-900 py-20 sm:py-32">
    <Container>
      <div class="md:text-center">
        <h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl">
          <span class="relative whitespace-nowrap">
            <SwirlyDoodle class="absolute top-1/2 left-0 h-[1em] w-full fill-blue-400" />
            <span class="relative">Simple pricing,</span>
          </span>&nbsp; for everyone.
        </h2>
        <p class="mt-4 text-lg text-slate-400">
          It doesn’t matter what size your business is, our software won’t
          work well for you.
        </p>
      </div>
      <div class="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
        <Plan v-for="plan in plans" :key="plan.name" :plan="plan" />
      </div>
    </Container>
  </section>
</template>

<script setup>

const plans = [
  {
    name: 'Starter',
    href: '/register',
    price: '$9',
    description: 'Perfect for small / medium sized businesses.',
    features: [ 
      'Send 10 quotes and invoices' , 
      'Connect up to 2 bank accounts', 
      'Track up to 15 expenses per month', 
      'Manual payroll support', 
      'Export up to 3 reports'
    ],
  },
  {
    name: 'Small business',
    href: '/register',
    price: '$15',
    description: 'For even the biggest enterprise companies.',
    features: [ 
      'Send 25 quotes and invoices', 
      'Connect up to 5 bank accounts',
      'Track up to 50 expenses per month', 
      'Automated payroll support', 
      'Export up to 12 reports',
      'Bulk reconcile transactions', 
      'Track in multiple currencies'
    ],
    isFeatured: true,
  },
  {
    name: 'Enterprise',
    href: '/register',
    price: '$39',
    description: 'Good for anyone who is self-employed and just getting started.',
    features: [ 
      'Send unlimited quotes and invoices', 
      'Connect up to 15 bank accounts',
      'Track up to 200 expenses per month', 
      'Automated payroll support',
      'Export up to 25 reports, including TPS'
    ],
  },
];
</script>

<style lang="sass">
</style>