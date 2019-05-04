import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Email from "@material-ui/icons/Email";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { connect } from "react-redux"
import logoo from '../assets/img/logo.jpg'
import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";
import { loginUser } from  "../redux/actions/authActions"
import { withRouter } from "react-router-dom"
import {
  verifyEmail, 
  verifyLength
}from "../utils/validation"
import Snackbar from "components/Snackbar/Snackbar.jsx";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: "cardHidden",
      email:"",
      password: "",
      emailState:"",
      passwordState:"",
      error:{},
      isloading: false,
      iserror:false
    };
  }
  componentDidMount() {
    this.timeOutFunction = setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
    if(this.props.auth.isAuthenticated){
      this.props.history.push("/dashboard")
    }
    this.setState({
      iserror: this.props.created.isError
    })
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.auth.isAuthenticated){
      this.props.history.push("/dashboard")
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeOutFunction);
    this.timeOutFunction = null;
  }
  
  change = (e, stateName, type, stateNameEqualTo) => {
   e.preventDefault()
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

  submit = (e) => {
    e.preventDefault();
    if(this.state.emailState === ""){
      this.setState({emailState: "error"})
    }
   if(this.state.passwordState === ""){
      this.setState({passwordState : "error"})
    }
    else { 
      const userData = {
        email: this.state.email,
        password: this.state.password 
      }
      if(this.state.emailState !== "" && this.state.passwordState !== ""){
        this.setState({ 
          isloading: true
        })
        this.props.loginUser(userData)
      }
    }
  }


  
  render() {
    const { classes } = this.props;
    console.log("PROPERTIES",this.props)
    console.log(this.state.error)
    if(this.props.auth.error !== null || this.props.auth.error !== "" ){ 
    }
    return (
      <div className={classes.container}>
      <div style={{height:"80px"}}></div>
          <Snackbar
            place="tc"
            color="danger"
            open={this.state.iserror}
            message="An Error Occurred. Check Password or Email"
            closeNotification={() => this.setState({
               iserror: false 
              })}
            close
          />
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form>
              <Card login className={classes[this.state.cardAnimaton]}>
                <div className="center-style">
                <a href="https://pycwebsite.herokuapp.com/index.html">
                  <img
                    className={classes.cardImgTop}
                    data-src="holder.js/100px180/"
                    alt="100%x180"
                    style={{ height: "180px", width: "180px", display: "block" }}
                    src={logoo}
                    data-holder-rendered="true"
                  />
                  <h4 className={classes.cardTitle}>Log in</h4>
                </a>
                </div>
                <CardBody>
                  <CustomInput
                    success={this.state.emailState === "success"}
                    error={this.state.emailState === "error"}
                    labelText="Email..."
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type:'email',
                      name:'email',
                      onChange: (e) => this.change(
                        e,
                        "email",
                        "email"
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    success={this.state.passwordState === "success"}
                    error={this.state.passwordState === "error"}
                    labelText="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
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
                </CardBody>
                <CardFooter className={classes.justifyContentCenter}>
                  {
                  this.state.isloading?
                  <Button color="warning" simple size="sm" block disabled>
                   loading...
                  </Button>
                  :
                  <Button color="success" simple size="sm" block onClick={(e) => this.submit(e)}>
                    Log In
                  </Button>            
                  }
                 </CardFooter>
                 <br/>
                  <p style={{textAlign:"center"}}>don't have an account? <a href="/register">sign up</a></p>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    created: state.createUser
  }
}
export default connect(mapStateToProps, {loginUser})(withRouter(withStyles(loginPageStyle)(Login)));
