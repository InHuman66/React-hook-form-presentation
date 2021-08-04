import React, {useState} from 'react';
import './App.scss';
import FormikFormContainer from "./ui/components/first_form/formikFormContainer";


const stepsComponents = {
    0: FormikFormContainer,
    1: FormikFormContainer,
}


function App() {
    const [step, setStep]=useState(0)
    // @ts-ignore
    const Step = stepsComponents[step]
  return (
    <div className={'app_background'}>
        <Step/>
    </div>
  );
}

export default App;
