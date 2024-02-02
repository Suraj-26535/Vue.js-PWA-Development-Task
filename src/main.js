import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'en',
    messages: {
        en: require('./locales/en.json'),
        hi: require('./locales/hi.json'),
        gj: require('./locales/gj.json'),
        ka: require('./locales/ka.json')
    }
})

createApp(App).use(i18n).mount('#app')
