import React, {Component} from 'react'


export default class Blog extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(<section id="blog">
            <div className="container">
                <div className="row centered mt mb">
                    <div className="col-lg-8 col-lg-offset-2">
                        <h1><i className="fas fa-code"></i> <i className="fas fa-tools"></i> This is a work in progress <i className="fas fa-code"></i> </h1>  
                    </div>
                   </div>
            </div>
        </section>)
    }
}