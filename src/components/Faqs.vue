<template>

  <section id="faq" aria-labelledby="faq-title" 
    class="relative overflow-hidden bg-slate-50 py-20 sm:py-32">

    <nuxt-img format="webp" quality="80" src="/backgrounds/background-faqs.jpg"
      width="3116" height="1892" alt="" role="presentation"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
      class="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4" />

    <Container class="relative">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 id="faq-title" class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
          Vos questions sur les agences web
        </h2>
        <p class="mt-4 text-lg tracking-tight text-slate-700">
          Les réponses à vos questions sur les agences de développement. 
          Et s'il vous reste d'autres questions, nous serons ravis d'y répondre.
          Il suffit de vous contacter.
        </p>
      </div>
      <ul role="list" class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
        <li v-for="(column, columnIndex) in faqs" :key="columnIndex">
          <ul role="list" class="flex flex-col gap-y-8">
              <li v-for="(faq, faqIndex) in column" :key="faqIndex">
                <h3 class="font-display text-lg leading-7 text-slate-900">
                  {{ faq.question }}
                </h3>
                <p class="mt-4 text-sm text-slate-700">{{ faq.answer }}</p>
              </li>
          </ul>
        </li>
      </ul>
    </Container>
  </section>
</template>

<script setup>
const faqs = [
  [
    {
      question: 'Qu’est-ce qu’une agence développement web ?',
      answer: 'Un développeur web est responsable de la création des fonctionnalités techniques \
      d’un site ou d’une application. dans une agence web, il travaille à partir d’un cahier des \
      charges donné par le client, évalue les besoins et définit la solution technique adéquate. \
      Il développe ensuite les fonctionnalités du site en codant.',
    },
    {
      question: 'Quelles sont les étapes qu’une agence développement web rencontre lors du processus de création de site internet ?',
      answer: 'Les étapes de la création d’un site internet ou d’une application sont : la compréhension du besoin, l’élaboration d’un cahier des charges avec le client, la conception d’une solution, la création de maquettes, le développement, les tests du site, et enfin le lancement'
    },
    {
      question: 'Pourquoi est-il important d’être accompagné par un expert ?',
      answer: 'Il existe de nombreuses personnes prêtes à vous proposer la création d’un site web rapidement et à bas coûts. Attention cependant, il y a beaucoup plus qu’une bonne facade pour réaliser une bonne solution : performances, sécurité, ergonomie, . Nuxio vous aide à exceller dans tous ces domaines.',
    },
  ],
  [
    {
      question: 'Une agence peut-elle s\'occuper de la maintenance de mon site ?',
      answer: 'Dans une agence de développement web, il peut également \
      diagnostiquer et résoudre les problèmes sur un site déjà en ligne. Nuxio peut \
      réaliser un audit complet de votre site e-commerce, SaaS ou application. \
      ',
    },
    {
      question: 'Comment fonctionne un audit de site internet ?',
      answer: 'Nous analysons votre site ou logiciel en détails sur de nombreux aspects : \
      architecture logicielle, code, tests, sécurite, performances, etc. et vous proposons \
      des solutions pour l\'améliorer',
    },
    {
      question: 'Quels sont les éléments clés pour choisir une agence de développement',
      answer: 'Les compétences clés d’un développeur web incluent la polyvalence, \
      l’autonomie, la capacité d’adaptation et le respect des délais fixés par le client. \
      Ces aptitudes sont essentielles à une agence de développement pour livrer un travail \
      excellent et réaliser les projets de ses clients avec succès.',
    },
  ],
  [
    {
      question: 'Une agence web pour se charger de la maintenance du site ?',
      answer: 'Un site internet est une entité qui change constamment et nécessite donc une maintenance constante. \
        La mise à jour des contenus, la modification du serveur et la correction des liens font partie du travail quotidien d’une agence développement web.',
    },
    {
      question: 'Comment faire une refonte de son site web ?',
      answer: 'Même avec un excellent travail de développement et de maintenance, tout site \
      web prend de l’âge et une refonte est parfois nécessaire : en plus de rafraîchir les \
      aspects graphiques, on s’occupe de d’aligner le site avec les meilleures pratiques et \
      les technologies les plus récentes',
    },
    {
      question: 'Où trouver une agence de développement à Toulouse ?',
      answer: 'Vous l\'avez trouvé ! Nuxio est là pour vous aider : création, \
      maintenance, audit et refonte de site internet ou application. Nous pouvons \
      vous rencontrer à Toulouse, ou 100% à distance',
    },
  ],
]
</script>

<style lang="sass">
</style>
