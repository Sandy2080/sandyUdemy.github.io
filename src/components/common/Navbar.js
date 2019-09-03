import React, { Component } from 'react'
import { Link } from "react-router-dom";
const links = () => {
    let menu = ["home", "about", "blog"].map((x) => {
        if (x == "home") { x = "" }
        return (<li id={x} onClick={() => this.click(x)}
            className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-home  page_item page-item-18 ${this.isActive == x ? 'current_page_item active' : ''} menu-item-21`}>
            <Link to={`/${x}`}>{x.toLocaleUpperCase}</Link>
        </li>)
    })
    return menu
}

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            links: ["home", "works", "about", "blog"],
            isActive: "home"
        }
    }
    click = (x) => {
        this.setState({ isActive: x })
    }
    render() {
      

        return (<nav role="navigation">
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target=".navbar-responsive-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index/html" title="InstantWP"
                            rel="homepage">Sandy Ludosky - Software Developper</a>
                    </div>

                    <div className="navbar-collapse collapse navbar-right navbar-responsive-collapse">
                        <ul id="menu-menu-1" className="nav navbar-nav">
                            {this.state.links.map((x) => {
                                console.log(x)
                                return (<li id={x} onClick={() => this.click(x)} key={x}
                                         className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-home  page_item page-item-18 ${this.state.isActive == x ? 'current_page_item active' : ''} menu-item-21`}>
                                            <Link to={`/${x == "home" ? "" : x}`}>{x.toUpperCase()}</Link>
                                        </li>)
                            })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>)
    }
}