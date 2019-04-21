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
    firstname:"Church",
    middlename:"Gani",
    lastname:"Simon",
    email:"user@gmail.com",
    DoB:"2012-12-12",
    lga:"Bassa",
    gender:"Male",
    phone:"08012345678",
    education:{
      course:"Food Science",
      institution:" FUT Minna",
      year_of_graduation:"2000",
      qualification:"Degree"
    },
    employed:"Yes",
    marital_status:"Married",
    diasbility:"No",
    address:"21T Rukuba Road Jos",
    resume:"",
    photo:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
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

  onClick = e => {
    alert("CLICK")
  }

  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render(){
    const { classes } = this.props;
    const { dashboard } = this.props.dashboard

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
                    <img 
                      className="rounded-circle" 
                      src={this.state.photo} 
                      alt="" 
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="display-4 text-center">{this.state.firstname+ " " +this.state.middlename+ " "+this.state.lastname}</h2>
                  <p>
                    <strong>{this.state.phone}</strong> 
                  </p>
                      <Button 
                        onClick={this.onClick}
                        className="btn bg-warning mb-3 float-center"
                      >
                        Change
                      </Button>
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
                    <strong>Gender:</strong> {this.state.gender}
                  </p>
                  <p>
                    <strong>Employed:</strong> {this.state.employed}
                  </p>
                  <p>
                    <strong>Marital Status:</strong> {this.state.marital_status}
                  </p>
                  <p>
                    <strong>Diability:</strong> {this.state.diasbility}
                  </p>
                  <Button 
                    onClick={this.onClick}
                    className="btn bg-white text-success btn-success mb-3 float-right"
                    type="button"
                    >
                    Edit
                  </Button>    
                </li>
                <li className="list-group-item">
                  <h4>Contact Info</h4>
                  <hr/>
                  <p>
                    <strong>Address:</strong> {this.state.address}
                  </p>
                  <p>
                    <strong>LGA:</strong>{this.state.lga}
                  </p>
                  <p>
                    <strong>Email Address: </strong> {this.state.email}
                  </p>
                  <Button 
                    onClick={this.onClick}
                    className="btn bg-white text-success primary mb-3 float-right">
                    Edit
                  </Button>   
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">
                   <h4>Educational Info</h4>
                   <hr/>
                   <p>
                    <strong>Year of Graduation:</strong> {this.state.education.year_of_graduation}
                  </p>
                  <p>
                    <strong>Institution:</strong> {this.state.education.institution}
                  </p>
                  <p>
                    <strong>Course:</strong>{this.state.education.course}
                  </p>
                  <p>
                    <strong>Highest Qualification:</strong>{this.state.education.qualification}
                  </p>
                  <Button 
                    onClick={this.onClick}
                    className="btn bg-white text-success primary mb-3 float-right">
                    Edit
                  </Button> 
                </li>
                <li className="list-group-item">
                  <h4>Uploads</h4>
                  <hr/>
                  <p>
                    <strong>Description:</strong>Personal CV
                  </p>
                  <p>
                    <strong>Email Address: </strong> {this.state.email}
                  </p>
                  <p>
                    <strong>Document Name: </strong> CV
                  </p>
                  <Button 
                    onClick={this.onClick}
                    className="btn bg-white text-success primary mb-3 float-right">
                    Edit
                  </Button> 
                </li>
              </ul>
            </div>
          </div> 
          </div>
        </div>
      </div>
        <div className="col-md-12" style={{marginTop:"5px"}}>
          <div className="card card-body bg-white text-white mb-3">
            <div className=" text-success mb-3">
              <Button 
                onClick={this.onClick}
                disabled
                className="btn btn-success bg-success mb-3 text-white float-right">
                Print
              </Button> 
            </div>
          </div>
        </div>
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

