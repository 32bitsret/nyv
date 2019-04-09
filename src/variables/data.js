import TimelinePage from "views/Pages/Timeline.jsx";

const pages = 
  {
    path: "/timeline-page",
    name: "Timeline Page",
    mini: "TP",
    component: TimelinePage
  }

const dash = [    
  {
  collapse: false,
  path: "/",
  name: "Home",
  state: "openPages",
  icon: Image,
  views:  {
    path: "/timeline-page",
    name: "Timeline Page",
    mini: "TP",
    component: TimelinePage
  }
},
{
    collapse: false,
    path: "/login",
    name: "Settings",
    state: "openPages",
    icon: Image,
    views: pages
  },
  {
    collapse: false,
    path: "/register",
    name: "Notifications",
    state: "openPages",
    icon: Image,
    views: pages
  },
  {
    collapse: false,
    path: "/messages",
    name: "Messages",
    state: "openPages",
    icon: Image,
   // views: pages
  },
  {
    collapse: false,
    path: "/filter",
    name: "Filter Members",
    state: "openPages",
    icon: Image,
    views: pages
  }
]

export default {
    dash,
    pages
}