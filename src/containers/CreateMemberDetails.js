import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Step1 from "./createUserSteps/Step1"
import Step4 from "./createUserSteps/Step4"
import Step2 from "./createUserSteps/Step2"

class WizardView extends React.Component {
  render() {
    return (
      <GridContainer justify="center">
       <GridItem xs={12} sm={12} md={8}>
       <CustomTabs
              title=""
              headerColor="success"
              tabs={[
                {
                  tabName: "Bio Info",
                  tabContent: (
                    <Step2/>
                  )
                },
                {
                  tabName: "Contact Info",
                  tabContent: (
                     <Step1/>
                  )
                },
                {
                  tabName: "Education Info",
                  tabContent: (
                   <Step4/>
                  )
                },
                {
                  tabName: "Uploads",
                  tabContent: (
                   <div>SERVER</div>
                  )
                }
              ]}
            />
        </GridItem>
      </GridContainer>
    );
  }
}

export default WizardView;
