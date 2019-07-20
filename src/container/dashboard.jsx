import React, { Component } from 'react';
import Planet from '../presentational/planet';

class Dashboard extends Component {

    state = {
        planets: []
    }

    handleLogout = _ => this.props.history.replace("/");

    handleSearch = async e => await this.setPlanetData(e.currentTarget.value);

    setPlanetData = async (planetName, page = 1) => {
        let getdata = [];
        const response = async () => await fetch(`https://swapi.co/api/planets/?page=${+page}`)
            .then(res => res.json())
            .then(data => {
                let newPlanets = data.results.filter(x => x.name.includes(planetName))
                if (data.next && data.next !== 'null') {
                    getdata = [...getdata, ...newPlanets]
                    response(page += 1)
                }
                else
                    this.setState({ planets: getdata })
            })
        response();
    }

    render() {
        return (
            <div >
                <h4>Star Wars Planets</h4>
                <input type="button" value="Logout" onClick={this.handleLogout} />
                <br />

                <div id='inputelement'>
                    <span>Search </span>
                    <input type="text" onChange={e => this.handleSearch(e)} />
                </div>

                <div>
                    {this.state.planets.map((x, index) => <Planet name={x.name} climate={x.climate} population={x.population} key={index} />)}
                </div>
            </div>
        );
    }
}

export default Dashboard;
