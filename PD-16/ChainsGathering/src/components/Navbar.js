import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './css/BalancesERC20.css';

// eslint-disable-next-line
export default class Navbars extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand>Chains Gathering</Navbar.Brand>
                <div>
                    <p>Weather: <b id="temperature">-</b> </p>
                </div>
            </Navbar>
        )
    };

}