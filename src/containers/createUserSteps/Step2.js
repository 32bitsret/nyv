import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";

import Face from "@material-ui/icons/Face";
// @material-ui/icons
import MailOutline from "@material-ui/icons/MailOutline";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import Contacts from "@material-ui/icons/Contacts";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import {connect} from "react-redux"
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardText from "components/Card/CardText.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";
import {fetchUser} from "../../redux/actions/createActions"

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedValue: null,
      selectedEnabled: "b",
      simpleSelect:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }

  componentDidMount(){
    // this.props.fetchUser(9099474330)
  }

  handleChange(event) {
    this.setState({ selectedValue: event.target.value });
  }
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  
  render() {
    const { classes } = this.props ;
    console.log("STEP TWO REDUX", this.props.createUser)

    const display = !this.props.createUser.userExist 
    ? 
    (<GridContainer>
      <GridItem xs={12} sm={3} lg={6}>
        <FormLabel className={classes.labelHorizontal}>
          No Account Created 
        </FormLabel>
      </GridItem>
    </GridContainer>)
     : 
    (
      <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={3}>
                  <FormLabel className={classes.labelHorizontal}>
                    Home Address
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
                    Gender
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={8}>
                    <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                      >
                         <InputLabel
                          htmlFor="simple-select"
                          className={classes.selectLabel}
                        >
                        </InputLabel>
                        <Select
                          MenuProps={{
                            className: classes.selectMenu
                          }}
                          classes={{
                            select: classes.select
                          }}
                          value={this.state.simpleSelect}
                          onChange={this.handleSimple}
                          inputProps={{
                            name: "simpleSelect",
                            id: "simple-select"
                          }}
                        >
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="6"
                          >
                            Male
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="7"
                          >
                            Female
                          </MenuItem>
                        </Select>
                    </FormControl>
                </GridItem>
              </GridContainer>
              <br/>
              <GridContainer>
                <GridItem xs={12} sm={3}>
                  <FormLabel className={classes.labelHorizontal}>
                    Marital Status
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={8}>
                <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                      >
                         <InputLabel
                          htmlFor="simple-select"
                          className={classes.selectLabel}
                        >
                        </InputLabel>
                        <Select
                          MenuProps={{
                            className: classes.selectMenu
                          }}
                          classes={{
                            select: classes.select
                          }}
                          value={this.state.simpleSelect}
                          onChange={this.handleSimple}
                          inputProps={{
                            name: "simpleSelect",
                            id: "simple-select"
                          }}
                        >
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="6"
                          >
                            Single
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="7"
                          >
                            Married
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="7"
                          >
                            Divorced
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="7"
                          >
                            Widowed
                          </MenuItem>
                        </Select>
                    </FormControl>
                </GridItem>
              </GridContainer>
              <br/>
              <GridContainer>
                <GridItem xs={12} sm={3}>
                  <FormLabel className={classes.labelHorizontal}>
                    LGA
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={8}>
                <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                      >
                         <InputLabel
                          htmlFor="simple-select"
                          className={classes.selectLabel}
                        >
                        </InputLabel>
                        <Select
                          MenuProps={{
                            className: classes.selectMenu
                          }}
                          classes={{
                            select: classes.select
                          }}
                          value={this.state.simpleSelect}
                          onChange={this.handleSimple}
                          inputProps={{
                            name: "simpleSelect",
                            id: "simple-select"
                          }}
                        >
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="1"
                          >
                            barkin ladi
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="2"
                          >
                            bassa
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="3"
                          >
                            bokkos
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="4"
                          >
                            jos-east
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="5"
                          >
                            jos-north
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="6"
                          >
                            jos-south
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="7"
                          >
                            kanam
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="8"
                          >
                            kanke
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="9"
                          >
                           langtang-north
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="10"
                          >
                            langtang-south
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="11"
                          >
                            mangu
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="12"
                          >
                            mikang
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="13"
                          >
                            pankshin
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="14"
                          >
                            qua'an pan
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="15"
                          >
                            riyom
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="16"
                          >
                            shendam
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="17"
                          >
                            wase
                          </MenuItem>
                        </Select>
                    </FormControl>
                </GridItem>
              </GridContainer>
               <br/>
            </form>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={3}>
                  <FormLabel className={classes.labelHorizontal}>
                    Home Address
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
                      type: "text"
                    }}
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
                    id="pass"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "password"
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={3}>
                  <FormLabel className={classes.labelHorizontal}>
                    Disabled
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={8}>
                  <CustomInput
                    id="disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "Disabled",
                      disabled: true
                    }}
                  />
                </GridItem>
              </GridContainer>
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
    )
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
export default connect(mapStateToProps, {fetchUser})(withStyles(regularFormsStyle)(Step2));
