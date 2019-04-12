import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { connect } from "react-redux"
import logoo from '../assets/img/logo.jpg'
import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";
import { loginUser } from  "../redux/actions/authActions"
import { withRouter } from "react-router-dom"

class Login extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      email:"church@yahoo.com",
      password: "123456789"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.timeOutFunction = setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  componentWillUnmount() {
    clearTimeout(this.timeOutFunction);
    this.timeOutFunction = null;
  }
  
  change = (e) => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})

  }
  submit = (e) => {
    e.preventDefault();
    
    const userData = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.loginUser(userData)
  }
  render() {
    const { classes } = this.props;
    console.log("PROPERTIES",this.props)
    return (
      <div className={classes.container}>
      <div style={{height:"80px"}}></div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form>
              <Card login className={classes[this.state.cardAnimaton]}>
                <div className="center-style">
                <a href="/">
                  <img
                    className={classes.cardImgTop}
                    data-src="holder.js/100px180/"
                    alt="100%x180"
                    style={{ height: "180px", width: "180px", display: "block" }}
                    src={logoo}
                    data-holder-rendered="true"
                  />
                  <h4 className={classes.cardTitle}>Log in</h4>
                </a>
                </div>
                <CardBody>
                  <CustomInput
                    labelText="Email..."
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type:'email',
                      name:'email',
                      onChange: this.change,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                        type: "password",
                        name: 'password',
                        onChange: this.change,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputAdornmentIcon}>
                            lock_outline
                          </Icon>
                        </InputAdornment>
                      )
                    }}
                  />
                </CardBody>
                <CardFooter className={classes.justifyContentCenter}>
                  <Button color="rose" simple size="sm" block onClick={(e) => this.submit(e)}>
                    Log In
                  </Button>
                 </CardFooter>
                 <br/>
                  <p style={{textAlign:"center"}}>don't have an account? <a href="/register">sign up</a></p>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    state
  }
}
export default connect(mapStateToProps, {loginUser})(withRouter(withStyles(loginPageStyle)(Login)));
