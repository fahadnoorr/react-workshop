import React from 'react';

import Intro from './components/APIIntegrationIntro';
import DashboardManager from '../Git_Dashboard/DashboardManager'

const LessonAPIIntegration = ({title}) => {
  return (
      <div className="lesson-container">
        <Intro title={title} />
        <div className="lesson-parts">
          <DashboardManager/>
        </div>
      </div>
  );
};

export default LessonAPIIntegration;
