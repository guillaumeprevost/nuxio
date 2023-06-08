<template>
  <section id="contact" class="relative overflow-hidden p-16">
     
    <div class="relative flex gap-6">

      <div class="flex-1 flex justify-center">
        <div class="mx-auto md:text-center">

          <div class="flex gap-6">
            <div class="flex-1">          
              <nuxt-img format="webp" quality="80" src="/illustrations/agence-web-toulouse.webp"
                width="800" height="553" alt="Agence web à Toulouse" placeholder="15"
                sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
                class="rounded-2xl" />
            </div>
            <div class="flex-1">
              <h1 class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                Contactez Nuxio
              </h1>
              <p class="mt-4 text-lg tracking-tight text-slate-700">
                Agence de développement web & applications à Toulouse.
              </p>
              
              <div class="flex justify-center my-6">
                <div class="text-left">
                  <p class="my-4 tracking-tight text-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                      class="inline-block w-6 h-6">
                      <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                    </svg>
                    Basé à Toulouse
                  </p>

                  <p class="my-4 tracking-tight text-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                      class="inline-block w-6 h-6">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    Email : <a href="mailto:agencenuxio@gmail.com" class="font-medium">agencenuxio@gmail.com</a>
                  </p>

                  <p class="my-4 tracking-tight text-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                      class="inline-block w-6 h-6">
                      <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                    </svg>
                    Tél : <a href="tel:0767717153" class="font-medium">07 67 71 71 53</a>
                  </p>
                </div>
              </div>

              <div class="flex justify-center items-center gap-6 my-6">
                <!-- <ButtonsSimple :href="'mailto:agencenuxio@gmail.com'" variant="outline">
                  Contactez-nous
                </ButtonsSimple> -->
                <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
                <ButtonsMeeting></ButtonsMeeting>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="sass">
</style>
