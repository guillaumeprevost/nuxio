<template>
  <section id="temoignages" aria-label="What our customers are saying"
    class="bg-slate-50 py-20 sm:py-32">
    <Container>
      <div class="mx-auto max-w-2xl md:text-center">
        <h2 class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
          Nos clients l'expliquent mieux que nous
        </h2>
        <p class="mt-4 text-lg tracking-tight text-slate-700">
          De nombreux clients nous ont déjà fait confiance. Ils ont toujours la satisfaction 
          de travailler avec un collaborateur technique plutôt qu'un sous-traitant.
        </p>
      </div>
      <ul role="list" class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
        <li v-for="(column, columnIndex) in testimonials" :key="columnIndex">
          <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
            <li v-for="(testimonial, testimonialIndex) in column" :key="testimonialIndex">
              <TestimonialCard :testimonial="testimonial"></TestimonialCard>
            </li>
          </ul>
        </li>
      </ul>
    </Container>
  </section>
</template>

<script setup>
const testimonials = [
  [
    {
      content: "<strong>Nuxio est au cœur de notre projet web.</strong> Il a défini le besoin, constitué l’architecture technique et choisi le langage de programmation le plus adapté pour proposer un MVP fonctionnel et performant en tenant compte de notre budget et du temps.",
      author: {
        name: 'Maxime Colange',
        role: 'Fondateur & CEO, Fairily',
        image: '/avatars/maxime.jpg',
        link: "https://www.linkedin.com/in/maxime-colange-42a47112a/"
      },
    },
    {
      content: "Nuxio a conçu l'architecture et le modèle de données nécessaire à la mise en place de notre plateforme SaaS. La plateforme inclut des fonctionnalités et algorithmes avancé. <strong>Proactivité, rigueur & efficacité sont de mise, en plus de compétences de gestion de projet</strong> . Bref, je recommande à 100%.",
      author: {
        name: 'Marie-Laure Blasquez',
        role: 'Directrice, Storybee',
        image: '/avatars/marielaure.jpg',
        link: "https://www.linkedin.com/in/marielaure-blasquez/"
      },
    },
  ],
  [
    {
      content: "<strong>A l’écoute et performant.</strong> Une capacité a pouvoir gérer du full stack rend particulièrement attentif à la relation qui est créée entre les interactions d’une interface et l’expérience globale de l’utilisateur. Je recommande les yeux fermés.",
      author: {
        name: 'Augustin Haran',
        role: 'Lixu Design',
        image: '/avatars/augustin.jpg',
        link: "https://www.linkedin.com/in/augustinharan/"
      },
    },
  ],
  [
    {
      content: "J'ai eu la chance de travailler avec Guillaume, et <strong>sa planification et ses compétences techniques sont excellentes</strong>. Nous devions reconstruire notre produit à partir de zéro et il a parfaitement conduit l'équipe à exécuter la refonte de l'application selon le planning.",
      author: {
        name: 'Carlo Spada',
        role: 'CEO & co-fondateur, Nido',
        image: '/avatars/carlo.jpg',
        link: "https://www.linkedin.com/in/carlospada/"
      },
    },
    {
      content: "D'un point de vue technique : minutieux dans son travail et robuste dans sa conception. <strong>Nuxio délivre un travail de grande qualité.</strong> C'est encore plus important dans une start-up où tout change de mois en mois. Pourtant, Nuxio a toujours réussi à résoudre les problèmes que nous avons rencontrés et l'a fait de manière intelligente et durable.",
      author: {
        name: 'Guillermo Fernandez',
        role: 'Développeur senior, startup SaaS',
        image: '/avatars/guillermo.jpg',
        link: "https://www.linkedin.com/in/guillermo-fernandez-gorostidi/",
      },
    },
  ],
]
</script>

<style lang="sass">
</style>
