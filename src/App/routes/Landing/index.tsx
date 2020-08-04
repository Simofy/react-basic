import React, { useContext, useState, useCallback } from 'react';
import './style.css';
import { LanContext } from '../../LanContext';
import { langIndexRoutes } from '../../../const/dict';
import { Switch } from 'react-router';
import ApiTable, { ApiTableWrapper } from './components/ApiTable';
import { List } from '@material-ui/core';
import { demo } from './components/ApiTable/test';

export default function Landing() {
  return <LanContext.Consumer>{({
    data,
  })=> (
    <div className="landing">
      <h2>
        {data[langIndexRoutes['landing.1']]}
      </h2>
      <List
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ApiTableWrapper col={["First header"]} />
    </List>
    </div>
  )}</LanContext.Consumer>;  
}
