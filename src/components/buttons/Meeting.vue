<template>
  <div>
    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
    <ButtonsSimple @click="openMeetingSchedule">
      Prendre rendez-vous
    </ButtonsSimple>
  </div>
</template>

<script setup>
function openMeetingSchedule() {
  Calendly.initPopupWidget({url: 'https://calendly.com/nuxio/30min'});
  return false;
}

// Mounted event
onMounted(() => {
  let calendlyScript = document.createElement('script');
  calendlyScript.setAttribute('type', 'application/javascript');
  calendlyScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
  document.head.appendChild(calendlyScript);
})
</script>

<style lang="sass">
</style>
