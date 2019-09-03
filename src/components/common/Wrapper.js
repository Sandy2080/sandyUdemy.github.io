import React, { Component } from 'react'
import back from '../../assets/back.jpg';

export default class Wrapper extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div id="wrapper" class="clearfix" style={{ 
            backgroundImage: `url(${this.props.media} )`,
            backgroundSize: 'cover'
             }}>
        <div id="headerwrap">
            <div class="container">
                <div class="row">
                    
                    <div class="col-lg-6 col-lg-offset-3">
                        <h4>HELLO PEOPLE, MY NAME IS</h4>
                        <h1 className="me">Sandy Ludosky</h1>
                        <h4>WEB & iOS DEVELOPER</h4>
                    </div>

                </div>
            </div> 
        </div>
        </div>
        )
    }
}