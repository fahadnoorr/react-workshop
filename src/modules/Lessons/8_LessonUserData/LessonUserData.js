import React from 'react';
import PropTypes from "prop-types";

import Intro from './components/UserDataIntro';
import UserSignup from './components/UserSignup'

const LessonUserData = ({title}) => {
  return (
    <div className="lesson-container">
      <Intro title={title}/>
      <div className="lesson-parts">
        <UserSignup />
      </div>
    </div>
  );
};

LessonUserData.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonUserData;
