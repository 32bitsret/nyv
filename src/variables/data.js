import Image from "@material-ui/icons/Image";
import Dashboard from "@material-ui/icons/Dashboard" 
import Group from "@material-ui/icons/Group"
import Email from "@material-ui/icons/Email"
import Notifications from "@material-ui/icons/Notifications"
import Person from "@material-ui/icons/Person"
import Search from "@material-ui/icons/Search"
import Settings from "@material-ui/icons/Settings"


const dashAdmin = [
  {
    path: "/dashboard",
    name: "Dashboard",
    state: "openPages",
    icon: Dashboard
  },
  {
    path: "/statistics",
    name: "Statistics",
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
  {
    collapse: false,
    path: "/create-user",
    name: "Create Member",
    state: "openPages",
    icon: Person
  },
  {
    collapse: false,
    path: "/settings",
    name: "Settings",
    state: "openPages",
    icon: Settings
  },
 
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
  {
    collapse: false,
    path: "/settings",
    name: "Settings",
    state: "openPages",
    icon: Settings
  },
]

export default {
    dashUser,
    dashAdmin
}