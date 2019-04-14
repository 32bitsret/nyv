import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PermIdentity from "@material-ui/icons/PermIdentity";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";
import userProfileStyles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.jsx";
import { connect } from "react-redux"
import Datetime from "react-datetime";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import { CardContent } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";



class UserProfile extends Component {
  state = {
    first_name:"",
    other_name:"",
    avatar:"",
    emailAddress:"",
    dob:"",
    lga:"",
    gender:"",
    phone:"",
    education:"",
    maritalStatus:"",
    diasbility:"",
    homeAddress:"",
    course:"",
    institution:"",
    yearOfGrad:"",
    userRole:"",
    id:"",
    disable: true,
    editing: this.onButtonClick,
    isLoading:  false
  }

  
  componentDidMount(){
    //getUserData();
  }

  onchange = (e) => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }

  onButtonClick = (e) => {
    e.preventDefault()
    this.setState({
      editing: !this.state.editing,
      disable: this.state.editing
    })
  }
  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render(){
    const { classes } = this.props;
    console.log("INSIDE  PROFILE", this.props)
    console.log("INSIDE PROFILE", this.state.other_name)
    
    const lga = (
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
        id: "lga"
      }}
    >
      <MenuItem
      disabled
      classes={{
        root: classes.selectMenuItem
      }}
    >
      Choose lga
    </MenuItem>
    <MenuItem
      classes={{
        root: classes.selectMenuItem,
        selected: classes.selectMenuItemSelected
      }}
      value="2"
    >
      Barkin Ladi
    </MenuItem>
    <MenuItem
      classes={{
        root: classes.selectMenuItem,
        selected: classes.selectMenuItemSelected
      }}
      value="3"
    >
      Bassa
    </MenuItem>
    <MenuItem
      classes={{
        root: classes.selectMenuItem,
        selected: classes.selectMenuItemSelected
      }}
      value="4"
    >
      Bokkos
    </MenuItem>
    <MenuItem
      classes={{
        root: classes.selectMenuItem,
        selected: classes.selectMenuItemSelected
      }}
      value="5"
    >
      Jos-East
    </MenuItem>
    <MenuItem
      classes={{
        root: classes.selectMenuItem,
        selected: classes.selectMenuItemSelected
      }}
      value="6"
    >
      Jos-North
    </MenuItem>
    <MenuItem
      classes={{
        root: classes.selectMenuItem,
        selected: classes.selectMenuItemSelected
      }}
      value="7"
    >
      Jos-South
    </MenuItem>
    <MenuItem
      classes={{
        root: classes.selectMenuItem,
        selected: classes.selectMenuItemSelected
      }}
      value="8"
    >
      Kanam
    </MenuItem>

    <MenuItem
      classes={{
        root: classes.selectMenuItem,
        selected: classes.selectMenuItemSelected
      }}
      value="8"
    >
      Kanke
    </MenuItem>
    <MenuItem
      classes={{
        root: classes.selectMenuItem,
        selected: classes.selectMenuItemSelected
      }}
      value="9"
    >
     Langtang-North
    </MenuItem>
    <MenuItem
      classes={{
        root: classes.selectMenuItem,
        selected: classes.selectMenuItemSelected
      }}
      value="10"
    >
     Langtang-South
    </MenuItem>
    <MenuItem
      classes={{
        root: classes.selectMenuItem,
        selected: classes.selectMenuItemSelected
      }}
      value="11"
    >
      Mangu
    </MenuItem>
    <MenuItem
      classes={{
        root: classes.selectMenuItem,
        selected: classes.selectMenuItemSelected
      }}
      value="12"
    >
     Mikang
    </MenuItem>
    <MenuItem
      classes={{
        root: classes.selectMenuItem,
        selected: classes.selectMenuItemSelected
      }}
      value="13"
    >
     Pankshin
    </MenuItem>
    <MenuItem
      classes={{
        root: classes.selectMenuItem,
        selected: classes.selectMenuItemSelected
      }}
      value="14"
    >
      Qua'an Pan
    </MenuItem>
    <MenuItem
      classes={{
        root: classes.selectMenuItem,
        selected: classes.selectMenuItemSelected
      }}
      value="15"
    >
      Riyom
    </MenuItem>
    <MenuItem
      classes={{
        root: classes.selectMenuItem,
        selected: classes.selectMenuItemSelected
      }}
      value="16"
    >
      Shendam
    </MenuItem>
    <MenuItem
      classes={{
        root: classes.selectMenuItem,
        selected: classes.selectMenuItemSelected
      }}
      value="17"
    >
      Wase
    </MenuItem>
    </Select>
    )

    const butt = this.state.editing ? 
    (
      <Button 
        color="success" 
        className="UserProfile-updateProfileButton-330"
        onClick={this.onButtonClick}
      >
        Save Profile
      </Button>
      ) : (
      <Button 
        color="success" 
        className="UserProfile-updateProfileButton-330"
        onClick={this.onButtonClick}
      >
        Update Profile
      </Button>    
    )

          const profilePanel = prof => this.state.isLoading ? (<div>Loading</div>) : (
              <GridItem xs={12} sm={12} md={8}>
              <Card>
                <CardHeader color="success" icon>
                  <CardIcon color="success">
                    <PermIdentity />
                  </CardIcon>
                  <h4 className={classes.cardIconTitle}>
                    Profile - <small>Complete your profile</small>
                  </h4>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="First Name"
                        id="first_name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          name:"first_name",
                          value: this.state.disable ? prof.name : this.state.first_name,
                          disabled: this.state.disable,
                          onChange: this.onchange
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Other Names"
                        id="email-address"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          name:"other_name",
                          value: this.state.disable ? prof.otherNames : this.state.other_names,
                          disabled:  this.state.disable,
                          onChange: this.onchange
                        }}
                      />
                
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Email Address"
                        id="other_name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          name:"other_name",
                          value: prof.emailAddress,
                          disabled:  true,
                          //onChange: this.onchange
                        }}
                      />
                    </GridItem>

                  </GridContainer>

                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      {/* <CustomInput
                        labelText="First Name"
                        id="first-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                      /> */}

                      <CardContent>

                      {/* <InputLabel className={classes.label}>Date Picker</InputLabel> */}
                      <FormControl fullWidth>
                          <Datetime
                            // dateFormat={true}  
                            timeFormat={false}
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              name:"dob",
                              placeholder:"Date of Birth",
                              // value: this.state.disable ? prof.dob : this.state.dob,
                              // disabled:  this.state.disable,
                              // onChange: this.onchange
                            }}
                          />
                        </FormControl>
                      </CardContent>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                    <FormControl
                          fullWidth
                          className={classes.selectFormControl}
                        >
                          <InputLabel
                            htmlFor="lga"
                            className={classes.selectLabel}
                          >
                           LGA
                          </InputLabel>
                          {lga}
                        </FormControl>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Last Name"
                        id="last-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: this.state.name
                        }}
                      />
                    </GridItem>

                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="City"
                        id="city"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Country"
                        id="country"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Postal Code"
                        id="postal-code"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>

                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="City"
                        id="city"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Country"
                        id="country"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Postal Code"
                        id="postal-code"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>

                  </GridContainer>
                  {butt}
                  <Clearfix />
                </CardBody>
              </Card>
            </GridItem>
          )
    const  profile = this.props.dash.map((prof, key) => (
        <GridContainer key={key}>
          {profilePanel(prof)}
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            {/* <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={prof.avatar} alt="..." />
              </a>
            </CardAvatar> */}
                    <ImageUpload
                      avatar
                      addButtonProps={{
                        color: "success",
                        round: true
                      }}
                      changeButtonProps={{
                        color: "success",
                        round: true
                      }}
                      removeButtonProps={{
                        color: "danger",
                        round: true
                      }}
                    />
            <CardBody profile>
              <h2 className={classes.cardTitle}>{prof.name+ " " +prof.otherNames}</h2>
              <h6 className={classes.cardCategory}>{prof.course}</h6>
              <h6 className={classes.cardTitle}>{prof.emailAddress}</h6>
              <h3 className={classes.cardTitle}>{prof.phone}</h3>
              {/* <Button color="success" round>
                Upload
              </Button> */}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    ))

  return (
    <div>
      {profile}
    </div>
  );
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}
export default connect(mapStateToProps, {})(withStyles(userProfileStyles)(UserProfile));


/**
  <ImageUpload
    avatar
    addButtonProps={{
      color: "rose",
      round: true
    }}
    changeButtonProps={{
      color: "rose",
      round: true
    }}
    removeButtonProps={{
      color: "danger",
      round: true
    }}
  />
*/ 