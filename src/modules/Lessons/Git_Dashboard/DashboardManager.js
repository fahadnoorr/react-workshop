import React from 'react'
import GitUsersDashboard from './GitUsersDashboard'
import GitReposDashboard from './GitReposDashboard'

const DASHBOARDS = {
    users: 'git_users_dashboard',
    repos: 'git_repos_dashboard'
};


export default class DashboardManager extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            current_dashboard: DASHBOARDS.users
        };

        this.dashboardProps = {};
    }

    switchDashboard = (dashboard, dashboardProps = {}) => {
        this.dashboardProps = dashboardProps;
        this.setState({
            current_dashboard: dashboard
        });
    };

    render(){

        let {current_dashboard} = this.state;

        return (
            <div>
            {
                current_dashboard === DASHBOARDS.users &&
                <GitUsersDashboard
                    switchDashboard={this.switchDashboard}
                    dashboards={DASHBOARDS}
                />
            }
            {
                current_dashboard === DASHBOARDS.repos &&
                <GitReposDashboard
                    switchDashboard={this.switchDashboard}
                    dashboards={DASHBOARDS}
                    user={this.dashboardProps}
                />
            }
            </div>
        );

    }

}