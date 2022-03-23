import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDONd8vkFey6P2thLDQTnrD7wvOD4ptM3E",
  authDomain: "ikbo-photography.firebaseapp.com",
  projectId: "ikbo-photography",
  storageBucket: "ikbo-photography.appspot.com",
  messagingSenderId: "1005716931995",
  appId: "1:1005716931995:web:5efc6e4b8fe38dca4f8d3e"
};

// Initialize Firebase
initializeApp(firebaseConfig);








createApp(App).use(router).mount('#app')
