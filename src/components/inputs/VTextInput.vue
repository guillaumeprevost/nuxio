
<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  debug: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="col-span-6 sm:col-span-3 mt-4">
    <VField name="email" v-slot="{ field, meta, errors }">
      <input v-bind="field"  
        class="mt-1 block w-full shadow-sm sm:text-sm border border-gray-dark rounded-md"
        :class="{
          'border-turquoise': meta.valid && meta.touched,
          'border-red': !meta.valid && meta.touched
        }"
        placeholder="Email" 
        type="email"
      />
      <VErrorMessage name="field" class="text-red">
        <div class="debug" v-if="debug">
          <pre>{{ errors }}</pre>
          <pre>{{ meta }}</pre>
        </div>
      </VErrorMessage>
    </VField>
  </div>
</template>