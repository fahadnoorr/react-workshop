import React from 'react'
import Dashboard, {Search, CardList, UserCard} from './components/Dashboard'
import Error from './components/Error'
import axios from 'axios'
import ReactLoader from "react-loading";

const GIT_USERS_URL = 'https://api.github.com/users';

export default class GitUsersDashboard extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            users: [],
            isLoading: true,
            isError: false,
            searchQuery: ''
        };
    }

    componentDidMount(){
        axios.get(GIT_USERS_URL)
            .then(({data}) => {
                let users = data.map(
                    ({id, login, avatar_url, url, repos_url, type}) => ({id, login, avatar_url, url, repos_url, type})
                );
                this.setState({
                    users: users,
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

    viewUserRepos = (user) => {
        this.props.history.push(`${this.props.match.url}/${user.login}`);
    };

    render(){

        let {users, isLoading, isError, searchQuery} = this.state;
        let showResults = !isLoading && !isError;

        let filteredUsers = searchQuery.length ? users.filter(({login}) => login.includes(searchQuery)) : users;

        return (
            <Dashboard title='Git Dashboard'>
                {isLoading && <ReactLoader color="#000000" type="spin" />}
                {isError && <Error error='Could not load Users data' />}
                {showResults &&
                    <div>
                        <Search placeholder='Search Users' query={searchQuery} results={filteredUsers.length}
                                onChange={this.searchHandler} />
                        <CardList title='Users'>
                            {
                                filteredUsers.map(
                                    user => <UserCard key={user.id} user={user} viewRepos repoHandler={this.viewUserRepos} />
                                )
                            }
                        </CardList>
                    </div>
                }
            </Dashboard>
        );
    }
}