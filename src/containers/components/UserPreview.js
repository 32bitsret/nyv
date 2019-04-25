import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PermIdentity from "@material-ui/icons/PermIdentity";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import userProfileStyles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.jsx";
import { connect } from "react-redux"
import { getProfile } from "../../redux/actions/dashboardAction"
import {
  updateBasicInfo,
  updateEducationalInfo,
  updateContactInfo
} from "../../redux/actions/createActions"
import isEmpty from "../../utils/isEmpty"

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
    education:{
      course:"",
      institution:"",
      year_of_graduation:"",
      qualification:""
    },
    employed:"",
    marital_status:"",
    disability:"",
    address:"",
    resume:"",
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
      education:{
        course:isEmpty(data.education)?"":isEmpty(data.education.course)?"":data.education.course,
        institution:isEmpty(data.education)?"":isEmpty(data.education.institution)?"":data.education.institution,
        year_of_graduation:isEmpty(data.education)?"":isEmpty(data.education.year_of_graduation)?"":data.education.year_of_graduation,
        qualification:isEmpty(data.education)?"":isEmpty(data.education.qualification)?"":data.education.qualification
      },
      employed:isEmpty(data.employed)?"":data.employed,
      marital_status:isEmpty(data.marital_status)?"":data.marital_status,
      disability:isEmpty(data.disability)?"":data.disability,
      address:isEmpty(data.address)?"":data.address,
      resume:isEmpty(data.resume)?"":data.resume,
      photo:isEmpty(data.photo)?"https://www.gravatar.com/avatar/anything?s=200&d=mm" :data.photo,
    })
  }

  componentWillReceiveProps(nextProps){
    // let data = nextProps.dashboard.dashboard
    // console.log(data)
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

  render(){
    const { classes } = this.props;  
    console.log("PROPS TO PREVIEW", this.props.user) 
    return (
        <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12} lg={12}>
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
                        <div className="col-md-12">
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
                        <div className="col-md-12">
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
                                <strong>Highest Qualification:</strong>{isEmpty(this.state.user.education)?"":isEmpty(this.state.user.education.qualification)?"":this.state.user.education.qualification}
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
        </GridItem>
        </GridContainer>
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
})(withStyles(userProfileStyles)(CreatedUser));
