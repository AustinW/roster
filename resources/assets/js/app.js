
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('roster', require('./components/Roster.vue'));
Vue.component('input-text', require('./components/InputText.vue'));
Vue.component('input-select', require('./components/InputSelect.vue'));

Vue.component('first-name-column', require('./components/Columns/FirstNameColumn.vue'));
Vue.component('last-name-column', require('./components/Columns/LastNameColumn.vue'));
Vue.component('gender-column', require('./components/Columns/GenderColumn.vue'));
Vue.component('birthdate-column', require('./components/Columns/BirthdateColumn.vue'));
Vue.component('tra-level-column', require('./components/Columns/TraLevelColumn.vue'));
Vue.component('dmt-level-column', require('./components/Columns/DmtLevelColumn.vue'));
Vue.component('tum-level-column', require('./components/Columns/TumLevelColumn.vue'));
Vue.component('notes-column', require('./components/Columns/NotesColumn.vue'));
Vue.component('sync-partner-column', require('./components/Columns/SyncPartnerColumn.vue'));

const app = new Vue({
    el: '#app'
});
