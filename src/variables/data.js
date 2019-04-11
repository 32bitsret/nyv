import Image from "@material-ui/icons/Image";
import Dashboard from "@material-ui/icons/Dashboard" 
import Group from "@material-ui/icons/Group"
import Email from "@material-ui/icons/Email"
import Notifications from "@material-ui/icons/Notifications"

const dashAdmin = [
  {
    path: "/dashboard",
    name: "Dashboard",
    state: "openPages",
    icon: Dashboard
  },
  {
    path: "/members",
    name: "Members",
    state: "openPages",
    icon: Group
  },
  {
    collapse: false,
    path: "/messages",
    name: "Messages",
    state: "openPages",
    icon: Email
  },
  // {
  //   collapse: false,
  //   path: "/filter",
  //   name: "Filter Members",
  //   state: "openPages",
  //   icon: Image
  // },
  // {
  //   collapse: false,
  //   path: "/filter",
  //   name: "Members",
  //   state: "openPages",
  //   icon: Image
  // }
]


const dashUser = [    
  {
  collapse: false,
  path: "/dashboard",
  name: "Dashboard",
  state: "openPages",
  icon: Dashboard
  },
  {
    collapse: false,
    path: "/notifications",
    name: "Notifications",
    state: "openPages",
    icon: Notifications
  },
]

export default {
    dashUser,
    dashAdmin
}