import Vue from 'vue'
import App from './app.vue'

import './assets/styles/test.css'
import './assets/images/logo.png'
import './assets/styles/test-stylus.styl'

new Vue({
    el: "#test" ,
    render:(h)=>h(App)
})
