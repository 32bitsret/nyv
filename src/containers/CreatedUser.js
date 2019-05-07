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
import { getProfile } from "../redux/actions/dashboardAction"
import {
  updateBasicInfoA,
  updateEducationalInfoA,
  updateContactInfoA,
} from "../redux/actions/createActions"
import SelectListGroup from "./components/Selector"
import isEmpty from "../utils/isEmpty"
import DocumentUploadA from "./components/DocumentUploadA"
import ImageUploadA from "./components/ImageUploadA"

class CreatedUser extends Component {
  state = {
    firstname:"",
    middlename:"",
    lastname:"",
    email:"",
    DoB:"",
    lga:"",
    gender:"",
    phone:"",

    course:"",
    institution:"",
    year_of_graduation:"",
    educational_qualification:"",
    
    employment_status:"",
    marital_status:"",
    disability:"",
    type_of_work:"",
    address:"",
    resume:"",
    photo:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
    state:"",
   
    id:"",
    disable: true,
    editing: this.onButtonClick,
    isLoading:  false,
    user: {},
    isloadingNewUser: true,

    openPersonal:false,
    openEducation: false,
    openContact: false,
    openPhoto:false,
    openUpload:false
  }

  
  componentDidMount(){
    console.log("PASSED IN USER", this.props.created.user.phone)
    this.props.getProfile(this.props.created.user.phone)
    // this.setState({
    //   user:this.props.getProfile(this.props.created.user.phone)
    // })
    // let data = this.props.created.user
    // console.log(data)
    // this.setState({
    //   user: {...this.props.created.user},
    //   firstname:isEmpty(data.firstname) ? "":data.firstname,
    //   middlename: isEmpty(data.middlename)?"":data.middlename,
    //   lastname: isEmpty(data.lastname)?"":data.lastname,
    //   email:isEmpty(data.email)?"":data.email,
    //   DoB:isEmpty(data.DoB)?"":data.DoB,
    //   lga:isEmpty(data.lga)?"":data.lga,
    //   gender:isEmpty(data.gender)?"":data.gender,
    //   phone:isEmpty(data.phone)?"":data.phone,
    //     course:isEmpty(data.education)?"":isEmpty(data.education.course)?"":data.education.course,
    //     institution:isEmpty(data.education)?"":isEmpty(data.education.institution)?"":data.education.institution,
    //     year_of_graduation:isEmpty(data.education)?"":isEmpty(data.education.year_of_graduation)?"":data.education.year_of_graduation,
    //     educational_qualification:isEmpty(data.education)?"":isEmpty(data.education.educational_qualification)?"":data.education.qualification
    // ,
    //   employed:isEmpty(data.employed)?"":data.employed,
    //   marital_status:isEmpty(data.marital_status)?"":data.marital_status,
    //   disability:isEmpty(data.disability)?"":data.disability,
    //   address:isEmpty(data.address)?"":data.address,
    //   resume:isEmpty(data.resume)?"":data.resume,
    //   photo:isEmpty(data.photo)?"https://www.gravatar.com/avatar/anything?s=200&d=mm" :data.photo,
    // })
  }

  componentWillReceiveProps(nextProps){
    let data = nextProps.dashboard.dashboard

    console.log("NEW CREATED USER",data)
    if(!isEmpty(data)){
      this.setState({
        user: {...data},
        photo:isEmpty(data.photo)?"https://www.gravatar.com/avatar/anything?s=200&d=mm" :data.photo,
        isloadingNewUser: false
      })
    }
  }

  onchange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onDone = e => {
    e.preventDefault()
    window.location.reload()
  }

  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
//===========================MODAL OPS====================================
  onClickPersonal = e => {
    e.preventDefault()
   this.setState({
     openPersonal:!this.state.openPersonal
   })
  }

  onClickContact = e => {
    e.preventDefault()
    this.setState({
      openContact:!this.state.openContact
    })
  }

  onClickEducation = e => {
    e.preventDefault()
    this.setState({
      openEducation:!this.state.openEducation
    })
  }

  onClickUpload = e => {
    e.preventDefault()
    this.setState({
      openUpload: !this.state.openUpload
    })
  }

  onClickPhoto = e => {
    // e.preventDefault()
    this.setState({
      openPhoto: !this.state.openPhoto
    })
  }
//============================END OF MODAL OPS======================================
  
//============================END OF MODAL OPS======================================
//======================START OF SUBMISSION ROUTINES=============================
onSubmitBasicInfo = e => {
  e.preventDefault()
  let query = {
    _id: this.state.user._id
  }
  let update = {
    gender: isEmpty(this.state.gender)?"":this.state.gender,
    employement_status: isEmpty(this.state.employement_status)?"":this.state.employement_status,
    marital_status: isEmpty(this.state.marital_status)?"":this.state.marital_status,
    disability: isEmpty(this.state.diasbility)?"":this.state.diasbility,
    DoB: isEmpty(this.state.DoB)?"":this.state.DoB,
    // type_of_work:"tailor"
  }
  let obj = {query, update}
  console.log("BIG OBJECT", obj)
  this.props.updateBasicInfoA({query,update})
  this.setState({
    openPersonal: !this.state.openPersonal
  })
}

onSubmitContactInfo = e => {
  e.preventDefault()
  let query = {
    _id: this.state.user._id
  }
  let update = {
    address:isEmpty(this.state.address)?"": this.state.address,
    lga:isEmpty(this.state.lga) ? "" : this.state.lga 
  }
  let obj = {query, update}
  console.log("BIG OBJECT", obj)
  this.props.updateContactInfoA({query,update})
}

onSubmitEducationalInfo = e => {
  e.preventDefault()
  let query = {
    _id: this.state.user._id
  }
  let update ={
    education:{
      course:isEmpty(this.state.course)?"":this.state.course,
      educational_qualification:isEmpty(this.state.educational_qualification)?"": this.state.educational_qualification,
      institution: isEmpty(this.state.institution)?"":this.state.institution,
      year_of_graduation:isEmpty(this.state.year_of_graduation)?"":this.state.year_of_graduation
    }
  }
  let obj = {query, update}
  console.log("BIG OBJECT", obj)
  this.props.updateEducationalInfoA({query, update})
}

  render(){
    const { classes } = this.props;    
    const display = this.state.isloadingNewUser 
    ?
    <div>loading</div>
    :
   (<div className="profile">
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
                      style={{width: "200px",
                        left: "50%",
                        position: "relative",
                        transform: "translate(-50%,0)"}}
                      src={isEmpty(this.state.user.photo) ? "https://www.gravatar.com/avatar/anything?s=200&d=mm" : this.state.user.photo} 
                      alt="" 
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="display-4 text-center">{this.state.user.firstname+ " " +this.state.user.lastname}</h2>
                  <p>
                    <strong>{isEmpty(this.state.user.phone)?"":"0"+this.state.user.phone}</strong> 
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
                    <strong>Gender:</strong> {isEmpty(this.state.user.gender) ? "": this.state.user.gender}
                  </p>
                  <p>
                    <strong>Employed:</strong> {isEmpty(this.state.user.employed)?"":this.state.user.employed}
                  </p>
                  <p>
                    <strong>Marital Status:</strong> {isEmpty(this.state.user.marital_status)?"":this.state.user.marital_status}
                  </p>
                  <p>
                    <strong>Disability:</strong> {isEmpty(this.state.user.disability)?"":this.state.user.disability}
                  </p>
                  <p>
                    <strong>DoB:</strong> {isEmpty(this.state.user.DoB)?"":this.state.user.DoB}
                  </p>
                </li>
                <li className="list-group-item">
                  <h4>Contact Info</h4>
                  <hr/>
                  <p>
                    <strong>Address:</strong> {isEmpty(this.state.user.address)?"":this.state.user.address}
                  </p>
                  <p>
                    <strong>LGA:</strong>{isEmpty(this.state.user.lga)?"":this.state.user.lga}
                  </p>
                  <p>
                    <strong>Email Address: </strong> {isEmpty(this.state.user.email)?"":this.state.user.email}
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">
                   <h4>Educational Info</h4>
                   <hr/>
                   <p>
                    <strong>Year of Graduation:</strong> {isEmpty(this.state.user.education)?"":isEmpty(this.state.user.education.year_of_graduation)?"":this.state.user.education.year_of_graduation}
                  </p>
                  <p>
                    <strong>Institution:</strong> {isEmpty(this.state.user.education)?"":isEmpty(this.state.user.education.institution)?"":this.state.user.education.institution}
                  </p>
                  <p>
                    <strong>Course:</strong>{isEmpty(this.state.user.education)?"":isEmpty(this.state.user.education.course)?"":this.state.user.education.course}
                  </p>
                  <p>
                    <strong>Highest Qualification:</strong>{isEmpty(this.state.user.education)?"":isEmpty(this.state.user.education.educational_qualification)?"":this.state.user.education.educational_qualification}
                  </p>
                  <br/>
                  <p>
                    {" "}
                  </p>
                  </li>
                <li className="list-group-item">
                  <h4>Uploads</h4>
                  <hr/>
                  <p>
                    <strong>Description:</strong>Personal CV
                  </p>
                  <p>
                    <strong>Email Address: </strong> {isEmpty(this.state.user.email)?"":this.state.user.email}
                  </p>
                  <p>
                    <strong>Document Name: </strong> CV
                  </p>
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
                onClick={this.onDone}
                className="btn btn-success bg-success mb-3 text-white float-right">
                Done
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
    dashboard: state.dashboard,
    created:state.createUser
  }
}
export default connect(mapStateToProps, {
  getProfile,
  updateBasicInfoA,
  updateContactInfoA,
  updateEducationalInfoA
})(withStyles(userProfileStyles)(CreatedUser));
