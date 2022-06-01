import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MentorsView from '../views/MentorsView.vue'
import StudentsView from "../views/StudentsView.vue";
import UpcomingEvent from "../views/UpcomingEvent.vue"
import MoCs from "../views/MoCs.vue";
import Test from "../views/Test.vue"



const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/MentorsViews",
    name: "mentors",
    component: MentorsView,
  },
  {
    path: "/StudentsViews",
    name: "students",
    component: StudentsView,
  },
  {
    path: "/upcomingevent",
    name: "upcomingEvent",
    component: UpcomingEvent,
  },
  {
    path: "/moccorner",
    name: "MoCs",
    component: MoCs,
  },
  {
    path: "/Test",
    name: "test",
    component: Test,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
