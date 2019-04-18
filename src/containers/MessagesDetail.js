import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import MailOutline from "@material-ui/icons/MailOutline";
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
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import { connect } from "react-redux"
import isEmpty from "../utils/isEmpty"

class MessagesDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedValue: "a",
      selectedEnabled: "b",
      lga: "",
      profile: "",
      education: "",
      disableA: false,
      disableB: false,
      disableC: false
    };
  }

  handleChange = (event) => {
    this.setState({ selectedValue: event.target.value });
  }

  handleChangeEnabled = (event) => {
    this.setState({ selectedEnabled: event.target.value });
  }

  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    const { classes } = this.props;
    console.log("INSIDE MESSAGE DETAILS", this.props)
    return (
      <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="success" icon>
              <CardIcon color="success">
                <MailOutline />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Send Messages</h4>
            </CardHeader>
            <CardBody>
              <form>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <FormLabel className={classes.labelHorizontal}>
                     Message Title
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={9}>
                    <CustomInput
                      id="email_adress2"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <FormLabel className={classes.labelHorizontal}>
                     Message Body
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={9}>
                    <CustomInput
                      id="password2"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer justify="flex-end">
                </GridContainer>
                <GridContainer justify="flex-end">
                  <GridItem xs={12} sm={12} md={9}>
                    <Button 
                      color="success"
                      
                    >
                      Send
                    </Button>
                  </GridItem>
                </GridContainer>
              </form>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
  
        {/* <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="success" icon>
                <div
                      className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                      }
                    >
                      <FormControlLabel
                        control={
                          <Radio
                            checked={this.state.selectedValue === "a"}
                            onChange={this.handleChange}
                            value="a"
                            name="radio button demo"
                            aria-label="A"
                            icon={
                              <FiberManualRecord
                                className={classes.radioUnchecked}
                              />
                            }
                            checkedIcon={
                              <FiberManualRecord
                                className={classes.radioChecked}
                              />
                            }
                            classes={{
                              checked: classes.radio,
                              root: classes.radioRoot
                            }}
                          />
                        }
                        classes={{
                          label: classes.label
                        }}
                        label="Filter By Profile"
                      />
                    </div>
              </CardHeader>
              <CardBody>
              <FormControl
                    disabled={this.state.disableA}
                    fullWidth
                    className={classes.selectFormControl}
                  >
                    <Select
                      MenuProps={{
                        className: classes.selectMenu
                      }}
                      classes={{
                        select: classes.select
                      }}
                      value={this.state.profile}
                      onChange={this.handleSimple}
                      inputProps={{
                        name: "profile",
                        id: "simple-select"
                      }}
                    >
          
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="2"
                      >
                        married
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="3"
                      >
                        singles
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="4"
                      >
                        divorced
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="5"
                      >
                        widowed
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="6"
                      >
                        females
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="7"
                      >
                        males
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="8"
                      >
                        disabled
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="9"
                      >
                        not-disabled
                      </MenuItem>
                    </Select>
                  </FormControl>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="success" icon>
                <div
                      className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                      }
                    >
                      <FormControlLabel
                        control={
                          <Radio
                            checked={this.state.selectedValue === "b"}
                            onChange={this.handleChange}
                            value="b"
                            name="radio button demo"
                            aria-label="B"
                            icon={
                              <FiberManualRecord
                                className={classes.radioUnchecked}
                              />
                            }
                            checkedIcon={
                              <FiberManualRecord
                                className={classes.radioChecked}
                              />
                            }
                            classes={{
                              checked: classes.radio,
                              root: classes.radioRoot
                            }}
                          />
                        }
                        classes={{
                          label: classes.label
                        }}
                        label="Filter By Local Government Area"
                      />
                    </div>
              </CardHeader>
              <CardBody>
              <FormControl
                    disabled={this.state.enableB}
                    fullWidth
                    className={classes.selectFormControl}
                  >
                    <Select
                      MenuProps={{
                        className: classes.selectMenu
                      }}
                      classes={{
                        select: classes.select
                      }}
                      value={this.state.lga}
                      onChange={this.handleSimple}
                      inputProps={{
                        name: "lga",
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
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="success" icon>
                <div
                      className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                      }
                    >
                      <FormControlLabel
                        control={
                          <Radio
                            checked={this.state.selectedValue === "c"}
                            onChange={this.handleChange}
                            value="c"
                            name="radio button demo"
                            aria-label="C"
                            icon={
                              <FiberManualRecord
                                className={classes.radioUnchecked}
                              />
                            }
                            checkedIcon={
                              <FiberManualRecord
                                className={classes.radioChecked}
                              />
                            }
                            classes={{
                              checked: classes.radio,
                              root: classes.radioRoot
                            }}
                          />
                        }
                        classes={{
                          label: classes.label
                        }}
                        label="Filter By Educational Qualification"
                      />
                    </div>
              </CardHeader>
              <CardBody>
              <FormControl
                    disabled={this.state.disableC}
                    fullWidth
                    className={classes.selectFormControl}
                  >
                    <Select
                      MenuProps={{
                        className: classes.selectMenu
                      }}
                      classes={{
                        select: classes.select
                      }}
                      value={this.state.education}
                      onChange={this.handleSimple}
                      inputProps={{
                        name: "education",
                        id: "simple-select"
                      }}
                    >
                      <MenuItem
                        disabled
                        classes={{
                          root: classes.selectMenuItem
                        }}
                      >
                          select
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="2"
                      >
                        BSc
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="3"
                      >
                        BEng
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="4"
                      >
                        HND
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="5"
                      >
                        ND
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="6"
                      >
                        NCE
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="7"
                      >
                        MSC
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="8"
                      >
                        PHD
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="9"
                      >
                        Olevel
                      </MenuItem>
                    </Select>
                  </FormControl>
               </CardBody>
            </Card>
          </GridItem>
        </GridContainer> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, {})(withStyles(regularFormsStyle)(MessagesDetail));
