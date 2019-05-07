import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import userProfileStyles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.jsx";
import { connect } from "react-redux"
import { getProfile } from "../redux/actions/dashboardAction"
import {
  updateBasicInfoA,
  updateEducationalInfoA,
  updateContactInfoA,
} from "../redux/actions/createActions"
import isEmpty from "../utils/isEmpty"

class CreatedUser extends Component {
  state = {
    isLoading:  false,
    user: {},
    isloadingNewUser: true
  }

  
  componentDidMount(){
    this.props.getProfile(this.props.created.user.phone)
 
  }

  componentWillReceiveProps(nextProps){
    let data = nextProps.dashboard.dashboard
    if(!isEmpty(data)){
      this.setState({
        user: {...data},
        photo:isEmpty(data.photo)?"https://www.gravatar.com/avatar/anything?s=200&d=mm" :data.photo,
        isloadingNewUser: false
      })
    }
  }

  onDone = () => {
    window.location.reload()
  }
 
  render(){
    const { classes } = this.props;    
    const display = this.state.isloadingNewUser 
    ?
    (
    <GridContainer justify="center">
      <div>loading profile...</div>
    </GridContainer>
    )
    :
    (
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
