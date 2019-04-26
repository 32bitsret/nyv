import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import Check from "@material-ui/icons/Check";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Icon from "@material-ui/core/Icon";
import Phone from "@material-ui/icons/Phone";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";
import {connect} from "react-redux"
import logoo from '../../assets/img/logo.jpg'
import {
  createUserByAdmin,
  updateBasicInfo,
  fetchUser
} from "../../redux/actions/createActions"
import {
  verifyEmail, 
  verifyLength, 
  verifyNumber, 
  compare
}from "../../utils/validation"
import { withRouter } from "react-router-dom"

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedValue: null,
      selectedEnabled: "b",
    
      firstname:"",
      middlename:"",
      lastname:"",
      email:"",
      phone:"",
      password: "",
      confirm_password:"",
      lga:"",
      gender:"",
      role:"user",

      firstnameState:"",
      middlenameState:"",
      lastnameState:"",
      emailState:"",
      phoneState:"",
      passwordState:"",
      confirm_passwordState:"",
      genderState:"",
      lgaState:"",

      simpleSelect:"",
      searchValue:"",
      searchValueState:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  
  handleToggle = () => {
    if(this.state.role === "user"){
      this.setState({
        role: "admin"
      });
    }
    else {
      this.setState({
        role: "user"
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
        if(verifyLength(e.target.value, 1)){
          this.setState({[stateName+"State"]: "success"})
        }
    }
  }

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
    // if(this.state.emailState === ""){
    //   this.setState({emailState:"error"})
    // }
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
          // lga: this.state.lga,
          role:this.state.role
        }
      if(this.state.firstnameState !== "" &&this.state.lastnameState !== ""&&this.state.middlenameState !== ""&&this.state.passwordState !== ""&&this.state.phoneState !== ""&&this.state.genderState !== ""&&this.state.confirm_passwordState !== ""){
        console.log("REGISTRATION::::::",data)
        this.props.createUserByAdmin(data)
      }
    }
  }

  editExistingUser = (e) => {
    e.preventDefault();
    let newNumber = Number(this.state.searchValue.slice(1))
    this.props.fetchUser(newNumber)
  }

  render() {
    const { classes } = this.props;
   
    const display = 
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12} lg={8}>
            <Card>
              <div className={"center-style"}>
              {/* <a href="/"> */}
                <img
                  className={classes.cardImgTop}
                  data-src="holder.js/100px180/"
                  alt="100%x180"
                  style={{ height: "180px", width: "180px", position:"center center" }}
                  src={logoo}
                  data-holder-rendered="true"
                />
              {/* </a> */}
              </div>
              <CardBody>
                <form>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={8}>
                      <CustomInput
                        success={this.state.firstnameState === "success"}
                        error={this.state.firstnameState === "error"}
                        labelText="First Name"
                        id="firstname"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          name:"firstname",
                          value:this.state.firstname,
                          onChange: e => this.onChange(e,"firstname","minValue"),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Face className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          )
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <br/>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={8}>
                      <CustomInput
                        success={this.state.middlenameState === "success"}
                        error={this.state.middlenameState === "error"}
                        labelText="Middle Name"
                        id="middlename"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          name:"middlename",
                          value:this.state.middlename,
                          onChange: (e) => this.onChange(e, "middlename", "minValue"),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Face className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          )
                        }}
                       />
                    </GridItem>
                  </GridContainer>
                  <br/>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={8}>
                      <CustomInput
                        success={this.state.lastnameState === "success"}
                        error={this.state.lastnameState === "error"}
                        labelText="Last Name"
                        id="lastname"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          name:"lastname",
                          value:this.state.lastname,
                          onChange: (e) => this.onChange(e, "lastname", "minValue"),  
                          endAdornment: (
                            <InputAdornment position="end">
                              <Face className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          )
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <br/>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={8}>
                      <CustomInput
                        success={this.state.emailState === "success"}
                        error={this.state.emailState === "error"}
                        labelText="Email"
                        id="email-1"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          name:"email",
                          value:this.state.email,
                          onChange:e => this.onChange(e, "email", "email"),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          )
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <br/>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={8}>
                      <CustomInput
                        success={this.state.phoneState === "success"}
                        error={this.state.phoneState === "error"}
                        labelText="Phone"
                        id="phone-1"
                        disable
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "number",
                          name:"phone",
                          value:this.state.phone,
                          onChange: (e)=> this.onChange(e, "phone", "number" ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Phone/>
                            </InputAdornment>
                          )
                        }}
                        helpText="Phone Number cannot be changed after registration"
                      />
                    </GridItem>
                    </GridContainer>
                    <br/>
                    <GridContainer justify="center">
                      {/* <GridItem xs={12} sm={6} md={5} lg={4}>
                        <FormControl
                          fullWidth
                          className={classes.selectFormControl}
                        >
                          <InputLabel
                            htmlFor="simple-select"
                            className={classes.selectLabel}
                          >
                            LGA
                          </InputLabel>
                          <Select
                            error={this.state.lgaState === "error" ? true: false}
                            MenuProps={{
                              className: classes.selectMenu
                            }}
                            classes={{
                              select: classes.select
                            }}
                            value={this.state.lga}
                            onChange={e => this.onChange(e, "lga", "lga")}
                            inputProps={{
                              name: "lga",
                              id: "lga"
                            }}
                          >
                            <MenuItem
                              disabled
                              classes={{
                                root: classes.selectMenuItem
                              }}
                            >
                              Choose 
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Barkin Ladi"
                            >
                              Barkin Ladi
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Bassa"
                            >
                              Bassa
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Bokkos"
                            >
                              Bokkos
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Jos East"
                            >
                              Jos East
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Jos North"
                            >
                              Jos North
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Jos South"
                            >
                              Jos South
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Kanam"
                            >
                              Kanam
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Kanam"
                            >
                              Kanam
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Langtang North"
                            >
                              Langtang North
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Langtang South"
                            >
                              Langtang South
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value=" Mangu"
                            >
                              Mangu
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value=" Mikang"
                            >
                              Mikang
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Pankshin"
                            >
                              Pankshin
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Qua'an Pan"
                            >
                              Qua'an Pan
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Riyom"
                            >
                              Riyom
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Shendam"
                            >
                              Shendam
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Wase"
                            >
                              Wase
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </GridItem> */}
                              {"  "}
                      <GridItem xs={12} sm={6} md={5} lg={8}>
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
                            value={this.state.gender}
                            onChange={e => this.onChange(e,"gender","gender")}
                            MenuProps={{ className: classes.selectMenu }}
                            classes={{ select: classes.select }}
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
                  <br/>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={8}>
                      <CustomInput
                        success={this.state.passwordState === "success"}
                        error={this.state.passwordState === "error"}
                        id="password-1"
                        labelText="Password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          name: "password",
                          value: this.state.password,
                          onChange: e => this.onChange(e, "password", "password"),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputAdornmentIcon}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <br/>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={8}>
                      <CustomInput
                        success={this.state.confirm_passwordState === "success"}
                        error={this.state.confirm_passwordState === "error"}
                        id="password-2"
                        labelText="Confirm Password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          name:"confirm_password",
                          value: this.state.confirm_password,
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
                    </GridItem>
                  </GridContainer>
  
                  <br/>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={6} lg={4}>
                      <div
                        className={
                          classes.checkboxAndRadio +
                          " " +
                          classes.checkboxAndRadioHorizontal
                        }
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              tabIndex={-1}
                              onClick={() => this.handleToggle()}
                              checkedIcon={
                                <Check className={classes.checkedIcon} />
                              }
                              icon={<Check className={classes.uncheckedIcon} />}
                              classes={{
                                checked: classes.checked,
                                root: classes.checkRoot
                              }}
                            />
                          }
                          classes={{
                            label: classes.label
                          }}
                          label="Create as Admin"
                        />
                      </div>
                    </GridItem>
                    <GridItem xs={12} sm={6} lg={4}>
                      <div className={classes.inlineChecks}>
                        <Button
                          color="success"
                          onClick={this.submit}
                        >
                          Create Profile
                        </Button>
                      </div>
                    </GridItem>
                  </GridContainer>
                </form>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      

    return (
      <div>
        {display}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    createUser: state.createUser
  }
}
export default connect(mapStateToProps, {
  createUserByAdmin,
  fetchUser,
  updateBasicInfo
})(withRouter(withStyles(regularFormsStyle)(Step1)));
