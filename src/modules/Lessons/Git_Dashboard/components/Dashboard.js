import React from 'react'

const Dashboard = props => {
    return (
        <div className="card">
            <h5 className="card-header">{props.title}</h5>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
};

const Search = props => {
    return (
        <div className="form-group">
            <input type="text" className="form-control" value={props.query} placeholder={props.placeholder}
                   onChange={props.onChange} />
            <div className="alert alert-light" role="alert">
                Showing {props.results} results
            </div>
        </div>
    );
};

const Card = props => {
    return (
        <div className="card">
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
};

const CardList = props => {
    return (
        <div className="card">
            <div className="card-header">
                {props.title}
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
};

const UserCard = props => {

    let {avatar_url, login, url, type, repos_url, repoHandler} = props;

    let viewReposHandler = (event) => {
        repoHandler(repos_url)
    };

    return (
        <Card>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <img src={avatar_url} alt='User avatar' style={{width: '100%'}} />
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-5'>
                        <table>
                            <tr><td>Login:</td><td>{login}</td></tr>
                            <tr><td>URL:</td><td><a href={url}>{login}</a></td></tr>
                            <tr><td>Type:</td><td>{type}</td></tr>
                        </table>
                        <br />
                        <button className='btn btn-primary' onClick={viewReposHandler}>View Repositories</button>
                    </div>
                </div>
            </div>
        </Card>
    );
};

const RepoCard = props => {

    let {name, html_url, description, default_branch, language, updated_at, license, stargazers_count,
        open_issues_count, is_private} = props;

    return (
        <Card>
            <div><a href={html_url}>{name}</a></div>
            <table>
                <tr><td>Description</td><td>{description}</td></tr>
                <tr><td>Default Branch</td><td>{default_branch}</td></tr>
                <tr><td>Language</td><td>{language}</td></tr>
                <tr><td>Last Updated at</td><td>{updated_at}</td></tr>
                <tr><td>License</td><td>{license}</td></tr>
                <tr><td>Stars</td><td>{stargazers_count}</td></tr>
                <tr><td>Open Issues</td><td>{open_issues_count}</td></tr>
                <tr><td>Public</td><td>{is_private ? 'No' : 'Yes'}</td></tr>
                <tr><td>URL</td><td><a href={html_url}>{html_url}</a></td></tr>
            </table>
        </Card>
    );
};

export default Dashboard;
export {
    Search,
    CardList,
    UserCard,
    RepoCard,
};