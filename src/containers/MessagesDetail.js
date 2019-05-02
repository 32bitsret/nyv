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
  educationFilter,
  filter
} from "../utils/filters/Filters"
import isEmpty from "../utils/isEmpty"
import { getAllProfile } from "../redux/actions/dashboardAction"
import {sendMessage} from "../redux/actions/messageActions"


let togg = false
let value
class MessagesDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMaritalStatus:false,
      allProfile:false,
      allGender:false,
      allLGA:false,
      allQualification:false,

      checked: [24, 22],
      selectedValue: "a",
      selectedEnabled: "b",

      lga: [],
      disability: [],
      qualification: [],
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
        qualification:[]
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

  handleToggleProfile = () => {
    if(this.state.allProfile === false){
      this.setState({
        allProfile: true,
        disability:["Disabled", "Not Disabled"]
      })
    }
    else {
      this.setState({
        allProfile: false,
        disability: []
      })
    }
  }
  handleToggleGender = () => {
    if(this.state.allGender === false){
      this.setState({
        allGender:true,
        gender: ["female", "male"]
      })
    }
    else{
      this.setState({
        allGender: false,
        gender: []
      })
    }
  }

  handleToggleLGA = () => {
    if(this.state.allLGA === false){
      this.setState({
        allLGA:true,
        lga:["Barkin Ladi", "Bassa", "Bokkos", "Jos East", "Jos North", "jos south", "Kanam", "Kanke", "Langtang North", "Langtang South", "Mangu", "Mikang", "Qua'an Pan", "Pankshin", "Riyom", "Shendam", "Wase", "Others"]
      })
    }
    else {
      this.setState({
        allLGA:false,
        lga:[]
      })
    }
  }

  handleToggleQualification = () => {
    if(this.state.allQualification === false){
      this.setState({
        allQualification: true,
        qualification:["CERT", "OLEVEL", "DEGREE", "HND", "ND", "NCE", "MSC", "PHD"]
      })
    }
    else {
      this.setState({
        allQualification: false,
        qualification: []
      })
    }
  }

  handleToggleMaritalStatus = () => {
    if(this.state.allMaritalStatus === false){
      this.setState({
        allMaritalStatus: true,
        marital_status: ["Married", "Single", "Divorced", "Widowed"]
      })
    }
    else {
      this.setState({
        allMaritalStatus: false,
        marital_status: []
      })
    }
  }

  filter = (test, arr) => {
    if(!isEmpty(arr)){
      value = (test === "male" || test === "female")  ? true: false
    }
  }

  extractExpoToken = (totalArr) => {
    let result = []
    let obj = {
      gender: this.state.gender,
      lga: this.state.lga,
      marital_status: this.state.marital_status,
      qualification: this.state.qualification,
      disability: this.state.disability
    }
    console.log("THE OBJECT CONTENT", obj)
    console.log("ALL MEMBERS FROM INSIDE EXTRACTION", totalArr)
    totalArr.map(o => {
      // if(!isEmpty(o.lga) && !isEmpty(obj.lga)){
        let val = this.filter(o.lga, obj.lga)
        //} 
        console.log("VAL", val)
    })
    console.log("SELECTION", result)
  }

  onSend = e => {
    let query = {
      lga:this.state.lga,
      gender:this.state.gender,
      disability:this.state.disability,
      marital_status:this.state.marital_status,
      qualification:this.state.qualification,
    }
    const data = {
      message: this.state.message,
      title: this.state.title,
      expo_tokens:this.state.expo_tokens,
      query: query
    }
    console.log(this.state.lga)
    console.log("LGA", query.lga)
    console.log("TOGGLE STATE", this.state.allLGA)
    console.log("ARRAY OF SELECTION", data)
    this.props.sendMessage(data)
  }

  render() {
    // let genderFiltered= []
    // let maritalstatusFiltererd = []
    // let lgaFiltered = []
    // let profileFiltered = []
    this.extractExpoToken(this.state.allMembers)
    const { classes } = this.props;
    const data = this.props.members.allMembers

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
                        onClick={() => this.handleToggleGender()}
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
                      disabled={this.state.allGender}
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
                        onClick={() => this.handleToggleProfile()}
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
                      disabled={this.state.allProfile}
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
                        onClick={() => this.handleToggleMaritalStatus()}
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
                    // disabled={this.state.disableC}
                    fullWidth
                    className={classes.selectFormControl}
                  >
                    <Select
                      disabled={this.state.allMaritalStatus} 
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
                        onClick={() => this.handleToggleLGA()}
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
                      disabled={this.state.allLGA}
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
                        value="Barkin Ladi"
                      >
                          barkin ladi
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Bassa"
                      >
                        bassa
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Bokkos"
                      >
                        bokkos
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Jos East"
                      >
                        jos-east
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Jos North"
                      >
                        jos-north
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Jos South"
                      >
                        jos-south
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Kanam"
                      >
                        kanam
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Kanke"
                      >
                        kanke
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Langtang North"
                      >
                        langtang-north
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Langtang South"
                      >
                        langtang-south
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Mangu"
                      >
                        mangu
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Mikang"
                      >
                        mikang
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Pankshin"
                      >
                        pankshin
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Qua'an Pan"
                      >
                        qua'an pan
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Riyom"
                      >
                        riyom
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Shendam"
                      >
                        shendam
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Wase"
                      >
                        wase
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="Others"
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
                        onClick={() => this.handleToggleQualification()}
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
                      disabled={this.state.allQualification}
                      multiple
                      MenuProps={{
                        className: classes.selectMenu
                      }}
                      classes={{
                        select: classes.select
                      }}
                      value={this.state.qualification}
                      onChange={this.handleSimple}
                      inputProps={{
                        name: "qualification",
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
                        value="CERT"
                      >
                      CERT
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="OLEVEL"
                      >
                        OLEVEL
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="DEGREE"
                      >
                        DEGREE
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
