import React, { Component } from 'react';

const usernameRef = React.createRef();
const passwordRef = React.createRef();

export default class Login extends Component {
    state = {
        users: []
    };

    handleLoginClick = async _ => {
        const { username, password } = this.getCredentials();
        const getUser = await this.getUserData(username, password);

        if (getUser !== undefined) {
            this.setState({ users: [...this.state.users, getUser] }, () => this.props.history.push('/dashboard'))
        }
        else
            alert('Invalid credentials!!!');
    };

    getCredentials = _ => ({
        username: usernameRef.current.value,
        password: passwordRef.current.value
    });

    getUserData = async (user, pwd, page = 1) => {
        let getdata;
        console.log('page ', page)
        const response = await fetch(`https://swapi.co/api/people/?page=${+page}`)
            .then(res => res.json())
            .then(data => {
                getdata = data.results.find(x => x.name === user && x.birth_year === pwd)

                if (getdata)
                    return getdata
                else if (data.next && data.next !== 'null') {                  
                    getdata = this.getUserData(user, pwd, page += 1)
                }
                else
                    return getdata;
            })
        return getdata
    }

    render() {
        return (
            <div id='login' >
                <div id='inputelement'>
                    <span>Username </span>  <input type="text" ref={usernameRef} className="username" />
                </div>
                <div id='inputelement'>
                    <span>Password </span>  <input type="password" ref={passwordRef} className="password" />
                </div>
                <input type="button" value="Login" onClick={this.handleLoginClick} />
            </div>
        );
    }
}