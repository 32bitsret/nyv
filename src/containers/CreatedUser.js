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

    openPersonal:false,
    openEducation: false,
    openContact: false,
    openPhoto:false,
    openUpload:false
  }

  
  componentDidMount(){
    console.log("PASSED IN USER", this.props.created)
    // this.setState({
    //   user:this.props.getProfile(this.props.auth.user.phone)
    // })
    let data = this.props.created.user
    console.log(data)
    this.setState({
      user: {...this.props.created.user},
      firstname:isEmpty(data.firstname) ? "":data.firstname,
      middlename: isEmpty(data.middlename)?"":data.middlename,
      lastname: isEmpty(data.lastname)?"":data.lastname,
      email:isEmpty(data.email)?"":data.email,
      DoB:isEmpty(data.DoB)?"":data.DoB,
      lga:isEmpty(data.lga)?"":data.lga,
      gender:isEmpty(data.gender)?"":data.gender,
      phone:isEmpty(data.phone)?"":data.phone,
      // education:{
        course:isEmpty(data.education)?"":isEmpty(data.education.course)?"":data.education.course,
        institution:isEmpty(data.education)?"":isEmpty(data.education.institution)?"":data.education.institution,
        year_of_graduation:isEmpty(data.education)?"":isEmpty(data.education.year_of_graduation)?"":data.education.year_of_graduation,
        educational_qualification:isEmpty(data.education)?"":isEmpty(data.education.educational_qualification)?"":data.education.qualification
    ,//  },
      employed:isEmpty(data.employed)?"":data.employed,
      marital_status:isEmpty(data.marital_status)?"":data.marital_status,
      disability:isEmpty(data.disability)?"":data.disability,
      address:isEmpty(data.address)?"":data.address,
      resume:isEmpty(data.resume)?"":data.resume,
      photo:isEmpty(data.photo)?"https://www.gravatar.com/avatar/anything?s=200&d=mm" :data.photo,
    })
  }

  componentWillReceiveProps(nextProps){
    let data = nextProps.dashboard.dashboard
    console.log(data)
    // this.setState({
    //   user: {...nextProps.dashboard.dashboard},
    //   firstname:isEmpty(data.firstname) ? "":data.firstname,
    //   middlename: isEmpty(data.middlename)?"":data.middlename,
    //   lastname: isEmpty(data.lastname)?"":data.lastname,
    //   email:isEmpty(data.email)?"":data.email,
    //   DoB:isEmpty(data.DoB)?"":data.DoB,
    //   lga:isEmpty(data.lga)?"":data.lga,
    //   gender:isEmpty(data.gender)?"":data.gender,
    //   phone:isEmpty(data.phone)?"":data.phone,
    //   education:{
    //     course:isEmpty(data.education)?"":isEmpty(data.education.course)?"":data.education.course,
    //     institution:isEmpty(data.education)?"":isEmpty(data.education.institution)?"":data.education.institution,
    //     year_of_graduation:isEmpty(data.education)?"":isEmpty(data.education.year_of_graduation)?"":data.education.year_of_graduation,
    //     qualification:isEmpty(data.education)?"":isEmpty(data.education.qualification)?"":data.education.qualification
    //   },
    //   employed:isEmpty(data.employed)?"":data.employed,
    //   marital_status:isEmpty(data.marital_status)?"":data.marital_status,
    //   disability:isEmpty(data.disability)?"":data.disability,
    //   address:isEmpty(data.address)?"":data.address,
    //   resume:isEmpty(data.resume)?"":data.resume,
    //   photo:nextProps.dashboard.dashboard.photo,
    // })
  }

  onchange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onDone = e => {
    //dispatch an action the destroys created User in the store
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

// age = () => {
//   const now = moment(new Date())
//   const end = moment(this.state.DoB)
//   const duration = moment.duration(now.diff(end))
//     return duration
// }

  render(){
    const { classes } = this.props;
    const optionsGender = [
      { label: '', value: '' },
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
    ];

    const optionsEmployed = [
      { label: '', value: '' },
      { label: 'No', value: 'Not Employed' },
      { label: 'Yes', value: 'Employed' },
    ];

    const optionsMaritalStatus = [
      { label: '', value: '' },
      { label: 'Single', value: 'Single' },
      { label: 'Married', value: 'Married' },
      { label: 'Divorced', value: 'Divorced' },
      { label: 'Widowed', value: 'Widowed' },
    ];

    const optionsDisability = [
      { label: '', value: '' },
      { label: 'No', value: 'Not Disabled' },
      { label: 'Yes', value: 'Disabled' }
    ];

    const optionsLGA = [
      { label: '', value: '' },
      { label: 'Barkin Ladi', value: 'Barkin Ladi' },
      { label: 'Bassa', value: 'Bassa' },
      { label: 'Bokkos', value: 'Bokkos' },
      { label: 'Jos East', value: 'Jos East' },
      { label: 'Jos North', value: 'Jos North' },
      { label: 'Jos South', value: 'Jos South' },
      { label: 'Kanam', value: 'Kanam' },
      { label: 'Kanke', value: 'Kanke' },
      { label: 'Langtang North', value: 'Langtang North' },
      { label: 'Langtang South', value: 'Langtang South' },
      { label: 'Mangu', value: 'Mangu' },
      { label: 'Mikang', value: 'Mikang' },
      { label: 'Pankshin', value: 'Pankshin' },
      { label: "Qua'an Pan", value: "Qua'an Pan" },
      { label: 'Riyom', value: 'Riyom' },
      { label: 'Shendam', value: 'Shendam' },
      { label: 'Wase', value: 'Wase' },
      { label: 'Others', value: 'Others' },
    ];

    const optionsYearofGrad = [
      { label: '', value: '' },
      { label: '1991', value: '1991' },
      { label: '1992', value: '1992' },
      { label: '1993', value: '1993' },
      { label: '1994', value: '1994' },
      { label: '1995', value: '1995' },
      { label: '1996', value: '1996' },
      { label: '1997', value: '1997' },
      { label: '1998', value: '1998' },
      { label: '1999', value: '1999' },
      { label: '2000', value: '2000' },
      { label: '2001', value: '2001' },
      { label: '2002', value: '2002' },
      { label: '2003', value: '2003' },
      { label: '2004', value: '2004' },
      { label: '2005', value: '2005' },
      { label: '2006', value: '2006' },
      { label: '2007', value: '2007' },
      { label: '2008', value: '2008' },
      { label: '2009', value: '2009' },
      { label: '2010', value: '1991' },
      { label: '2011', value: '2011' },
      { label: '2012', value: '2012' },
      { label: '2013', value: '2013' },
      { label: '2014', value: '2014' },
      { label: '2015', value: '2015' },
      { label: '2016', value: '2016' },
      { label: '2017', value: '2017' },
      { label: '2018', value: '2018' },
      { label: '2019', value: '2019' },
    ];

    const optionsQualification = [
      { label: 'School Cert', value: 'CERT' },
      { label: 'Olevel', value: 'OLEVEL' },
      { label: 'ND', value: 'ND' },
      { label: 'HND', value: 'HND' },
      { label: 'Degree', value: 'DEGREE' },
      { label: 'MSC', value: 'MSC' },
      { label: 'PHD', value: 'PHD' }
    ];

  const display = 
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

                     {true? "" : <Button 
                        onClick={this.onClickPhoto}
                        className="btn bg-warning mb-3 float-center"
                      >
                        Change
                      </Button>}
                      <Dialog
                        open={this.state.openPhoto}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                      >
                      <DialogTitle id="form-dialog-title">UPLOAD PHOTO</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          change you Profile Photo here
                        </DialogContentText>
                      </DialogContent>
                      <ImageUploadA
                        user_id={this.state.user._id}
                        cancel={this.onClickPhoto}
                        avatar 
                        addButtonProps={{
                          color: "success",
                          round: true
                        }}
                        changeButtonProps={{
                          color: "danger",
                          round: true
                        }}
                        uploadButtonProps={{
                          color: "success",
                          round: true
                        }}
                      />
                    </Dialog>  
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
                  {true?"":<Button 
                    onClick={this.onClickPersonal}
                    className="btn bg-white text-success btn-success mb-3 float-right"
                    type="button"
                    >
                    Edit
                  </Button> } 
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
                              placeholder="employment_status"
                              name="employment_status"
                              value={this.state.employment_status}
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
                              placeholder="disability"
                              name="disability"
                              value={this.state.disability}
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
                          <Button onClick={this.onSubmitBasicInfo} color="success">
                            Update
                          </Button>
                        </DialogActions>
                      </Dialog>  
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
                  {true?"":<Button 
                    onClick={this.onClickContact}
                    className="btn bg-white text-success primary mb-3 float-right">
                    Edit
                  </Button> }  
                      <Dialog
                        open={this.state.openContact}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                      >
                        <DialogTitle id="form-dialog-title">CONTACT DATA</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            change you Contact information here
                          </DialogContentText>
                          <br/>
                          <div className="form-group mb-8">
                            <label 
                              htmlFor="inputPassword" 
                              className="col-md-6 col-form-label">
                              Address
                            </label>
                              <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                placeholder="Home Address" 
                                name="address" 
                                value={this.state.address} 
                                onChange={this.onchange}
                              />
                          </div>
                          <div className="form-group mb-2">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">LGA</label>
                            <SelectListGroup
                              placeholder="LGA"
                              name="lga"
                              value={this.state.lga}
                              onChange={this.onchange}
                              options={optionsLGA}
                            />
                            </div>

                            <div className="form-group mb-8">
                            <label 
                              htmlFor="inputPassword" 
                              className="col-md-6 col-form-label">
                              Email
                            </label>
                            <input 
                              type="email" 
                              className="form-control form-control-lg" 
                              placeholder="Email Address" 
                              name="email" 
                              value={this.state.email} 
                              onChange={this.onchange}
                            />
                          </div>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={this.onClickContact} color="danger">
                            Cancel
                          </Button>
                          <Button onClick={this.handleClose} color="success">
                            Update
                          </Button>
                        </DialogActions>
                      </Dialog>  
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
                  {true? "":<Button 
                    onClick={this.onClickEducation}
                    className="btn bg-white text-success primary mb-3 float-right">
                    Edit
                  </Button>} 
                  <Dialog
                        open={this.state.openEducation}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                      >
                        <DialogTitle id="form-dialog-title">EDUCATION DATA</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            change you Education information here
                          </DialogContentText>
                          <br/>
                          <div className="form-group mb-8">
                            <label 
                              htmlFor="inputPassword" 
                              className="col-md-8 col-form-label">
                              Year of Graduation
                            </label> 
                            <SelectListGroup
                              placeholder="Year of Graduation"
                              name="year_of_graduation"
                              value={this.state.year_of_graduation}
                              onChange={this.onchange}
                              options={optionsYearofGrad}
                            />
                          </div>

                            <div className="form-group mb-8">
                            <label 
                              htmlFor="inputPassword" 
                              className="col-md-6 col-form-label">
                              Institution
                            </label>
                            <input 
                              type="text" 
                              className="form-control form-control-lg" 
                              placeholder="Institution" 
                              name="institution" 
                              value={this.state.institution} 
                              onChange={this.onchange}
                            />
                          </div>
                          <div className="form-group mb-8">
                            <label 
                              htmlFor="inputPassword" 
                              className="col-md-6 col-form-label">
                                Course
                            </label>
                            <input 
                              type="text" 
                              className="form-control form-control-lg" 
                              placeholder="Course" 
                              name="course" 
                              value={this.state.course} 
                              onChange={this.onchange}
                            />
                          </div>
                          <div className="form-group mb-8">
                            <label 
                              htmlFor="inputPassword" 
                              className="col-md-10 col-form-label">
                              Highest Qualification
                            </label> 
                            <SelectListGroup
                              placeholder="Highest Qualification"
                              name="qualification"
                              value={this.state.educational_qualification}
                              onChange={this.onchange}
                              options={optionsQualification}
                            />
                          </div>

                        </DialogContent>
                        <DialogActions>
                          <Button onClick={this.onClickEducation} color="danger">
                            Cancel
                          </Button>
                          <Button onClick={this.handleClose} color="success">
                            Update
                          </Button>
                        </DialogActions>
                      </Dialog>  
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
                  {true?"":<Button 
                    onClick={this.onClickUpload}
                    className="btn bg-white text-success primary mb-3 float-right">
                    Edit
                  </Button>} 
                  <Dialog
                        open={this.state.openUpload}

                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                      >
                        <DialogTitle id="form-dialog-title">UPLOAD DOCUMENT</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            change you Uploaded Document here
                          </DialogContentText>
                          <br/>
                            <div className="form-group mb-8">
                            <label 
                              htmlFor="inputPassword" 
                              className="col-md-6 col-form-label">
                              Resume
                            </label>
                            {/* <input 
                              type="file" 
                              className="form-control form-control-lg" 
                              placeholder="resume" 
                              name="resume" 
                            /> */}
                            <DocumentUploadA
                              cancel={this.onClickUpload}
                            />
                          </div>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={this.onClickUpload} color="danger">
                            Cancel
                          </Button>
                          <Button onClick={this.handleClose} color="success">
                            Update
                          </Button>
                        </DialogActions>
                      </Dialog>  
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
