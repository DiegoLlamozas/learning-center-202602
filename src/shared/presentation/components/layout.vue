<script setup>
import {useI18n} from "vue-i18n";
import {ref} from "vue";
import {
  Button as PvButton,
  ConfirmDialog as PvConfirmDialog,
  Drawer as PvDrawer,
  Toast as PvToast,
  Toolbar as PvToolbar
} from "primevue";
import FooterContent from "./footer-content.vue";

const {t} = useI18n();
const drawer = ref(false);
const toggleDrawer = () => drawer.value = !drawer.value;

const items = [
  { label: 'option.home', to: '/home' },
  { label: 'option.about', to: '/about' },
]

</script>

<template>
  <div class="layout-container">
    <pv-toast/>
    <pv-confirm-dialog/>
    <header class="absolute top-0 left-0 w-full">
      <pv-toolbar class="bg-primary">
        <template #start>
          <pv-button class="p-button-text" icon="pi pi-bars" @click="toggleDrawer()"></pv-button>
          <h3>ACME Learning Center</h3>
        </template>

        <template #end>
          <div class="flex-column mr-3">
            <pv-button v-for="item in items" :key="item.label" as-child v-slot="slotProps">
              <router-link :to="item.to" :class="slotProps['class']">{{t(item.label)}}</router-link>
            </pv-button>
          </div>


        </template>
      </pv-toolbar>
      <pv-drawer v-model:visible="drawer"/>
    </header>

    <main class="mt-7">
      <router-view/>
    </main>

    <footer>
      <footer-content/>
    </footer>
  </div>



</template>

<style scoped>
.layout-container{
  height: 1200px;
}
</style>
