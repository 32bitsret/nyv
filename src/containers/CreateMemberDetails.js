import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Step1 from "./createUserSteps/Step1"
import {connect} from "react-redux"
import CreatedUser from "./CreatedUser"
import { withRouter } from "react-router-dom"
import {
  fetchUser
} from "../redux/actions/createActions"



class WizardView extends React.Component {
  state = {
    user: {}
  }

componentWillReceiveProps(nextProps){
  this.setState({
    user: nextProps.createUser.user
  })
}
 
  render() {
    let user = this.state.user
    console.log("TOGGLE STATE", this.props.createUser.createdUser)
    const display = this.props.createUser.createdUser ? <CreatedUser /> : <Step1/> 
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
export default connect(mapStateToProps, {
  fetchUser
})(WizardView);
