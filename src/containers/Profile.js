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
  updateBasicInfo,
  updateEducationalInfo,
  updateContactInfo,
  uploadDocument
} from "../redux/actions/createActions"
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import SelectListGroup from "./components/Selector"
import isEmpty from "../utils/isEmpty"
import ImageUpload from "./components/ImageUpload"
import moment from "moment"
import DocumentUpload from "./components/DocumentUpload"

class UserProfile extends Component {
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
    educational_qualification:""
    ,
    employment_status:"",
    marital_status:"",
    disability:"",
    address:"",
    type_of_work:"",
    resume:"",
    state:"",

    id:"",
    disable: true,
    editing: false,
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
    let data = nextProps.dashboard.dashboard
    console.log(data)
    this.setState({
      user: {...nextProps.dashboard.dashboard},
      firstname:isEmpty(data.firstname) ? "":data.firstname,
      middlename: isEmpty(data.middlename)?"":data.middlename,
      lastname: isEmpty(data.lastname)?"":data.lastname,
      email:isEmpty(data.email)?"":data.email,
      DoB:isEmpty(data.DoB)?"":data.DoB,
      lga:isEmpty(data.lga)?"":data.lga,
      gender:isEmpty(data.gender)?"":data.gender,
      phone:isEmpty(data.phone)?"":data.phone,
      course:isEmpty(data.education)?"":isEmpty(data.education.course)?"":data.education.course,
      institution:isEmpty(data.education)?"":isEmpty(data.education.institution)?"":data.education.institution,
      year_of_graduation:isEmpty(data.education)?"":isEmpty(data.education.year_of_graduation)?"":data.education.year_of_graduation,
      educational_qualification:isEmpty(data.education)?"":isEmpty(data.education.educational_qualification)?"":data.education.educational_qualification,
      employment_status:isEmpty(data.employment_status)?"":data.employment_status,
      marital_status:isEmpty(data.marital_status)?"":data.marital_status,
      disability:isEmpty(data.disability)?"":data.disability,
      address:isEmpty(data.address)?"":data.address,
      resume:isEmpty(data.resume)?"":data.resume,
      type_of_work:isEmpty(data.type_of_work)?"":data.type_of_work,
      photo:nextProps.dashboard.dashboard.photo,
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
    // e.preventDefault()
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

  onClickEdit = (e) => {
    e.preventDefault()
    this.setState({
      editing: true
    })
  }

  onDone = e => {
    e.preventDefault()
    this.setState({
      editing: false
    })
  }

//============================END OF MODAL OPS======================================
//======================START OF SUBMISSION ROUTINES=============================
  onSubmitBasicInfo = e => {
    e.preventDefault()
    let query = {
      _id: this.props.dashboard.dashboard._id
    }
    let update = {
      gender: isEmpty(this.state.gender)?"":this.state.gender,
      employment_status: isEmpty(this.state.employment_status)?"":this.state.employment_status,
      disability: isEmpty(this.state.disability)?"":this.state.disability,
      marital_status: isEmpty(this.state.marital_status)?"":this.state.marital_status,
      DoB: isEmpty(this.state.DoB)?"":this.state.DoB,
      type_of_work:isEmpty(this.state.type_of_work)?"":this.state.type_of_work
    }
    let obj = {query, update}
    console.log("BIG OBJECT", obj)
    this.props.updateBasicInfo({query,update})
    // this.setState({
    //   openPersonal: !this.state.openPersonal
    // })
  }

  onSubmitContactInfo = e => {
    e.preventDefault()
    let query = {
      _id: this.props.dashboard.dashboard._id
    }
    let update = {
      address:isEmpty(this.state.address)?"": this.state.address,
      lga:isEmpty(this.state.lga) ? "" : this.state.lga 
    }
    let obj = {query, update}
    console.log("BIG OBJECT", obj)
    this.props.updateContactInfo({query,update})
  }

  onSubmitEducationalInfo = e => {
    e.preventDefault()
    let query = {
      _id: this.props.dashboard.dashboard._id
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
    this.props.updateEducationalInfo({query, update})
  }

  age = () => {
    const now = moment(new Date())
    const end = moment(this.state.DoB)
    const duration = moment.duration(now.diff(end))
      return duration
  }
//============================END OF SUBMISSION ROUTINES===========================
  render(){
    console.log("USER DASHBOARD",this.state.user)
    const { classes } = this.props;
    const userProfile = this.props.auth.user
    const optionsGender = [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
    ];

    const optionsEmployed = [
      { label: '', value: '' },
      { label: 'Not Employed', value: 'Not Employed' },
      { label: 'Employed', value: 'Employed' },
    ];

    const optionsMaritalStatus = [
      { label: 'Single', value: 'Single' },
      { label: 'Married', value: 'Married' },
      { label: 'Divorced', value: 'Divorced' },
      { label: 'Widowed', value: 'Widowed' },
    ];

    const optionsDisability = [
      { label: 'Not Disabled', value: 'Not Disabled' },
      { label: 'Disabled', value: 'Disabled' }
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

    const optinsStates = [
      { title : 'Abia State', value : 'Abia State' },
      { title : 'Adamawa State', value : 'Adamawa State' },
      { title : 'Akwa Ibom State', value : 'Akwa Ibom State' },
      { title : 'Anambra State	', value : 'Anambra State	' },
      { title : 'Bauchi State', value : 'Bauchi State' },
      { title : 'Bayelsa State', value : 'Bayelsa State' },
      { title : 'Benue State', value : 'Benue State' },
      { title : 'Borno State	', value : 'Borno State	' },
      { title : 'Cross River State', value : 'Cross River State' },
      { title : 'Delta State', value : 'Delta State' },
      { title : 'Ebonyi State', value : 'Ebonyi State' },
      { title : 'Edo State', value : 'Edo State' },
      { title : 'Ekiti State	', value : 'Ekiti State	' },
      { title : 'Enugu State', value : 'Enugu State' },
      { title : 'FCT	Abuja', value : 'FCT	Abuja' },
      { title : 'Gombe State	', value : 'Gombe State	' },
      { title : 'Imo State', value : 'Imo State'},
      { title : 'Jigawa State', value : 'Jigawa State' },
      { title : 'Kaduna State', value : 'Kaduna State' },
      { title : 'Kano State', value : 'Kano State' },
      { title : 'Katsina State', value : 'Katsina State'	 },
      { title : 'Kebbi State	Birnin', value : 'Kebbi State	Birnin' },
      { title : 'Kogi State', value : 'Kogi State' },
      { title : 'Kwara State', value : 'Kwara State' },
      { title : 'Lagos State', value : 'Lagos State' },
      { title : 'Nasarawa State', value : 'Nasarawa State' },
      { title : 'Niger State', value : 'Niger State' },
      { title : 'Ogun State', value : 'Ogun State' },
      { title : 'Ondo State', value : 'Ondo State' },
      { title : 'Osun State', value : 'Osun State' },
      { title : 'Oyo State', value : 'Oyo State' },
      { title : 'Plateau State', value : 'Plateau State' },
      { title : 'Rivers State', value : 'Rivers State' },
      { title : 'Sokoto State', value : 'Sokoto State' },
      { title : 'Taraba State', value : 'Taraba State' },
      { title : 'Yobe State', value : 'Yobe State' },
      { title : 'Zamfara State', value : 'Zamfara State' },
    ];

    const optionsYearofGrad = [
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

    const display = this.props.dashboard.isloading ?
    (
    <div>
        <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
            <div>
              loading...
            </div>
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
                  <h2 className="display-4 text-center">{userProfile.firstname+ " "+userProfile.lastname}</h2>
                  <p>
                    {/* {this.state.user.employment_status === "Not Employed" ? "" :( isEmpty(this.state.user.type_of_work)?"":this.state.user.type_of_work)} */}
                  </p>
                  <p>
                    <strong>{isEmpty(this.state.user.phone)?"":"0"+this.state.user.phone}</strong> 
                  </p>
                    {this.state.editing === true ? 
                      <Button 
                        onClick={this.onClickPhoto}
                        className="btn bg-warning mb-3 float-center"
                      >
                        Change
                      </Button> :  "" }
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
                        <ImageUpload
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
                      </DialogContent>
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
                    <strong>Employed:</strong> {isEmpty(this.state.user.employment_status)?"":this.state.user.employment_status}
                  </p>
                  <p>
                    <strong>Job Description:</strong> {isEmpty(this.state.user.employment_status === "Not Employed")?"":( isEmpty(this.state.user.type_of_work)?"":this.state.user.type_of_work)}
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
                    {
                      this.state.editing ?  
                      <Button 
                        onClick={this.onClickPersonal}
                        className="btn bg-white text-success btn-success mb-3 float-right"
                        type="button"
                        >
                        Edit
                      </Button> 
                       : 
                       ""
                    }
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
                              disable={true}
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
                    <strong>State:</strong>{isEmpty(this.state.user.lga === "Others")?this.state.user.state: "Plateau State"}
                  </p>
                  <p>
                    <strong>Email Address: </strong> {isEmpty(this.state.user.email)?"":this.state.user.email}
                  </p>
                    {
                      this.state.editing ?
                      <Button 
                        onClick={this.onClickContact}
                        className="btn bg-white text-success primary mb-3 float-right">
                        Edit
                      </Button>
                    :
                    ""
                    }
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
                              disabled
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
                          <Button onClick={this.onSubmitContactInfo} color="success">
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
                    <strong>Institution:</strong> {isEmpty(this.state.user.education)?"":this.state.user.education.institution}
                  </p>
                  <p>
                    <strong>Course:</strong>{isEmpty(this.state.user.education)?"":isEmpty(this.state.user.education.course)?"":this.state.user.education.course}
                  </p>
                  <p>
                    <strong>Highest Qualification:</strong>{isEmpty(this.state.user.education)?"":isEmpty(this.state.user.education.educational_qualification)?"":this.state.user.education.educational_qualification}
                  </p>
                  <br/>
                  <br/>
                  <p>
                    {" "}
                  </p>
                  {
                    this.state.editing
                    ?
                    <Button 
                      onClick={this.onClickEducation}
                      className="btn bg-white text-success primary mb-3 float-right">
                      Edit
                    </Button> 
                    :
                    ""
                  }
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
                              name="educational_qualification"
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
                          <Button onClick={this.onSubmitEducationalInfo} color="success">
                            Update
                          </Button>
                        </DialogActions>
                      </Dialog>  
                </li>
                <li className="list-group-item">
                  <h4>Uploads</h4>
                  <hr/>
                  <p>
                    <strong>Description:</strong>{isEmpty(this.props.dashboard.dashboard.resume)?"":"Personal CV"}
                  </p>
                  <p>
                    <strong>Email Address: </strong>{isEmpty(this.state.user.email)?"":this.state.user.email}
                  </p>
                  <p>
                    <strong>Document Name: </strong> CV
                  </p>
                  <br/>
                  <br/>
                  {this.state.editing ? 
                  isEmpty(this.props.dashboard.dashboard.resume)?
                  (<Button 
                    onClick={this.onClickUpload}
                    className="btn bg-white text-success primary mb-3 float-right">
                    Upload Document
                  </Button> 
                  ):
                  (
                  <Button 
                    className="btn bg-white text-success primary mb-3 float-right">
                    <a href={this.props.dashboard.dashboard.resume} download>
                    Download Document
                    </a>
                    
                  </Button> 
                  )
                  :
                  ""
                  }
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
                        <DocumentUpload
                          cancel={this.onClickUpload}
                        />
                      </div>
                    </DialogContent>
                    <DialogActions>
                      {/* <Button onClick={this.onClickUpload} color="danger">
                        Cancel
                      </Button>
                      <Button onClick={this.handleClose} color="success">
                        Update
                      </Button> */}
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
                {this.state.editing ? 
                <Button 
                  onClick={this.onDone}
                  className="btn btn-success bg-success mb-3 text-white float-right">
                  Done
                </Button> :
                <Button 
                  onClick={this.onClickEdit}
                  className="btn btn-success bg-success mb-3 text-white float-right">
                  Edit
                </Button> 
              }
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
  updateBasicInfo,
  updateContactInfo,
  updateEducationalInfo
})(withStyles(userProfileStyles)(UserProfile));

