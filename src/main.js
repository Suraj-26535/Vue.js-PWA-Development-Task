import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: [
                { value: 'en', label: 'English' },
                { value: 'hi', label: 'Hindi' },
                // Add more languages as needed
            ],
    messages: {
        en: require('./locales/en.json'),
        hi: require('./locales/hi.json'),
    }
    

})

createApp(App).use(i18n).mount('#app')
