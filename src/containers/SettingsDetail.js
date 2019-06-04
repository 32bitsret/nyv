import React from "react";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import {connect} from "react-redux"
import {getAllProfile} from "../redux/actions/dashboardAction"
import Icon from "@material-ui/core/Icon";import {
  verifyEmail, 
  verifyLength
}from "../utils/validation"
import Snackbar from "components/Snackbar/Snackbar.jsx";
import isEmpty from "../utils/isEmpty";

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};



class LgaTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: {},
      isloading: true,
      email:"",
      password: "",
      emailState:"",
      passwordState:"",
      error:{},
      isloading: false,
      iserror:false,
      errorMessage: "Missing fields or bad entry"
    };
  }


  componentWillReceiveProps(nextProps){
    this.setState({

    })
  }

  onViewClick = e => {
    e.preventDefault()
    // console.log("CURRENT TABLE NAME", this.state.tableData.name)
    localStorage.setItem("ln",this.state.tableData.name)
    window.location.href=""
  }

  change = (e, stateName, type, stateNameEqualTo) => {
    e.preventDefault()
    if(!isEmpty(this.state.error) || this.state.iserror){
      this.setState({
        iserror:false,
        error:{},
        errorMessage:"Missing fields or bad entry"
      })
    }
    this.setState({[e.target.name]: e.target.value})
     switch(type){
       case "email":
         if(verifyEmail(e.target.value)){
           this.setState({[stateName + "State"]: "success"})
         }
         else {
           this.setState({[stateName + "State"]: "error"})
         }
         break;
       case "password":
         if(verifyLength(e.target.value, 6)){
           this.setState({[stateName + "State"]: "success"})
         }
         else {
           this.setState({[stateName +"State"]: "error"})
         }
     }
  }

  render() {
    const { classes } = this.props;
   
    return (
      <GridContainer>
        <GridItem lg={6} md={6} xs={12}>
          <Card>
            <CardHeader color="primary" icon>
              <h4 className={classes.cardIconTitle}>Change Password </h4>
            </CardHeader>
            <CardBody>
          <CustomInput
            success={this.state.passwordState === "success"}
            error={this.state.passwordState === "error" || this.state.iserror}
            labelText="Old Password"
            id="old_password"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
                value:this.state.password,
                type: "password",
                name: 'password',
                onChange: (e) => this.change(
                  e,
                  "password",
                  "password"
                ),
              endAdornment: (
                <InputAdornment position="end">
                  <Icon className={classes.inputAdornmentIcon}>
                    lock_outline
                  </Icon>
                </InputAdornment>
              )
            }}
          />    
        <CustomInput
            success={this.state.passwordState === "success"}
            error={this.state.passwordState === "error" || this.state.iserror}
            labelText="New Password"
            id="new_password"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
                value:this.state.password,
                type: "password",
                name: 'password',
                onChange: (e) => this.change(
                  e,
                  "password",
                  "password"
                ),
              endAdornment: (
                <InputAdornment position="end">
                  <Icon className={classes.inputAdornmentIcon}>
                    lock_outline
                  </Icon>
                </InputAdornment>
              )
            }}
          />   
          <CustomInput
            success={this.state.emailState === "success"}
            error={this.state.emailState === "error" || this.state.iserror}
            labelText="Confirm New Password"
            id="confirm_new_password"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              value:this.state.password,
              type:'password',
              name:'password',
              onChange: (e) => this.change(
                e,
                "password",
                "password"
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Icon className={classes.inputAdornmentIcon}>
                    lock_outline
                  </Icon>
                </InputAdornment>
              )
            }}
          />
        </CardBody>
        
              <CardFooter stats className={classes.cardFooter}>
                  <i className={classes.danger} /> {` `}              
                  <Button
                    className={classes.danger} 
                    justIcon={false}
                    round
                    simple
                    color="info"
                    className="like"
                    onClick={this.onViewClick}
                  >
                    CHANGE PASSWORD
                  </Button>
                </CardFooter>
          </Card>
        </GridItem>
        <GridItem lg={6} md={6} xs={12}>
        </GridItem>
      </GridContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard
  }
}
export default connect(mapStateToProps, {getAllProfile})(withStyles(styles)(LgaTables));
