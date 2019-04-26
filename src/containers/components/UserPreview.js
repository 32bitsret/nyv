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

  componentWillReceiveProps(nextProps){
      console.log("RECEIVED PROPS", nextProps.user)
    let data = nextProps.user
    console.log(data)
    this.setState({
        user: {...data},
      firstname:isEmpty(data.name) ? "":data.name,
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
      photo:nextProps.dashboard.dashboard.photo,
    })
  }

  render(){
    const { classes, user } = this.props;  
    console.log("PROPS TO PREVIEW",user) 
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
                                src={isEmpty(user.photo) ? "https://www.gravatar.com/avatar/anything?s=200&d=mm" : user.photo} 
                                alt="" 
                                />
                            </div>
                            </div>
                            <div className="text-center">
                            <h2 className="display-4 text-center">{user.firstname+ " "+user.lastname}</h2>
                            <p>
                                <strong>{isEmpty(user.phone)?"":"0"+user.phone}</strong> 
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
                                <strong>Gender:</strong> {isEmpty(user.gender) ? "": user.gender}
                            </p>
                            <p>
                                <strong>Employed:</strong> {isEmpty(user.employed)?"":user.employed}
                            </p>
                            <p>
                                <strong>Marital Status:</strong> {isEmpty(user.marital_status)?"":user.marital_status}
                            </p>
                            <p>
                                <strong>Disability:</strong> {isEmpty(user.disability)?"":user.disability}
                            </p>
                            <p>
                                <strong>DoB:</strong> {isEmpty(user.DoB)?"":user.DoB}
                            </p>
                            
                            </li>
                            <li className="list-group-item">
                            <h4>Contact Info</h4>
                            <hr/>
                            <p>
                                <strong>Address:</strong> {isEmpty(user.address)?"":user.address}
                            </p>
                            <p>
                                <strong>LGA:</strong>{isEmpty(user.lga)?"":user.lga}
                            </p>
                            <p>
                                <strong>Email Address: </strong> {isEmpty(user.email)?"":user.email}
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
                                <strong>Year of Graduation:</strong> {isEmpty(user.education)?"":isEmpty(user.education.year_of_graduation)?"":user.education.year_of_graduation}
                            </p>
                            <p>
                                <strong>Institution:</strong> {isEmpty(user.education)?"":isEmpty(user.education.institution)?"":user.education.institution}
                            </p>
                            <p>
                                <strong>Course:</strong>{isEmpty(user.education)?"":isEmpty(user.education.course)?"":user.education.course}
                            </p>
                            <p>
                                <strong>Highest Qualification:</strong>{isEmpty(user.education)?"":isEmpty(user.education.qualification)?"":user.education.qualification}
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
                                <strong>Email Address: </strong> {isEmpty(user.email)?"":user.email}
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
                       {isEmpty(user.resume)?"":(
                        <Button 
                            className="btn btn-success bg-success mb-3 text-white float-right">
                            <a download href={user.resume}>
                                Download CV
                            </a>
                        </Button> 
                       )}
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
