import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PermIdentity from "@material-ui/icons/PermIdentity";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import userProfileStyles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.jsx";
import { connect } from "react-redux"
import Datetime from "react-datetime";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import { CardContent } from "@material-ui/core";
import SweetAlert from "react-bootstrap-sweetalert";
import MenuItem from "@material-ui/core/MenuItem";
import { getProfile } from "../redux/actions/dashboardAction"
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import SelectListGroup from "./components/Selector"

class UserProfile extends Component {
  state = {
    firstname:"Church",
    middlename:"Gani",
    lastname:"Simon",
    email:"user@gmail.com",
    DoB:"2012-12-12",
    lga:"Bassa",
    gender:"Female",
    phone:"08012345678",
    education:{
      course:"Food Science",
      institution:" FUT Minna",
      year_of_graduation:"2000",
      qualification:"Degree"
    },
    employed:"",
    marital_status:"Married",
    diasbility:"No",
    address:"21T Rukuba Road Jos",
    resume:"",
    // photo:"https://www.gravatar.com/avatar/anything?s=200&d=mm",
    photo:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
    id:"",
    disable: true,
    editing: this.onButtonClick,
    isLoading:  false,
    user: {},

    openPersonal:false,
    openEducation: false,
    openContact: false,
    openPhoto:false,
    openUpload:false
  }

  
  componentDidMount(){
    this.setState({
      user:this.props.getProfile(this.props.auth.user.phone)
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      user: nextProps.dashboard.dashboard
    })
  }

  onchange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onClickPersonal = e => {
   this.setState({
     openPersonal:!this.state.openPersonal
   })
  }

  onClickContact = e => {
    this.setState({
      openContact:!this.state.openContact
    })
  }

  onClickEducation = e => {
    this.setState({
      openEducation:!this.state.openEducation
    })
  }

  render(){
    const { classes } = this.props;
    console.log("CLASSESS", this.props)
    
    const optionsGender = [
      { label: 'None', value: 'None' },
      { label: 'Male', value: 'Male' },
      { label: 'Female', value: 'Female' },
    ];

    const optionsEmployed = [
      { label: 'None', value: 'None' },
      { label: 'No', value: 'No' },
      { label: 'Yes', value: 'Yes' },
    ];

    const optionsMaritalStatus = [
      { label: 'None', value: 'None' },
      { label: 'Single', value: 'Single' },
      { label: 'Married', value: 'Married' },
      { label: 'Divorced', value: 'Divorced' },
      { label: 'Widowed', value: 'Widowed' },
    ];

    const optionsDisability = [
      { label: 'None', value: 'None' },
      { label: 'No', value: 'No' },
      { label: 'Yes', value: 'Yes' }
    ];


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
                  <p>
                    <strong>DoB:</strong> {this.state.DoB}
                  </p>
                  <Button 
                    onClick={this.onClickPersonal}
                    className="btn bg-white text-success btn-success mb-3 float-right"
                    type="button"
                    >
                    Edit
                  </Button>  
                      <Dialog
                        open={this.state.openPersonal}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                      >
                        <DialogTitle id="form-dialog-title">PERSONAL DATA</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            change you personal profile information here
                          </DialogContentText>
                            <br/>
                          <form>
                            <div className="form-group mb-2">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Gender</label>
                            <SelectListGroup
                              placeholder="Gender"
                              name="gender"
                              value={this.state.gender}
                              onChange={this.onchange}
                              options={optionsGender}
                            />
                            </div>
                            <div className="form-group mb-2">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Employed</label>
                            <SelectListGroup
                              placeholder="Employed"
                              name="employed"
                              value={this.state.employed}
                              onChange={this.onchange}
                              options={optionsEmployed}
                            />
                            </div>
                            <div className="form-group mb-8">
                            <label htmlFor="inputPassword" className="col-md-6 col-form-label">Marital Status</label>
                            <SelectListGroup
                              placeholder="Marital Status"
                              name="marital_status"
                              value={this.state.marital_status}
                              onChange={this.onchange}
                              options={optionsMaritalStatus}
                            />
                            </div>
                            <div className="form-group mb-2">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Disabilities</label>
                            <SelectListGroup
                              placeholder="Employed"
                              name="employed"
                              value={this.state.diasbility}
                              onChange={this.onchange}
                              options={optionsDisability}
                            />
                            </div>
                            <div className="form-group mb-2">
                            <label htmlFor="inputPassword" className="col-md-6 col-form-label">Date of Birth</label>
                            <input 
                              type="date" 
                              className="form-control form-control-lg" 
                              placeholder="Date of Birth" 
                              name="DoB" 
                              onChange={this.onchange}
                              value={this.state.DoB}
                             />
                            </div>
                        </form>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={this.onClickPersonal} color="danger">
                            Cancel
                          </Button>
                          <Button onClick={this.handleClose} color="success">
                            Update
                          </Button>
                        </DialogActions>
                      </Dialog>  
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
                  {/* <Dialog
                        open={this.state.openPersonal}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                      >
                        <DialogTitle id="form-dialog-title">PERSONAL DATA</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            change you personal profile information here
                          </DialogContentText>
                          <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="gender"
                            type="text"
                            name="gender"
                            fullWidth
                            value={this.state.gender}
                            onChange={this.onchange}
                          />
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={this.onClickPersonal} color="danger">
                            Cancel
                          </Button>
                          <Button onClick={this.handleClose} color="success">
                            Update
                          </Button>
                        </DialogActions>
                      </Dialog>   */}
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
                  <br/>
                  <p>
                    {" "}
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
          <div className="card card-body bg-success text-white mb-3">
            <div className=" text-success mb-3">
              <Button 
                onClick={this.onClick}
                className="btn btn-success bg-warning mb-3 text-success float-right">
                Edit
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

