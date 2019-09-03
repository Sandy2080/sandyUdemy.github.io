import React, { Component } from 'react'


export default class Social extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = [
            { link: "https://twitter.com/San10Ludosky", icon: "fab fa-twitter" },
            { link: "https://www.facebook.com/SandyLudosky.WebDev", icon: "fab fa-facebook" },
            { link: "https://www.github.com/SandyLudosky", icon: "fab fa-github" },
            { link: "https://www.linkedin.com/in/sandyludosky/", icon: "fab fa-linkedin" }
        ]
        return (
            <div id="social">
                <ul className="unstyled">
                    {data.map(site => {
                        return (<li>
                                <a href={site.link} data-toggle="tooltip" data-placement="top" title="twitter" target="_blank">
                                    <i class={site.icon}></i>
                                 </a>
                            </li>)
                        })
                    }
                </ul>
            </div>)
    }
}