import React from "react";
import ReactTable from "react-table";
import withStyles from "@material-ui/core/styles/withStyles";
import Assignment from "@material-ui/icons/Assignment";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import { dataTable } from "variables/general.jsx";
import Heading from "components/Heading/Heading.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import { connect } from "react-redux"
import isEmpty from "../utils/isEmpty"
import UserPreview from "./components/UserPreview"
import {extractLGAArr} from "../utils/Gridd/Extraction"

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};

let members = []

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        arr : [],
      user:{},
      data:this.props.result.map((prop, key) => {
        console.log("PROPS",members)
        return {
            sn: key ,
            id:prop._id,
            name: prop.firstname+" "+prop.lastname,
            DoB:isEmpty(prop.DoB)?"":prop.DoB,
            gender:isEmpty(prop.gender)?"":prop.gender,
            photo:isEmpty(prop.photo)?"":prop.photo,
            education:{
                course:isEmpty(prop.education)?"":isEmpty(prop.education.course)?"":prop.education.course,
                institution:isEmpty(prop.education)?"":isEmpty(prop.education.institution)?"":prop.education.institution,
                year_of_graduation:isEmpty(prop.education)?"":isEmpty(prop.education.year_of_graduation)?"":prop.education.year_of_graduation,
                Educational_Qualification:isEmpty(prop.education)?"":isEmpty(prop.education.educational_qualification)?"":prop.education.educational_qualification
            },
            email:isEmpty(prop.email)?"":prop.email,
            resume:isEmpty(prop.resume)?"":prop.resume,
            lga:isEmpty(prop.lga)?"":prop.lga,
            address:isEmpty(prop.address)?"":prop.address,
            phone:isEmpty(prop.phone)?"":"0"+prop.phone,
            actions: (
                <div className="actions-right">
                <Button
                    round
                    simple
                    onClick={() => {
                    let obj = this.state.arr.find(o => o._id === prop._id );
                    console.log(obj) 
                    this.setState({
                            user:obj
                        })
                    }}
                    color="success"
                    className="edit"
                >
                View
                </Button>{" "}
            </div>
          )
        };
      })
    };
  }

  componentDidMount(){
      console.log(this.props.result)
    if(localStorage.ln){
        console.log("THIS VALUE EXISTS IN LOCALSTORAGE", localStorage.ln)
        members = [...extractLGAArr(this.props.result, localStorage.ln)]
        console.log("MEMBERS ",members)
    }
     this.setState({
        arr : this.props.result
    })
    }

  render() {
    const { classes,result } = this.props;
    console.log("SELECTEDSER", this.state.user)
    console.log("ALL MEMBERS", this.state.arr)
    const display = isEmpty(this.state.user) ?        
        <Card>
            <CardBody  className={classes.cardFooter}>
                <i className={classes.danger} /> No User Selected            
            </CardBody>
        </Card>
        :
        <UserPreview user={this.state.user}/> 
 
    return (
        <div>
        <Heading
            title={isEmpty(localStorage.ln)?"Search Results":"Search Results for "+localStorage.ln}
            textAlign="center"
            category={
                <span>
                    {members.length+ "  "}Total
                </span>
            }
        />
        <GridContainer >
            <GridItem xs={12} lg={6}>
            <Card>
                <CardHeader color="success" icon>
                <CardIcon color="success">
                    <Assignment />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Search Result</h4>
                </CardHeader>
                <CardBody>
                <ReactTable
                    data={this.state.data}
                    columns={[
                    {
                        Header: "S/N",
                        accessor: "sn"
                    },
                    {
                        Header: "Name",
                        accessor: "name"
                    },
                    {
                        Header: "Phone",
                        accessor: "phone"
                    },
                    {
                        Header: "",
                        accessor: "actions",
                        sortable: false,
                        filterable: false
                    }
                    ]}
                    defaultPageSize={16}
                    showPaginationTop
                    showPaginationBottom={false}
                />
                </CardBody>
            </Card>
            </GridItem>
            <GridItem xs={6} md={6} xs={6} lg={6}>
               {display}
            </GridItem>
        </GridContainer>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return{
        result: state.dashboard.allMembers
    }
}

export default connect(mapStateToProps, {})(withStyles(styles)(SearchResult));
