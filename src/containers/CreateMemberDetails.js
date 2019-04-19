import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Step1 from "./createUserSteps/Step1"
import Step4 from "./createUserSteps/Step4"
import Step2 from "./createUserSteps/Step2"
import Step3 from "./createUserSteps/Step3"
import {connect} from "react-redux"

class WizardView extends React.Component {
  constructor(props){
    super(props);

    // state
  }

  render() {
    return (
      <GridContainer justify="center">
       <GridItem xs={12} sm={12} md={8}>
       <CustomTabs
              title=""
              headerColor="success"
              tabs={[
                {
                  tabName: "Basic Info",
                  tabContent: (
                    <Step1/>
                  )
                },
                {
                  tabName: "Bio Info",
                  tabContent: (
                     <Step2/>
                  )
                },
                {
                  tabName: "Educational Info",
                  tabContent: (
                   <Step3/>
                  )
                },
                {
                  tabName: "Uploads",
                  tabContent: (
                   <Step4/>
                  )
                }
              ]}
            />
        </GridItem>
      </GridContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    // state
  }
}
export default connect(null, null)(WizardView);
