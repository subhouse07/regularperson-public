import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import MultiMedia from "./components/MultiMedia.vue";
import Software from "./components/Software.vue";
import Music from "./components/Music.vue";
import Video from "./components/Video.vue";
import Graphics from "./components/Graphics.vue";
import NotFound from "./components/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/multimedia", component: MultiMedia },
  { path: "/software", component: Software },
  { path: "/multimedia/music", component: Music },
  { path: "/multimedia/video", component: Video },
  { path: "/multimedia/graphics", component: Graphics },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
