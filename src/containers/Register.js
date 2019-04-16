import React from "react";
import PropTypes from "prop-types";
import { registerUser } from '../redux/actions/authActions'
import { connect} from 'react-redux'
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import { withRouter} from "react-router-dom"
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import logoo from '../assets/img/logo.jpg'
import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";
import {
  verifyEmail, 
  verifyLength, 
  verifyNumber, 
  verifyUrl, 
  compare}
   from "../utils/validation"


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: "cardHidden",
      firstname:'',
      email: '',
      password: '',
      confirm_password:'',
      lastname:'',
      phone:'',

      firstnameState:'',
      passwordState:'',
      phoneState:'',
      lastnameState:''
    };
  }
  componentDidMount() {
     this.timeOutFunction = setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  componentWillUnmount() {
    clearTimeout(this.timeOutFunction);
    this.timeOutFunction = null;
  }

  onChange = (e, stateName, type, stateNameEquivalence) => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value });
    switch(type){
      case "email":
        if(verifyEmail(e.target.value)){
          this.setState({[stateName+"State"]: "success"})
        }else {
          this.setState({[stateName+"State"]: "error"})
        }
        break;
      case "password":
        if(verifyLength(e.target.value, 6)){
          this.setState({[stateName+"State"]: "success"})
        }else {
          this.setState({[stateName+"State"]: "error"})
        }
        break;
      case "equalTo":
        if(compare(e.target.value,this.state[stateNameEquivalence])){
          this.setState({[stateName+"State"]: "success"})
        }else{
          this.setState({[stateName+"State"]: "error"})
        }
        break;
      case "number":
        if(verifyNumber(e.target.value)){
          this.setState({[stateName+"State"]: "success"})
        }else{
          this.setState({[stateName+"State"]:"error"})
        }
        break;
      case "minValue":
        if(verifyLength(e.target.value, 1)){
          this.setState({[stateName+"State"]: "success"})
        }
        else {
          this.setState({[stateName+"State"]: "error"})
        }
        break;
    }
  }

  submit = (e) => {
    e.preventDefault();
    if(this.state.firstnameState === ""){
      this.setState({firstnameState:"error"})
    }
    if(this.state.lastnameState === ""){
      this.setState({lastnameState: "error"})
    }
    if(this.state.passwordState === ""){
      this.setState({passwordState: "error"})
    }
    if(this.state.phoneState === ""){
      this.setState({phoneState: "error"})
    }
    else{
        const data = {
        firstname: this.state.firstname,
        email: this.state.email,
        password:this.state.password,
        phone: Number(this.state.phone),
        lastname:  this.state.lastname,
        //role:"admin"
        // photo: "/home/church/Desktop/from loretta/WORKSHOP/8x10=1 (2).jpg"// password2:this.state.confirm_password,
      }
      console.log("REGISTRATION::::::",data)
      this.props.registerUser(data, this.props.history)
    }
  }
  render() {
    const { classes } = this.props;
    console.log("PROPERTIES",this.props)
    console.log("NAME",this.state)
    return (
      <div className={classes.container}>
      <div style={{height:"80px"}}></div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form>
              <Card login className={classes[this.state.cardAnimaton]}>
                {/* <CardHeader
                  className={`${classes.cardHeader} ${classes.textCenter}`}
                  color="rose"
                > */}
                <div className={"center-style"}>
                <a href="/">
                  <img
                    className={classes.cardImgTop}
                    data-src="holder.js/100px180/"
                    alt="100%x180"
                    style={{ height: "180px", width: "180px", position:"center center" }}
                    src={logoo}
                    data-holder-rendered="true"
                  />
                  <h4 className={classes.cardTitle}>Sign Up</h4>
                </a>
                </div>
                {/* </CardHeader> */}
                <CardBody>
                <CustomInput
                    success={this.state.lastnameState === "success"}
                    error={this.state.lastnameState === "error"}
                    labelText="Last Name"
                    id="lastname"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type:"text",
                      name: "lastname",
                      onChange: (e) => this.onChange(e, "lastname", "minValue"),
                      endAdornment: (
                        <InputAdornment position="end">
                          <Face className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      )
                    }}
                  />
                <CustomInput
                  success={this.state.firstnameState === "success"}
                  error={this.state.firstnameState === "error"}
                  labelText="First Name"
                  id="firstname"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type:"text",
                    name: "firstname",
                    onChange: (e) => this.onChange(e, "firstname", "minValue"),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Face className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText="Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "email",
                    name: "email",
                    onChange: this.onChange,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  success={this.state.phoneState === "success"}
                  error={this.state.phoneState === "error"}
                  labelText="Phone number"
                  id="phone"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type:"number",
                    name: "phone",
                    onChange: (e)=> this.onChange(e, "phone", "number" ),
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
                    labelText="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type:"password",
                      name: "password",
                      onChange: this.onChange,
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
                    labelText="Confirm Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type:"password",
                      name: "confirm_password",
                      onChange: this.onChange,
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
                  <Button color="success" simple size="lg" block onClick={this.submit}>
                    Sign Up
                  </Button>
                </CardFooter>
                <br/>
                  <p style={{textAlign:"center", paddingBottom: "5px"}}>have an account already? <a href="/login">Log in</a></p>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, {registerUser})(withRouter(withStyles(loginPageStyle)(LoginPage)));
