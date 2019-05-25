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
import Heading from "components/Heading/Heading.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import { connect } from "react-redux"
import isEmpty from "../utils/isEmpty"
import UserPreview from "./components/UserPreview"
import {getSpecificProfiles} from "../redux/actions/searchingAction"
import axios from "axios"

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
      search:[],
      user:{},
    };
  }

  componentDidMount(){
    if(localStorage.ln){
        axios({
            method:"POST",
            url: "https://api.plateauyouthcouncil.org/pyc/profile/query/",
            data:{
              query:{
                lga:localStorage.ln
              }
            }
           })
        .then(res => {
            // console.log("FROM INSIDE LGA SEARCH",res.data.data)
            this.setState({
              arr : res.data.data
            })
        }).catch(err => {})
    }
    else{
        this.setState({
            arr:this.props.result
        })
    }
  }

  componentWillUnmount(){
      localStorage.removeItem("ln")
  }
  

  render() {
    const { classes,result } = this.props;

   let results = this.state.arr.map((prop, key) => {
        return {
            sn: key +1,
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
            state:isEmpty(prop.state)?"":prop.state,
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

    



    const display = isEmpty(this.state.user) ?        
        <Card>
            <CardBody  className={classes.cardFooter}>
                <i className={classes.danger} /> No User Selected            
            </CardBody>
        </Card>
        :
        <UserPreview user={this.state.user}/> 
    
    
    const main = this.props.search.isloading ? 
    <Heading
        title={isEmpty(localStorage.ln)?"Search Results":"Search Results for "+localStorage.ln}
        textAlign="center"
        category={
            <span>
                {results.length+ "  "}Total, <a href="/search">Refresh</a>
            </span>
        }
    />
     :
     <div>
        <Heading
            title={isEmpty(localStorage.ln)?"Search Results":"Search Results for "+localStorage.ln}
            textAlign="center"
            category={
                <span>
                    {results.length+ "  "}Total
                </span>
            }
        />
        <GridContainer >
            <GridItem xs={6} lg={6}>
            <Card>
                <CardHeader color="success" icon>
                <CardIcon color="success">
                    <Assignment />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Search Result</h4>
                </CardHeader>
                <CardBody>
                <ReactTable
                    data={results}
                    columns={[
                    {
                        Header: "S/N",
                        accessor: "sn",
                        sortable: false,
                        filterable: false

                    },
                    {
                        Header: "Name",
                        accessor: "name",
                        sortable: false,
                        filterable: false
                    },
                    {
                        Header: "Phone",
                        accessor: "phone",
                        sortable: false,
                        filterable: false
                    },
                    {
                        Header: "View",
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
            <GridItem xs={3} md={6} lg={6}>
               {display}
            </GridItem>
        </GridContainer>
        </div>
    return (
        <div>
            {main}
        </div>
    );
  }
}

const mapStateToProps = state => {
    return{
        result: state.dashboard.searchMembers,
        search:state.dashboard
    }
}

export default connect(mapStateToProps, {getSpecificProfiles})(withStyles(styles)(SearchResult));
