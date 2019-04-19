import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import MailOutline from "@material-ui/icons/MailOutline";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import Icon from "@material-ui/core/Icon";
import Contacts from "@material-ui/icons/Contacts";
import Phone from "@material-ui/icons/Phone";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardText from "components/Card/CardText.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";
import {connect} from "react-redux"
import {createUserByAdmin} from "../../redux/actions/createActions"

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedValue: null,
      selectedEnabled: "b",
      firstName:"",
      middleName:"",
      lastName:"",
      email:"",
      phone:"",
      password: "",
      confirmPassword:"",
      role:"user"
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
  handleToggle() {
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

  submit = (e) => {
    e.preventDefault()

    const data = {
      email: this.state.email,
      password:this.state.password,
      firstname:this.state.firstName+" "+this.state.middleName,
      lastname:this.state.lastName,
      phone: Number(this.state.phone),
      role:this.state.role
    }

    this.props.createUserByAdmin(data)
    console.log("SUBMISSION", data)
  }
  render() {
    const { classes } = this.props;
    // console.log("NAME", this.state)
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <form>
                <GridContainer>
                  <GridItem xs={12} sm={3}>
                    <FormLabel className={classes.labelHorizontal}>
                      First Name
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={8}>
                    <CustomInput
                      id="help-text"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        name:"firstName",
                        value:this.state.firstName,
                        onChange:this.handleChange,
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
                <GridContainer>
                  <GridItem xs={12} sm={3}>
                    <FormLabel className={classes.labelHorizontal}>
                      Middle Name
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={8}>
                    <CustomInput
                      id="help-text"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        name:"middleName",
                        value:this.state.middleName,
                        onChange:this.handleChange,
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
                <GridContainer>
                  <GridItem xs={12} sm={3}>
                    <FormLabel className={classes.labelHorizontal}>
                      Last Name
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={8}>
                    <CustomInput
                      id="help-text"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        name:"lastName",
                        value:this.state.lastName,
                        onChange:this.handleChange,
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
                <GridContainer>
                  <GridItem xs={12} sm={3}>
                    <FormLabel className={classes.labelHorizontal}>
                      Email
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={8}>
                    <CustomInput
                      // success={true}
                      // error={true}
                      id="email-1"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        name:"email",
                        value:this.state.email,
                        onChange:this.handleChange,
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
                <GridContainer>
                  <GridItem xs={12} sm={3}>
                    <FormLabel className={classes.labelHorizontal}>
                      Phone Number
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={8}>
                    <CustomInput
                      id="phone-1"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "number",
                        name:"phone",
                        value:this.state.phone,
                        onChange: this.handleChange,
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
                <GridContainer>
                  <GridItem xs={12} sm={3}>
                    <FormLabel className={classes.labelHorizontal}>
                      Password
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={8}>
                    <CustomInput
                      id="password-1"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        name: "password",
                        value: this.state.password,
                        onChange: this.handleChange,
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
                <GridContainer>
                  <GridItem xs={12} sm={3}>
                    <FormLabel className={classes.labelHorizontal}>
                      Confirm Password
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={8}>
                    <CustomInput
                      id="password-2"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        name:"confirmPassword",
                        value: this.state.confirmPassword,
                        onChange:this.handleChange,
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
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}
export default connect(mapStateToProps, {createUserByAdmin})(withStyles(regularFormsStyle)(Step1));
