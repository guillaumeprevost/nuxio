
<template>
  <div class="flex h-full flex-col">

    <Header></Header>
    <main>
      <div class="max-w-screen-lg mx-auto px-6 mb-16">
        <h1 class="font-display tracking-tight text-slate-900 text-3xl sm:text-4xl my-12">
          Mentions légales
        </h1>

        <h2 class="font-display tracking-tight text-slate-900 text-xl sm:text-2xl mt-8">
          Informatique & Libertés
        </h2>

        <p class="my-2">Vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données qui vous concernent. Vous pouvez exercer ce droit en nous contactant via <a href="mailto:agencenuxio@gmail.com" class="text-blue-600 hover:text-blue-400">agencenuxio@gmail.com</a> ou par courrier postal envoyé à l'adresse suivante :</p>

        <p class="italic my-2">
          NUXIO<br />
          A l'attention de Mr. Guillaume Prévost<br />
          17 rue Almodis<br />
          31200 Toulouse - France
        </p>

        <p class="my-2">Le site internet nuxio.dev a recours à l'utilisation de cookies afin de reconnaître l'utilisateur lors de sa connexion sur son site. L'utilisateur peut à tout moment désactiver l'utilisation de ces cookies en sélectionnant les paramètres appropriés dans son navigateur.</p>

        <h2 class="font-display tracking-tight text-slate-900 text-xl sm:text-2xl mt-8">
          Edition du site
        </h2>

        <p class="my-2">nuxio.dev est un site édité par Guillaume Prévost, micro-entreprise immatriculée sous le numéro 753 099 126. Numéro de TVA intra-communautaire : FR 65753099126.</p>

        <p class="my-2">
          Directeur de la publication : Monsieur Guillaume PREVOST.<br />
          Contact : agencenuxio@gmail.com / 07 67 71 71 53
        </p>

        <h2 class="font-display tracking-tight text-slate-900 text-xl sm:text-2xl mt-8">
          Propriété Intellectuelle
        </h2>

        <p class="my-2">L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris les représentations iconographiques et photographiques. La reproduction, adaptation et/ou traduction de tout ou partie de ce site sur un support quel qu'il soit, est formellement interdite sauf autorisation expresse du Directeur de la publication.</p>

        <h2 class="font-display tracking-tight text-slate-900 text-xl sm:text-2xl mt-8">
          Modification du site
        </h2>

        <p class="my-2">L'équipe éditoriale se réserve le droit de modifier ou de corriger le contenu de ce site et de ces mentions légales à tout moment et ceci sans préavis.</p>

        <h2 class="font-display tracking-tight text-slate-900 text-xl sm:text-2xl mt-8">
          Hébergeur
        </h2>

        <p class="my-2">Le site nuxio.dev est hébergé sur Heroku, détenu par la société Salesforce.</p>

        <p class="italic my-2">
          Salesforce<br />
          415 Mission Street, Suite 300<br />
          San Francisco, CA 94105, USA<br />
        </p>

        <p>Les serveurs sont situés en Europe.</p>

      </div>
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
