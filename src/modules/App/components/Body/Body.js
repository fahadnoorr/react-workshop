import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import classnames from 'classnames'

import NotFound from '../Shared'

import LessonJSX from "../../../Lessons/1_LessonJSX/LessonJSX";
import LessonElements from "../../../Lessons/2_LessonElements/LessonElements";
import LessonCompProps from "../../../Lessons/3_LessonCompProps/LessonCompProps";
import LessonStateLifeHooks from "../../../Lessons/4_LessonStateLifeHooks/LessonStateLifeHooks";
import LessonConditionalRenders from "../../../Lessons/5_LessonConditionalRenders/LessonConditionalRenders";
import LessonStateLiftup from "../../../Lessons/6_LessonStateLiftup/LessonStateLiftup";
import LessonContainerPresentational
    from "../../../Lessons/7_LessonContainerPresentational/LessonContainerPresentational";
import LessonUserData from "../../../Lessons/8_LessonUserData/LessonUserData";
import LessonAPIIntegration from "../../../Lessons/9_LessonAPIIntegration/LessonAPIIntegration";

import hello_there from '../../../../static/img/hello there.gif';

import '../../../Lessons/Lessons.css';

const ROUTES = [
    {
        path: 'jsx',
        title: 'Introduction to JSX',
        component: LessonJSX
    },
    {
        path: 'elements',
        title: 'React Elements',
        component: LessonElements
    },
    {
        path: 'components-props',
        title: 'Components and Props',
        component: LessonCompProps
    },
    {
        path: 'state-lifecycle-hooks',
        title: 'State & Lifecycle Hooks',
        component: LessonStateLifeHooks
    },
    {
        path: 'conditional-rendering',
        title: 'Conditional Rendering',
        component: LessonConditionalRenders
    },
    {
        path: 'state-liftup`',
        title: 'State Lift-up',
        component: LessonStateLiftup
    },
    {
        path: 'container-vs-presentational',
        title: 'Container vs. Presentational',
        component: LessonContainerPresentational
    },
    {
        path: 'handling-user-data',
        title: 'Handling User Data',
        component: LessonUserData
    },
    {
        path: 'api-integration',
        title: 'API Integration',
        component: LessonAPIIntegration
    },

];

const Home = () => {
    return (
        <div>
            <img src={hello_there} />
        </div>
    );
};

const Lesson = ({match}) => {
    return (
        <Switch>
            {
                ROUTES.map(
                    ({path, component}) => <Route key={path} path={`${match.path}/${path}`} component={component} />
                )
            }
            <Route component={NotFound}/>
        </Switch>
    );
};

const Body = () => {
    return (
        <div className="lessons">
            <aside>
                <ul className="lessons-list">
                    {
                        ROUTES.map(
                            ({title, path}) => {
                                return (
                                    <li className={classnames('lesson-item')} key={path}>
                                        <Link to={`/lesson/${path}`}>{title}</Link>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </aside>
            <div className="lesson-body">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/lesson" component={Lesson} />
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </div>
    );
};

export default Body