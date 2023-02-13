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
                      <img :src="testimonial.author.image" alt=""
                        width="56" height="56" class="h-14 w-14 object-cover" />
                    </a>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </li>
      </ul>
    </Container>
  </section>
</template>

<script setup>
import photoMarielaure from '@/assets/images/avatars/marielaure.jpg'
import photoMaxime from '@/assets/images/avatars/maxime.jpg'
import photoAugustin from '@/assets/images/avatars/augustin.jpg'
import photoGuillermo from '@/assets/images/avatars/guillermo.jpg'
import photoCarlo from '@/assets/images/avatars/carlo.jpg'

const testimonials = [
  [
    {
      content: "<strong>Nuxio est au cœur de notre projet web.</strong> Il a défini le besoin, constitué l’architecture technique et choisi le langage de programmation le plus adapté pour proposer un MVP fonctionnel et performant en tenant compte de notre budget et du temps.",
      author: {
        name: 'Maxime Colange',
        role: 'Fondateur & CEO, Fairily',
        image: photoMaxime,
        link: "https://www.linkedin.com/in/maxime-colange-42a47112a/"
      },
    },
    {
      content: "Nuxio a conçu l'architecture et le modèle de données nécessaire à la mise en place de notre plateforme SaaS. La plateforme inclut des fonctionnalités et algorithmes avancé. <strong>Proactivité, rigueur & efficacité sont de mise, en plus de compétences de gestion de projet</strong> . Bref, je recommande à 100%.",
      author: {
        name: 'Marie-Laure Blasquez',
        role: 'Directrice, Storybee',
        image: photoMarielaure,
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
        image: photoAugustin,
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
        image: photoCarlo,
        link: "https://www.linkedin.com/in/carlospada/"
      },
    },
    {
      content: "D'un point de vue technique : minutieux dans son travail et robuste dans sa conception. <strong>Nuxio délivre un travail de grande qualité.</strong> C'est encore plus important dans une start-up où tout change de mois en mois. Pourtant, Nuxio a toujours réussi à résoudre les problèmes que nous avons rencontrés et l'a fait de manière intelligente et durable.",
      author: {
        name: 'Guillermo Fernandez',
        role: 'Développeur senior, startup SaaS',
        image: photoGuillermo,
        link: "https://www.linkedin.com/in/guillermo-fernandez-gorostidi/",
      },
    },
  ],
]
</script>

<style lang="sass">
</style>
