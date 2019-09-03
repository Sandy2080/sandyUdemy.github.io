import React, { Component } from 'react'


export default class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<footer id="footerwrap">
            <div class="container">

                <div class="row centered">

                    <div class="col-lg-4">
                        <div id="text-2" class="widget_text">
                            <div class="textwidget">
                                <p><b>Web & iOS Developer</b></p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div id="text-3" class="widget_text">
                            <div class="textwidget">
                                <p>Living in the amazing Paris.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div id="text-4" class="widget_text">
                            <div class="textwidget">
                            <p>info@swiftdev.ca <br /> Made with Love <i className="fas fa-heart heart"></i> with React.js <i className="fab fa-react react"></i>, and Bootstrap 4 <i className="fab fa-bootstrap"></i></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
        )
    }
}