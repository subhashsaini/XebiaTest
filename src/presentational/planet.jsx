import React, { Component } from 'react';

export default function Planet (props) {

    const { name, climate, population } = props
    return (
        <div id="itemStyle">
            {name && <h5>Planet : {name}</h5>}
            {climate && <h6>Mass : {climate}</h6>}
            {population && <h6>population : {population}</h6>}
        </div>
    );

}

