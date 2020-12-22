import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './css/BalancesERC20.css';

export default class Navbars extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand>Chains Gathering</Navbar.Brand>
                <div style="text-align:left;">
                    <p>Weather:</p>
                    <b id="temperature">-</b>
                </div>
            </Navbar>
        )
    };

}