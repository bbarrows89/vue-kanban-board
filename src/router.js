import Vue from "vue";
import Router from "vue-router";
import Backlog from "@/views/Backlog";
import KanbanBoard from "@/views/KanbanBoard";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/backlog",
      component: Backlog
    },
    {
      path: "/board",
      component: KanbanBoard
    },
    {
      path: "*",
      redirect: "/backlog"
    }
  ]
});
