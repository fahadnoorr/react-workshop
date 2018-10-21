import React from 'react'
import Dashboard, {Search, CardList, RepoCard, UserCard} from './components/Dashboard'
import Error from './components/Error'
import axios from 'axios'
import ReactLoader from "react-loading";
import {Link} from 'react-router-dom'

export default class GitReposDashboard extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            repos: [],
            isLoading: true,
            isError: false,
            searchQuery: ''
        };

        this.linkParams = props.match.params;
    }

    componentDidMount(){
        let url = `https://api.github.com/users/${this.linkParams.login}/repos`;
        axios.get(url)
            .then(({data}) => {
                let repos = data.map(
                    ({
                         name, html_url, description, default_branch, language, updated_at, license, stargazers_count,
                         open_issues_count, private: is_private, id
                     }) => ({
                        name, html_url, description, default_branch, language, updated_at, license, stargazers_count,
                        open_issues_count, is_private, id
                    })
                );
                this.setState({
                    repos: repos,
                    isLoading: false,
                    isError: false
                });
            })
            .catch(err => {
                this.setState({isError: true, isLoading: false});
            });
    }

    searchHandler = event => {
        this.setState({
            searchQuery: event.target.value.trim()
        });
    };

    render(){

        let {repos, isLoading, isError, searchQuery} = this.state;
        let showResults = !isLoading && !isError;
        let {goBack} = this.props.history;

        let filteredRepos = searchQuery.length ? repos.filter(({name}) => name.includes(searchQuery)) : repos;

        return (
            <Dashboard title='Git Dashboard'>
                {isLoading && <ReactLoader color="#000000" type="spin" />}
                {isError && <Error error='Could not load Repos' />}
                {showResults &&
                <div>
                    <div className='row'>
                        <div className='col-md-9'>
                            <h3>{`${this.linkParams.login}'s Repos`}</h3>
                        </div>
                        <div className='col-md-3'>
                            <button className='btn btn-primary float-right' onClick={goBack}>View all Users</button>
                        </div>
                    </div>
                    <br/>

                    <Search placeholder='Search Repos' query={searchQuery} results={filteredRepos.length}
                            onChange={this.searchHandler} />
                    <CardList title='Repos'>
                        {filteredRepos.map(repo => <RepoCard key={repo.id} {...repo} />)}
                    </CardList>
                </div>
                }
            </Dashboard>
        );
    }
}