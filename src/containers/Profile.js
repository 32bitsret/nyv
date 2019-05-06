import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
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
} from "../redux/actions/createActions"
import Snackbar from "components/Snackbar/Snackbar.jsx";
import SelectListGroup from "./components/Selector"
import isEmpty from "../utils/isEmpty"
import ImageUpload from "./components/ImageUpload"
import moment from "moment"
import DocumentUpload from "./components/DocumentUpload"

class UserProfile extends Component {
  state = {
    tc: false,

    isUpdating: false,
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
      state:isEmpty(data.state)?"":data.state,
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
    this.setState({
      isUpdating: true
    })
    let query = {
      _id: this.props.dashboard.dashboard._id
    }
    let update = {
      gender: isEmpty(this.state.gender)?"":this.state.gender,
      employment_status: isEmpty(this.state.employment_status)?"":this.state.employment_status,
      disability: isEmpty(this.state.disability)?"":this.state.disability,
      marital_status: isEmpty(this.state.marital_status)?"":this.state.marital_status,
      DoB: isEmpty(this.state.DoB)?"":this.state.DoB,
      type_of_work:(!isEmpty(this.state.employment_status)&&this.state.employment_status === "Not Employed")?"":this.state.type_of_work
    }
    let obj = {query, update}
    this.props.updateBasicInfo({query,update})
  }

  onSubmitContactInfo = e => {
    e.preventDefault()
    this.setState({
      isUpdating: true
    })
    let state = ""
    if(this.state.lga !== "Others"){
      state = "Plateau State"
    }
    else {
      state = this.state.state
    }
    let query = {
      _id: this.props.dashboard.dashboard._id
    }
    let update = {
      address:isEmpty(this.state.address)?"": this.state.address,
      lga:isEmpty(this.state.lga) ? "" : this.state.lga,
      state: state//isEmpty(this.state.state) ?"": this.state.state 
    }
    let obj = {query, update}
    console.log("BIG OBJECT", obj)
    this.props.updateContactInfo({query,update})
  }

  onSubmitEducationalInfo = e => {
    e.preventDefault()
    this.setState({
      isUpdating: true
    })
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
    console.log("USER DASHBOARD",this.props.created)
    console.log("USER", this.state.user)
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
      { label: 'choose', value: '' },
      { label: 'Single', value: 'Single' },
      { label: 'Married', value: 'Married' },
      { label: 'Divorced', value: 'Divorced' },
      { label: 'Widowed', value: 'Widowed' },
    ];

    const optionsDisability = [
      { label: 'choose', value: ''},
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

    const optionsStates = [
      { label: 'choose', value: '' },
      { label : 'Abia State', value : 'Abia State' },
      { label : 'Adamawa State', value : 'Adamawa State' },
      { label : 'Akwa Ibom State', value : 'Akwa Ibom State' },
      { label : 'Anambra State	', value : 'Anambra State	' },
      { label : 'Bauchi State', value : 'Bauchi State' },
      { label : 'Bayelsa State', value : 'Bayelsa State' },
      { label : 'Benue State', value : 'Benue State' },
      { label : 'Borno State	', value : 'Borno State	' },
      { label : 'Cross River State', value : 'Cross River State' },
      { label : 'Delta State', value : 'Delta State' },
      { label : 'Ebonyi State', value : 'Ebonyi State' },
      { label : 'Edo State', value : 'Edo State' },
      { label : 'Ekiti State	', value : 'Ekiti State	' },
      { label : 'Enugu State', value : 'Enugu State' },
      { label : 'FCT	Abuja', value : 'FCT	Abuja' },
      { label : 'Gombe State	', value : 'Gombe State	' },
      { label : 'Imo State', value : 'Imo State'},
      { label : 'Jigawa State', value : 'Jigawa State' },
      { label : 'Kaduna State', value : 'Kaduna State' },
      { label : 'Kano State', value : 'Kano State' },
      { label : 'Katsina State', value : 'Katsina State'	 },
      { label : 'Kebbi State	Birnin', value : 'Kebbi State	Birnin' },
      { label : 'Kogi State', value : 'Kogi State' },
      { label : 'Kwara State', value : 'Kwara State' },
      { label : 'Lagos State', value : 'Lagos State' },
      { label : 'Nasarawa State', value : 'Nasarawa State' },
      { label : 'Niger State', value : 'Niger State' },
      { label : 'Ogun State', value : 'Ogun State' },
      { label : 'Ondo State', value : 'Ondo State' },
      { label : 'Osun State', value : 'Osun State' },
      { label : 'Oyo State', value : 'Oyo State' },
      // { label : 'Plateau State', value : 'Plateau State' },
      { label : 'Rivers State', value : 'Rivers State' },
      { label : 'Sokoto State', value : 'Sokoto State' },
      { label : 'Taraba State', value : 'Taraba State' },
      { label : 'Yobe State', value : 'Yobe State' },
      { label : 'Zamfara State', value : 'Zamfara State' },
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

    const optionsTypeOfEmployment = [
      { label: '', value: '' },
      { label: 'Student', value: 'Student' },
      { label: 'Corper', value: 'Corper' },
      { label: 'Accounting', value: 'Accounting' },
      { label: 'Pilot/Aviation', value: 'Pilot/Aviation' },
      { label: 'Alternative Dispute Resolution', value: 'Alternative Dispute Resolution' },
      { label: 'Alternative Medicine', value: 'Alternative Medicine' },
      { label: 'Animation', value: 'Animation' },
      { label: 'Apparel/Fashion', value: 'Apparel/Fashion' },
      { label: 'Architecture/Planning', value: 'Architecture/Planning' },
      { label: 'Arts/Crafts', value: 'Arts/Crafts' },
      { label: 'Automotive', value: 'Automotive' },
      { label: 'Aviation/Aerospace', value: 'Aviation/Aerospace' },
      { label: 'Banking/Mortgage', value: 'Banking/Mortgage' },
      { label: 'Biotechnology/Greentech', value: 'Biotechnology/Greentech' },
      { label: 'Broadcast Media', value: 'Broadcast Media' },
      { label: 'Building Materials', value: 'Building Materials' },
      { label: 'Business Supplies/Equipment', value: 'Business Supplies/Equipment' },
      { label: 'Capital Markets/Hedge Fund/Private Equity', value: 'Capital Markets/Hedge Fund/Private Equity' },
      { label: 'Chemicals', value: 'Chemicals' },
      { label: 'Civic/Social Organization', value: 'Civic/Social Organization' },
      { label: 'Civil Engineering', value: 'Civil Engineering' },
      { label: 'Commercial Real Estate', value: 'Commercial Real Estate' },
      { label: 'Computer Games', value: 'Computer Games' },
      { label: 'Computer Hardware', value: 'Computer Hardware' },
      { label: 'Computer Networking', value: 'Computer Networking' },
      { label: 'Computer Software/Engineering', value: 'Computer Software/Engineering' },
      { label: 'Computer/Network Security', value: 'Computer/Network Security' },
      { label: 'Construction', value: 'Construction' },
      { label: 'Consumer Electronics', value: 'Consumer Electronics' },
      { label: 'Consumer Goods', value: 'Consumer Goods' },
      { label: 'Consumer Services', value: 'Consumer Services' },
      { label: 'Cosmetics', value: 'Cosmetics' },
      { label: 'Dairy', value: 'Dairy' },
      { label: 'Defense/Space', value: 'Defense/Space' },
      { label: 'Design', value: 'Design' },
      { label: 'E-Learning', value: 'E-Learning' },
      { label: 'Education Management', value: 'Education Management' },
      { label: 'Electrical/Electronic Manufacturing', value: 'Electrical/Electronic Manufacturing' },
      { label: 'Entertainment/Movie Production', value: 'Entertainment/Movie Production' },
      { label: 'Environmental Services', value: 'Environmental Services' },
      { label: 'Events Services', value: 'Events Services' },
      { label: 'Executive Office', value: 'Executive Office' },
      { label: 'Facilities Services', value: 'Facilities Services' },
      { label: 'Farming', value: 'Farming' },
      { label: 'Financial Services', value: 'Financial Services' },
      { label: 'Fine Art', value: 'Fine Art' },
      { label: 'Fishery', value: 'Fishery' },
      { label: 'Food Production', value: 'Food Production' },
      { label: 'Food/Beverages', value: 'Food/Beverages' },
      { label: 'Fundraising', value: 'Fundraising' },
      { label: 'Furniture', value: 'Furniture' },
      { label: 'Glass/Ceramics/Concrete', value: 'Glass/Ceramics/Concrete' },
      { label: 'Government Administration', value: 'Government Administration' },
      { label: 'Government Relations', value: 'Government Relations' },
      { label: 'Graphic Design/Web Design', value: 'Graphic Design/Web Design' },
      { label: 'Health/Fitness', value: 'Health/Fitness' },
      { label: 'Higher Education/Acadamia', value: 'Higher Education/Acadamia' },
      { label: 'Hospital/Health Care', value: 'Hospital/Health Care' },
      { label: 'Hospitality', value: 'Hospitality' },
      { label: 'Human Resources/HR', value: 'Human Resources/HR' },
      { label: 'Import/Export', value: 'Import/Export' },
      { label: 'Individual/Family Services', value: 'Individual/Family Services' },
      { label: 'Industrial Automation', value: 'Industrial Automation' },
      { label: 'Information Services', value: 'Information Services' },
      { label: 'Information Technology/IT', value: 'Information Technology/IT' },
      { label: 'Insurance', value: 'Insurance' },
      { label: 'International Affairs', value: 'International Affairs' },
      { label: 'International Trade/Development', value: 'International Trade/Development' },
      { label: 'Internet', value: 'Internet' },
      { label: 'Investment Banking/Venture', value: 'Investment Banking/Venture' },
      { label: 'Investment Management/Hedge Fund', value: 'Investment Management/Hedge Fund' },
      { label: 'Private Equity', value: 'Private Equity' },
      { label: 'Judiciary', value: 'Judiciary' },
      { label: 'Law Enforcement', value: 'Law Enforcement' },
      { label: 'Law Practice/Law Firms', value: 'Law Practice/Law Firms' },
      { label: 'Legal Services', value: 'Legal Services' },
      { label: 'Legislative Office', value: 'Legislative Office' },
      { label: 'Leisure/Travel', value: 'Leisure/Travel' },
      { label: 'Library', value: 'Library' },
      { label: 'Logistics/Procurement', value: 'Logistics/Procurement' },
      { label: 'Luxury Goods/Jewelry', value: 'Luxury Goods/Jewelry' },
      { label: 'Machinery', value: 'Machinery' },
      { label: 'Management Consulting', value: 'Management Consulting' },
      { label: 'Maritime', value: 'Maritime' },
      { label: 'Market Research', value: 'Market Research' },
      { label: 'Marketing/Advertising/Sales', value: 'Marketing/Advertising/Sales' },
      { label: 'Mechanical or Industrial Engineering', value: 'Mechanical or Industrial Engineering' },
      { label: 'Media Production', value: 'Media Production' },
      { label: 'Medical Equipment', value: 'Medical Equipment' },
      { label: 'Medical Practice', value: 'Medical Practice' },
      { label: 'Mental Health Care', value: 'Mental Health Care' },
      { label: 'Military Industry', value: 'Military Industry' },
      { label: 'Mining/Metals', value: 'Mining/Metals' },
      { label: 'Motion Pictures/Film', value: 'Motion Pictures/Film' },
      { label: 'Museums/Institutions', value: 'Museums/Institutions' },
      { label: 'Music', value: 'Music' },
      { label: 'Nanotechnology', value: 'Nanotechnology' },
      { label: 'Newspapers/Journalism', value: 'Newspapers/Journalism' },
      { label: 'Non-Profit/Volunteering', value: 'Non-Profit/Volunteering' },
      { label: 'Oil/Energy/Solar/Greentech', value: 'Oil/Energy/Solar/Greentech' },
      { label: 'Online Publishing', value: 'Online Publishing' },
      { label: 'Other Industry', value: 'Other Industry' },
      { label: 'Outsourcing/Offshoring', value: 'Outsourcing/Offshoring' },
      { label: 'Package/Freight Delivery', value: 'Package/Freight Delivery' },
      { label: 'Packaging/Containers', value: 'Packaging/Containers' },
      { label: 'Paper/Forest Products', value: 'Paper/Forest Products' },
      { label: 'Performing Arts', value: 'Performing Arts' },
      { label: 'Pharmaceuticals', value: 'Pharmaceuticals' },
      { label: 'Philanthropy', value: 'Philanthropy' },
      { label: 'Photography', value: 'Photography' },
      { label: 'Plastics', value: 'Plastics' },
      { label: 'Political Organization', value: 'Political Organization' },
      { label: 'Primary/Secondary Education', value: 'Primary/Secondary Education' },
      { label: 'Printing', value: 'Printing' },
      { label: 'Professional Training', value: 'Professional Training' },
      { label: 'Program Development', value: 'Program Development' },
      { label: 'Public Relations/PRi', value: 'Public Relations/PRi' },
      { label: 'Public Safety', value: 'Public Safety' },
      { label: 'Publishing Industry', value: 'Publishing Industry' },
      { label: 'Railroad Manufacture', value: 'Railroad Manufacture' },
      { label: 'Ranching', value: 'Ranching' },
      { label: 'Real Estate/Mortgagei', value: 'Real Estate/Mortgagei' },
      { label: 'Recreational Facilities/Servicesi', value: 'Recreational Facilities/Servicesi' },
      { label: 'Religious Institutions', value: 'Religious Institutions' },
      { label: 'Renewables/Environment', value: 'Renewables/Environment' },
      { label: 'Research Industry', value: 'Research Industry' },
      { label: 'Restaurants', value: 'Restaurants' },
      { label: 'Retail Industry', value: 'Retail Industry' },
      { label: 'Security/Investigations', value: 'Security/Investigations' },
      { label: 'Semi Conductors', value: 'Semi Conductors' },
      { label: 'Ship Building', value: 'Ship Building' },
      { label: 'Sporting Goods', value: 'Sporting Goods' },
      { label: 'Sports', value: 'Sports' },
      { label: 'Staffing/Recruiting', value: 'Staffing/Recruiting' },
      { label: 'Supermarkets', value: 'Supermarkets' },
      { label: 'Telecommunications', value: 'Telecommunications' },
      { label: 'Textiles', value: 'Textiles' },
      { label: 'Think Tanks', value: 'Think Tanks' },
      { label: 'Tobacco', value: 'Tobacco' },
      { label: 'Translation/Localization', value: 'Translation/Localization' },
      { label: 'Transportation', value: 'Transportation' },
      { label: 'Utilities', value: 'Utilities' },
      { label: 'Venture Capital/VC', value: 'Venture Capital/VC' },
      { label: 'Veterinary', value: 'Veterinary' },
      { label: 'Warehousing', value: 'Warehousing' },
      { label: 'Wholesale', value: 'Wholesale' },
      { label: 'Wine/Spirits', value: 'Wine/Spirits' },
      { label: 'Wireless', value: 'Wireless' },
      { label: 'Writing/Editing', value: 'Writing/Editing' },
      { label: 'Others', value: 'Others' },
    ];

    const optionsQualification = [
      { label: '', value: '' },
      { label: 'School Cert', value: 'CERT' },
      { label: 'Olevel', value: 'OLEVEL' },
      { label: 'ND', value: 'ND' },
      { label: 'HND', value: 'HND' },
      { label: 'Degree', value: 'DEGREE' },
      { label: 'MSC', value: 'MSC' },
      { label: 'PHD', value: 'PHD' }
    ];

    const display = isEmpty(this.state.user) ?
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
                        aria-labelledby="form-dialog-label"
                      >
                      <DialogTitle id="form-dialog-label">UPLOAD PHOTO</DialogTitle>
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
                    <strong>Job Description:</strong> {isEmpty(this.state.user.employment_status )?"":( isEmpty(this.state.user.type_of_work)?"":this.state.user.type_of_work)}
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
                        aria-labelledby="form-dialog-label"
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
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Employment Status</label>
                            <SelectListGroup
                              placeholder="Employed"
                              name="employment_status"
                              value={this.state.employment_status}
                              onChange={this.onchange}
                              options={optionsEmployed}
                            />
                            </div>
                            <div className="form-group mb-2">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Job Description</label>
                            <SelectListGroup
                              disable={(!isEmpty(this.state.employment_status)&& this.state.employment_status === "Not Employed")?true:false}
                              placeholder="job description"
                              name="type_of_work"
                              value={(!isEmpty(this.state.employment_status)&&this.state.employment_status === "Not Employed")?"":this.state.type_of_work}
                              onChange={this.onchange}
                              options={optionsTypeOfEmployment}
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
                        {
                          this.state.isUpdating
                           ?
                          <DialogActions>
                          <Button  
                            disabled
                            color="warning">
                            Updating...
                          </Button>
                          </DialogActions>
                        :
                          <DialogActions>
                            <Button onClick={this.onClickPersonal} color="danger">
                              Cancel
                            </Button>
                            <Button onClick={this.onSubmitBasicInfo} color="success">
                              Update
                            </Button>
                          </DialogActions>
                        }
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
                    <strong>State:</strong>{isEmpty(this.state.user.state)?"": this.state.user.state}
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
                            <div className="form-group mb-2">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">State</label>
                            <SelectListGroup
                              disable={(!isEmpty(this.state.lga)&&this.state.lga!=="Others")?true:false}
                              placeholder="states"
                              name="state"
                              value={(!isEmpty(this.state.lga)&&this.state.lga==="Others")?this.state.state:this.state.lga ==="Others"?this.state.state:"Plateau State"}
                              onChange={this.onchange}
                              options={optionsStates}
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
                        { this.state.isUpdating
                          ?
                          <DialogActions>
                            <Button disabled color="warning">
                              Updating...
                            </Button>
                          </DialogActions>
                        :
                          <DialogActions>
                            <Button onClick={this.onClickContact} color="danger">
                              Cancel
                            </Button>
                            <Button onClick={this.onSubmitContactInfo} color="success">
                              Update
                            </Button>
                          </DialogActions>
                        }
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
                        { 
                          this.state.isUpdating
                          ?
                          <DialogActions>
                            <Button disabled color="warning">
                              updating...
                            </Button>
                          </DialogActions>
                          :
                          <DialogActions>
                            <Button onClick={this.onClickEducation} color="danger">
                              Cancel
                            </Button>
                            <Button onClick={this.onSubmitEducationalInfo} color="success">
                              Update
                            </Button>
                          </DialogActions>
                        }
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

                        <DocumentUpload
                          cancel={this.onClickUpload}
                        />
                      </div>
                    </DialogContent>
                    <DialogActions>
  
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
          <Snackbar
            place="tc"
            color="danger"
            open= {this.props.created.isError}
            message="An Error Occurred. Check some fields"
            closeNotification={() => this.setState({ tl: false })}
            close
          />
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

