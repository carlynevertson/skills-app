import Vue from 'vue'
import App from './App.vue'
import 'animate.css';
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons to the library
library.add( faMinusCircle );

// Register globally
Vue.component( 'font-awesome-icon', FontAwesomeIcon );

Vue.config.productionTip = false

new Vue( {
    router,
    render: h => h( App ),
} ).$mount( '#app' )
