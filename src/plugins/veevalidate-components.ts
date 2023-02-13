import { Form, Field, FieldArray, ErrorMessage } from 'vee-validate';

export default defineNuxtPlugin((nuxtApp:any) => {
  nuxtApp.vueApp.component("VForm", Form);
  nuxtApp.vueApp.component("VField", Field);
  // nuxtApp.vueApp.component("VFieldArray", FieldArray);
  nuxtApp.vueApp.component("VErrorMessage", ErrorMessage);
})