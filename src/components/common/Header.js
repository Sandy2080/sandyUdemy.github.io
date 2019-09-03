import React, { Component } from 'react'
import Navbar from './Navbar'
import Wrapper from './Wrapper'
import back from '../../assets/back.jpg';

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<header>
                <Navbar />
                <Wrapper media={back}/>
        </header>)
    }
}