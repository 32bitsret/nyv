import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Step1 from "./createUserSteps/Step1"
import {connect} from "react-redux"
import CreatedUser from "./CreatedUser"
import {
  fetchUser
} from "../redux/actions/createActions"
import { getProfile } from "../redux/actions/dashboardAction"



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
    const display = this.props.createUser.userExist  ? <CreatedUser /> : <Step1/> 
      return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12} lg={12}>
          {display}
        </GridItem>
      </GridContainer>
    );
  }
}
// this.props.createUser.createdUser

const mapStateToProps = state => {
  return {
     createUser: state.createUser
  }
}
export default connect(mapStateToProps, {
  fetchUser
})(WizardView);
