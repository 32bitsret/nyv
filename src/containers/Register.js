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
import CardFooter from "components/Card/CardFooter.jsx";
import logoo from '../assets/img/pyclogo.png'
import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";
import {
  verifyEmail, 
  verifyLength, 
  verifyNumber, 
  compare
}from "../utils/validation"
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Phone from "@material-ui/icons/Phone";
import pagesStyle from "assets/jss/material-dashboard-pro-react/layouts/pagesStyle.jsx";
import isEmpty from "../utils/isEmpty"
import Snackbar from "components/Snackbar/Snackbar.jsx";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error:{},
      cardAnimaton: "cardHidden",
      errorMessage: "",
      isloading: false,
      firstname:'',
      email: '',
      password: '',
      confirm_password:'',
      lastname:'',
      phone:'',
      middlename:'',
      gender:'',
      lga:'',

      confirm_passwordState:'',
      firstnameState:'',
      passwordState:'',
      middlenameState:'',
      emailState:'',
      genderState:'',
      lgaState:'',
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

  componentWillReceiveProps(nextProps){
    if(!isEmpty(nextProps.register.error)){
      this.setState({
        error: nextProps.register.error,
        errorMessage:nextProps.register.error.message,
        password: '',
        confirm_password:'',
        confirm_passwordState:'',
        passwordState:'',
        isloading:false
      })
    }
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
        if(verifyLength(e.target.value, 8)){
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
        if(verifyLength(e.target.value, 11)){
          this.setState({[stateName+"State"]: "success"})
        }else {
          this.setState({[stateName+"State"]: "error"})
        }
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
      case "confirm_password":
        if(compare(e.target.value,this.state[stateNameEquivalence])){
          this.setState({[stateName+"State"]: "success"})
        }else{
          this.setState({[stateName+"State"]: "error"})
        }
        break;
      case "lga":
        if(verifyLength(e.target.value, 1)){
          this.setState({[stateName+"State"]: "success"})
        }
      case "gender":
        if(e.target.value === undefined){
          this.setState({
            gender:""
          })
        }
        if(verifyLength(e.target.value, 1)){
          this.setState({[stateName+"State"]: "success"})
        }
    }
  }

  continue = () => this.props.history.push("/login")

  selectChange = e => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value });
  }
  submit = (e) => {
    e.preventDefault();
    if(this.state.firstnameState === ""){
      this.setState({firstnameState:"error"})
    }
    if(this.state.lastnameState === ""){
      this.setState({lastnameState: "error"})
    }
    if(this.state.middlenameState === ""){
      this.setState({middlenameState:"error"})
    }
    if(this.state.emailState === ""){
      this.setState({emailState:"error"})
    }
    if(this.state.passwordState === ""){
      this.setState({passwordState: "error"})
    }
    if(this.state.phoneState === ""){
      this.setState({phoneState: "error"})
    }
    // if(this.state.lgaState === ""){
    //   this.setState({lgaState: "error"})
    // }
    if(this.state.genderState === ""){
      this.setState({genderState:"error"})
    }
    if(this.state.confirm_passwordState === ""){
      this.setState({confirm_passwordState: "error"})
    }
    else{
      const data = {
        firstname: this.state.firstname+" "+this.state.middlename,
        email: this.state.email,
        password:this.state.password,
        phone: Number(this.state.phone),
        lastname:  this.state.lastname,
        gender: this.state.gender,
        // role:"admin" 
      }
      if(this.state.firstnameState !== "" &&this.state.lastnameState !== ""&&this.state.middlenameState !== ""&&this.state.passwordState !== ""&&this.state.phoneState !== ""&& !isEmpty(this.state.gender) && this.state.confirm_passwordState !== ""&&this.state.emailState !== ""){
        this.setState({
          isloading: true
        })
        this.props.registerUser(data, this.props.history)
      }
      else {
        this.setState({
          isloading: false
        })
      }
    }
  }

  render() {
    // console.log(this.props.register)
    const { classes } = this.props;
    const display = this.props.register.isSuccess 
    ?
    (
      <div>
          <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form>
              <Card login className={classes[this.state.cardAnimaton]}>
                <CardBody>
                <Button color="success" simple size="lg" block disabled>
                      SUCCESSFULLY REGISTERED!
                    </Button>
                </CardBody>
                <CardFooter className={classes.justifyContentCenter}>
                  {
                    <Button color="success" simple size="lg" block onClick={this.continue}>
                      continue
                    </Button>
                  }
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    ) 
    :
    (
      <div>
      <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
          <Snackbar
            place="tc"
            open={!isEmpty(this.state.error)}
            color="danger"
            message={isEmpty(this.state.error)?"":this.state.errorMessage}
            closeNotification={() => this.setState({
               error: {} 
              })}
            close
          />
            <form>
              <Card login className={classes[this.state.cardAnimaton]}>
                <div className={"center-style"}>
                <a href="/">
                  <img
                    className={classes.cardImgTop}
                    data-src="holder.js/100px180/"
                    alt="100%x180"
                    style={{ height: "180px", width: "180px", position:"center center", marginTop:"10px" }}
                    src={logoo}
                    data-holder-rendered="true"
                  />
                  <h4 className={classes.cardTitle}>Sign Up</h4>
                </a>
                </div>
                <CardBody>
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
                  success={this.state.middlenameState === "success"}
                  error={this.state.middlenameState === "error"}
                  labelText="Middle Name"
                  id="middlename"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type:"text",
                    name: "middlename",
                    onChange: (e) => this.onChange(e, "middlename", "minValue"),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Face className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    )
                  }}
                />
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
                  success={this.state.emailState === "success"}
                  error={this.state.emailState === "error"}
                  labelText="Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "email",
                    name: "email",
                    value:this.state.email,
                    onChange: e => this.onChange(e, "email", "email"),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    )
                  }}
                />
                 <GridContainer justify="center">
                      {"  "}
                      <GridItem xs={12} sm={6} md={5} lg={12}>
                        <FormControl
                          fullWidth
                          className={classes.selectFormControl}
                        >
                          <InputLabel
                            htmlFor="multiple-select"
                            className={classes.selectLabel}
                          >
                            Gender
                          </InputLabel>
                          <Select
                            error={this.state.genderState === "error" ? true: false}
                            MenuProps={{ className: classes.selectMenu }}
                            classes={{ select: 
                              classes.select+ " " + classes.labelError}}

                            value={this.state.gender}
                            onChange={e => this.onChange(e,"gender","gender")}
                            inputProps={{
                              name: "gender",
                              id: "gender"
                            }}
                          >
                            <MenuItem
                              disabled
                              classes={{
                                root: classes.selectMenuItem
                              }}
                            >
                              Choose gender
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelectedMultiple
                              }}
                              value="male"
                            >
                              Male
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelectedMultiple
                              }}
                              value="female"
                            >
                              Female
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </GridItem>

                    </GridContainer>
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
                    value:this.state.phone,
                    onChange: (e)=> this.onChange(e, "phone", "number" ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Phone/>
                      </InputAdornment>
                    )
                  }}
                  // helpText="Phone Number cannot be changed after registration"
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
                      type:"password",
                      name: "password",
                      value:this.state.password,
                      onChange: e => this.onChange(e, "password", "password"),
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputAdornmentIcon}>
                            lock_outline
                          </Icon>
                        </InputAdornment>
                      )
                    }}
                    helpText="password must be minimum of 8 characters"

                  />
                  <CustomInput
                    success={this.state.confirm_passwordState === "success"}
                    error={this.state.confirm_passwordState === "error"}
                    labelText="Confirm Password"
                    id="password1"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type:"password",
                      name: "confirm_password",
                      value:this.state.confirm_password,
                      onChange: e => this.onChange(e, "confirm_password", "confirm_password", "password"),
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
                    <Button color="warning" simple size="lg" block disabled>
                     loading...
                    </Button>
                    : 
                    <Button color="success" simple size="lg" block onClick={this.submit}>
                      Sign Up
                    </Button>
                  }
                </CardFooter>
                <br/>
                  <p style={{textAlign:"center", paddingBottom: "5px"}}>have an account already? <a href="/login">Log in</a></p>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
        </div>
    )

    return (
      <div className={classes.container}>
      <div style={{height:"80px" }}></div>
        {display}
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    register: state.auth
  }
}

export default connect(mapStateToProps, {registerUser})(withRouter(withStyles(loginPageStyle)(LoginPage)));
