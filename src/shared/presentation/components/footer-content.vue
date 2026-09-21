<script setup>
import {useI18n} from "vue-i18n";

/**
 * Presentation component for the application footer.
 *
 * @remarks
 * Displays attribution links, copyright information, and supports localization.
 */
const { t } = useI18n();
</script>

<template>
  <div class="bottom-0 grid mt-4 p-4 justify-content-center bg-primary text-primary-contrast text-center">
    <div class="col-12 flex flex-column align-items-center">
      <p>Copyright &copy; 2026. ACME Learning Center</p>
    </div>
    <div  class="col-12 flex flex-column align-items-center mt-3">
      <p>
        {{ t('footer.authoring-phrase.intro') }} <i class="pi pi-heart text-red-500"/>
        {{ t('footer.authoring-phrase.use') }} <a href="https://primevue.org/" target="_blank" class="text-primary-contrast font-bold">PrimeVue</a>
        {{ t('footer.authoring-phrase.author', {brand: 'ACME Learning Center'}) }}
      </p>
    </div>
  </div>
</template>
<style scoped>

</style>