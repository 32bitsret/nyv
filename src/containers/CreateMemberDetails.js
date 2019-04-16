import React from "react";

// core components
import Wizard from "components/Wizard/Wizard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Step1 from "./createUserSteps/Step1";
import Step2 from "./createUserSteps/Step1";
import Step3 from "./createUserSteps/Step1";

class WizardView extends React.Component {
  render() {
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={8}>
          <Wizard
            validate
            steps={[
              { stepName: "Bio Info", stepComponent: Step1, stepId: "about" },
              { stepName: "Contact Info", stepComponent: Step2, stepId: "account" },
              { stepName: "Educational Info", stepComponent: Step3, stepId: "address" }
            ]}
            title="Build Your Profile"
            subtitle="This information will let us know more about you."
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default WizardView;
