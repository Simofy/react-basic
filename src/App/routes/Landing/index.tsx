import React, { useContext } from 'react';
import './style.css';
import { LanContext } from '../../LanContext';
import { langIndexRoutes } from '../../../const/dict';
import { Switch } from 'react-router';

export default function Landing() {

  return <LanContext.Consumer>{({
    data
  })=> (
    <div className="landing">
      <h2>
        {data[langIndexRoutes['landing.1']]}
      </h2>

    </div>
  )}</LanContext.Consumer>;  
}
