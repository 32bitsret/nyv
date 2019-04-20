import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PermIdentity from "@material-ui/icons/PermIdentity";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import FormLabel from "@material-ui/core/FormLabel";
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
import { getProfile } from "../redux/actions/dashboardAction"


class UserProfile extends Component {
  state = {
    first_name:"",
    other_name:"",
    avatar:"",
    emailAddress:"",
    DoB:"",
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
    isLoading:  false,
    user: {}
  }

  
  componentDidMount(){
    this.setState({user:this.props.getProfile(this.props.auth.user.phone)})
  }

  componentWillReceiveProps(nextProps){
    this.setState({user: nextProps.dashboard.dashboard})
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
    const { dashboard } = this.props.dashboard

    const lga = ( //
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
    const  profile = this.props.dashboard.isloading ?
        (<div>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                <div>loading...</div>
              </GridItem>
            </GridContainer>
        </div>
        ) 
        :
        (<GridContainer >
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
                          value: this.state.disable ? this.state.user.firstname : this.state.first_name,
                          disabled: this.state.disable,
                          onChange: this.onchange
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Middle Name"
                        id="email-address"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          name:"other_name",
                          value:  this.state.user.middlename,                          disabled:  true,
                          onChange: this.onchange
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Last Name"
                        id="other_name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          name:"other_name",
                          value: this.state.user.lastname,
                          disabled:  true,
                          //onChange: this.onchange
                        }}
                      />
                    </GridItem>

                  </GridContainer>

                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <CardContent>
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
                              value:this.state.disable ? this.state.user.DoB : this.state.DoB,
                              disabled:  this.state.disable,
                              onChange: this.onchange
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
                            onChange ={this.onchange}
                            value="BOKKOS"//{this.state.disable ? this.state.user.lga : this.state.lga}
                            name="lga"
                          >
                           LGA
                          </InputLabel>
                          {lga}
                    </FormControl>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Phone Number"
                        id="phone"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          name:"phone",
                          value: "0"+this.state.user.phone ,
                          disabled: true,
                        
                        }}
                      />
                    </GridItem>

                  </GridContainer>
                  <GridContainer>                
                    <GridItem xs={12} sm={12} md={3}>
                    <FormLabel className={classes.labelHorizontal}>
                      Email
                    </FormLabel>
                  </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        id="city"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>

                    {/* <GridItem xs={12} sm={12} md={4}>
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
                    </GridItem> */}

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
        {<GridItem xs={12} sm={12} md={4}>
          <Card profile>
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
              <h2 className={classes.cardTitle}>{this.state.user.firstname+ " " +this.state.user.middlename+" " +this.state.user.lastname}</h2>
              <h6 className={classes.cardCategory}>Address: {this.state.user.address}</h6>
              <h6 className={classes.cardTitle}>Email: {this.state.user.email}</h6>
              <h3 className={classes.cardTitle}>LGA: {this.state.user.lga}</h3>
              <h3 className={classes.cardTitle}>GENDER: {this.state.user.gender}</h3>
              <h3 className={classes.cardTitle}>LGA: {this.state.user.lga}</h3>
              
              {/* <Button color="success" round>
                Upload
              </Button> */}
            </CardBody>
          </Card>
        </GridItem>}
      </GridContainer>
           )

    const display = this.props.dashboard.isloading ?
    (<div>
        <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
            <div>loading...</div>
          </GridItem>
        </GridContainer>
    </div>
    ) 
    :(
    <div className="profile">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-6">
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-body bg-success text-white mb-3">
                <div className="row">
                  <div className="col-4 col-md-3 m-auto">
                    <img className="rounded-circle" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" />
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="display-4 text-center">John Doe</h2>
                  <p>
                  <p>
                    <strong>08012345678</strong> 
                  </p>
                    <a className="text-white p-2 " href="#">
                      <a href="#" className="btn btn-warning mb-3 float-center">Change</a>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
            <div className="row">
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">
                  <h4>Personal Detail</h4>
                  <hr/>
                  <p>
                    <strong>Gender:</strong> Male
                  </p>
                  <p>
                    <strong>Employed:</strong> Yes
                  </p>
                  <p>
                    <strong>Marital Status:</strong> Married
                  </p>
                  <p>
                    <strong>Diability:</strong> No
                  </p>
                  <a className="text-white p-2 " href="#">
                      <a href="#" className="btn btn-success mb-3 float-right">Edit</a>    
                    </a>
                </li>
                <li className="list-group-item">
                  <h4>Contact Info</h4>
                  <hr/>
                  <p>
                    <strong>Address:</strong> 21T Rukuba Road,Jos
                  </p>
                  <p>
                    <strong>LGA:</strong>Bassa
                  </p>
                  <p>
                    <strong>Email Address: </strong> user@gmail.com
                  </p>
                  <a className="text-white p-2 " href="#">
                    <a href="#" className="btn btn-success mb-3 float-right">Edit</a>    
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">
                   <h4>Educational Info</h4>
                   <hr/>
                   <p>
                    <strong>Year of Graduation:</strong> 2005
                  </p>
                  <p>
                    <strong>Institution:</strong> FUT Minna
                  </p>
                  <p>
                    <strong>Course:</strong>Food Science
                  </p>
                  <p>
                    <strong>Highest Qualification:</strong>Degree
                  </p>
                  <a className="text-white p-2 " href="#">
                    <a href="#" className="btn btn-success mb-3 float-right">Edit</a>    
                  </a>
                </li>
                <li className="list-group-item">
                  <h4>Uploads</h4>
                  <hr/>
                  <p>
                    <strong>Description:</strong>Personal CV
                  </p>
                  <p>
                    <strong>Email Address: </strong> user@gmail.com
                  </p>
                  <p>
                    <strong>Document Name: </strong> CV
                  </p>
                  <a className="text-white p-2 " href="#">
                    <a href="#" className="btn btn-success mb-3 float-right">Edit</a>    
                  </a>
                </li>
              </ul>
            </div>
          </div> 
          </div>
        </div>
      </div>
{/* 
      <div className="row"> */}
            <div className="col-md-12" style={{marginTop:"5px"}}>
              <div className="card card-body bg-success text-white mb-3">
                {/* <div className="row">
                  <div className="col-3 col-md-3 m-auto">
                    <img className="rounded-circle" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" />
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="display-4 text-center">John Doe</h2>
                  <p>
                  <p>
                    <strong>08012345678</strong> 
                  </p>
                    <a className="text-white p-2 " href="#">
                      <a href="#" className="btn btn-warning mb-3 float-center">Change</a>
                    </a>
                  </p>
                </div> */}
                   <a className="text-white p-2 " href="#">
                      <a href="#" className="btn btn-warning mb-3 float-right">Print</a>
                    </a>
              </div>
            </div>
          {/* </div> */}
    </div>
   </div>
   </div>
  )
  
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12} lg={10}>
          <div>
           {display}
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    dashboard: state.dashboard
  }
}
export default connect(mapStateToProps, {getProfile})(withStyles(userProfileStyles)(UserProfile));

