import { useState } from "react"

const useStepperState = (totalSteps) => {
  const [activeStep, setActiveStep] = useState(0)

  const goToNextStep = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, totalSteps - 1))
  }

  const goToPreviousStep = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0))
  }

  return { activeStep, goToNextStep, goToPreviousStep }
}

export default useStepperState

