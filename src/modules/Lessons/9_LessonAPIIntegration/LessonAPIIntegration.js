import React from 'react';

import Intro from './components/APIIntegrationIntro';
import GitUsersDashboard from '../Git_Dashboard/GitDashboard'

const LessonAPIIntegration = ({title}) => {
  return (
      <div className="lesson-container">
        <Intro title={title} />
        <div className="lesson-parts">
          <GitUsersDashboard/>
        </div>
      </div>
  );
};

export default LessonAPIIntegration;
