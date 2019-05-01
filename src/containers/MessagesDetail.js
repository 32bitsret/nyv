import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";
import MailOutline from "@material-ui/icons/MailOutline";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Check from "@material-ui/icons/Check";
import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux"
import Heading from "components/Heading/Heading.jsx";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {
  maritalstatusFilter,
  profileFilter,
  genderFilter,
  lgaFilter,
  educationFilter
} from "../utils/filters/Filters"
import isEmpty from "../utils/isEmpty"
import { getAllProfile } from "../redux/actions/dashboardAction"
import {sendMessage} from "../redux/actions/messageActions"


class MessagesDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedValue: "a",
      selectedEnabled: "b",
      lga: [],
      disability: [],
      educational_qualification: [],
      marital_status:[],
      gender:[],
      disableA: false,
      disableB: false,
      disableC: false,
      allMembers: [],
      lgaMembers: [],
      title: "",
      message:"",
      expo_tokens:["ExponentPushToken[vAY3fcKfR3Qbcg3zCEmYIL]","ExponentPushToken[Rrg5q-KOa7Ax2smXaO1kHn]"],
      query:{
        lga:[],
        gender:[],
        disability:[],
        marital_status:[],
        educational_qualification:[]
      }
    };
  }

  componentDidMount(){
   this.props.getAllProfile()
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      allMembers:nextProps.members.allMembers
    })
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

  onchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSend = e => {
    let query = {
      lga:this.state.lga,//.join(),
      gender:this.state.gender,//.join(),
      disability:this.state.disability,//.join(),
      marital_status:this.state.marital_status,//.join(),
      educational_qualification:this.state.educational_qualification,//.join()
    }
    const data = {
      message: this.state.message,
      title: this.state.title,
      expo_tokens:this.state.expo_tokens,
      query: query
    }
    console.log("ARRAY OF SELECTION", data)
    this.props.sendMessage(data)
  }

  render() {
    let genderFiltered= []
    let maritalstatusFiltererd = []
    let lgaFiltered = []
    let profileFiltered = []

    const { classes } = this.props;
    const data = this.props.members.allMembers
    console.log("ALL USERS", this.props.members.allMembers)
    
    // { 
    genderFiltered = genderFilter(this.state.gender, data)
    maritalstatusFiltererd = maritalstatusFilter(this.state.marital_status, data)
    lgaFiltered = lgaFilter(this.state.lga, data)
    profileFiltered = profileFilter(this.state.profile, data)
  // }
    
    console.log("FILTERED GENDER KAWAI",genderFiltered)
    console.log("FILTERED MARITAL STATUS KAWAI",maritalstatusFiltererd)
    console.log("FILTERED LGA KAWAI",lgaFiltered)
    console.log("FILTERED disabilityKAWAI",profileFiltered)
    const display = this.props.members.isloading ? 
      (
      <GridContainer justify="center">
        <div>loading...</div>
      </GridContainer>
      ) 
      : 
      (
        <div>
        <Heading
          title="SEND MESSAGES"
          textAlign="center"
        />
        <GridContainer>
        <GridItem xs={12} sm={12} md={4} lg={3}>
            <Card>
              <CardHeader color="success" icon>
                <div
                      className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                      }
                    >
                    <h4 className={classes.cardIconTitle}>Filter By Gender</h4>
                    </div>
                <div className={classes.checkboxAndRadio}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        tabIndex={-1}
                        // onClick={() => this.handleToggle(2)}
                        checkedIcon={<Check className={classes.checkedIcon} />}
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
                    label="Select All"
                  />
                </div>
              </CardHeader>
              <CardBody>
              <FormControl
                    fullWidth
                    className={classes.selectFormControl}
                  >
                    <Select
                      multiple
                      // disabled
                      MenuProps={{
                        className: classes.selectMenu
                      }}
                      classes={{
                        select: classes.select
                      }}
                      value={this.state.gender}
                      onChange={this.handleSimple}
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
                          select
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="female"
                      >
                        females
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="male"
                      >
                        males
                      </MenuItem>
                    </Select>
                  </FormControl>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} lg={3}>
            <Card>
              <CardHeader color="success" icon>
                <div
                      className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                      }
                    >
                    <h4 className={classes.cardIconTitle}>Filter By Profile</h4>
                </div>
                <div className={classes.checkboxAndRadio}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        tabIndex={-1}
                        // onClick={() => this.handleToggle(2)}
                        checkedIcon={<Check className={classes.checkedIcon} />}
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
                    label="Select All"
                  />
                </div>
              </CardHeader>
              <CardBody>
              <FormControl
                    fullWidth
                    className={classes.selectFormControl}
                  >
                    <Select
                      multiple
                      MenuProps={{
                        className: classes.selectMenu
                      }}
                      classes={{
                        select: classes.select
                      }}
                      value={this.state.disability}
                      onChange={this.handleSimple}
                      inputProps={{
                        name: "disability",
                        id: "disability"
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
                        value="Disabled"
                      >
                        disabled
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Not Disabled"
                      >
                        not-disabled
                      </MenuItem>
                    </Select>
                  </FormControl>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} lg={3}>
            <Card>
              <CardHeader color="success" icon>
                <div
                      className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                      }
                    >
                      <h4 className={classes.cardIconTitle}>Filter By Marital Status</h4>
                    </div>
                <div className={classes.checkboxAndRadio}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        tabIndex={-1}
                        // onClick={() => this.handleToggle(2)}
                        checkedIcon={<Check className={classes.checkedIcon} />}
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
                    label="Select All"
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
                      multiple
                      MenuProps={{
                        className: classes.selectMenu
                      }}
                      classes={{
                        select: classes.select
                      }}
                      value={this.state.marital_status}
                      onChange={this.handleSimple}
                      inputProps={{
                        name: "marital_status",
                        id: "marital_status"
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
                        value="Married"
                      >
                        Married
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Single"
                      >
                        Singles
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Divorced"
                      >
                        Divorced
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Widowed"
                      >
                        Widowed
                      </MenuItem>
                    </Select>
                  </FormControl>
               </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} lg={3}>
            <Card>
              <CardHeader color="success" icon>
                <div
                      className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                      }
                    >
                      <h4 className={classes.cardIconTitle}>Filter By LGA</h4>
                    </div>
                    <div className={classes.checkboxAndRadio}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        tabIndex={-1}
                        // onClick={() => this.handleToggle(2)}
                        checkedIcon={<Check className={classes.checkedIcon} />}
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
                    label="Select All"
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
                      multiple
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
                        id: "lga"
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
                        value="barkin ladi"
                      >
                          barkin ladi
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="bassa"
                      >
                        bassa
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="bokkos"
                      >
                        bokkos
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="jos east"
                      >
                        jos-east
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="jos north"
                      >
                        jos-north
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="jos south"
                      >
                        jos-south
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="kanam"
                      >
                        kanam
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="kanke"
                      >
                        kanke
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="langtang north"
                      >
                        langtang-north
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="langtang south"
                      >
                        langtang-south
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="mangu"
                      >
                        mangu
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="mikang"
                      >
                        mikang
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="pankshin"
                      >
                        pankshin
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="qua'an pan"
                      >
                        qua'an pan
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="riyom"
                      >
                        riyom
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="shendam"
                      >
                        shendam
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="wase"
                      >
                        wase
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="others"
                      >
                        others
                      </MenuItem>
                    </Select>
                  </FormControl>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} lg={3}>
            <Card>
              <CardHeader color="success" icon>
                <div
                      className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                      }
                    >
                      <h4 className={classes.cardIconTitle}>Filter By Qualification</h4>
                </div>
                <div className={classes.checkboxAndRadio}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        tabIndex={-1}
                        // onClick={() => this.handleToggle(2)}
                        checkedIcon={<Check className={classes.checkedIcon} />}
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
                    label="Select All"
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
                      multiple
                      MenuProps={{
                        className: classes.selectMenu
                      }}
                      classes={{
                        select: classes.select
                      }}
                      value={this.state.educational_qualification}
                      onChange={this.handleSimple}
                      inputProps={{
                        name: "educational_qualification",
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
                        value="School Cert"
                      >
                      School Cert
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Degree"
                      >
                        Degree
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="HND"
                      >
                        HND
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="ND"
                      >
                        ND
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="NCE"
                      >
                        NCE
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="MSC"
                      >
                        MSC
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="PHD"
                      >
                        PHD
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Olevel"
                      >
                        Olevel
                      </MenuItem>
                    </Select>
                  </FormControl>
               </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} lg={3}>
            <Card>
              <CardHeader color="success" icon>
                <div
                      className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                      }
                    >
                      <h4 className={classes.cardIconTitle}>Total Recipients</h4>
                    </div>
              </CardHeader>
              <CardBody>
                <p>
                  RECIPIENTS: {}
                </p>
               </CardBody>
            </Card>
          </GridItem>
        </GridContainer>

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
                    error={true}
                      id="title"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        name:"title",
                        onChange: (e) => {this.onchange(e)}
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3} lg={3}>
                    <FormLabel className={classes.labelHorizontal}>
                     Message Body
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={9}>
                    <CustomInput
                      id="message"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: this.state.message,
                        type: "text",
                        name: "message",
                        onChange: (e) => this.onchange(e)
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
                      onClick={this.onSend}
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

        </div>
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
    members: state.dashboard
  }
}

export default connect(mapStateToProps, {sendMessage, getAllProfile})(withStyles(regularFormsStyle)(MessagesDetail));
