import React, { Component } from 'react'


export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = { inputs: [".", "..", "..."], index: 0 }
        this.updateNote = this.update.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(function () {
            this.updateNote()
        }.bind(this), 1000)
    }

    update() {
        this.setState({
            index: this.state.index < this.state.inputs.length - 1 ? this.state.index = this.state.index + 1 : 0
        })
    }
    render() {
        const input = [".", "..", "..."]
        return (<section id="about">
            <div class="container">
                <div class="row centered mt mb">
                    <div class="col-lg-8 col-lg-offset-2">
                        <article id="post-6" class="post-6 page type-page status-publish hentry">
                            {/* <h2>About</h2> */}
                            <section class="post-entry">
                                <h1><i className="fas fa-code"></i> <i className="fas fa-tools"></i> This is a work in progress <i className="fas fa-code"></i> </h1>
                                <h2>{input[this.state.index]} <i class="fas fa-pen"></i>
                                </h2>
                            </section>
                        </article>
                    </div>
                </div>
            </div>
        </section>)
    }
}