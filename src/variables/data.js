import Image from "@material-ui/icons/Image";
//import 

const dashAdmin = [
  {
    path: "/dashboard",
    name: "Dashboard",
    state: "openPages",
    icon: Image
  },
  {
    path: "/members",
    name: "Members",
    state: "openPages",
    icon: Image
  },
  {
    collapse: false,
    path: "/messages",
    name: "Messages",
    state: "openPages",
    icon: Image
  },
  {
    collapse: false,
    path: "/filter",
    name: "Filter Members",
    state: "openPages",
    icon: Image
  },
  {
    collapse: false,
    path: "/filter",
    name: "Members",
    state: "openPages",
    icon: Image
  }
]


const dashUser = [    
  {
  collapse: false,
  path: "/dashboard",
  name: "Dashboard",
  state: "openPages",
  icon: Image
  },
  {
    collapse: false,
    path: "/notifications",
    name: "Notifications",
    state: "openPages",
    icon: Image
  },
  {
    collapse: false,
    path: "/messages",
    name: "Messages",
    state: "openPages",
    icon: Image,
   // views: pages
  }
]

export default {
    dashUser,
    dashAdmin
}