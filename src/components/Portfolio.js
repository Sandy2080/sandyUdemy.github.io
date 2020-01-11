import React, {Component} from 'react'
import '../styles/Bootstrap.css'
import '../styles/Custom.css'
import Header from './common/Header'
import Social from './common/Social'
import Footer from './common/Footer'
import About from './About'
import Blog from './Blog'
import Home from './Home'

import { BrowserRouter as Router, Route } from "react-router-dom";

export default class Portfolio extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(<div class="home page-template page-template-template-homepage page-template-template-homepage-php page page-id-18">
                <Router> 
                    <Header /> 
                    <Route exact path="/" exact component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/blog" component={Blog} />
                </Router>
            <Social />
            <Footer />
        </div>)
    }
}