import React from 'react';
import logo from './logo.svg';
import './App.scss';
import FirstFormContainer from "./ui/components/first_form/FirstContainer";

function App() {
  return (
    <div className={'app_background'}>
      <FirstFormContainer/>
    </div>
  );
}

export default App;
