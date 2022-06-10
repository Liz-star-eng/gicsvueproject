import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DirectoryListing from '../views/DirectoryListing.vue'
import StudentsView from "../views/StudentsView.vue";
import UpcomingEvent from "../views/UpcomingEvent.vue"
import MoCs from "../views/MoCs.vue";
import DirectoryDetail from "../views/DirectoryDetail.vue";
import CyberView from "../views/CyberView.vue";
import Careers from "../views/Careers.vue";
import NewsViews from "../views/NewsViews.vue";
import NewsDetails from "../views/NewsDetails.vue";
import Form from "../views/Form.vue";
import Test from "../views/Test.vue"




const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/directorylistings",
    name: "mentors",
    component: DirectoryListing,
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
    path: "/directorydetail",
    name: "directory",
    component: DirectoryDetail,
  },
  {
    path: "/cyberview",
    name: "cybersecurity",
    component: CyberView,
  },
  {
    path: "/form",
    name: "form",
    component: Form,
  },
  {
    path: "/careers",
    name: "careers",
    component: Careers,
  },
  {
    path: "/newsviews",
    name: "news",
    component: NewsViews,
  },
  {
    path: "/newsdetails",
    name: "newsdetails",
    component: NewsDetails,
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
