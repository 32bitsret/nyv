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
      old_password: "",
      old_passwordState:"",
      new_password: "",
      new_passwordState:"",
      confirm_new_password: "",
      confirm_new_passwordState:"",
      error:{},
      isloading: false,
      iserror:false,
      isSuccess: false,
      successMessage: "password successfully changed",
      errorMessage: "Missing fields or bad entry"
    };
  }


  componentWillReceiveProps(nextProps){
    this.setState({

    })
  }

  onViewClick = e => {
    e.preventDefault()
    this.setState({
      isloading: true
    })
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
       case "password":
         if(verifyLength(e.target.value, 6)){
           this.setState({[stateName + "State"]: "success"})
         }
         else {
           this.setState({[stateName +"State"]: "error"})
         }
     }
  }

  submit = (e) => {
    e.preventDefault();
   if(this.state.passwordState === ""){
      this.setState({
        passwordState : "error",
        iserror:true
    })
    }

    else { 
      const userData = {
        oldPassword: this.state.old_password,
        password: this.state.new_password,
        id: this.state
      }
      if(!isEmpty(this.state.password) && !isEmpty(this.state.password) && !isEmpty(this.state.password)){
        this.setState({ 
          isloading: true,
          iserror:false
        })
        // this.props.loginUser(userData)
      }
      else{
        // console.log("LOG N ERROR")
        this.setState({
          iserror: true
        })
      }
    }
  }

  render() {
    const { classes } = this.props;
   
    return (
      <GridContainer>
         <Snackbar
            place="tc"
            open={this.state.iserror}
            color="danger"
            message={this.state.errorMessage}
            closeNotification={() => this.setState({
               iserror: false 
              })}
            close
          />
          <Snackbar
            place="tc"
            open= {this.state.isSuccess}
            color="success"
            message={this.state.successMessage}
            closeNotification={() => this.setState({
               isSuccess: false 
              })}
            close
          />
        <GridItem lg={6} md={6} xs={12}>
          <Card>
            <CardHeader color="primary" icon>
              <h4 className={classes.cardIconTitle}>Change Password </h4>
            </CardHeader>
            <CardBody>
          <CustomInput
            success={this.state.old_passwordState === "success"}
            error={this.state.old_passwordState === "error" || this.state.iserror}
            labelText="Old Password"
            id="old_password"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
                value:this.state.password,
                type: "password",
                name: 'old_password',
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
            success={this.state.new_passwordState === "success"}
            error={this.state.new_passwordState === "error" || this.state.iserror}
            labelText="New Password"
            id="new_password"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
                value:this.state.new_password,
                type: "password",
                name: 'new_password',
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
              value:this.state.confirm_new_password,
              type:'password',
              name:'confirm_new_password',
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
                  {
                    this.state.isloading
                    ?
                    <Button
                      className={classes.danger} 
                      justIcon={false}
                      round
                      simple
                      color="warning"
                      className="like"
                      onClick={this.onViewClick}
                    >
                      changing password...
                    </Button>
                  :
                    <Button
                      className={classes.danger} 
                      justIcon={false}
                      round
                      simple
                      color="success"
                      className="like"
                      onClick={this.onViewClick}
                    >
                      Change password
                    </Button>
                  }
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
