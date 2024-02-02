<template>
  <label for="languageDropdown">Select Language: </label>
  <select
    id="languageDropdown"
    @change="switchLanguage($event.target.value)"
    v-model="selectedLanguage"
  >
    <option v-for="(value, key) in languages" :key="key" :value="key">
      {{ value }}
    </option>
  </select>
  <FormField :formData="formData.data" />
</template>

<script>
import FormField from "./components/FormField.vue";
// import formData from './locales/en.json'

export default {
  name: "App",
  components: {
    FormField,
  },
  data() {
    return {
      formData: null,
      selectedLanguage: "en",
      languages: {
        en: "English",
        hi: "Hindi",
        gj: "Gujrati",
        ka: "kannad",
        // Add more languages as needed
      },
    };
  },
  methods: {
    loadFormData(language) {
      import(`@/locales/${language}.json`).then((module) => {
        this.formData = module;
      });
    },
    // loadFormData(language) {
    //   const dynamicPath = `./locales/${language}.json`;
    //   this.formData = require(dynamicPath);
    // },
    switchLanguage(language) {
      this.$i18n.locale = language;
      this.loadFormData(language);
    },
  },
  created() {
    const defaultLanguage = "en";
    this.$i18n.locale = defaultLanguage;
    this.loadFormData(defaultLanguage);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
