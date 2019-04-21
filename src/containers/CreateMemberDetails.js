import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Step1 from "./createUserSteps/Step1"
import Step4 from "./createUserSteps/Step4"
import Step2 from "./createUserSteps/Step2"
import Step3 from "./createUserSteps/Step3"
import {connect} from "react-redux"
import CreatedUser from "./CreatedUser"
import { withRouter } from "react-router-dom"
import {
  createUserByAdmin,
  updateBasicInfo,
  fetchUser
} from "../redux/actions/createActions"



class WizardView extends React.Component {
  state = {
    user: {}
  }

  componentDidMount(){
    let phone = Number(localStorage.getItem("User"))
    //this.props.fetchUser(phone)
    let User = JSON.parse(localStorage.getItem("ESAU"))
    console.log("ESAUE", User)
    this.setState({
      user : User
    })
  }
 
  componentWillUnmount(){
    console.log("COMPONENT WILL UMOUNT")
    localStorage.removeItem("User")
  }
  render() {
    let user = this.state.user

    const display = false ?<Step1/> : <CreatedUser />
    console.log("INSIDE RENDER", user)
     return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12} lg={12}>
          {display}
        </GridItem>
      </GridContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
     createUser: state.createUser
  }
}
export default connect(mapStateToProps, {fetchUser})(WizardView);
