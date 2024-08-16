import { createApp } from "vue"; 
import App from "./App.vue";
import VueDraggableResizable from 'vue-draggable-resizable'
// // import Index from "./views/index.vue";
import "./assets/css/index.css"
// // const routes = [
// //   { path: "/", component: Index } 
// // ];

// // const router = create

createApp(App)
  .component("vue-draggable-resizable", VueDraggableResizable)
  .mount('#app')