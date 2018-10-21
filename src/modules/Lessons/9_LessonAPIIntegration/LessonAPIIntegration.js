import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Intro from './components/APIIntegrationIntro';
import GitReposDashboard from '../Git_Dashboard/GitReposDashboard';
import GitUsersDashboard from '../Git_Dashboard/GitUsersDashboard';

import NotFound from '../../App/components/Shared'

const LessonAPIIntegration = ({title, match}) => {
  return (
      <div className="lesson-container">
        <Intro title={title} />
        <div className="lesson-parts">
            <Switch>
                <Route exact path={match.url} component={GitUsersDashboard}/>
                <Route path={`${match.url}/:login`} component={GitReposDashboard}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
      </div>
  );
};

export default LessonAPIIntegration;
